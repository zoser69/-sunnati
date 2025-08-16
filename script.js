/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// ==== DATA ====
const sunnahData = [
    {
        category: "عند الاستيقاظ من النوم",
        items: [
            { id: 'wake_1', text: 'مسح أثر النوم عن الوجه', evidence: 'عن عبد الله بن عباس رضي الله عنهما أنه وصف قيام النبي صلى الله عليه وسلم: «...فَاسْتَيْقَظَ رَسُولُ اللَّهِ صلى الله عليه وسلم فَجَلَسَ يَمْسَحُ النَّوْمَ عَنْ وَجْهِهِ بِيَدِهِ».', source: 'صحيح البخاري، حديث رقم 183. (صحيح)', virtue: 'اتباع لهدي النبي صلى الله عليه وسلم وبداية اليوم بوعي ونشاط.' },
            { id: 'wake_2', text: 'دعاء الاستيقاظ', evidence: 'عن حذيفة بن اليمان رضي الله عنه قال: كان النبي صلى الله عليه وسلم إذا استيقظ قال: «الحَمْدُ لِلَّهِ الذي أحْيَانَا بَعْدَ ما أمَاتَنَا وإلَيْهِ النُّشُورُ».', source: 'صحيح البخاري، حديث رقم 6324. (صحيح)', virtue: 'شكر الله على نعمة الحياة بعد الموتة الصغرى (النوم).' },
            { id: 'wake_3', text: 'استعمال السواك', evidence: 'عن حذيفة رضي الله عنه قال: «كان النبي صلى الله عليه وسلم إذا قام من الليل، يشوص فاه بالسواك».', source: 'متفق عليه (صحيح البخاري 245، صحيح مسلم 255). (صحيح)', virtue: 'تطهير للفم ومرضاة للرب.' },
            { id: 'wake_4', text: 'غسل اليدين ثلاثًا قبل إدخالهما في الإناء', evidence: 'عن أبي هريرة رضي الله عنه أن النبي صلى الله عليه وسلم قال: «إذا استيقظ أحدكم من نومه فلا يغمس يده في الإناء حتى يغسلها ثلاثًا، فإنه لا يدري أين باتت يده».', source: 'متفق عليه (صحيح البخاري 162، صحيح مسلم 278). (صحيح)', virtue: 'وقاية من أي أذى قد يكون علق باليد أثناء النوم.' }
        ]
    },
    {
        category: "عند دخول الخلاء والخروج منه",
        items: [
            { id: 'toilet_1', text: 'الدعاء قبل الدخول (مع تقديم الرجل اليسرى)', evidence: 'عن أنس بن مالك رضي الله عنه قال: كان النبي صلى الله عليه وسلم إذا دخل الخلاء قال: «[بِسْمِ اللهِ] اللَّهُمَّ إنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ».', source: 'متفق عليه (صحيح البخاري 142، صحيح مسلم 375). (صحيح)', virtue: 'الاستعاذة بالله من الشياطين (ذكورهم وإناثهم) في أماكن تواجدهم.' },
            { id: 'toilet_2', text: 'الدعاء بعد الخروج (مع تقديم الرجل اليمنى)', evidence: 'عن عائشة رضي الله عنها أن النبي صلى الله عليه وسلم كان إذا خرج من الغائط قال: «غُفْرَانَكَ».', source: 'سنن الترمذي، حديث رقم 7. (صححه الألباني)', virtue: 'طلب المغفرة من الله على التقصير في ذكره أثناء قضاء الحاجة.' }
        ]
    },
    {
        category: "سنن الوضوء",
        items: [
            { id: 'wudu_1', text: 'التسمية في أوله', evidence: 'قول النبي صلى الله عليه وسلم: «لا وضوء لمن لم يذكر اسم الله عليه».', source: 'سنن أبي داود، حديث رقم 101. (حسّنه جمع من العلماء بمجموع طرقه)', virtue: 'لا يكتمل الوضوء بدونها، وهي سبب في تمام الأجر.' },
            { id: 'wudu_2', text: 'السواك عند الوضوء', evidence: 'قال رسول الله صلى الله عليه وسلم: «لولا أن أشق على أمتي لأمرتهم بالسواك مع كل وضوء».', source: 'صحيح ابن خزيمة، حديث رقم 140. (صححه الألباني)', virtue: 'سبب لزيادة الأجر وتطهير الفم ومرضاة للرب.' },
            { id: 'wudu_3', text: 'الدعاء بعده', evidence: 'عن عمر بن الخطاب رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: «ما منكم من أحد يتوضأ فيسبغ الوضوء ثم يقول: أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، إِلاَّ فُتِحَتْ لَهُ أَبْوَابُ الْجَنَّةِ الثَّمَانِيَةُ يَدْخُلُ مِنْ أَيِّهَا شَاءَ». زاد الترمذي: «اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ، وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ».', source: 'صحيح مسلم (234)، وسنن الترمذي (55). (صحيح)', virtue: 'تُفتح له أبواب الجنة الثمانية يدخل من أيها شاء، ويُكتب من التوابين والمتطهرين.' }
        ]
    },
    {
        category: "سنن الصلوات وأوقاتها",
        items: [
            { id: 'prayer_1', text: 'سنة الفجر (ركعتا الفجر)', evidence: 'فضلها: عن عائشة رضي الله عنها عن النبي صلى الله عليه وسلم قال: «رَكْعَتَا الْفَجْرِ خَيْرٌ مِنَ الدُّنْيَا وَمَا فِيهَا». (صحيح مسلم 725)\nالقراءة فيها: عن أبي هريرة رضي الله عنه: «أن رسول الله صلى الله عليه وسلم قرأ في ركعتي الفجر: قُلْ يَا أَيُّهَا الْكَافِرُونَ، وَقُلْ هُوَ اللَّهُ أَحَدٌ». (صحيح مسلم 726)', source: 'صحيح مسلم', virtue: 'ركعتا الفجر خير من الدنيا وما فيها.' },
            { id: 'prayer_2', text: 'السنن الرواتب (12 ركعة)', evidence: 'عن أم حبيبة رضي الله عنها أنها سمعت رسول الله صلى الله عليه وسلم يقول: «مَنْ صَلَّى اثْنَتَيْ عَشْرَةَ رَكْعَةً فِي يَوْمٍ وَلَيْلَةٍ، بُنِيَ لَهُ بِهِنَّ بَيْتٌ فِي الْجَنَّةِ». وهي: أربع قبل الظهر، وركعتان بعده، وركعتان بعد المغرب، وركعتان بعد العشاء، وركعتان قبل صلاة الفجر.', source: 'صحيح مسلم، حديث رقم 728. (صحيح)', virtue: 'بناء بيت في الجنة لمن حافظ عليها.' },
            { id: 'prayer_3', text: 'أذكار دبر الصلوات المكتوبة', evidence: 'كان النبي صلى الله عليه وسلم إذا انصرف من صلاته استغفر ثلاثًا وقال: «أَسْتَغْفِرُ اللهَ (ثلاثًا)، اللَّهُمَّ أَنْتَ السَلاَمُ وَمِنْكَ السَلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ». (صحيح مسلم 591)\n\n«مَنْ سَبَّحَ اللَّهَ فِي دُبُرِ كُلِّ صَلاَةٍ ثَلاَثًا وَثَلاَثِينَ... غُفِرَتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ». (صحيح مسلم 597)\n\nآية الكرسي: «من قرأ آية الكرسي دبر كل صلاة مكتوبة لم يمنعه من دخول الجنة إلا أن يموت». (رواه النسائي وصححه الألباني)', source: 'مصادر متعددة صحيحة', virtue: 'مغفرة للخطايا وإن كانت مثل زبد البحر، وحصن من الشيطان.' },
            { id: 'prayer_4', text: 'صلاة الضحى', evidence: 'عن أبي هريرة رضي الله عنه قال: «أوصاني خليلي صلى الله عليه وسلم بثلاث: صيام ثلاثة أيام من كل شهر، وركعتي الضحى، وأن أوتر قبل أن أنام».', source: 'متفق عليه (صحيح البخاري 1981، صحيح مسلم 721). (صحيح)', virtue: 'تُجزئ عن الصدقات الواجبة على كل مفصل في الجسم.' },
            { id: 'prayer_5', text: 'صلاة الوتر', evidence: 'فضلها: قال النبي صلى الله عليه وسلم: «إِنَّ اللَّهَ وِتْرٌ يُحِبُّ الْوِتْرَ». (متفق عليه)\nوقتها: «اجعلوا آخر صلاتكم بالليل وترًا». (متفق عليه)', source: 'متفق عليه', virtue: 'الله وتر يحب الوتر، وهي من آكد السنن.' }
        ]
    },
    {
        category: "أذكار الصباح والمساء",
        items: [
            { id: 'adhkar_1', text: 'سيد الاستغفار (مرة صباحًا ومساءً)', evidence: '«اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لا يَغْفِرُ الذُّنُوبَ إِلا أَنْتَ».', source: 'صحيح البخاري، حديث رقم 6306. (صحيح)', virtue: 'من قالها موقنًا بها فمات من يومه دخل الجنة، ومن قالها من ليلته فمات دخل الجنة.' },
            { id: 'adhkar_2', text: 'آية الكرسي (مرة صباحًا ومساءً)', evidence: '«من قالها حين يصبح أجير من الجن حتى يمسي، ومن قالها حين يمسي أجير منهم حتى يصبح».', source: 'رواه الحاكم وصححه الألباني في صحيح الترغيب والترهيب (662).', virtue: 'حفظ من الجن والشياطين حتى يمسي أو يصبح.' },
            { id: 'adhkar_3', text: 'المعوذات (ثلاث مرات صباحًا ومساءً)', evidence: 'قال النبي صلى الله عليه وسلم: «قُلْ هُوَ اللَّهُ أَحَدٌ، وَالْمُعَوِّذَتَيْنِ، حِينَ تُمْسِي وَحِينَ تُصْبِحُ ثَلاَثَ مَرَّاتٍ، تَكْفِيكَ مِنْ كُلِّ شَيْءٍ».', source: 'سنن أبي داود (5082). (حسن، صححه الألباني)', virtue: 'تكفيه من كل شيء قد يضره في يومه وليلته.' }
        ]
    },
     {
        category: "سنن النهار العامة",
        items: [
            { id: 'day_1', text: 'القيلولة (نوم الظهيرة)', evidence: 'قال النبي صلى الله عليه وسلم: «قِيلُوا، فَإِنَّ الشَّيَاطِينَ لَا تَقِيلُ».', source: 'رواه الطبراني وحسنه الألباني في السلسلة الصحيحة (1647).', virtue: 'تعطي طاقة ونشاطًا لإكمال اليوم، وتخالف الشياطين.' },
            { id: 'day_2', text: 'التصبح بسبع تمرات عجوة', evidence: 'قال النبي صلى الله عليه وسلم: «مَنْ تَصَبَّحَ كُلَّ يَوْمٍ سَبْعَ تَمَرَاتٍ عَجْوَةً، لَمْ يَضُرَّهُ فِي ذَلِكَ الْيَوْمِ سُمٌّ وَلاَ سِحْرٌ».', source: 'متفق عليه (صحيح البخاري 5769، صحيح مسلم 2047). (صحيح)', virtue: 'وقاية وحفظ من السم والسحر طوال اليوم.' }
        ]
    },
    {
        category: "سنن الطعام والشراب",
        items: [
            { id: 'food_1', text: 'التسمية، الأكل باليمين، ومما يليك', evidence: 'قال النبي صلى الله عليه وسلم لعمر بن أبي سلمة: «يَا غُلاَمُ، سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ».', source: 'متفق عليه (صحيح البخاري 5376، صحيح مسلم 2022). (صحيح)', virtue: 'اتباع لهدي النبي، فيه بركة في الطعام، ويمنع الشيطان من مشاركته الأكل.' },
            { id: 'food_2', text: 'عدم الأكل متكئًا', evidence: 'قال النبي صلى الله عليه وسلم: «أما أنا فلا آكل متكئاً».', source: 'صحيح البخاري، حديث رقم 5399. (صحيح)', virtue: 'تواضع لله وابتعاد عن صفات المتكبرين.' },
            { id: 'food_3', text: 'لعق الأصابع والصحفة', evidence: 'عن أنس رضي الله عنه أن رسول الله صلى الله عليه وسلم كان إذا أكل طعامًا لعق أصابعه الثلاث، وقال: «إذا سقطت لقمة أحدكم فليمط عنها الأذى وليأكلها... وأمرنا أن نسلت القصعة، قال: فإنكم لا تدرون في أي طعامكم البركة».', source: 'صحيح مسلم، حديث رقم 2034. (صحيح)', virtue: 'فيه بركة، فقد تكون البركة في آخر الطعام أو في اللقمة الساقطة.' },
            { id: 'food_4', text: 'الشرب على ثلاث دفعات', evidence: 'عن أنس رضي الله عنه: «أن رسول الله صلى الله عليه وسلم كان يتنفس في الشراب ثلاثًا»، وقال: «إنه أروى وأبرأ وأمرأ».', source: 'متفق عليه (صحيح البخاري 5631، صحيح مسلم 2028). (صحيح)', virtue: 'أكثر إرواءً للجسم وأهنأ وأبرأ للبدن من الأمراض.' }
        ]
    },
    {
        category: "سنن الأخلاق والمعاملات",
        items: [
            { id: 'manners_1', text: 'التيامن في كل شأن حسن', evidence: 'عن عائشة رضي الله عنها قالت: «كان النبي صلى الله عليه وسلم يعجبه التيمن في تنعله، وترجله، وطهوره، وفي شأنه كله».', source: 'متفق عليه (صحيح البخاري 168، صحيح مسلم 268). (صحيح)', virtue: 'اتباع لهدي النبي الذي كان يحب التيامن في كل أموره الحسنة.' },
            { id: 'manners_2', text: 'التبسم والكلمة الطيبة', evidence: 'قال النبي صلى الله عليه وسلم: «تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ». (سنن الترمذي 1956، حسنه الألباني) وقال: «وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ». (صحيح البخاري 2989)', source: 'سنن الترمذي و صحيح البخاري', virtue: 'كسب أجر الصدقة بأبسط الأفعال، ونشر المحبة بين الناس.' },
            { id: 'manners_3', text: 'إفشاء السلام', evidence: 'قال النبي صلى الله عليه وسلم: «...أَوَلاَ أَدُلُّكُمْ عَلَى شَيْءٍ إِذَا فَعَلْتُمُوهُ تَحَابَبْتُمْ؟ أَفْشُوا السَّلاَمَ بَيْنَكُمْ».', source: 'صحيح مسلم، حديث رقم 54. (صحيح)', virtue: 'سبب للمحبة والألفة بين المسلمين، وهو من أسباب دخول الجنة.' },
            { id: 'manners_4', text: 'دعاء الركوب والسفر', evidence: 'كان النبي صلى الله عليه وسلم إذا استوى على بعيره خارجًا إلى سفر كبر ثلاثًا ثم قال: «بِسْمِ اللهِ، الْحَمْدُ لِلَّهِ، {سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ * وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ}، الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ، الْحَمْدُ لِلَّهِ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَكَ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي، فَإِنَّهُ لا يَغْفِرُ الذُّنُوبَ إِلا أَنْتَ».', source: 'سنن أبي داود (2602). (صححه الألباني)', virtue: 'استشعار نعمة الله بتسخير الدابة أو المركبة، وطلب المغفرة.' },
            { id: 'manners_5', text: 'دعاء كفارة المجلس', evidence: 'قال النبي صلى الله عليه وسلم: «من جلس في مجلس فكثر فيه لغطه، فقال قبل أن يقوم من مجلسه ذلك: سُبْحَانَكَ اللَّهُمَّ وَبِحْمَدِكَ، أَشْهَدُ أَنْ لا إِلَهَ إِلا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ، إلا غفر له ما كان في مجلسه ذلك».', source: 'سنن الترمذي (3433). (صححه الألباني)', virtue: 'يغفر الله به ما كان في المجلس من كلام لا فائدة فيه (اللغط).' }
        ]
    },
    {
        category: "عند النوم",
        items: [
            { id: 'sleep_1', text: 'الوضوء قبل النوم', evidence: 'قال النبي صلى الله عليه وسلم: «إِذَا أَتَيْتَ مَضْجَعَكَ فَتَوَضَّأْ وُضُوءَكَ لِلصَّلاَةِ».', source: 'متفق عليه (صحيح البخاري 247، صحيح مسلم 2710). (صحيح)', virtue: 'من بات طاهرًا بات في شعاره ملك، كلما استيقظ قال الملك: اللهم اغفر لعبدك فلان.' },
            { id: 'sleep_2', text: 'نفض الفراش', evidence: 'قال النبي صلى الله عليه وسلم: «إذا أوى أحدكم إلى فراشه، فلينفض فراشه بداخلة إزاره، فإنه لا يدري ما خلفه عليه».', source: 'متفق عليه (صحيح البخاري 6320، صحيح مسلم 2714). (صحيح)', virtue: 'وقاية من أي حشرات أو أذى قد يكون في الفراش.' },
            { id: 'sleep_3', text: 'النوم على الشق الأيمن', evidence: '«...ثم اضطجع على شقك الأيمن...».', source: 'متفق عليه (صحيح البخاري 247، صحيح مسلم 2710). (صحيح)', virtue: 'اتباع لهدي النبي صلى الله عليه وسلم في نومه.' },
            { id: 'sleep_4', text: 'قراءة آية الكرسي', evidence: '«إذا أويت إلى فراشك فاقرأ آية الكرسي، فإنه لن يزال عليك من الله حافظ، ولا يقربك شيطان حتى تصبح».', source: 'صحيح البخاري 2311', virtue: 'حفظ من الله، ولا يقربه شيطان حتى يصبح.' },
            { id: 'sleep_5', text: 'قراءة آخر آيتين من سورة البقرة', evidence: '«من قرأ بالآيتين من آخر سورة البقرة في ليلة كفتاه».', source: 'متفق عليه', virtue: 'تكفيان قارئهما من كل شر في تلك الليلة.' },
            { id: 'sleep_6', text: 'قراءة المعوذات والإخلاص مع النفث والمسح', evidence: '«أن النبي صلى الله عليه وسلم كان إذا أوى إلى فراشه كل ليلة جمع كفيه، ثم نفث فيهما فقرأ فيهما: قل هو الله أحد وقل أعوذ برب الفلق وقل أعوذ برب الناس، ثم يمسح بهما ما استطاع من جسده... يفعل ذلك ثلاث مرات».', source: 'صحيح البخاري 5017', virtue: 'حصن وحماية من الشرور، واتباع لهدي النبي صلى الله عليه وسلم.' },
            { id: 'sleep_7', text: 'دعاء النوم: باسمك ربي', evidence: '«بِاسْمِكَ رَبِّ وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، إِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ».', source: 'متفق عليه', virtue: 'تفويض الأمر كله لله، وطلب حفظه للنفس في حالتي الموت والحياة.' },
            { id: 'sleep_8', text: 'دعاء النوم: اللهم قني عذابك', evidence: '«اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ» (ثلاث مرات).', source: 'سنن أبي داود 5045، صححه الألباني', virtue: 'طلب الوقاية من عذاب الله، وتذكير بالآخرة.' },
            { id: 'sleep_9', text: 'دعاء النوم: اللهم أسلمت وجهي', evidence: '«اللَّهُمَّ أَسْلَمْتُ وَجْهِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لا مَلْجَأَ وَلا مَنْجَا مِنْكَ إِلا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ».', source: 'متفق عليه', virtue: 'إعلان التوحيد وتفويض الأمر لله قبل النوم، وهو من أسباب المغفرة.' },
            { id: 'sleep_10', text: 'تسبيح فاطمة', evidence: 'أن يقول عند نومه: سبحان الله (33)، والحمد لله (33)، والله أكبر (34).', source: 'متفق عليه (صحيح البخاري 3705، صحيح مسلم 2727). (صحيح)', virtue: 'خير من خادم، وتعين على مشقة النهار، وتثقل الميزان.' }
        ]
    },
    {
        category: "السنن الخاصة بيوم الجمعة",
        items: [
            { id: 'friday_1', text: 'الإكثار من الصلاة على النبي', evidence: 'قال رسول الله صلى الله عليه وسلم: «إن من أفضل أيامكم يوم الجمعة، فأكثروا عليَّ من الصلاة فيه، فإن صلاتكم معروضة عليَّ».', source: 'سنن أبي داود (1047). (صححه الألباني)', virtue: 'امتثال لأمر النبي، وعرض الصلاة على النبي مباشرة في هذا اليوم المبارك.' },
            { id: 'friday_2', text: 'قراءة سورة الكهف', evidence: 'قال النبي صلى الله عليه وسلم: «من قرأ سورة الكهف في يوم الجمعة أضاء له من النور ما بين الجمعتين».', source: 'رواه الحاكم وصححه الألباني في صحيح الجامع (6470).', virtue: 'يضيء الله له نورًا ما بين الجمعتين.' },
            { id: 'friday_3', text: 'الاغتسال والتطيب ولبس أحسن الثياب', evidence: 'قال رسول الله صلى الله عليه وسلم: «إِذَا جَاءَ أَحَدُكُمُ الْجُمُعَةَ فَلْيَغْتَسِلْ».', source: 'متفق عليه (صحيح البخاري 877، صحيح مسلم 844). (صحيح)', virtue: 'اتباع للسنة، وتعظيم ليوم الجمعة، وهو من أسباب طيب الرائحة والنظافة.' },
            { id: 'friday_4', text: 'التبكير إلى المسجد', evidence: 'قال النبي صلى الله عليه وسلم: «مَنِ اغْتَسَلَ يَوْمَ الجُمُعَةِ غُسْلَ الجَنَابَةِ ثُمَّ رَاحَ، فَكَأَنَّمَا قَرَّبَ بَدَنَةً...».', source: 'متفق عليه (صحيح البخاري 881، صحيح مسلم 850). (صحيح)', virtue: 'أجر عظيم يترتب على التبكير، فكلما بكّر كان الأجر أعظم، يصل إلى أجر من قرّب بدنة.' },
            { id: 'friday_5', text: 'تحري ساعة الإجابة', evidence: 'قال النبي صلى الله عليه وسلم: «يَوْمُ الْجُمُعَةِ ثِنْتَا عَشْرَةَ سَاعَةً، لاَ يُوجَدُ مُسْلِمٌ يَسْأَلُ اللَّهَ عَزَّ وَجَلَّ شَيْءًا إِلاَّ آتَاهُ اللَّهُ عَزَّ وَجَلَّ، فَالْتَمِسُوهَا آخِرَ سَاعَةٍ بَعْدَ الْعَصْرِ».', source: 'سنن أبي داود (1048). (صححه الألباني)', virtue: 'موافقة ساعة لا يرد فيها الدعاء، وهي فرصة عظيمة لتحقيق المطالب من الله.' }
        ]
    }
];
const totalSunnahCount = sunnahData.reduce((acc, category) => acc + category.items.length, 0);


// ==== DOM ELEMENTS ====
const sunnahListContainer = document.getElementById('sunnah-list-container');
const progressIndicator = document.getElementById('progress-indicator');
const progressPercentage = document.getElementById('progress-percentage');
const streakCountEl = document.getElementById('streak-count');
const modal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalEvidence = document.getElementById('modal-evidence');
const modalSource = document.getElementById('modal-source');
const modalCloseBtn = document.getElementById('modal-close-btn');
const themeSwitcher = document.querySelector('.theme-switcher');
const customizeBtn = document.getElementById('customize-btn');
const toast = document.getElementById('toast-notification');


// ==== STATE MANAGEMENT ====
let state = {
    completedToday: [],
    customList: [],
    streak: { count: 0, lastCompletedDate: null },
    theme: 'light',
    customizeMode: false,
};

function getTodayDateString() {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function getYesterdayDateString() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
}

function loadState() {
    const todayStr = getTodayDateString();
    
    // Load Theme
    state.theme = localStorage.getItem('sunnati-theme') || 'light';

    // Load Completed Sunnahs for Today
    const savedToday = JSON.parse(localStorage.getItem(`sunnati-progress-${todayStr}`) || '[]');
    state.completedToday = savedToday;
    
    // Load Custom List
    state.customList = JSON.parse(localStorage.getItem('sunnati-custom-list') || '[]');

    // Load and validate Streak
    const savedStreak = JSON.parse(localStorage.getItem('sunnati-streak') || '{"count": 0, "lastCompletedDate": null}');
    if (savedStreak.lastCompletedDate === getYesterdayDateString() || savedStreak.lastCompletedDate === todayStr) {
        state.streak = savedStreak;
    } else {
        // Streak is broken
        state.streak = { count: 0, lastCompletedDate: null };
        saveStreak();
    }
}

function saveCompleted() {
    localStorage.setItem(`sunnati-progress-${getTodayDateString()}`, JSON.stringify(state.completedToday));
}

function saveCustomList() {
    localStorage.setItem('sunnati-custom-list', JSON.stringify(state.customList));
}

function saveStreak() {
    localStorage.setItem('sunnati-streak', JSON.stringify(state.streak));
}

function saveTheme() {
    localStorage.setItem('sunnati-theme', state.theme);
}


// ==== UI RENDERING & UPDATES ====

function renderSunnahList() {
    sunnahListContainer.innerHTML = ''; // Clear previous list

    if (state.customizeMode && state.customList.length === 0) {
        sunnahListContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⭐</div>
                <p>قائمتك اليومية فارغة حالياً.<br>اضغط على النجمة بجانب أي سُنّة لإضافتها هنا والتركيز عليها.</p>
            </div>
        `;
        updateProgress();
        return;
    }

    const dataToRender = state.customizeMode 
        ? sunnahData.map(cat => ({
            ...cat,
            items: cat.items.filter(item => state.customList.includes(item.id))
        })).filter(cat => cat.items.length > 0)
        : sunnahData;

    dataToRender.forEach((category, index) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'sunnah-category';
        categoryDiv.innerHTML = `
            <div class="category-header" role="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
                <h2>${category.category}</h2>
                <span class="category-toggle-icon">${index === 0 ? '−' : '+'}</span>
            </div>
            <div class="category-content">
                ${category.items.map(item => `
                    <div class="sunnah-item ${state.completedToday.includes(item.id) ? 'completed' : ''}" data-id="${item.id}">
                        <div class="sunnah-header">
                            <label>
                                <input type="checkbox" ${state.completedToday.includes(item.id) ? 'checked' : ''}>
                                <span>${item.text}</span>
                            </label>
                            <div class="sunnah-actions">
                                <button class="sunnah-btn star-btn ${state.customList.includes(item.id) ? 'customized' : ''}" title="إضافة للسنن اليومية">⭐</button>
                                <button class="sunnah-btn info-btn" title="معلومات إضافية">؟</button>
                            </div>
                        </div>
                        <div class="sunnah-details">
                            <blockquote>${item.evidence}</blockquote>
                            <p>${item.source}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        sunnahListContainer.appendChild(categoryDiv);

        const content = categoryDiv.querySelector('.category-content');
        if (index === 0) { // Open first category by default
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
    updateProgress();
}

function updateProgress() {
    const totalInView = state.customizeMode
        ? state.customList.length
        : totalSunnahCount;

    if (totalInView === 0 && state.customizeMode) {
        progressIndicator.style.width = '0%';
        progressPercentage.textContent = 'مخصّص';
        return;
    }
    
    const completedInView = state.completedToday.filter(id => {
        if (!state.customizeMode) return true;
        return state.customList.includes(id);
    }).length;

    const percentage = totalInView > 0 ? Math.round((completedInView / totalInView) * 100) : 0;
    progressIndicator.style.width = `${percentage}%`;
    progressPercentage.textContent = `${percentage}%`;
}

function updateStreakCounter() {
    streakCountEl.textContent = state.streak.count;
}

function applyTheme() {
    document.body.className = `theme-${state.theme}`;
    document.querySelector('meta[name="theme-color"]').setAttribute('content', getComputedStyle(document.body).getPropertyValue('--bg-color'));
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === state.theme);
    });
}

let toastTimeout;
function showToast(message) {
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    toast.textContent = message;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


// ==== EVENT HANDLERS ====

function handleAccordionToggle(e) {
    const header = e.target.closest('.category-header');
    if (!header) return;

    const categoryDiv = header.parentElement;
    const content = categoryDiv.querySelector('.category-content');
    const icon = header.querySelector('.category-toggle-icon');
    const isExpanded = header.getAttribute('aria-expanded') === 'true';

    header.setAttribute('aria-expanded', !isExpanded);
    if (!isExpanded) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = '−';
    } else {
        content.style.maxHeight = '0px';
        icon.textContent = '+';
    }
}

function handleCheckboxChange(e) {
    const checkbox = e.target;
    if (checkbox.type !== 'checkbox') return;

    const sunnahItem = checkbox.closest('.sunnah-item');
    const sunnahId = sunnahItem.dataset.id;
    const wasEmpty = state.completedToday.length === 0;

    if (checkbox.checked) {
        sunnahItem.classList.add('completed');
        if (!state.completedToday.includes(sunnahId)) {
            state.completedToday.push(sunnahId);
        }
    } else {
        sunnahItem.classList.remove('completed');
        state.completedToday = state.completedToday.filter(id => id !== sunnahId);
    }
    
    saveCompleted();
    updateProgress();
    
    // Update streak only on the first check of the day
    if (wasEmpty && checkbox.checked) {
        updateStreak();
    }
}

function updateStreak() {
    const todayStr = getTodayDateString();
    if (state.streak.lastCompletedDate === todayStr) {
        return; // Already updated today
    }
    if (state.streak.lastCompletedDate === getYesterdayDateString()) {
        state.streak.count++; // Continue streak
    } else {
        state.streak.count = 1; // New streak
    }
    state.streak.lastCompletedDate = todayStr;
    saveStreak();
    updateStreakCounter();
}

function handleInfoClick(e) {
    const infoBtn = e.target.closest('.info-btn');
    if (!infoBtn) return;
    
    const sunnahId = infoBtn.closest('.sunnah-item').dataset.id;
    let sunnahInfo;
    for (const category of sunnahData) {
        sunnahInfo = category.items.find(item => item.id === sunnahId);
        if (sunnahInfo) break;
    }

    if (sunnahInfo) {
        modalTitle.textContent = sunnahInfo.text;
        modalEvidence.textContent = sunnahInfo.evidence;
        modalSource.textContent = sunnahInfo.virtue; // Changed to show virtue
        modal.classList.remove('hidden');
    }
}

function handleStarClick(e) {
    const starBtn = e.target.closest('.star-btn');
    if (!starBtn) return;

    const sunnahId = starBtn.closest('.sunnah-item').dataset.id;
    if (state.customList.includes(sunnahId)) {
        state.customList = state.customList.filter(id => id !== sunnahId);
        starBtn.classList.remove('customized');
        showToast('تمت الإزالة من سنني اليومية');
    } else {
        state.customList.push(sunnahId);
        starBtn.classList.add('customized');
        showToast('تمت الإضافة إلى سنني اليومية');
    }
    saveCustomList();
    if (state.customizeMode) {
        renderSunnahList(); // Re-render if in customize mode
    } else {
        updateProgress(); // Just update progress if not in customize mode
    }
}

function handleThemeChange(e) {
    const themeBtn = e.target.closest('.theme-btn');
    if (!themeBtn) return;
    
    state.theme = themeBtn.dataset.theme;
    saveTheme();
    applyTheme();
}

function toggleCustomizeMode() {
    state.customizeMode = !state.customizeMode;
    customizeBtn.classList.toggle('active', state.customizeMode);
    renderSunnahList();
}


// ==== INITIALIZATION ====

function setupEventListeners() {
    sunnahListContainer.addEventListener('click', (e) => {
        handleAccordionToggle(e);
        handleInfoClick(e);
        handleStarClick(e);
    });
    sunnahListContainer.addEventListener('change', handleCheckboxChange);
    
    modalCloseBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    themeSwitcher.addEventListener('click', handleThemeChange);
    customizeBtn.addEventListener('click', toggleCustomizeMode);
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => console.log('ServiceWorker registration successful with scope: ', registration.scope))
                .catch(err => console.log('ServiceWorker registration failed: ', err));
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    applyTheme();
    renderSunnahList();
    updateStreakCounter();
    setupEventListeners();
    registerServiceWorker();
});