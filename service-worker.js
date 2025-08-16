/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const CACHE_NAME = 'sunnati-cache-v12'; // Bumped version for new notification logic
const URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/index.tsx',
    '/manifest.json',
    '/images/icon-192.png',
    '/images/icon-512.png'
];

// ==== IndexedDB Helpers for Service Worker State ====
const DB_NAME = 'sunnati-db';
const STORE_NAME = 'keyval';
let dbPromise = null;

function getDb() {
    if (!dbPromise) {
        dbPromise = new Promise((resolve, reject) => {
            const openRequest = indexedDB.open(DB_NAME, 1);
            openRequest.onupgradeneeded = () => {
                openRequest.result.createObjectStore(STORE_NAME);
            };
            openRequest.onsuccess = () => resolve(openRequest.result);
            openRequest.onerror = () => reject(openRequest.error);
        });
    }
    return dbPromise;
}

async function dbGet(key) {
    const db = await getDb();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.get(key);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function dbSet(key, value) {
    const db = await getDb();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const request = store.put(value, key);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// ==== Notification Logic ====
const getTodayDateString = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

async function checkAndShowNotifications() {
    console.log('SW: Checking for notifications...');
    const settings = await dbGet('notification-settings');

    if (!settings || !settings.masterEnabled) {
        console.log('SW: Notifications are master-disabled.');
        return;
    }

    const now = new Date();
    const todayStr = getTodayDateString();

    const reminderChecks = {
        morning: {
            condition: () => true,
            show: () => self.registration.showNotification('☀️ أذكار الصباح', {
                body: 'لا تنس وردك من أذكار الصباح. "وبالأسحار هم يستغفرون".',
                tag: `morning-reminder-${todayStr}`,
                icon: '/images/icon-192.png',
            })
        },
        evening: {
            condition: () => true,
            show: () => self.registration.showNotification('🌙 أذكار المساء', {
                body: 'حصّن نفسك بأذكار المساء. "فسبحان الله حين تمسون وحين تصبحون".',
                tag: `evening-reminder-${todayStr}`,
                icon: '/images/icon-192.png',
            })
        },
        duha: {
            condition: () => true,
            show: () => self.registration.showNotification('✨ صلاة الضحى', {
                body: 'صلاة الضحى صدقة عن كل مفصل في جسدك. لا تفوت أجرها.',
                tag: `duha-reminder-${todayStr}`,
                icon: '/images/icon-192.png',
            })
        },
        kahf: {
            condition: () => now.getDay() === 5, // Friday
            show: () => self.registration.showNotification('📖 سورة الكهف', {
                body: 'جمعة مباركة. "من قرأ سورة الكهف في يوم الجمعة أضاء له من النور ما بين الجمعتين".',
                tag: `kahf-reminder-${todayStr}`,
                icon: '/images/icon-192.png',
            })
        },
        witr: {
            condition: () => true,
            show: () => self.registration.showNotification('🕌 وتركم يا أهل القرآن', {
                body: '"إن الله وتر يحب الوتر". اختم يومك بصلاة الوتر.',
                tag: `witr-reminder-${todayStr}`,
                icon: '/images/icon-192.png',
            })
        }
    };

    for (const key in settings.reminders) {
        const reminder = settings.reminders[key];
        const check = reminderChecks[key];

        if (reminder && reminder.enabled && check && check.condition()) {
            const lastShownDate = await dbGet(`last-${key}-notification`);
            
            if (lastShownDate !== todayStr) {
                const [hour, minute] = reminder.time.split(':').map(Number);
                if (now.getHours() > hour || (now.getHours() === hour && now.getMinutes() >= minute)) {
                    console.log(`SW: Showing ${key} notification.`);
                    check.show();
                    await dbSet(`last-${key}-notification`, todayStr);
                }
            }
        }
    }
}


// ==== Service Worker Lifecycle ====
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames.map(cacheName => {
                if (cacheWhitelist.indexOf(cacheName) === -1) {
                    return caches.delete(cacheName);
                }
            })
        )).then(() => {
            console.log('SW: Activated and ready.');
            checkAndShowNotifications();
            return self.clients.claim();
        })
    );
});

const CHECK_INTERVAL = 15 * 60 * 1000; // 15 minutes
setInterval(checkAndShowNotifications, CHECK_INTERVAL);

self.addEventListener('message', event => {
    if (event.data.type === 'update-settings') {
        console.log('SW: Received settings update from client.', event.data.settings);
        dbSet('notification-settings', event.data.settings).then(() => {
            checkAndShowNotifications();
        });
    } else if (event.data.type === 'check-notifications') {
        console.log('SW: Received request to check notifications from client.');
        checkAndShowNotifications();
    }
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
        return;
    }
    if (event.request.mode === 'navigate') {
        event.respondWith(fetch(event.request).catch(() => caches.match('/index.html')));
        return;
    }
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) return cachedResponse;
            return fetch(event.request).then(networkResponse => {
                if (!networkResponse || networkResponse.status !== 200 || (networkResponse.type !== 'basic' && !networkResponse.type.includes('cors'))) {
                    return networkResponse;
                }
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
                return networkResponse;
            });
        })
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
            if (clientList.length > 0) {
                let client = clientList[0];
                for (let i = 0; i < clientList.length; i++) {
                    if (clientList[i].focused) client = clientList[i];
                }
                return client.focus();
            }
            return clients.openWindow('/');
        })
    );
});