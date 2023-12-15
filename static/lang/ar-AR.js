/* eslint-disable prettier/prettier */
import moment from 'moment'
moment.locale('ar')

export default () => {
  return new Promise(function (resolve) {
    resolve({
      common: {
        header_products: 'المنتجات',
        title: 'مثال بسيط',
        subtitle: 'إنها صفحة فارغة. ابدأ في إنشاء صفحتك من هنا.',
        error_with_status: 'حدث خطأ على الخادم',
        '404': 'تعذر العثور على هذه الصفحة.',
        '404_subtitle':
          'يمكنك إما البقاء والاسترخاء هنا ، أو العودة إلى البداية.',
        back: 'العودة إلى المنزل',
        error_without_status: 'حدث خطأ على الخادم',
        contact_title: 'مشروع مجاني اقتباس',
        contact_title2: 'قل مرحبا لنا',
        contact_subtitle:
          'هل لديك أي أسئلة؟ هل أنت مستعد لخفض التكلفة وتحقيق إيرادات جديدة؟ أو هل تريد فقط أن تقول مرحبا؟ أرسل لنا رسالة.',
        form_name: 'ما اسمك؟ *',
        form_email: 'ما هو بريدك الإلكتروني؟ *',
        form_phone: 'ما هو رقم هاتفك؟',
        form_company: 'ما هي شركتك؟',
        form_message: 'اكتب رسالتك هنا',
        form_terms: 'لقد قرأت ووافقت على شروط',
        form_privacy: 'سياسة الخدمة والخصوصية *',
        form_send: 'إرسال رسالة',
        login: 'تسجيل الدخول',
        login_create: 'إنشاء حساب جديد',
        login_or: 'أو تسجيل الدخول عبر البريد الإلكتروني',
        login_email: 'البريد الإلكتروني',
        login_password: 'كلمه السر',
        login_remember: 'تذكر',
        login_forgot: 'نسيت كلمة المرور',
        continue: 'استمر',
        auth_desc: 'منصة مع تكامل فعال للعديد من الميزات وأكثر من ذلك بكثير',
        login_title: 'مرحبًا بك مرة أخرى',
        login_subtitle: 'الرجاء تسجيل الدخول للمتابعة',
        register: 'تسجيل',
        register_already: 'هل لديك حساب بالفعل؟',
        register_or: 'أو التسجيل باستخدام البريد الإلكتروني',
        register_name: 'الاسم؟ *',
        register_email: 'البريد الإلكتروني؟ *',
        register_password: 'كلمه السر',
        register_confirm: 'تأكيد كلمة المرور',
        register_title: 'تشرفت بمعرفتك :)',
        register_subtitle: 'فقط سجل للانضمام إلينا',
        accept: 'قبول',
        header_devices: 'الأجهزة',
        header_resources: 'المصادر',
        header_language: 'لغة',
        header_theme: 'وضع السمة',
        header_dark: 'داكن',
        header_light: 'ضوء',
        header_search: 'بحث',
        footer_quick_links: 'روابط سريعة',
        btn_read_more: 'اقرأ المزيد',
        btn_detail: 'انظر التفاصيل',
        btn_submit: 'إرسال',
        btn_seeall: 'مشاهدة الكل',
        btn_next: 'التالي',
        btn_prev: 'prev',
        btn_contact: 'اتصل بنا',
        btn_get: 'ابدأ',
        btn_join: 'انضم الآن!',
        blog_subscribe: 'اشتراك',
        blog_subscribe_desc: 'اشترك في النشرة الإخبارية لدينا',
        blog_about: 'نبذة عنا',
        blog_born: 'مولود',
        blog_phone: 'الهاتف',
        blog_address: 'العنوان',
        blog_post: 'آخر مشاركة',
        blog_comment: 'آخر تعليق',
        blog_archived: 'مؤرشف',
        blog_album: 'مشاركة الألبوم',
        blog_share: 'مشاركة على وسائل التواصل الاجتماعي',
        blog_write: 'اكتب التعليقات',
        about_team: 'عضو الفريق',
        about_gallery: 'المعرض',
        about_ready: 'هل أنت جاهز للبدء؟',
        pricing_title: 'التسعير والخطة',
        pricing_desc:
          'أفضل قيمة مصممة لمكان عملك ، بدءًا من 24 دولارًا لكل مستخدم / شهر.',
        pricing_free: 'البدء مجانًا',
        pricing_buy: 'اشتر الآن',
        faq_title: 'إجابات وأسئلة متكررة',
        faq_desc: 'هل لديك سؤال؟ تحقق من الأسئلة الشائعة للعثور على إجابتك.',
        faq_topic: 'تصفح الموضوع',
        faq_related: 'موضوع ذات الصلة',
        faq_luck: 'لم يحالفك الحظ بعد؟ يمكننا المساعدة!',
        faq_luck_desc: 'اتصل بنا وسنعاود الاتصال بك في أقرب وقت ممكن.',
        faq_luck_btn: 'تقديم طلب',
        list_title: 'مليون من الموارد للجميع',
        list_subtitle:
          'تصفح أكثر من 300 مليون عنصر مخزون. اعثر بسرعة على العناصر الأصلية والمتميزة.',
        list_search: 'أنا أبحث عن ...',
        list_filter: 'كل الفئات',
        list_help: 'هل مازلت لا تجد؟ يمكننا المساعدة!',
        list_cart: 'إضافة إلى عربة التسوق',
        list_whislist: 'أضف إلى قائمة الامنيات',
        list_desc: 'الوصف',
        list_related: 'المنتجات ذات الصلة',
        list_comments: 'التعليقات',
        list_report: 'الإبلاغ عن هذا العنصر',
        list_need: 'بحاجة الى مساعدة',
        list_opt: 'خيار آخر',
        util_maintenance: 'قيد الصيانة',
        util_maintenance_dec: 'موقعنا قيد الصيانة. سنعود قريبًا.',
        util_soon: 'قريبًا',
        util_soon_desc: 'سوف يأتي مع الأداء في التصميم',
        util_notif: 'أبلغني',
        en: 'English',
        de: 'Deutsch',
        zh: '简体中文',
        pt: '󠁥󠁮󠁧󠁿Português',
        id: '󠁥󠁮󠁧󠁿Bahasa Indonesia',
        ar: '󠁥󠁮󠁧󠁿العربيّة',
        notif_msg:
          '🍪 نحن نستخدم ملفات تعريف الارتباط لتجربة مستخدم أفضل. من خلال الاستمرار في تصفح هذا الموقع، فإنك توافق على استخدام ملفات تعريف الارتباط.',
        header_language: 'لغة',
        header_theme: 'وضع السمة',
        header_dark: 'داكن',
        header_light: 'ضوء',
        header_sample_page: 'الصفحة الداخلية',
        header_about: 'حول',
        header_team: 'الفريق والثقافة',
        header_blog: 'صفحة المدونة',
        'header_blog detail': 'تفاصيل المدونة',
        header_login: 'تسجيل الدخول',
        header_register: 'تسجيل',
        header_contact: 'اتصل',
        'header_contact map': 'اتصال بالخريطة',
        header_card: 'مجموعة البطاقات',
        header_product: 'منتج بفلتر',
        'header_product detail': 'تفاصيل المنتج',
        header_pricing: 'التسعير والأسئلة الشائعة',
        header_faq: 'الإجابات والأسئلة المتكررة',
        header_maintenance: 'صيانة',
        'header_coming soon': 'قريبًا',
        header_error: 'خطأ غير موجود',
        footer_company: 'شركة',
        footer_team: 'الفريق',
        footer_history: 'التاريخ',
        footer_contact: 'اتصل بنا',
        footer_locations: 'المواقع',
        footer_resources: 'المنتجات',
        footer_resources_name: 'اسم الموارد',
        footer_resources_another: 'موارد أخرى',
        footer_resources_final: 'الموارد النهائية',
        footer_legal: 'قانوني',
        footer_privacy: 'سياسة الخصوصية',
        footer_terms: 'شروط الاستخدام',
        footer_terms: 'شروط الاستخدام',
        footer_link: 'حلقة الوصل',
        footer_news: 'أخبار'
      },
      saas2: {
        header_products: 'المنتجات',
        caption_mileage_tracker: 'تعقب الاميال',
        caption_leaderboard: 'المتصدرين',
        caption_eco_driving: 'القيادة البيئية',
        caption_driving_details: 'تفاصيل القيادة',
        caption_drive_coins: 'قيادة العملات المعدنية',
        caption_export_data: 'تصدير البيانات',
        header_applications: 'التطبيقات',
        fomtTitle2: 'نظام إدارة الموظفين',
        formdetail2:
          'في برنامج لڤن , ستحصل على نظام كامل لإدارة الموظفين يمكنه مساعدتك في إدارة الأنشطة المتعلقة بالموظفين بالكامل بسهولة وكفاءة. سيوفر وقتك ويؤدي الأنشطة المتعلقة بالموظفين بطريقة منظمة.',
        firFomtTitle: 'بعض الوحدات الحصرية لبرامج إدارة المركبات',
        firstFormdetail:
          'باستخدام هذه الوحدة، يمكنك الحصول على ملخص شامل لنظامك. يمكن أن تكون هذه الوحدة قادرة على تمثيل ملخص النفقات وتكلفة الصيانة من خلال المخطط الدائري والمخطط الخطي. علاوة على ذلك، تساعد هذه التمثيلات الرسومية على تحسين تجربة المستخدمين. يمكن أن توفر هذه الوحدة الجوانب التالية أيضًا.',
        'GPS devices online': 'أجهزه جي بي اس أونلاين',
        online_servers: 'الخوادم المحلية',
        'slid3-title': 'إدارة الأسطول بسهولة',
        'slid3-subtitle':
          'لن تحتاج إلى أي نظام تتبع متخصص لمركبات الشركة - مع تطبيق لڤن الذكي، يمكنك مراقبة أسطولك بسهولة بضغطات بسيطة. قم بإدارة كل شيء من خلال نظام الإدارة الخاص بنا والذي يسهل الاستخدام - سجلات سجلات الوقود، التكاليف والعديد من الميزات الأخرى الضرورية لإدارة مركبات شركتك.',
        'Data privacy and security': 'خصوصية البيانات وأمنها',
        'fleet management': 'إدارة الأسطول',
        'slid2-title':
          'إدارة الأسطول وقابلية التوسع الموثوقية في البيئات الصعبة في مؤسسات الدولة العراقية',
        'slid2-subtitle1': 'التكامل مع البنية التحتية المحلية',
        'slid2-subtitle':
          'تم تصميم أنظمة لڤن لتكون منخفضة الصيانة، مما يمكن أن يكون ميزة في المناطق التي قد تكون فيها البنية التحتية والدعم لتقنيات إدارة الأسطول محدودة.',
        'Tracking Server': 'خادم التتبع',
        'Customization and Scalability': 'التخصيص وقابلية التوسع',
        'Personal tracking': 'التتبع الشخصي',
        'slid1-subtitle':
          'الدعم والخبرة المحلية يمكن أن يكون اختيار مزود خدمات الاتصالات عبر الهاتف المحمول نظام تحديد المواقع لڤن مع التواجد والدعم المحلي في العراق أمرًا ذا قيمة للمساعدة الفنية والصيانة واستكشاف الأخطاء وإصلاحها',
        'slid1-title':
          'لماذا يعد نظام تحديد المواقع لڤن المحمول عن بعد الخيار الأفضل لإدارة الأسطول في العراق',
        'Privacy policy': 'سياسة الخصوصية',
        'Terms of use': 'شروط الاستخدام',
        contact: 'اتصل',
        Pricing: 'التسعير',
        'Postman collection': 'مجموعة برنامج بوستمان',
        Support: 'الدعم',
        Blog: 'مدونة',
        'safe-driving': 'قيادة آمنة',
        'eco-driving': 'القيادة البيئية',
        'fleet-tracker': 'تتبع الأسطول',
        insights: 'أفكار',
        'in-vehicle-data': 'البيانات داخل السيارة',
        'driver-engagements': 'ارتباطات السائق',
        details:
          'المشغل الوطني للمنصة الوطنية لتتبع الوحدات في العراق من قبل وزارة الاتصالات ومرخص من قبل هيئه الاعلام والاتصالات .',
        banner_title: 'شركة مذهلة تستحق',
        banner_titlestrong: 'برنامج مدهش',
        banner_subtitle:
          'ملايين من المستخدمين السعداء يعملون بشكل أفضل مع تطبيقاتنا المدمجة.',
        banner_watchvideo: 'شاهد الفيديو',
        getstarted: 'البدء',
        counter_month: 'شهر',
        counter_free: 'تجربة مجانية',
        counter_users: 'المستخدمون النشطون',
        counter_providers: 'مقدمي',
        header_feature: 'خاصية',
        header_blog: 'مدونة',
        header_integration: 'دمج',
        header_testimonials: 'شهادات',
        feature_title1: 'نظام إدارة الأسطول:',
        feature_desc1:
          'تعتمد تجارة النقل دائمًا على القدرة على إدارة أسطولها المجدول. لقد قمنا بتصميم كل خطوات إدارة الأسطول باستخدام نظامنا.سجل تفاصيل سيارتك، الجدول الزمني، الوقت، التوفر، رقم المقعد.قم بإدارة كل سجل حجز تذكرة يتعلق بأسطولك تتبع وكيلك والأنشطة المضادة 24/7اضبط أنشطة وكيلك واجعل أسطولك خاليًا من المتاعب',
        see_detail: 'انظر التفاصيل',
        feature_title2: 'كل ما تحتاجه هو',
        feature_titlestrong2: 'اقتراح قيمة فريدة',
        feature_desc2:
          'بفضل الأسس التقنية القوية ، سمحت لنا بالاستفادة من خبراء الأعمال لإنشاء مئات التحسينات.',
        feature_title3: 'التعجيل بالذكاء',
        feature_titlestrong3: 'مشروع',
        feature_desc3:
          'نحن نمكِّن فرق التسويق والمبيعات والخدمات لديك من التعاون عبر دورة حياة العميل بأكملها للحصول على تجارب أكثر وضوحًا وتنسى.',
        testi_title: 'ما عملاؤنا',
        testi_titlestrong: 'شهادة',
        pricing_title: 'التسعير والخطة',
        pricing_subtitle:
          'أفضل قيمة مصممة لمكان عملك ، تبدأ من 24 دولارًا فقط لكل مستخدم / شهر.',
        faq_subtitle: 'هل لديك سؤال؟ راجع الأسئلة الشائعة للعثور على إجابتك.',
        caption_news: 'أخبار',
        caption_event: 'حدث',
        news_readmore: 'اقرأ المزيد',
        footer_waiting: 'ماذا تنتظر؟'
      },
      "Company road map with our history":"خريطة طريق الشركة مع تاريخنا",
      "We are a synergistic company, and we hold our employees and partners in high regard. Purpose-driven and disciplined—we get things done right!": "نحن شركة متآزرة، ونحظى باحترام كبير لموظفينا وشركائنا. هادفة ومنضبطة - ننجز الأمور بشكل صحيح!",
      "Our Philosophy": "فلسفتنا",
      "Who we are": "من نحن",
      "We are GPS LVN, and we provide made-to-order IoT software solutions and services. We make use of GPS technology and internet connectivity to empower businesses. We listen well and outdo expectations every time!": "نحن GPS LVN، ونقدم حلول وخدمات برمجيات إنترنت الأشياء حسب الطلب. نحن نستخدم تقنية GPS والاتصال بالإنترنت لتمكين الشركات. نحن نستمع جيدًا ونتفوق على التوقعات في كل مرة!",
      "Hardware": "المعدات",
      "Resources": "موارد",
      "Industries": "الصناعات",
      "Discover LVN": "اكتشف لڤن",
      "Buy Now": "اشتري الآن",
      "View Demo": "عرض تجريبي",
      "Take the next step to streamline your delivery processes and improve efficiency. Sign up now for a free trial and see the difference it can make for your business.": "اتخذ الخطوة التالية لتبسيط عمليات التسليم وتحسين الكفاءة. قم بالتسجيل الآن للحصول على نسخة تجريبية مجانية وشاهد الفرق الذي يمكن أن يحدثه لعملك.",
      "Transform Your Delivery Operations with GPS LVN's Fleet Management Software.": "قم بتحويل عمليات التسليم الخاصة بك باستخدام برنامج إدارة الأسطول الخاص بـ GPS LVN.",
      "Take the next step to streamline your delivery processes and improve efficiency. Sign up now for a free trial and see the difference it can make for your business.": "اتخذ الخطوة التالية لتبسيط عمليات التسليم وتحسين الكفاءة. قم بالتسجيل الآن للحصول على نسخة تجريبية مجانية وشاهد الفرق الذي يمكن أن يحدثه لعملك.",
      "Transform Your Delivery Operations with GPS LVN.": "قم بتحويل عمليات التسليم الخاصة بك باستخدام GPS LVN.",
      "Take the next step to streamline your delivery processes and improve efficiency with GPS LVN's GPS tracking software. Sign up now for a free trial and see the difference it can make for your business.": "اتخذ الخطوة التالية لتبسيط عمليات التسليم وتحسين الكفاءة باستخدام برنامج التتبع GPS الخاص بـ GPS LVN. قم بالتسجيل الآن للحصول على نسخة تجريبية مجانية وشاهد الفرق الذي يمكن أن يحدثه لعملك.",
      "Transform Your Delivery Operations with GPS LVN's GPS Tracking Software.": "قم بتحويل عمليات التسليم الخاصة بك باستخدام برنامج التتبع GPS الخاص بـ GPS LVN.",
      "Take the next step to streamline your operations and improve driver productivity with GPS LVN's driver application software. Sign up now for a free trial and see the difference it can make for your business.": "اتخذ الخطوة التالية لتبسيط عملياتك وتحسين إنتاجية السائق باستخدام برنامج تطبيق السائق الخاص بـ GPS LVN. قم بالتسجيل الآن للحصول على نسخة تجريبية مجانية وشاهد الفرق الذي يمكن أن يحدثه لعملك.",
      "Transform Your Fleet Operations with GPS LVN's Driver Application Software.": "قم بتحويل عمليات أسطولك باستخدام برنامج تطبيق برنامج التشغيل GPS LVN.",
      "Take the next step to streamline your delivery processes and improve efficiency with GPS LVN's route optimization software. Sign up now for a free trial and see the difference it can make for your business.": "اتخذ الخطوة التالية لتبسيط عمليات التسليم وتحسين الكفاءة باستخدام برنامج تحسين المسار الخاص بـ GPS LVN. قم بالتسجيل الآن للحصول على نسخة تجريبية مجانية وشاهد الفرق الذي يمكن أن يحدثه لعملك.",
      "Transform Your Delivery Operations with GPS LVN's Route Optimization Software.": "قم بتحويل عمليات التسليم الخاصة بك باستخدام برنامج تحسين الطريق الخاص بـ GPS LVN.",
      "GPS LVN's Dispatch & Delivery Planning software provides everything you need to streamline your delivery process and improve your customer's delivery experience.": "يوفر برنامج تخطيط الإرسال والتسليم الخاص بـ GPS LVN كل ما تحتاجه لتبسيط عملية التسليم وتحسين تجربة التسليم لعميلك.",
      "GPSLVN's all-in-one delivery management software provides everything you need to streamline your delivery process, including proof of delivery, real-time tracking, delivery notifications, and detailed reports and analytics.": "يوفر برنامج إدارة التسليم الشامل الخاص بـ GPSLVN كل ما تحتاجه لتبسيط عملية التسليم، بما في ذلك إثبات التسليم والتتبع في الوقت الفعلي وإشعارات التسليم والتقارير والتحليلات التفصيلية.",
      "Start Improving Your Delivery Operations Today.": "ابدأ في تحسين عمليات التسليم لديك اليوم.",
      "GPS LVN's real-time GPS tracking feature provides you with everything you need to gain full visibility of your vehicles and assets and optimize their usage.": "توفر لك ميزة تتبع نظام تحديد المواقع العالمي (GPS) في الوقت الفعلي من GPS LVN كل ما تحتاجه للحصول على رؤية كاملة لمركباتك وأصولك وتحسين استخدامها.",
      "Start Improving Your Fleet Management Today.": "ابدأ في تحسين إدارة أسطولك اليوم.",
      "Take the next step to optimize your driver journeys and improve customer service with GPS LVN's route planning app. Sign up now for a free trial and see the difference it can make for your business.": "اتخذ الخطوة التالية لتحسين رحلات السائق الخاصة بك وتحسين خدمة العملاء باستخدام تطبيق تخطيط الطريق الخاص بـ GPS LVN. قم بالتسجيل الآن للحصول على نسخة تجريبية مجانية وشاهد الفرق الذي يمكن أن يحدثه لعملك.",
      "Transform Your Route Planning with GPS LVN's App.": "قم بتحويل تخطيط الطريق الخاص بك باستخدام تطبيق GPS LVN.",
      "GPS LVN's driver rating software provides everything you need to track and measure driver performance, providing valuable insights into areas that need improvement.": "يوفر برنامج تصنيف السائقين الخاص بـ GPS LVN كل ما تحتاجه لتتبع أداء السائق وقياسه، مما يوفر رؤى قيمة في المجالات التي تحتاج إلى تحسين.",
      "Start Improving Your Driver Performance Today.": "ابدأ في تحسين أداء سائقك اليوم.",
      "Boost the security of customer goods for every delivery.": "تعزيز أمن بضائع العملاء لكل عملية تسليم.",
      "Cut costs and improve driver efficiency.": "خفض التكاليف وتحسين كفاءة السائق.",
      "Create specialized training programs based on driver performance.": "إنشاء برامج تدريبية متخصصة تعتمد على أداء السائق.",
      "With driver performance data you can create specialized training programs.": "باستخدام بيانات أداء السائق، يمكنك إنشاء برامج تدريبية متخصصة.",
      "Driver Training.": "تدريب السائقين.",
      "Keep customers happy by minimizing the number of damaged items.": "حافظ على سعادة العملاء من خلال تقليل عدد العناصر التالفة.",
      "Keep your drivers safe and reduce the possibility of accidents.": "حافظ على سلامة السائقين لديك وقلل من احتمالية وقوع حوادث.",
      "Receive real-time alerts in the event of sharp turns, harsh braking and acceleration.": "احصل على تنبيهات في الوقت الفعلي في حالة المنعطفات الحادة والكبح الشديد والتسارع.",
      "Track and enhance driver safety with real-time alerts.": "تتبع سلامة السائق وتعزيزها من خلال التنبيهات في الوقت الفعلي.",
      "Driver Safety.": "سلامة السائق.",
      "Improve fleet operations and cut down costs.": "تحسين عمليات الأسطول وخفض التكاليف.",
      "Identify areas where drivers are excelling and areas where they need improvement.": "تحديد المجالات التي يتفوق فيها السائقون والمجالات التي يحتاجون إلى التحسين فيها.",
      "Detailed insights into KPIs, such as idle time, speed and fuel usage.": "رؤى تفصيلية حول مؤشرات الأداء الرئيسية، مثل وقت الخمول والسرعة واستخدام الوقود.",
      "Use driver performance analytics to track key performance indicators (KPIs) and identify what needs improvement.": "استخدم تحليلات أداء السائق لتتبع مؤشرات الأداء الرئيسية (KPIs) وتحديد ما يحتاج إلى تحسين.",
      "Driver Performance Analytics.": "تحليلات أداء السائق.",
      "Improve communication between drivers and customers.": "تحسين التواصل بين السائقين والعملاء.",
      "Identify areas of improvement and reward good performance.": "تحديد مجالات التحسين ومكافأة الأداء الجيد.",
      "Get customers to provide feedback and rate their driver's performance.": "اطلب من العملاء تقديم تعليقات وتقييم أداء سائقهم.",
      "Improve driver performance with customer feedback.": "تحسين أداء السائق من خلال ملاحظات العملاء.",
      "Driver Rating and Feedback.": "تقييم السائق وردود الفعل.",
      "GPS LVN driver rating software allows you to track driver performance, so you can see what areas need improving. This data can be used to enhance fleet efficiency and customer satisfaction, while reducing accidents.": "يتيح لك برنامج تقييم السائقين GPS LVN تتبع أداء السائق، حتى تتمكن من معرفة المجالات التي تحتاج إلى تحسين. ويمكن استخدام هذه البيانات لتعزيز كفاءة الأسطول ورضا العملاء، مع تقليل الحوادث.",
      "Improve driver performance and customer satisfaction.": "تحسين أداء السائق ورضا العملاء.",
      "Leave more time to focus on other important tasks.": "اترك المزيد من الوقت للتركيز على المهام المهمة الأخرى.",
      "Keep scheduling and planning within business hours.": "حافظ على الجدولة والتخطيط خلال ساعات العمل.",
      "Our route planning app helps manage driver time more effectively, reducing late-night scheduling. Spend more time focusing on other business operations for ultimate efficiency.": "يساعد تطبيقنا لتخطيط الطريق على إدارة وقت السائق بشكل أكثر فعالية، مما يقلل من الجدولة في وقت متأخر من الليل. اقض المزيد من الوقت في التركيز على العمليات التجارية الأخرى لتحقيق الكفاءة القصوى.",
      "Win back your time.": "استرجع وقتك.",
      "Build trust and loyalty with customers by providing accurate ETAs.": "بناء الثقة والولاء مع العملاء من خلال توفير الوقت المتوقع للوصول الدقيق.",
      "Track delivery progress and quickly resolve issues.": "تتبع تقدم التسليم وحل المشكلات بسرعة.",
      "GPS LVN route planning app provides automatic ETA updates and real-time tracking, so you can give customers a better experience. Our route planning app lets businesses track delivery status, respond quickly to any issues, and provide accurate ETAs to customers.": "يوفر تطبيق تخطيط الطريق GPS LVN تحديثات تلقائية لوقت الوصول المتوقع وتتبعًا في الوقت الفعلي، حتى تتمكن من منح العملاء تجربة أفضل. يتيح تطبيق تخطيط المسار الخاص بنا للشركات تتبع حالة التسليم، والاستجابة بسرعة لأية مشكلات، وتوفير الوقت المتوقع للوصول الدقيق للعملاء.",
      "Enhance customer service.": "تعزيز خدمة العملاء.",
      "Cut down fuel costs, reduce vehicle wear and tear, and complete more successful deliveries.": "خفض تكاليف الوقود، وتقليل تآكل المركبات، وإكمال عمليات تسليم أكثر نجاحًا.",
      "Minimize downtime and optimize driver journeys.": "تقليل وقت التوقف عن العمل وتحسين رحلات السائق.",
      "GPS LVN route planning app optimizes driver journeys and minimizes downtime, saving your business money. With our app, businesses can save on fuel costs, reduce vehicle wear and tear, and complete more successful deliveries.": "يعمل تطبيق تخطيط الطريق GPS LVN على تحسين رحلات السائق وتقليل وقت التوقف عن العمل، مما يوفر أموال عملك. من خلال تطبيقنا، يمكن للشركات توفير تكاليف الوقود، وتقليل تآكل المركبات، وإكمال عمليات تسليم أكثر نجاحًا.",
      "Cut costs.": "خفض التكاليف.",
      "Better utilization of resources.": "استغلال أفضل للموارد.",
      "Reduce fuel costs and time spent on the road.": "تقليل تكاليف الوقود والوقت الذي يقضيه على الطريق.",
      "Build the most efficient routes using real-time weather and traffic data.": "أنشئ الطرق الأكثر كفاءة باستخدام بيانات الطقس وحركة المرور في الوقت الفعلي.",
      "A route planning system that keeps you and your fleet on track at all times.": "نظام تخطيط الطريق الذي يبقيك أنت وأسطولك على المسار الصحيح في جميع الأوقات.",
      "Boost your fleet efficiency with Route Planning software.": "عزز كفاءة أسطولك باستخدام برنامج تخطيط الطريق.",
      "Easily plan and optimize your driver's journey with GPS LVN's route planning app, resulting in increased efficiency, improved customer satisfaction and cost savings.": "يمكنك تخطيط رحلة السائق وتحسينها بسهولة باستخدام تطبيق تخطيط الطريق الخاص بـ GPS LVN، مما يؤدي إلى زيادة الكفاءة وتحسين رضا العملاء وتوفير التكاليف.",
      "Optimize your driver journeys and improve customer service.": "قم بتحسين رحلات السائق الخاصة بك وتحسين خدمة العملاء.",
      "Have complete visibility over your delivery operations with real-time data.": "تمتع برؤية كاملة لعمليات التسليم الخاصة بك باستخدام البيانات في الوقت الفعلي.",
      "Make last minute changes without disrupting your delivery schedule.": "قم بإجراء تغييرات في اللحظة الأخيرة دون تعطيل جدول التسليم الخاص بك.",
      "Have complete visibility and control over your operations by monitoring the live location of your vehicles and deliveries. This is useful should you need to make changes on the fly, e.g. when there is unexpected traffic or a change in the delivery schedule.": "تمتع برؤية كاملة وتحكم في عملياتك من خلال مراقبة الموقع المباشر لمركباتك وعمليات التسليم الخاصة بك. يعد هذا مفيدًا إذا كنت بحاجة إلى إجراء تغييرات سريعة، على سبيل المثال. عندما تكون هناك حركة مرور غير متوقعة أو تغيير في جدول التسليم.",
      "Last Mile Real-time tracking.": "تتبع الميل الأخير في الوقت الحقيقي.",
      "Monitor the routes taken and optimize future routes to boost efficiency.": "مراقبة الطرق المتخذة وتحسين الطرق المستقبلية لتعزيز الكفاءة.",
      "Create a timeline of where your vehicles and assets have been to see patterns and identify inefficiencies.": "أنشئ جدولًا زمنيًا للمكان الذي كانت فيه مركباتك وأصولك لرؤية الأنماط وتحديد أوجه القصور.",
      "Review the previous movements of your vehicles and assets.": "قم بمراجعة الحركات السابقة لمركباتك وأصولك.",
      "Historical Playback.": "التشغيل التاريخي.",
      "Communicate with your drivers and oversee their performance.": "التواصل مع السائقين لديك والإشراف على أدائهم.",
      "Track your vehicles and assets, schedule routine maintenance and monitor fuel consumption.": "تتبع المركبات والأصول الخاصة بك، وجدولة الصيانة الروتينية ومراقبة استهلاك الوقود.",
      "Manage your fleet with GPS LAVN's all-in-one platform.": "قم بإدارة أسطولك باستخدام النظام الأساسي الشامل لنظام GPS LAVN.",
      "Fleet Management.": "إدارة الأسطول.",
      "Ensure your vehicles and assets are being used productively.": "تأكد من استخدام المركبات والأصول الخاصة بك بشكل منتج.",
      "Track the location of your drivers to ensure efficient routes and timely deliveries.": "تتبع موقع برامج التشغيل الخاصة بك لضمان الطرق الفعالة والتسليم في الوقت المناسب.",
      "Monitor the live location of your vehicles and assets so you know where they are and when they'll arrive.": "راقب الموقع المباشر لمركباتك وأصولك حتى تعرف مكانها ومتى ستصل.",
      "Track the location and status of your vehicles and assets in real-time.": "تتبع موقع وحالة المركبات والأصول الخاصة بك في الوقت الحقيقي.",
      "If you are delivering to your customers and they don’t know when you're arriving, you’re wasting your time and theirs. In a recent survey of 250 online shoppers, 82% of people wanted to track their delivery in real time.": "إذا كنت تقوم بالتوصيل إلى عملائك ولا يعرفون موعد وصولك، فأنت تضيع وقتك ووقتهم. في استطلاع حديث شمل 250 متسوقًا عبر الإنترنت، أراد 82% من الأشخاص تتبع عملية التسليم في الوقت الفعلي.",
      "Gain full visibility of your vehicles and assets.": "احصل على رؤية كاملة لمركباتك وأصولك.",
      "Identify patterns and make better decisions to improve your delivery process.": "تحديد الأنماط واتخاذ قرارات أفضل لتحسين عملية التسليم الخاصة بك.",
      "Access detailed insights such as delivery times, customer feedback, routes via reporting and analytics.": "يمكنك الوصول إلى رؤى تفصيلية مثل أوقات التسليم وتعليقات العملاء والطرق عبر التقارير والتحليلات.",
      "With GPS LVN, you can access valuable insights into your delivery operations with detailed reports and analytics.": "باستخدام GPS LVN، يمكنك الوصول إلى رؤى قيمة حول عمليات التسليم الخاصة بك من خلال التقارير والتحليلات التفصيلية.",
      "Reduce the need for customer follow-ups by keeping them informed.": "تقليل الحاجة إلى متابعة العملاء من خلال إبقائهم على اطلاع.",
      "Send real-time updates to customers and stakeholders on the whereabouts of their deliveries.": "إرسال تحديثات في الوقت الفعلي إلى العملاء وأصحاب المصلحة حول مكان تسليمهم.",
      "Receive automated notifications so you know exactly where your drivers are at all times, making it easier to keep your customers informed.": "احصل على إشعارات تلقائية حتى تعرف بالضبط مكان تواجد السائقين لديك في جميع الأوقات، مما يسهل إبقاء عملائك على اطلاع.",
      "Monitor driver locations to ensure efficient routes and on time deliveries.": "مراقبة مواقع السائقين لضمان الطرق الفعالة والتسليم في الوقت المحدد.",
      "Access the live location of your drivers for ultimate transparency.": "قم بالوصول إلى الموقع المباشر لبرامج التشغيل الخاصة بك للحصول على الشفافية القصوى.",
      "Real-time tracking lets you stay up to date with the status of your deliveries.": "يتيح لك التتبع في الوقت الفعلي البقاء على اطلاع بحالة عمليات التسليم الخاصة بك.",
      "Delivery records are easily retrieved, managed and analyzed.": "يتم استرجاع سجلات التسليم وإدارتها وتحليلها بسهولة.",
      "Signatures are electronically stored, providing a tamper-proof delivery record.": "يتم تخزين التوقيعات إلكترونيًا، مما يوفر سجل تسليم مقاومًا للتلاعب.",
      "Electronic signature capture enables drivers to easily collect signatures from customers using their mobile device.": "يتيح التقاط التوقيع الإلكتروني للسائقين إمكانية جمع التوقيعات من العملاء بسهولة باستخدام أجهزتهم المحمولة.",
      "Secure proof of delivery by capturing electronic signatures, improving delivery accuracy.": "إثبات آمن للتسليم من خلال التقاط التوقيعات الإلكترونية، وتحسين دقة التسليم.",
      "Electronic Signature Capture.": "التقاط التوقيع الإلكتروني.",
      "With GPS LVN, you can capture images and e-signatures to confirm a delivery's successful completion. This results in less paperwork, improved delivery accuracy and faster service!": "باستخدام GPS LVN، يمكنك التقاط الصور والتوقيعات الإلكترونية لتأكيد اكتمال عملية التسليم بنجاح. ويؤدي ذلك إلى تقليل الأعمال الورقية وتحسين دقة التسليم وخدمة أسرع!",
      "Proof of delivery and so much more.": "إثبات التسليم وأكثر من ذلك بكثير.",
      "Build trust with customers by keeping them informed.": "بناء الثقة مع العملاء من خلال إبقائهم على اطلاع.",
      "Send real-time updates to customers and provide accurate ETAs.": "إرسال تحديثات في الوقت الفعلي إلى العملاء وتوفير الوقت المتوقع للوصول الدقيق.",
      "Keep your customers a part of the delivery process with automated delivery notifications.": "اجعل عملائك جزءًا من عملية التسليم من خلال إشعارات التسليم التلقائية.",
      "Delivery Notifications.": "إشعارات التسليم.",
      "Identify patterns and make data-driven decisions to boost delivery efficiency.": "تحديد الأنماط واتخاذ القرارات المستندة إلى البيانات لتعزيز كفاءة التسليم.",
      "Access delivery times, routes and customer feedback.": "الوصول إلى أوقات التسليم والطرق وتعليقات العملاء.",
      "Receive detailed reports and analytics to gain valuable insight into your delivery operations.": "احصل على تقارير وتحليلات مفصلة للحصول على رؤية قيمة لعمليات التسليم الخاصة بك.",
      "Reports and Analytics.": "التقارير والتحليلات.",
      "Know when a driver has successfully completed a delivery.": "معرفة متى أكمل السائق عملية التسليم بنجاح.",
      "Keep track of the location and status of your fleet in real-time.": "تتبع موقع وحالة الأسطول الخاص بك في الوقت الحقيقي.",
      "Dynamically add last minute bookings or stops without disrupting your schedule.": "قم بإضافة حجوزات اللحظة الأخيرة أو التوقفات بشكل ديناميكي دون تعطيل جدولك الزمني.",
      "Ensure your drivers are on the most efficient routes at all times.": "تأكد من أن السائقين لديك يسيرون على الطرق الأكثر كفاءة في جميع الأوقات.",
      "Optimize delivery routes for your fleet in just minutes, saving you hours.": "قم بتحسين طرق التسليم لأسطولك في دقائق معدودة فقط، مما يوفر عليك ساعات.",
      "Plan the most efficient delivery routes for your fleet using advanced algorithms that take into account traffic, road closures, weather conditions etc": "قم بتخطيط طرق التسليم الأكثر كفاءة لأسطولك باستخدام خوارزميات متقدمة تأخذ في الاعتبار حركة المرور وإغلاق الطرق والظروف الجوية وما إلى ذلك",
      "All your bookings on autopilot.": "جميع حجوزاتك على الطيار الآلي.",
      "GPS LVN's Dispatch & Delivery Planning systems lets you plan and dispatch the fastest journey for your fleet, in only minutes. Reduce the of hours of route planning and share accurate ETAs with customers.": "تتيح لك أنظمة تخطيط الإرسال والتسليم الخاصة بـ GPS LVN تخطيط وإرسال أسرع رحلة لأسطولك في دقائق معدودة فقط. تقليل ساعات تخطيط الطريق ومشاركة الوقت المتوقع للوصول الدقيق مع العملاء.",
      "Improve the delivery experience and cut back operational costs.": "تحسين تجربة التسليم وخفض تكاليف التشغيل.",
      "Make better decisions to improve efficiency.": "اتخاذ قرارات أفضل لتحسين الكفاءة.",
      "See what's happening in your business.": "شاهد ما يحدث في عملك.",
      "Track and analyze your delivery routes.": "تتبع وتحليل طرق التسليم الخاصة بك.",
      "Track and analyze your routes with GPS LVN, to better understand your delivery operations and make more informed business decisions so you can improve fleet efficiency.": "قم بتتبع وتحليل مساراتك باستخدام GPS LVN، لفهم عمليات التسليم الخاصة بك بشكل أفضل واتخاذ قرارات عمل أكثر استنارة حتى تتمكن من تحسين كفاءة الأسطول.",
      "Track and analyze your routes with GPS LVN's route optimization software.": "تتبع وتحليل مساراتك باستخدام برنامج تحسين المسار الخاص بـ GPS LVN.",
      "Maintain your delivery schedule without disruption.": "حافظ على جدول التسليم الخاص بك دون انقطاع.",
      "Enhance customer satisfaction with timely deliveries.": "تعزيز رضا العملاء من خلال عمليات التسليم في الوقت المناسب.",
      "Re-route deliveries in real time.": "إعادة توجيه عمليات التسليم في الوقت الحقيقي.",
      "Due to GPSLVN's dynamic re- routing functionality, you can easily re- route deliveries in the event of traffic delays or other delivery difficulties.This works without interfering with your delivery schedule so you can concentrate on getting products to customers.": "نظرًا لوظيفة إعادة التوجيه الديناميكية الخاصة بـ GPSLVN، يمكنك بسهولة إعادة توجيه عمليات التسليم في حالة حدوث تأخيرات في حركة المرور أو صعوبات أخرى في التسليم. ويعمل هذا دون التدخل في جدول التسليم الخاص بك حتى تتمكن من التركيز على إيصال المنتجات إلى العملاء.",
      "Stay on schedule with dynamic re-routing.": "حافظ على الجدول الزمني مع إعادة التوجيه الديناميكي.",
      "Improve customer satisfaction by arriving on time.": "تحسين رضا العملاء من خلال الوصول في الوقت المحدد.",
      "Use resources more effectively.": "استخدام الموارد بشكل أكثر فعالية.",
      "Complete more deliveries and increase business revenue.": "استكمال المزيد من عمليات التسليم وزيادة إيرادات الأعمال.",
      "You can swiftly optimize many stops with GPS LVN's multi-stop routing capability. This helps you to complete more deliveries and raise the profitability of your business.": "يمكنك تحسين العديد من نقاط التوقف بسرعة باستخدام إمكانية التوجيه متعدد نقاط التوقف الخاصة بـ GPS LVN. يساعدك هذا على إكمال المزيد من عمليات التسليم وزيادة ربحية عملك.",
      "Optimize routes for multiple stops with GPS LVN's route optimization software.": "قم بتحسين المسارات لمحطات توقف متعددة باستخدام برنامج تحسين المسار الخاص بـ GPS LVN.",
      "Keep customers happy by delivering on time.": "إبقاء العملاء سعداء من خلال التسليم في الوقت المحدد.",
      "Reduce travel time and fuel consumption.": "تقليل وقت السفر واستهلاك الوقود.",
      "Use weather and traffic data to build the most efficient routes.": "استخدم بيانات الطقس وحركة المرور لبناء الطرق الأكثر كفاءة.",
      "Utilizing current traffic and weather data, GPS LVN's route optimization algorithm creates the most efficient routes for your delivery to reduce travel time and fuel consumption. Our route optimization software keeps you ahead of traffic and continuously enhances your routes so that you may focus on other business-related tasks.": "باستخدام بيانات حركة المرور والطقس الحالية، تقوم خوارزمية تحسين المسار الخاصة بـ GPS LVN بإنشاء الطرق الأكثر كفاءة لتوصيلك لتقليل وقت السفر واستهلاك الوقود. يبقيك برنامج تحسين المسار الخاص بنا متقدمًا على حركة المرور ويعزز مساراتك باستمرار حتى تتمكن من التركيز على المهام الأخرى المتعلقة بالعمل.",
      "Real-time Route Optimization.": "تحسين الطريق في الوقت الحقيقي.",
      "GPS LVN's helps businesses streamline their delivery operations by designing the most efficient delivery routes for vehicles. This helps reduce costs and satisfies customer demand, promoting repeat business.": "يساعد GPS LVN الشركات على تبسيط عمليات التسليم من خلال تصميم طرق التسليم الأكثر كفاءة للمركبات. وهذا يساعد على تقليل التكاليف ويرضي طلب العملاء، ويعزز الأعمال المتكررة.",
      "Reduce costs and increase efficiency with route optimization.": "خفض التكاليف وزيادة الكفاءة من خلال تحسين المسار.",
      "Ensure deliveries are completed on time and resolve issues quickly.": "تأكد من اكتمال عمليات التسليم في الوقت المحدد وحل المشكلات بسرعة.",
      "Track the location and status of your fleet.": "تتبع موقع وحالة الأسطول الخاص بك.",
      "GPS LVN provides real-time tracking and automatic ETA updates, so businesses can see the location and progress of their fleet throughout the day.": "يوفر GPS LVN تتبعًا في الوقت الفعلي وتحديثات تلقائية لوقت الوصول المتوقع، حتى تتمكن الشركات من رؤية موقع أسطولها وتقدمه على مدار اليوم.",
      "Monitor your fleet's location and progress.": "مراقبة موقع الأسطول الخاص بك والتقدم.",
      "Have the most efficient routes planned for your team members in minutes.": "احصل على الطرق الأكثر كفاءة المخططة لأعضاء فريقك في دقائق.",
      "Ensure team members complete more deliveries in less time.": "تأكد من قيام أعضاء الفريق بإكمال المزيد من عمليات التسليم في وقت أقل.",
      "GPS LVN's driver application software plans the most efficient routes by taking into consideration driver availability, weather and traffic conditions, vehicle type and more.": "يخطط برنامج تطبيق السائق الخاص بـ GPS LVN للطرق الأكثر كفاءة من خلال الأخذ في الاعتبار توفر السائق، وظروف الطقس وحركة المرور، ونوع السيارة والمزيد.",
      "Optimize your team's route.": "تحسين مسار فريقك.",
      "Easy-to-use app available on iOS and Android.": "تطبيق سهل الاستخدام متوفر على نظامي iOS وAndroid.",
      "Send bookings and deliveries to your team instantly.": "إرسال الحجوزات والتسليم إلى فريقك على الفور.",
      "Send bookings or deliveries (we call these 'stops') to your team instantly, with our easy-to-use app available on both iOS and Android. This ensures that your team members access all the information they need to complete their stops successfully.": 'أرسل الحجوزات أو عمليات التسليم (نسميها "محطات التوقف") إلى فريقك على الفور، من خلال تطبيقنا سهل الاستخدام المتوفر على كل من iOS وAndroid. وهذا يضمن وصول أعضاء فريقك إلى جميع المعلومات التي يحتاجونها لإكمال توقفاتهم بنجاح.',
      "Send bookings and deliveries to your team instantly.": "إرسال الحجوزات والتسليم إلى فريقك على الفور.",
      "GPS LVN's driver application software increases efficiency and boosts customer satisfaction by optimizing your fleet operations. With real-time tracking, real-time ETA updates, and route optimization, our app enables businesses to send bookings or deliveries to your team instantly.": "يعمل برنامج تطبيق السائق الخاص بـ GPS LVN على زيادة الكفاءة وتعزيز رضا العملاء من خلال تحسين عمليات أسطولك. من خلال التتبع في الوقت الفعلي، وتحديثات الوقت المتوقع للوصول في الوقت الفعلي، وتحسين المسار، يمكّن تطبيقنا الشركات من إرسال الحجوزات أو التسليمات إلى فريقك على الفور.",
      "Streamline your operations and improve driver productivity.": "تبسيط عملياتك وتحسين إنتاجية السائق.",
      '“Because we deal with frozen pet food, it can defrost quite quickly. So if the customer is given an estimated delivery time, they can schedule their day around it. I always know which customers are using the live tracking because they arere often standing at the front of their house as I drive past.It works well." - Tayla Smith, Founder': '"نظرًا لأننا نتعامل مع أغذية الحيوانات الأليفة المجمدة، فيمكن أن تذوب بسرعة كبيرة. لذا، إذا تم إعطاء العميل وقتًا تقديريًا للتسليم، فيمكنه جدولة يومه وفقًا لذلك. أعرف دائمًا العملاء الذين يستخدمون التتبع المباشر لأنهم غالبًا ما يقفون أمام منزلهم أثناء القيادة. إنه يعمل بشكل جيد." - تايلا سميث، المؤسس',
      "GPS LVN's driver application software increases efficiency and boosts customer satisfaction by optimizing your fleet operations. With real-time tracking, real-time ETA updates, and route optimization, our app enables businesses to send bookings or deliveries to your team instantly.": "يعمل برنامج تطبيق السائق الخاص بـ GPS LVN على زيادة الكفاءة وتعزيز رضا العملاء من خلال تحسين عمليات أسطولك. من خلال التتبع في الوقت الفعلي، وتحديثات الوقت المتوقع للوصول في الوقت الفعلي، وتحسين المسار، يمكّن تطبيقنا الشركات من إرسال الحجوزات أو التسليمات إلى فريقك على الفور.",
      'Streamline your operations and improve driver productivity.': 'تبسيط عملياتك وتحسين إنتاجية السائق.',
      '“Because we deal with frozen pet food, it can defrost quite quickly. So if the customer is given an estimated delivery time, they can schedule their day around it. I always know which customers are using the live tracking because they are often standing at the front of their house as I drive past. It works well." - Tayla Smith, Founder': `"نظرًا لأننا نتعامل مع أغذية الحيوانات الأليفة المجمدة، فيمكن أن تذوب بسرعة كبيرة. لذا، إذا تم إعطاء العميل وقتًا تقديريًا للتسليم، فيمكنه جدولة يومه وفقًا لذلك. أعرف دائمًا العملاء الذين يستخدمون التتبع المباشر لأنهم غالبًا ما يقفون أمام منزلهم أثناء القيادة. إنه يعمل بشكل جيد." - تايلا سميث، مؤسس`,
      "How Happy Paws’ last mile delivery and customer experience improved with GPS LVN": "كيف تحسنت خدمة توصيل الميل الأخير وتجربة العملاء في Happy Paws باستخدام GPS LVN",
      "Make quick and informed decisions to keep your deliveries in check.": "اتخذ قرارات سريعة ومستنيرة لمراقبة عمليات التسليم الخاصة بك.",
      "See where your vehicles are throughout the day.": "معرفة أين المركبات الخاصة بك على مدار اليوم.",
      "Make last minute adjustments without throwing off your schedule.": "قم بإجراء تعديلات اللحظة الأخيرة دون التخلص من جدولك الزمني.",
      "GPS LVN provides real-time tracking of last-mile movements, so you have complete visibility and control over your delivery operations.": "يوفر GPS LVN تتبعًا فوريًا لحركات الميل الأخير، بحيث يكون لديك رؤية كاملة وتحكم في عمليات التسليم الخاصة بك.",
      "Last Mile Real-time tracking.": "تتبع الميل الأخير في الوقت الحقيقي.",
      "Inform customers the status of their delivery with real-time updates.": "أبلغ العملاء بحالة التسليم من خلال التحديثات في الوقت الفعلي.",
      "Provide customers with flexibility and convenience to improve their experience.": "تزويد العملاء بالمرونة والراحة لتحسين تجربتهم.",
      "Offer a variety of delivery options that cater to customers e.g. same day delivery, next-day delivery.": "تقديم مجموعة متنوعة من خيارات التسليم التي تلبي احتياجات العملاء على سبيل المثال. التسليم في نفس اليوم، التسليم في اليوم التالي.",
      "A key benefit of GPS LVN's last mile delivery is the ability to customize your service to accommodate customers.": "تتمثل الميزة الرئيسية لتسليم الميل الأخير في GPS LVN في القدرة على تخصيص الخدمة الخاصة بك لاستيعاب العملاء.",
      "Tailored to your business delivery requirements.": "مصممة خصيصًا لتلبية متطلبات تسليم أعمالك.",
      "Complete more tasks in less time.": "أكمل المزيد من المهام في وقت أقل.",
      "Save more time by automating and streamlining the delivery process.": "توفير المزيد من الوقت عن طريق أتمتة وتبسيط عملية التسليم.",
      "Provide customers with full visibility of the delivery process.": "تزويد العملاء برؤية كاملة لعملية التسليم.",
      "With real-time updates, customers can see where their deliveries are. Additionally, automating and streamlining the delivery process means businesses have more time to focus on other tasks.": "ومن خلال التحديثات في الوقت الفعلي، يمكن للعملاء معرفة مكان تسليماتهم. بالإضافة إلى ذلك، فإن أتمتة عملية التسليم وتبسيطها تعني أن الشركات لديها المزيد من الوقت للتركيز على المهام الأخرى.",
      "Improve Customer satisfaction & automated productivity.": "تحسين رضا العملاء والإنتاجية الآلية.",
      "Complete more bookings in shorter time frames, increasing revenue.": "أكمل المزيد من الحجوزات في أطر زمنية أقصر، مما يؤدي إلى زيادة الإيرادات.",
      "Reduce fuel and operating costs by spending less time on the road.": "تقليل تكاليف الوقود والتشغيل من خلال قضاء وقت أقل على الطريق.",
      "Optimize your delivery routes for faster deliveries.": "قم بتحسين طرق التسليم الخاصة بك من أجل عمليات تسليم أسرع.",
      "Streamline and optimize the final leg of the delivery process for faster, more efficient deliveries.": "قم بتبسيط وتحسين المرحلة الأخيرة من عملية التسليم من أجل عمليات تسليم أسرع وأكثر كفاءة.",
      "Improved efficiency & Cost Savings.": "تحسين الكفاءة وتوفير التكاليف.",
      "GPS LVN helps you optimize the final stage of the delivery process with route planning, real-time tracking and more to increase customer satisfaction.": "يساعدك GPS LVN على تحسين المرحلة النهائية من عملية التسليم من خلال تخطيط المسار والتتبع في الوقت الفعلي والمزيد لزيادة رضا العملاء.",
      'Optimize your last mile delivery processes today.': 'قم بتحسين عمليات تسليم الميل الأخير اليوم.',
      'Track and analyze your fleet.': "تتبع وتحليل الأسطول الخاص بك.",
      'Gain insight into your delivery operations.': "احصل على نظرة ثاقبة لعمليات التسليم الخاصة بك.",
      'Make data-driven decisions to enhance fleet performance.': "اتخذ قرارات مبنية على البيانات لتحسين أداء الأسطول.",
      "GPS LVN allows you to track and assess your delivery operations, giving critical insight into fuel consumption and delivery times. This helps you make more informed decisions surrounding your fleet to boost overall efficiency.": "يسمح لك GPS LVN بتتبع وتقييم عمليات التسليم الخاصة بك، مما يوفر نظرة ثاقبة حول استهلاك الوقود وأوقات التسليم. يساعدك هذا على اتخاذ قرارات أكثر استنارة فيما يتعلق بأسطولك لتعزيز الكفاءة الإجمالية.",
      "Track and analyze your fleet with GPS LVN's GPS tracking software.": "تتبع وتحليل أسطولك باستخدام برنامج تتبع GPS الخاص بـ GPS LVN.",
      'Set up virtual boundaries around geographical locations.': 'قم بإعداد حدود افتراضية حول المواقع الجغرافية.',
      'Be alerted when a vehicle or asset enters or exits an assigned area.': 'يتم تنبيهك عندما تدخل مركبة أو أصل إلى منطقة معينة أو تخرج منها.',
      'Improve security and driver accountability.': 'تحسين الأمن ومساءلة السائق.',
      "Users of GPS LVN can create virtual boundaries around particular sites, such as yards, depots, and customer locations. When a vehicle or asset enters or exits a designated region, you can be notified via geofencing, increasing security and driver accountability.": "يمكن لمستخدمي GPS LVN إنشاء حدود افتراضية حول مواقع معينة، مثل الساحات والمستودعات ومواقع العملاء. عندما تدخل مركبة أو أصل إلى منطقة معينة أو تخرج منها، يمكن إعلامك عبر السياج الجغرافي، مما يزيد من الأمان ومساءلة السائق.",
      'Enhance security and control with geofencing.': 'تعزيز الأمن والسيطرة مع تحديد الموقع الجغرافي.',
      'Monitor vehicle wellbeing and schedule maintenance.': 'مراقبة صحة السيارة وجدولة الصيانة.',
      'Optimize routes and use resources more effectively.': 'تحسين الطرق واستخدام الموارد بشكل أكثر فعالية.',
      'Minimize operating costs and improve safety.': 'تقليل تكاليف التشغيل وتحسين السلامة.',
      "GPS LVN makes it easy to manage your fleet by monitoring vehicle health, scheduling maintenance, and optimizing routes. Our GPS tracking software helps improve resource utilization, safety and, reduce operating costs.": "يعمل نظام GPS LVN على تسهيل إدارة أسطولك من خلال مراقبة صحة المركبات وجدولة الصيانة وتحسين المسارات. يساعد برنامج تتبع نظام تحديد المواقع العالمي (GPS) الخاص بنا على تحسين استخدام الموارد والسلامة وتقليل تكاليف التشغيل.",
      "Optimize your fleet with GPS LVN's GPS tracking software.": 'قم بتحسين أسطولك باستخدام برنامج تتبع GPS الخاص بـ GPS LVN.',
      'Track the location of vehicles and assets in real-time.': 'تتبع موقع المركبات والأصول في الوقت الحقيقي.',
      'Monitor delivery status and respond to any issues quickly.': 'مراقبة حالة التسليم والرد على أي مشاكل بسرعة.',
      'Improve customer service with accurate ETAs.': 'تحسين خدمة العملاء من خلال الوصول إلى الوقت المتوقع (ETAs) الدقيق.',
      "GPS LVN's GPS tracking software lets you track the live location of your vehicles and assets, giving you full visibility of your delivery operations. Our software enables you to monitor delivery progress, respond quickly to any problems, and improve customer service.": "يتيح لك برنامج التتبع GPS الخاص بـ GPS LVN إمكانية تتبع الموقع المباشر لمركباتك وأصولك، مما يتيح لك رؤية كاملة لعمليات التسليم الخاصة بك. يمكّنك برنامجنا من مراقبة تقدم التسليم والاستجابة بسرعة لأية مشكلات وتحسين خدمة العملاء.",
      "Stay informed with real-time location tracking.": "ابق على اطلاع من خلال تتبع الموقع في الوقت الفعلي.",
      "GPS LVN lets you see where your vehicles and assets are at all times using real time location data. This helps you optimize delivery routes, reduce costs and improve customer satisfaction.": "يتيح لك GPS LVN معرفة مكان تواجد مركباتك وأصولك في جميع الأوقات باستخدام بيانات الموقع في الوقت الفعلي. يساعدك هذا على تحسين طرق التسليم وتقليل التكاليف وتحسين رضا العملاء.",
      'Gain full visibility of your vehicles and assets with GPS tracking software.': 'احصل على رؤية كاملة لمركباتك وأصولك باستخدام برنامج تتبع نظام تحديد المواقع العالمي (GPS).',
      '"As my business expands, I need that extra peace of mind and protection for new clients, without missing opportunities for my business to grow. GPS LVN can easily work for a company with up to 100 vehicles, it can also work for fleet’s with over 100 vehicles. The benefit is the extreme flexibility GPS LVN offers." - Tom Grove, Director': '"مع توسع أعمالي، أحتاج إلى مزيد من راحة البال والحماية للعملاء الجدد، دون فقدان الفرص لنمو أعمالي. يمكن أن يعمل GPS LVN بسهولة مع شركة تضم ما يصل إلى 100 مركبة، ويمكنه أيضًا العمل مع أسطول يضم أكثر من 100 مركبة 100 مركبة. والفائدة هي المرونة القصوى التي يوفرها نظام GPS LVN." - توم جروف، مخرج',
      'Automate dispatching process with our delivery management software.': 'أتمتة عملية الإرسال من خلال برنامج إدارة التسليم الخاص بنا.',
      'Optimize routes and track driver status in real-time.': 'تحسين الطرق وتتبع حالة السائق في الوقت الحقيقي.',
      'Use resources more efficiently.': 'استخدام الموارد بشكل أكثر كفاءة.',
      'Provide better customer service with accurate delivery times.': 'تقديم خدمة عملاء أفضل مع أوقات تسليم دقيقة.',
      'GPS LVN’s dispatch management lets you plan, schedule, and dispatch deliveries easily! That way the right resources are where they need to be. Our delivery management solution optimizes routes, and tracks delivery whereabouts in real-time. This improves overall customer satisfaction and efficiency.': 'تتيح لك إدارة إرسال GPS LVN التخطيط لعمليات التسليم وجدولتها وإرسالها بسهولة! بهذه الطريقة تكون الموارد المناسبة حيث يجب أن تكون. يعمل حل إدارة التسليم الخاص بنا على تحسين الطرق وتتبع مكان التسليم في الوقت الفعلي. وهذا يؤدي إلى تحسين رضا العملاء وكفاءتهم بشكل عام.',
      'Streamline and automate dispatching with GPS LVN’s delivery management software.': 'قم بتبسيط عملية الإرسال وأتمتتها باستخدام برنامج إدارة التسليم الخاص بـ GPS LVN.',
      'Ensure faster delivery times and reduced operational errors.': 'ضمان أوقات تسليم أسرع وتقليل الأخطاء التشغيلية.',
      'Use resources more effectively.': 'استخدام الموارد بشكل أكثر فعالية.',
      'Plan and schedule deliveries easily.': 'تخطيط وجدولة التسليم بسهولة.',
      "With the help of GPS LVN’s schedule management, you can quickly plan and schedule delivery, ensuring that the appropriate resources are available at the appropriate moment. You may use resources more effectively, reduce errors, and deliver goods to clients quickly with the aid of our software.": "بمساعدة إدارة الجدول الزمني لـ GPS LVN، يمكنك تخطيط وجدولة التسليم بسرعة، مما يضمن توفر الموارد المناسبة في اللحظة المناسبة. يمكنك استخدام الموارد بشكل أكثر فعالية وتقليل الأخطاء وتسليم البضائع للعملاء بسرعة بمساعدة برنامجنا.",
      "Streamline and automate scheduling with GPS LVN’s delivery management software.": "يمكنك تبسيط الجدولة وأتمتتها باستخدام برنامج إدارة التسليم الخاص بـ GPS LVN.",
      "Track the location and status of deliveries in real-time.": 'تتبع موقع وحالة التسليم في الوقت الحقيقي.',
      "Monitor delivery progress and respond to any unforeseen challenges quickly.": 'رصد تقدم التسليم والتعامل مع أي تحديات غير متوقعة بسرعة.',
      "Keep customers happy with improved ETAs, faster delivery times and enhanced visibility.": 'اجعل العملاء سعداء من خلال تحسين تقديرات الوقت الواصل، وتقليل أوقات التسليم، وتعزيز الرؤية.',
      "With GPS LVN’s real-time tracking tool, you can monitor the whereabouts and progress of deliveries so that you can react promptly to any problems and ensure a quicker delivery. For you to establish enduring consumer trust, our delivery management software keeps you informed and in charge of your deliveries.": "باستخدام أداة التتبع في الوقت الفعلي الخاصة بـ GPS LVN، يمكنك مراقبة مكان وجود عمليات التسليم وتقدمها حتى تتمكن من الرد بسرعة على أي مشكلات وضمان التسليم بشكل أسرع. لكي تتمكن من بناء ثقة دائمة لدى المستهلك، فإن برنامج إدارة التسليم الخاص بنا يبقيك مطلعًا ومسؤولًا عن عمليات التسليم الخاصة بك.",
      "Track your deliveries in real-time with GPS LVN’s delivery management software.": "تتبع عمليات التسليم الخاصة بك في الوقت الفعلي باستخدام برنامج إدارة التسليم الخاص بـ GPS LVN.",
      "Encourage customers to provide feedback and rate their driver's performance.": 'تشجيع العملاء على تقديم ملاحظات وتقييم أداء السائقين.',
      "Identify areas within your fleet that need improvement.": 'تحديد المجالات التي تحتاج إلى تحسين في أسطولك.',
      "Improve communication between drivers and customers for a better delivery experience.": 'تحسين التواصل بين السائقين والعملاء لتحسين تجربة التوصيل.',
      'GPS LVN’s route optimization solution uses real-time traffic and weather data to build the most efficient routes for your deliveries, reducing fuel costs and travel time. Our delivery management software allows you to save time and money while increasing ETA accuracy.': 'يستخدم حل تحسين المسار الخاص بـ GPS LVN بيانات حركة المرور والطقس في الوقت الفعلي لإنشاء المسارات الأكثر كفاءة لعمليات التسليم الخاصة بك، مما يقلل تكاليف الوقود ووقت السفر. يتيح لك برنامج إدارة التسليم الخاص بنا توفير الوقت والمال مع زيادة دقة الوقت المتوقع للوصول.',
      'Optimize your delivery routes with delivery management software.': 'قم بتحسين طرق التسليم الخاصة بك باستخدام برنامج إدارة التسليم.',
      'Streamline and manage your delivery processes, including route optimization, real-time tracking, and delivery scheduling. This results in increased customer satisfaction and operational efficiency.': 'قم بتبسيط وإدارة عمليات التسليم الخاصة بك، بما في ذلك تحسين المسار والتتبع في الوقت الفعلي وجدولة التسليم. وهذا يؤدي إلى زيادة رضا العملاء والكفاءة التشغيلية.',
      'Effortlessly manage your delivery operations.': 'إدارة عمليات التسليم الخاصة بك بسهولة.',
      '"مع توسع أعمالي، أحتاج إلى مزيد من راحة البال والحماية للعملاء الجدد، دون فقدان الفرص لنمو أعمالي. يمكن أن يعمل GPS LVN بسهولة مع شركة تضم ما يصل إلى 100 مركبة، ويمكنه أيضًا العمل مع أسطول يضم أكثر من 100 مركبة 100 مركبة. والفائدة هي المرونة القصوى التي يوفرها نظام GPS LVN." - توم جروف، مخرج': '"مع توسع أعمالي، أحتاج إلى مزيد من راحة البال والحماية للعملاء الجدد، دون فقدان الفرص لنمو أعمالي. يمكن أن يعمل GPS LVN بسهولة مع شركة تضم ما يصل إلى 100 مركبة، ويمكنه أيضًا العمل مع أسطول يضم أكثر من 100 مركبة 100 مركبة. والفائدة هي المرونة القصوى التي يوفرها نظام GPS LVN." - توم جروف، مخرج',
      'GPS LVN Gives U R Drive Peace Of Mind': 'GPS LVN يمنح محرك U R راحة البال',
      'Optimize fleet operations with efficient routes, real-time tracking, and compliance management.':
        'تحسين عمليات الأسطول من خلال مسارات فعّالة، تتبع فوري، وإدارة الامتثال.',
      'Reduce travel time, fuel consumption and operating costs.':
        'تقليل وقت السفر، استهلاك الوقود، وتكاليف التشغيل.',
      'Use resources more effectively.': 'استخدام الموارد بشكل أكثر فعالية.',
      'You can cut down on travel time, fuel use, and operating costs by using route optimization, real-time tracking, and compliance monitoring, not to mention enhanced resource use.':
        'يمكنك تقليل وقت السفر واستخدام الوقود وتكاليف التشغيل عن طريق استخدام تحسين المسار والتتبع في الوقت الفعلي ومراقبة الامتثال، ناهيك عن الاستخدام المحسن للموارد.',
      'Reduce costs and improve resource utilization.':
        'خفض التكاليف وتحسين استخدام الموارد.',
      // eslint-disable-next-line no-dupe-keys
      'Optimize your fleet operations by scheduling maintenance, monitoring vehicle health, and generating maintenance reports.':
        'تحسين عمليات أسطولك عن طريق جدولة الصيانة، مراقبة صحة المركبة، وإنشاء تقارير الصيانة.',
      // eslint-disable-next-line no-dupe-keys
      'Improve resource utilization, reduce downtime, and enhance safety.':
        'تحسين استخدام الموارد، تقليل الوقت الذي تكون فيه المعدات خارج الخدمة، وتعزيز السلامة.',
      'Fleet management software works to schedule routine maintenance, generate maintenance reports and monitor vehicle health to increase longevity.':
        'يعمل برنامج إدارة الأسطول على جدولة الصيانة الروتينية وإنشاء تقارير الصيانة ومراقبة صحة السيارة لزيادة طول العمر.',
      'Improve efficiency and extend the life of your assets.':
        'تحسين الكفاءة وإطالة عمر الأصول الخاصة بك.',
      'Reduce downtime, improve asset lifespan, and enhance safety.':
        'تقليل وقت التوقف عن العمل، وتحسين عمر الأصول، وتعزيز السلامة.',
      'Track and monitor the location, status, and maintenance of fleet assets.':
        'تتبع ومراقبة موقع وحالة وصيانة أصول الأسطول.',
      'GPS LVN streamlines the management of your assets with real-time tracking, resulting in minimized disruptions and improved efficiency by increasing the lifespan of your assets.':
        'يعمل GPS LVN على تبسيط إدارة الأصول الخاصة بك من خلال التتبع في الوقت الفعلي، مما يؤدي إلى تقليل الاضطرابات وتحسين الكفاءة من خلال زيادة عمر الأصول الخاصة بك.',
      'Track and manage your fleet assets.':
        'تتبع وإدارة أصول الأسطول الخاص بك.',
      'Reduce costs and improve efficiency with data-driven decisions.':
        'خفض التكاليف وتحسين الكفاءة من خلال القرارات المستندة إلى البيانات.',
      'Gain valuable insights into your delivery operations.':
        'احصل على رؤى قيمة حول عمليات التسليم الخاصة بك.',
      'Track and analyze your fleet operations.':
        'تتبع وتحليل عمليات الأسطول الخاص بك.',
      "GPS LVN lets you see what's going on inside your delivery space, such as driver behavior, fuel consumption, delivery times and more. This works to improve decisions regarding your fleet so you can boost productivity.":
        'يتيح لك GPS LVN معرفة ما يحدث داخل مساحة التسليم الخاصة بك، مثل سلوك السائق واستهلاك الوقود وأوقات التسليم والمزيد. يعمل هذا على تحسين القرارات المتعلقة بأسطولك حتى تتمكن من تعزيز الإنتاجية.',
      'Track and analyze your fleet.': 'تتبع وتحليل الأسطول الخاص بك.',
      'Enhance your fleet operations with routine vehicle maintenance, route optimization, real-time tracking, and compliance management.':
        'عزز عمليات أسطولك من خلال الصيانة الروتينية للمركبات، وتحسين المسار، والتتبع في الوقت الفعلي، وإدارة الامتثال.',
      'Gain visibility and control over your fleet and reduce costs.':
        'احصل على الرؤية والتحكم في أسطولك وخفض التكاليف.',
      "Use your own delivery drivers to save time and money. Send your bookings from your delivery platform to GPS LVN and we'll automatically import your bookings.":
        'استخدم نظام تحديد المواقع العالمي (GPS) الذي يعمل بالبطارية لتتبع الموقع المباشر لشحنتك أثناء انتقالها من المستودع إلى الشاحنة. يتيح لك نظام إدارة الحجز الخاص بنا أيضًا الحصول على إثبات إلكتروني للتسليم.',
      "No more manual jobs on paper or excel! GPS LVN optimizes your run and lets your customers know when you'll arrive. Saving you hours!":
        'لا مزيد من المهام اليدوية على الورق أو التفوق! يعمل موقع GPS LVN على تحسين تشغيلك ويتيح لعملائك معرفة موعد وصولك. يوفر لك ساعات!',
      'Offer customers a same day delivery experience by using your very own delivery team.':
        'قدم للعملاء تجربة التسليم في نفس اليوم باستخدام فريق التوصيل الخاص بك.',
      'Delivering groceries to your customers? Use GPS LVN to manage your bookings and optimize your run for a seamless delivery experience.':
        'توصيل البقالة لعملائك؟ استخدم GPS LVN لإدارة حجوزاتك وتحسين رحلتك للحصول على تجربة توصيل سلسة.',
      'Delivering new products to customers? Use GPS LVN to optimize routes and provide your customers with an accurate ETA.':
        'تقديم منتجات جديدة للعملاء؟ استخدم GPS LVN لتحسين المسارات وتزويد عملائك بالوقت المتوقع للوصول الدقيق.',
      'If you deliver food or run a food truck, GPS LVN is the perfect tool to optimize your delivery run.':
        'إذا كنت تقوم بتوصيل الطعام أو تشغيل شاحنة طعام، فإن GPS LVN هي الأداة المثالية لتحسين عملية التسليم الخاصة بك.',
      "If you're running a same day courier business, use GPS LVN to manage your deliveries from start to finish.":
        'إذا كنت تدير شركة توصيل سريع في نفس اليوم، فاستخدم GPS LVN لإدارة عمليات التسليم الخاصة بك من البداية إلى النهاية.',
      'Transform Your Delivery Operations with GPS LVN.':
        'تحويل عمليات التسليم الخاصة بك مع GPS LVN.',
      'You can sign up for a free trial of GPS LVN by clicking the “Sign Up for a Free Trial” button on this page.': `يمكنك الاشتراك للحصول على نسخة تجريبية مجانية من GPS LVN بالنقر فوق الزر "التسجيل للحصول على نسخة تجريبية مجانية" في هذه الصفحة.`,
      "How can I sign up for a free trial of GPS LVN's fleet management software?":
        'كيف يمكنني الاشتراك للحصول على نسخة تجريبية مجانية من برنامج إدارة أسطول GPS LVN؟',
      'Yes, you can easily link our fleet management software with the systems you already have in place.':
        'نعم، يمكنك بسهولة ربط برنامج إدارة الأسطول الخاص بنا بالأنظمة الموجودة لديك بالفعل.',
      "Can GPS LVN's fleet management software be integrated with my existing systems?":
        'هل يمكن دمج برنامج إدارة أسطول GPS LVN مع أنظمتي الحالية؟',
      'GPS LVN’s fleet management software allows users to share a live tracking link with their customers for unprecedented delivery visibility. This eliminates the issue of large time windows and missed deliveries as the customer can see exactly where their order is, building trust and increasing the odds of repeat purchases.':
        'يتيح برنامج إدارة الأسطول الخاص بـGPS LVN للمستخدمين مشاركة رابط التتبع المباشر مع عملائهم للحصول على رؤية تسليم غير مسبوقة. وهذا يلغي مشكلة الفترات الزمنية الكبيرة وعمليات التسليم الفائتة حيث يمكن للعميل رؤية مكان طلبه بالضبط، مما يؤدي إلى بناء الثقة وزيادة احتمالات تكرار عمليات الشراء.',
      "How does GPS LVN's fleet management software improve customer service?":
        'كيف يعمل برنامج إدارة أسطول GPS LVN على تحسين خدمة العملاء؟',
      'Yes, GPS LVN’s fleet management software includes a route optimization feature that generates the most efficient delivery routes in seconds. This is achieved by taking into account weather and traffic conditions, driver availability, vehicle type, product type etc.':
        'نعم، يتضمن برنامج إدارة الأسطول الخاص بـ GPS LVN ميزة تحسين المسار التي تنشئ طرق التسليم الأكثر كفاءة في ثوانٍ. ويتم تحقيق ذلك من خلال مراعاة الظروف الجوية والمرورية وتوافر السائق ونوع السيارة ونوع المنتج وما إلى ذلك.',
      "Can GPS LVN's fleet management software be used for route optimization?":
        'هل يمكن استخدام برنامج إدارة أسطول GPS LVN لتحسين المسار؟',
      'The fleet management software from GPS LVN lowers operational expenses for enterprises by increasing safety, optimizing resource use, and lowering fuel usage.Through GPS LVN, fleet owners have access to data that can be used to maximize driver performance, decrease idle time, and enhance fuel efficiency.Users may make better fleet decisions by comprehending and precisely tracking fleet activity.':
        'يعمل برنامج إدارة الأسطول من GPS LVN على خفض النفقات التشغيلية للمؤسسات من خلال زيادة السلامة وتحسين استخدام الموارد وخفض استخدام الوقود. ومن خلال GPS LVN، يتمتع أصحاب الأساطيل بإمكانية الوصول إلى البيانات التي يمكن استخدامها لزيادة أداء السائق إلى أقصى حد، وتقليل وقت الخمول، وتعزيز كفاءة استهلاك الوقود. يمكن للمستخدمين اتخاذ قرارات أفضل بشأن الأسطول من خلال فهم نشاط الأسطول وتتبعه بدقة.',
      "How does GPS LVN's fleet management software reduce operating costs?":
        'كيف يعمل برنامج إدارة أسطول GPS LVN على تقليل تكاليف التشغيل؟',
      'Fleet management software is a tool used to access important information relating to fleet performance and customer service. Fleet management software works to keep up with vehicle maintenance, reduce downtime and boost operational efficiency. Learn more about fleet management software by clicking here.':
        'يعد برنامج إدارة الأسطول أداة تستخدم للوصول إلى المعلومات المهمة المتعلقة بأداء الأسطول وخدمة العملاء. يعمل برنامج إدارة الأسطول على مواكبة صيانة المركبات وتقليل وقت التوقف عن العمل وتعزيز الكفاءة التشغيلية. تعرف على المزيد حول برنامج إدارة الأسطول بالضغط هنا.',
      'What Is Fleet Management Software?': 'ما هو برنامج إدارة الأسطول؟',
      'Frequently asked questions.': 'أسئلة مكررة.',
      "I'm blown away by the effectiveness of the GPS LVN devices and the flexibility it affords my business.":
        'لقد أذهلتني فعالية أجهزة GPS LVN والمرونة التي توفرها لعملي.',
      'Tom Grove': 'توم جروف',
      'Before GPS LVN, we used to have to generate new routes if we wanted to change the order of things whereas with GPS LVN we can just adjust the days deliveries on the fly, allowing us to move orders into a higher priority and it all works it out in the background pretty quickly.':
        'قبل GPS LVN، اعتدنا على إنشاء مسارات جديدة إذا أردنا تغيير ترتيب الأشياء بينما مع GPS LVN يمكننا فقط ضبط أيام التسليم بسرعة، مما يسمح لنا بنقل الطلبات إلى أولوية أعلى وكل ذلك يعمل بشكل جيد الخلفية بسرعة كبيرة.',
      'Aaron Clark': 'آرون كلارك',
      'Love about GPS LVN was the live-tracking features and proof of delivery.':
        'كان الحب في GPS LVN هو ميزات التتبع المباشر وإثبات التسليم.',
      'Michael Godwin': 'مايكل جودوين',
      'I trialled GPS LVN and it was perfect - Automatically increased customers by about 30% on the first day.':
        'لقد قمت بتجربة GPS LVN وكان الأمر مثاليًا - زيادة العملاء تلقائيًا بحوالي 30% في اليوم الأول.',
      'Aaron Clark': 'آرون كلارك',
      'Great service and very helpful, nothing is a problem to them. I would recommend them to anyone A+.':
        'خدمة رائعة ومفيدة للغاية، لا يوجد مشكلة بالنسبة لهم. أود أن أوصي بهم لأي شخص A+.',
      'David Zelton': 'ديفيد زيلتون',
      'Transform Your Delivery Operations with GPS LVN.':
        'تحويل عمليات التسليم الخاصة بك مع GPS LVN.',
      'Have the most efficient routes for your delivery drivers generated in seconds.':
        'احصل على الطرق الأكثر فعالية لسائقي التوصيل لديك والتي يتم إنشاؤها في ثوانٍ.',
      'Route Optimization': 'تحسين الطريق',
      "Tell your customers when you're on route via our automated SMS system.Customers won't have to worry about missing the delivery.":
        'أخبر عملائك عندما تكون في الطريق عبر نظام الرسائل النصية القصيرة الآلي الخاص بنا. لن يضطر العملاء إلى القلق بشأن فقدان التسليم.',
      'SMS Alerts': 'تنبيهات الرسائل القصيرة',
      'Complete more bookings in less time, reduce fuel costs and improve communication between customers and drivers.':
        'أكمل المزيد من الحجوزات في وقت أقل، وقلل من تكاليف الوقود، وحسّن التواصل بين العملاء والسائقين.',
      'Last Mile': 'الميل الأخير',
      'Track the status of your vehicles and assets so you can provide customers with accurate ETAs and respond to any issues quickly.':
        'تتبع حالة المركبات والأصول الخاصة بك حتى تتمكن من تزويد العملاء بمواعيد الوصول المتوقعة الدقيقة والاستجابة لأي مشكلات بسرعة.',
      'GPS Tracking': 'تتبع نظام تحديد المواقع',
      'Reduce wasted resources and labor, as well as ensuring goods arrive safely in a timely manner.':
        'تقليل إهدار الموارد والعمالة، وكذلك ضمان وصول البضائع بأمان في الوقت المناسب.',
      'Delivery Management': 'إدارة التسليم',
      "Capture customer feedback upon the delivery's completion.We’ll then send an SMS allowing your customer to rate their experience and provide feedback.":
        'احصل على تعليقات العملاء عند اكتمال التسليم. وسنرسل بعد ذلك رسالة نصية قصيرة تسمح لعميلك بتقييم تجربته وتقديم التعليقات.',
      'Customer Reviews': 'آراء العملاء',
      'Capture an e-signature and photo of the item upon delivery via our mobile app. Your customers can then view this information in real time.':
        'احصل على توقيع إلكتروني وصورة للمنتج عند التسليم عبر تطبيق الهاتف المحمول الخاص بنا. ويمكن لعملائك بعد ذلك عرض هذه المعلومات في الوقت الفعلي.',
      'Proof of Delivery': 'إثبات التسليم',
      'Share your live location with customers, so they can see exactly where their delivery is.':
        'شارك موقعك المباشر مع العملاء، حتى يتمكنوا من معرفة مكان التسليم بالضبط.',
      'Live Location Tracking': 'تتبع الموقع المباشر',
      "Whether you're managing a small local delivery service or a large national operation, GPS LVN has the tools you need to streamline your process, reduce costs, and improve customer satisfaction.":
        'سواء كنت تدير خدمة توصيل محلية صغيرة أو عملية وطنية كبيرة، فإن GPS LVN لديه الأدوات التي تحتاجها لتبسيط عمليتك، وتقليل التكاليف، وتحسين رضا العملاء.',
      'GPS LVN is perfect for:': 'GPS LVN مثالي لـ:',
      '"Before GPS LVN, we used to have to generate new routes if we wanted to change the order of things whereas with GPS LVN we can just adjust the days deliveries on the fly, allowing us to move orders into a higher priority and it all works it out in the background pretty quickly”':
        '"قبل GPS LVN، كنا نضطر إلى إنشاء مسارات جديدة إذا أردنا تغيير ترتيب الأشياء بينما مع GPS LVN يمكننا فقط ضبط أيام التسليم بسرعة، مما يسمح لنا بنقل الطلبات إلى أولوية أعلى وكل ذلك يعمل بشكل جيد في الخلفية بسرعة كبيرة"',
      'SuperPharmacy Saves Hundreds of Hours With GPS LVN':
        'الصيدلية الفائقة توفر مئات الساعات من خلال تطبيق GPS LVN',
      'CASE STUDY': 'دراسة الحالة',
      'Use your battery operated GPS to track the live location of your freight as it moves from warehouse to truck. Our booking management system also allows you to capture electronic proof of delivery.':
        'استخدم نظام تحديد المواقع العالمي (GPS) الذي يعمل بالبطارية لتتبع الموقع المباشر لشحنتك أثناء انتقالها من المستودع إلى الشاحنة. يتيح لك نظام إدارة الحجز الخاص بنا أيضًا الحصول على إثبات إلكتروني للتسليم.',
      'Line Haul': 'خط الرحلات',
      "No more manual jobs on paper or excel! GPS LVN optimizes your run and lets your customers know when you'll arrive. Saving you hours!":
        'لا مزيد من المهام اليدوية على الورق أو التفوق! يعمل موقع GPS LVN على تحسين تشغيلك ويتيح لعملائك معرفة موعد وصولك. يوفر لك ساعات!',
      'Delivery Drivers': 'سائقين التوصيل',
      'Offer customers a same day delivery experience by using your very own delivery team.':
        'قدم للعملاء تجربة التسليم في نفس اليوم باستخدام فريق التوصيل الخاص بك.',
      'Retail Delivery': 'تسليم التجزئة',
      "Use your own delivery drivers to save time and money. Send your bookings from your delivery platform to GPS LVN and we'll automatically import your bookings.":
        'استخدم سائقي التوصيل الخاصين بك لتوفير الوقت والمال. أرسل حجوزاتك من منصة التسليم الخاصة بك إلى GPS LVN وسنقوم باستيراد حجوزاتك تلقائيًا.',
      'Restaurant Delivery': 'توصيل المطاعم',
      'Delivering groceries to your customers? Use GPS LVN to manage your bookings and optimize your run for a seamless delivery experience.':
        'توصيل البقالة لعملائك؟ استخدم GPS LVN لإدارة حجوزاتك وتحسين رحلتك للحصول على تجربة توصيل سلسة.',
      'Grocery Delivery': 'توصيل البقالة',
      'Delivering new products to customers? Use GPS LVN to optimize routes and provide your customers with an accurate ETA.':
        'تقديم منتجات جديدة للعملاء؟ استخدم GPS LVN لتحسين المسارات وتزويد عملائك بالوقت المتوقع للوصول الدقيق.',
      'Product Delivery': 'ايصال المنتج',
      'If you deliver food or run a food truck, GPS LVN is the perfect tool to optimize your delivery run.':
        'إذا كنت تقوم بتوصيل الطعام أو تشغيل شاحنة طعام، فإن GPS LVN هي الأداة المثالية لتحسين عملية التسليم الخاصة بك.',
      'Food Delivery': 'توصيل طلبات الطعام',
      "If you're running a same day courier business, use GPS LVN to manage your deliveries from start to finish.":
        'إذا كنت تدير شركة توصيل سريع في نفس اليوم، فاستخدم GPS LVN لإدارة عمليات التسليم الخاصة بك من البداية إلى النهاية.',
      'Same Day Couriers': 'السعاة في نفس اليوم',
      'The complete Delivery Management Solution.':
        'الحل الكامل لإدارة التسليم.',
      'Start your free trial.': 'ابدأ تجربتك المجانية.',
      'Take the next step to streamline your delivery processes and improve efficiency with GPS LVN’s delivery management software. Sign up now for a free trial and see the difference it can make for your business.':
        'اتخذ الخطوة التالية لتبسيط عمليات التسليم وتحسين الكفاءة باستخدام برنامج إدارة التسليم الخاص بـGPS LVN. سجل الآن للحصول على نسخة تجريبية مجانية وشاهد الفرق الذي يمكن أن يحدثه لعملك',
      // eslint-disable-next-line no-dupe-keys
      'Transform Your Delivery Operations with GPS LVN.':
        'تحويل عمليات التسليم الخاصة بك مع GPS LVN.',
      'Used by:': 'استعمل من قبل:',
      'Enter Your Email': 'أدخل بريدك الإلكتروني',
      'Start Free Trail': 'ابدأ النسخة التجريبية المجانية',
      'Start your free 7-day trial, no credit card necessary.':
        'ابدأ تجربتك المجانية لمدة 7 أيام، دون الحاجة إلى بطاقة ائتمان.',
      "GPS LVN's driver application software increases efficiency and boosts customer satisfaction by optimizing your fleet operations.With real- time tracking, real - time ETA updates, and route optimization, our app enables businesses to send bookings or deliveries to your team instantly.":
        'يعمل برنامج تطبيق السائق الخاص بـ GPS LVN على زيادة الكفاءة وتعزيز رضا العملاء من خلال تحسين عمليات أسطولك. من خلال التتبع في الوقت الفعلي، وتحديثات الوقت المتوقع للوصول في الوقت الفعلي، وتحسين المسار، يمكّن تطبيقنا الشركات من إرسال الحجوزات أو التسليمات إلى فريقك على الفور.',
      'Streamline your operations and improve driver productivity.':
        'تبسيط عملياتك وتحسين إنتاجية السائق.',
      'DRIVER APPLICATION SOFTWARE': 'برنامج تطبيق السائق',
      'Same things wrong': 'شئ ما خطاء',
      'Message sent': 'تم ارسال الرسالة',
      'Streamline the final leg of the delivery process for faster, more efficient deliveries​.​​':
        'تبسيط المرحلة الأخيرة من عملية التسليم من أجل عمليات تسليم أسرع وأكثر كفاءة',
      'Driver Ratings': 'تقييمات السائق',
      'Build the most efficient routes increasing efficiency, improved customer satisfaction and cost savings.':
        'بناء الطرق الأكثر كفاءة لزيادة الكفاءة وتحسين رضا العملاء وتوفير التكاليف',
      'Route Planning App': 'تطبيق تخطيط الطريق',
      'You can share your trip status and live location with your customers, using a single link, to let them know where you are and when you’re going to arrive.':
        'يمكنك مشاركة حالة رحلتك وموقعك المباشر مع عملائك، باستخدام رابط واحد، لإعلامهم بمكانك ومتى ستصل.',
      'Real Time Tracking': 'تتبع في الوقت الحقيقي',
      'An easier way to capture a client’s confirmation of a completed booking or delivery. Let your drivers capture an e-signature and photo proof directly from an iPhone or Android device.':
        'طريقة أسهل للحصول على تأكيد العميل لاكتمال الحجز أو التسليم. اسمح للسائقين لديك بالتقاط التوقيع الإلكتروني وإثبات الصورة مباشرةً من جهاز iPhone أو Android.',
      // eslint-disable-next-line no-dupe-keys
      'Proof of Delivery': 'إثبات التسليم',
      'Plan and dispatch the fastest journey for your fleet, in only minutes.':
        'قم بتخطيط وإرسال أسرع رحلة لأسطولك في دقائق معدودة فقط',
      'Dispatch & Delivery Planning': 'تخطيط الإرسال والتسليم',
      'Find the fastest routes for every booking location to improve your business efficiency and reduce operational costs.':
        'ابحث عن أسرع الطرق لكل موقع حجز لتحسين كفاءة عملك وتقليل التكاليف التشغيلية.',
      // eslint-disable-next-line no-dupe-keys
      'Route Optimization': 'تحسين الطريق',
      'Track the live location of any driver to ensure they are following the best routes. Send them new customer bookings so they can update their routes in real time.':
        'تتبع الموقع المباشر لأي سائق للتأكد من أنه يتبع أفضل الطرق. أرسل لهم حجوزات العملاء الجدد حتى يتمكنوا من تحديث مساراتهم في الوقت الفعلي.',
      'Driver App': 'تطبيق السائق',
      'Streamline the final leg of the delivery process for faster, more efficient deliveries.':
        'قم بتبسيط المرحلة الأخيرة من عملية التسليم من أجل عمليات تسليم أسرع وأكثر كفاءة.',
      'Last Mile Delivery': 'تسليم الميل الأخير',
      'Track your assets using a powerful GPS tracking device that records the exact location of your assets throughout their day-to-day use.':
        'تتبع أصولك باستخدام جهاز تتبع GPS قوي يسجل الموقع الدقيق لأصولك طوال استخدامها اليومي.',
      'Asset and Device GPS Tracking':
        'تتبع الأصول والجهاز عبر نظام تحديد المواقع العالمي (GPS).',
      'Make every booking simple and efficient. Send your drivers the best routes with accurate ETAs and notifications for your customers.':
        'اجعل كل حجز بسيطًا وفعالًا. أرسل للسائقين أفضل الطرق مع إشعارات ووقت الوصول المتوقع الدقيق لعملائك.',
      'Delivery Management Software': 'برامج إدارة التسليم',
      'Monitor your fleet operations, enabling you to reduce costs and improve fleet efficiency.':
        'راقب عمليات أسطولك، مما يتيح لك تقليل التكاليف وتحسين كفاءة الأسطول.',
      'Fleet Management Software': 'برامج إدارة الأسطول',
      use_automation_in_every:
        'استخدم الأتمتة في كل قسم من أقسام عملك. مثل تتبع الأصول، إدارة الأنشطة اليومية، الحصول على حساب تلقائي للتمويل. لهذا السبب، لضمان أفضل ربحية، يجب أن يكون لديك نظام إدارة المركبات.',
      'Ensure the best profitability': 'ضمان أفضل ربحية',
      get_all_inventory_records:
        'احصل على جميع سجلات المخزون مثل المخزون المتاح، تقرير استخدام قطع السيارات حسب السيارة، إلخ. لقد قمنا بتصميم نظام إدارة المصروفات للسيطرة على جميع سجلات المخزون والمصروفات الخاصة بك.',
      'Manage inventory & expenses under control':
        'إدارة المخزون والمصروفات تحت السيطرة',
      automation_system_makes_easy:
        'نظام الأتمتة يسهل التعامل مع أنشطتك اليومية. يمكنك تحديد وظائفك كمسؤولين، مسؤولين فائقين، مديري المخزون وأنشطة الموظفين الآخرين. ويكون لديك النظام لتحقيق ربح من أدائهم لجعلهم كفءين.',
      'Own a competent workforce': 'امتلك قوة عامل كفءة',
      organization_get_reports:
        'يجلب نظام إدارة مبني على الحاسوب سرعة فائقة لإدارة المؤسسة، الحصول على التقارير وضمان نمو الأعمال المستدام. سيساعدك وجود نظام الأتمتة في أن تكون رائد السوق.',
      'Be the market leader of your industry': 'كن رائد السوق في صناعتك',
      computer_based_management_system:
        'يجلب نظام إدارة مبني على الحاسوب سرعة فائقة لإدارة المؤسسة، الحصول على التقارير وضمان نمو الأعمال المستدام. سيساعدك وجود نظام الأتمتة في أن تكون رائد السوق.',
      'Take authentic decision': 'اتخذ قرارات موثوقة',
      'Manage your vehicle from home': 'إدارة سيارتك من المنزل',
      gps_lvn_includes:
        'يشمل GPS LVN نظامًا متكاملًا يساعدك في الاحتفاظ بجميع معلوماتك في مكان واحد. يمكنك عرض جميع بياناتك في لمحة في أي وقت، والحصول على تقارير فورية والقدرة على اتخاذ قرارات موثوقة.',

      alert_Center_to_Make: 'مركز التنبيه لجعل هذا البرنامج دائمًا محدثًا!!!',
      alert_center_is_important:
        'مركز التنبيه مهم لمعرفة أي حالة تنبيهية لأي مركبة. يمكن أن تكون التأمين على المركبة، واللياقة، والمحرك، وتصريح الطريق، وما إلى ذلك حالات تنبيهية، سيقوم مركز التنبيه بإعلام المستخدم. تم ضبط مركز التنبيه التلقائي مع نظام إدارة المركبات الخاص بنا للحفاظ على تحديثك دائمًا.',
      'Purchase Now': 'اشترِ الآن',

      'Assign role': 'تعيين الدور',
      'Manage role': 'إدارة الدور',
      'Manage user access role': 'إدارة دور الوصول للمستخدم',
      'Role Permission System': 'نظام أذونات الدور',
      after_adding_users:
        'بعد إضافة المستخدمين، يمكنك توفير نظام تحكم في الوصول استنادًا إلى الدور. يمكنك تحديد موظفيك وتقديم لهم مسؤولية محددة. يمكن أن يساعدك هذا الوحدة في تعيين أي دور محدد للمستخدمين. يمكن أن يضمن أمان النظام الخاص بك لأن المستخدمين يمكنهم أداء مهامهم المعينة فقط.',

      'Add user': 'إضافة مستخدم',
      'Manage user': 'إدارة المستخدم',
      'User Management System': 'نظام إدارة المستخدمين',
      this_module_can_allow:
        'يمكن لهذه الوحدة أن تتيح لك إضافة مستخدم عن طريق إنشاء ملف تعريف جديد للمستخدم من خلال نظام إدارة المستخدمين. كما يمكنك الحصول على قائمة شاملة للمستخدمين الذين تمت إضافتهم والتي ستساعدك في إدارة جميع المستخدمين. تم تصميم هذا القسم في الزاوية اليمنى من القائمة العلوية المسماة بالملف الشخصي. ندمج هنا الخيارات التالية.',

      'Real Time Reports': 'تقارير الوقت الفعلي',
      Accurate_reports_ensure:
        'تضمن التقارير الدقيقة ربحية عملك، ولكن سيكون من المستهلك جدًا الوقت عند إعداد التقارير الشاملة يدويًا. لحل مثل هذه المشاكل، يحتوي نظام إدارة السيارات على وحدة ممتازة يمكنها توليد التقارير التالية بدقة وتلقائية.',

      'Employee Reports': 'تقارير الموظفين',
      'Vehicle Reports': 'تقارير السيارات',
      'Driver Reports': 'تقارير السائقين',
      'Vehicle Requisition': 'طلب السيارة',
      'Renewal Reports': 'تقارير التجديد',
      'Refuel Requisition Details': 'تفاصيل طلب التزود بالوقود',
      'Purchase Details': 'تفاصيل الشراء',
      'Expense Details': 'تفاصيل المصروفات',
      'Maintenance Requisition Details': 'تفاصيل طلب الصيانة',
      'Pick & Drop Requisition Reports': 'تقارير طلب الاستلام والتسليم',

      'Manage Approval Authority': 'إدارة سلطة الموافقة',
      'Maintenance Requisition': 'طلب الصيانة',
      'Maintenance Service': 'خدمة الصيانة',
      'Maintenance System': 'نظام الصيانة',

      To_operate_the_entire:
        'لتشغيل النظام بأكمله، يجب عليك الاحتفاظ بسجلات جميع خدمات الصيانة ويجب على المستخدم تحديث استمارة الخدمة عندما يرغبون في الحصول على أي خدمات. يمكن لهذه الوحدة أن تتيح لك فعل ذلك. يمكن للمستخدمين تقديم متطلباتهم للحصول على خدمة الصيانة ويمكن لهذه الوحدة أن تتلقاها وتحسب التكلفة الإجمالية تلقائيًا.',

      driving_behavior:
        'تعتبر زين رود أكثر تقدمًا من أي تطبيق حالي لسجل السيارة، تتبع المسافة المقطوعة، تطبيق التأمين، تتبع سلوك القيادة، تطبيق سجل الرحلة، جهاز تسجيل المركبة، تطبيق التتبع، تطبيق القيادة، تطبيق البيانات الرقمية، إلخ.',

      etc: 'إلخ...',
      gps_tracking_app: 'تطبيق تتبع GPS',
      app_to_track_visits: 'تطبيق لتتبع الزيارات',
      vehicle_logging_app: 'تطبيق تسجيل المركبات',
      driving_coach_app: 'تطبيق مدرب القيادة',
      location_tracking_app: 'تطبيق تتبع الموقع',
      insurance_app: 'تطبيق التأمين',
      driving_style_tracker_app: 'تطبيق تتبع أسلوب القيادة',
      mileage_tracker_app: 'تطبيق تتبع المسافة المقطوعة',
      trip_log_app: 'تطبيق سجل الرحلة',
      donec_sit_amet_nulla: 'دونيك سيت آميت نولا',
      cras_convallis_lacus_orci: 'كراس كونفاليس لاكوس أورسي',
      interdum_et_malesuada: 'إنتردوم إت ماليسوادا',
      nulla_vehicula: 'نولا فيهيكولا',
      vestibulum_a_massa: 'فستيبولوم آ ماسا',

      we_have_unlocked:
        'لقد قمنا بفتح كود المصدر لتطبيق زين رود - تطبيق مراقبة القيادة الرئيسي لدينا - لمساعدة المجتمع في إنشاء منتجات تعزز سلامة السائق وكفاءته، وتخلق تجربة جديدة لعشاق السيارات',

      free_tracking_and_safe_driving:
        'تطبيق مجاني لتتبع السيارة والقيادة الآمنة لجمع موقع السيارة، ونمط القيادة، وسلوك القيادة، وأنماط القيادة، وأنماط الحياة، وبيانات السيارة، ومراقبة حوادث السيارات. في البداية، تم تصميم هذا التطبيق لعرض قدرات تطبيق تلمتيكس ومنصة.',

      'Shared mobility': 'التنقل المشترك',
      'Gig economy': 'اقتصاد الحيازة المؤقتة',
      'Newly licensed drivers': 'السائقين الحديثين الحصول على الترخيص',
      'Vehicle logging app': 'تطبيق تسجيل المركبات',
      'E-driving schools': 'مدارس تعليم القيادة الإلكترونية',

      'Defensive driving': 'القيادة الدفاعية',
      'UBI Insurance': 'تأمين UBI',
      'Teenage drivers': 'السائقون المراهقون',
      'Family members': 'أفراد العائلة',
      'Transportation companies': 'شركات النقل',

      Automatic: 'تلقائي',
      'On-demand': 'حسب الطلب',
      Tagging: 'وسم',
      Scheduled: 'مجدول',

      'Monitor driving': 'مراقبة القيادة',
      'Real-time data': 'بيانات الوقت الحقيقي',
      'Driving behavior': 'سلوك القيادة',
      'In-vehicle data': 'بيانات داخل المركبة',

      'Distracted driving': 'القيادة بتشتت الانتباه',
      'Speed limit violation': 'انتهاك الحد الأقصى للسرعة',
      'Driving habits': 'عادات القيادة',
      'Trip log and waypoints': 'سجل الرحلة ونقاط الانطلاق',
      Locations: 'المواقع',

      'GPS Data (location, speed, etc)': 'بيانات GPS (الموقع، السرعة، إلخ)',
      'Sensors data (Accelerometer, gyro, etc)':
        'بيانات الحساسات (مقياس السرعة، الجاير، إلخ)',
      'Device status': 'حالة الجهاز',
      'Enriched location data': 'بيانات الموقع المحسنة',

      login_details: 'تفاصيل تسجيل الدخول',
      personal_details: 'تفاصيل شخصية',

      safe_driving: 'القيادة الآمنة',
      trip_details: 'تفاصيل الرحلة',
      api_access: 'الوصول إلى واجهة برمجة التطبيقات (API)',
      engagements: 'التفاعلات',

      data_hub: 'مركز البيانات',
      trip_log: 'سجل الرحلة',
      user_profile: 'ملف المستخدم',
      telematics_sdk: 'تطبيق تقنية الرصد عن بعد (Telematics SDK)',

      tracking_software:
        'يساعد برنامج التتبع الشركات التجارية عبر الإنترنت في مراقبة الشحنات في الوقت الحقيقي، وتحسين مسارات التسليم، وضمان التسليم في الوقت المحدد. كما يعزز تجربة العملاء من خلال توفير رؤية لهم حول الوقت المقدر للوصول.',
      e_eommerce: 'التجارة الإلكترونية',
      the_businesses:
        'يمكن للشركات تتبع وكلاء التوصيل والشاحنات والدراجات البخارية، وما إلى ذلك، في الوقت الحقيقي باستخدام حلول التتبع داخل تطبيقاتهم المحمولة الخاصة. يساعد ذلك في تخصيص أقرب وكيل توصيل إلى الموقع وتوفير المنتجات والخدمات في الوقت المحدد، بشكل آمن وفي حدود الميزانية. تحافظ التسليمات في الوقت المحدد على طعام طازج وتزيد من التقييمات الإيجابية.',
      food_delivery: 'توصيل الطعام',
      tours_and_travel:
        'تعمل وكالات السفر والرحلات على عدد هائل من السيارات وتتحمل مسؤولية سلامة السياح. يمكن أن يساعد تتبعهم بتقنية التلميتك المحمولة في الحفاظ على دقة المواعيد للمركبات وتعزيز سلامة الطريق والرحلة بشكل عام. يمكن إرسال تنبيهات تلقائية حول الحوادث المكتشفة والموقع في الوقت الحقيقي.',
      tour: 'رحلات وسفر',
      parents_usually:
        'غالبًا ما ينتظر الآباء في المحطة حافلة المدرسة ويهتمون بسلامة أطفالهم. باستخدام تكنولوجيا التلميتك المتكاملة داخل تطبيق المدرسة المحمول، يمكن للآباء معرفة بالضبط أين تتواجد الحافلة، وكيف يتم قيادتها بشكل آمن، وبناءً على ذلك يصلون إلى المحطة في الوقت المحدد دون أن يكونوا مبكرين أو متأخرين جدًا.',
      school_buses: 'حافلات المدرسة',
      in_the_cab:
        'في أعمال خدمة الأجرة، يسمح تطبيق التلميتك للمستخدمين بتخصيص أقرب سيارة أجرة عند حجز العملاء عبر الإنترنت تلقائيًا. بدون تكنولوجيا التلميتك المحمولة، لا يمكن تحقيق استخدام فعّال وأمثل للأسطول. يمكن أيضًا أن يساعد في أعمال الخدمة الميدانية مثل إصلاح السيارات في الموقع أو أعمال مساعدة في حالات تعطل السيارة.',
      taxi_and: 'خدمات التاكسي والأجرة',
      who_can: 'من يستفيد من استخدام تطبيق التتبع والقيادة الآمنة',
      ready_to_go: 'حلاً جاهزًا للاستخدام لـ:',
      tracking_mode: 'وضع التتبع',
      drive_mode: 'وضع القيادة',
      collected_data: 'البيانات المجمعة',
      driven_by: 'تشغيله بواسطة مجموعة تكنولوجيا التلميتك LVN',
      powerful_solution: 'حلاً قويًا',
      based_on:
        'بناءً على المتطلبات، نقدم مجموعة كاملة من خدمات إدارة البيانات بما في ذلك التخزين (قصير الأجل وطويل الأجل). ومع ذلك، ندعم أيضًا خيارات مرنة لإدارة البيانات، حيث يكون للعميل خيار تصدير البيانات إلى خادمه الخاص في أي لحظة.',
      telematics_data: 'بيانات التلميتك',
      the_app:
        'التطبيق متكامل مع Google Firebase. استخدم هذه الخدمة للمصادقة واستضافة البيانات الشخصية.',
      we_respect:
        'نحترم خصوصية البيانات ونلتزم بتقديم الحماية للبيانات الشخصية وفقًا للتشريعات. لهذا السبب، عند استخدام تطبيق التلميتك مفتوح المصدر، يكون لديك خيار إدارة بيانات المستخدمين واستضافتها في المنطقة المناسبة لك.',
      data_managment: 'إدارة البيانات',
      hosting_option: 'خيارات الاستضافة',
      data: 'البيانات',
      // eslint-disable-next-line no-dupe-keys
      login_details: 'تسجيل الدخول وتفاصيل الشخصية',
      host_personal: 'استضافة البيانات الشخصية على جانبك',
      full_function: 'تطبيق مراقبة القيادة بكامل وظائفه',
      try_it: 'جربه مجانًا',
      location_tracking: 'تتبع الموقع وتطبيق القيادة الآمنة',
      name_app: 'LVN GPS',
      created_app: 'أنشئ تطبيق التتبع الخاص بك',

      section82:
        'إذا كانت لديك أي أسئلة بخصوص الخصوصية أثناء استخدام التطبيق، أو كانت لديك أسئلة حول ممارساتنا، فيرجى الاتصال بنا عبر البريد الإلكتروني على privacy@gpslvn.com.',
      section81: '12 اتصل بنا',
      section80:
        'باستخدام التطبيق، فإنك توافق على معالجتنا لمعلوماتك على النحو المنصوص عليه في سياسة الخصوصية هذه الآن وبصيغتها المعدلة من قبلنا. "المعالجة" تعني استخدام ملفات تعريف الارتباط على جهاز كمبيوتر/جهاز محمول باليد أو استخدام المعلومات أو لمسها بأي شكل من الأشكال، بما في ذلك، على سبيل المثال لا الحصر، جمع المعلومات وتخزينها وحذفها واستخدامها ودمجها والكشف عنها، وجميع الأنشطة التي ستتم في وزارة التصالات العراقية. إذا كنت تقيم خارج العراق، فسيتم نقل معلوماتك ومعالجتها وتخزينها هناك بموجب معايير الخصوصية العراقية.',
      section79: '11 موافقتك',
      section78:
        'قد يتم تحديث سياسة الخصوصية هذه من وقت لآخر لأي سبب من الأسباب. سنقوم بإخطار كل مشترك مدفوع الأجر بأي تغييرات تطرأ على سياسة الخصوصية الخاصة بنا على عنوان البريد الإلكتروني الذي تم تقديمه أثناء عملية الشراء. ننصحك بمراجعة سياسة الخصوصية هذه بانتظام لمعرفة أي تغييرات، حيث يعتبر الاستخدام المستمر بمثابة موافقة على جميع التغييرات.',
      section77: '10 تغييرات',
      section76:
        'نحن مهتمون بالحفاظ على سرية معلوماتك. نحن نقدم ضمانات مادية وإلكترونية وإجرائية لحماية المعلومات التي نعالجها ونحافظ عليها. على سبيل المثال، نحصر الوصول إلى هذه المعلومات على الموظفين والمقاولين المعتمدين الذين يحتاجون إلى معرفة تلك المعلومات من أجل تشغيل تطبيقنا أو تطويره أو تحسينه. ندرك أنه على الرغم من أننا نسعى لتوفير أمان معقول للمعلومات التي نعالجها ونحافظ عليها، إلا أنه لا يوجد نظام أمني يمكنه منع جميع الخروقات الأمنية المحتملة.',
      section75: '9 الأمن',
      section74:
        'نحن لا نستخدم التطبيق لطلب بيانات من الأطفال الذين تقل أعمارهم عن 18 عامًا أو تسويقهم عن قصد. إذا علم أحد الوالدين أو الوصي أن طفله قد زودنا بالمعلومات دون موافقته، فيجب عليه الاتصال بنا على info.@gpslvn.com',
      section73: '8 أطفال',
      section72:
        'عندما لا تكون لدينا حاجة تجارية مشروعة مستمرة لمعالجة معلوماتك الشخصية، فسنقوم إما بحذفها أو إخفاء هويتها، أو إذا لم يكن ذلك ممكنًا (على سبيل المثال، بسبب تخزين معلوماتك الشخصية في أرشيفات النسخ الاحتياطي)، فسنقوم بتخزينها بشكل آمن معلوماتك الشخصية وعزلها عن أي معالجة إضافية حتى يصبح الحذف ممكنًا.',
      section71:
        'سنحتفظ ببعض البيانات المقدمة من المستخدم طالما أنك تستخدم التطبيق ولفترة زمنية معقولة بعد ذلك. إذا كنت تريد منا حذف البيانات المقدمة من المستخدم التي قدمتها عبر التطبيق، فيرجى الاتصال بنا على privacy@gpslvn.com وسوف نقوم بالرد في وقت معقول. يرجى ملاحظة أن بعض أو كل البيانات المقدمة من المستخدم قد تكون مطلوبة حتى يعمل التطبيق بشكل صحيح.',
      section70: '7 سياسة الاحتفاظ بالبيانات وإدارة معلوماتك',
      section69:
        'إلغاء الاشتراك في التسويق عبر البريد الإلكتروني: يمكنك إلغاء الاشتراك من قائمة البريد الإلكتروني التسويقي لدينا في أي وقت عن طريق النقر على رابط إلغاء الاشتراك الموجود في رسائل البريد الإلكتروني التي نرسلها أو عن طريق الاتصال بنا باستخدام التفاصيل الواردة أدناه. سيتم بعد ذلك إزالتك من قائمة البريد الإلكتروني التسويقي – ومع ذلك، سنظل بحاجة إلى إرسال رسائل البريد الإلكتروني المتعلقة بالخدمة إليك والضرورية لإدارة حسابك واستخدامه. يمكنك أيضًا طلب إلغاء الاشتراك عبر البريد الإلكتروني، على privacy@gpslvn.com',
      section68:
        'ملفات تعريف الارتباط والتقنيات المشابهة: تقبل معظم متصفحات الويب ملفات تعريف الارتباط بشكل افتراضي. يمكن ضبط متصفحات الويب لإزالة ملفات تعريف الارتباط ورفض ملفات تعريف الارتباط. إذا اخترت إزالة ملفات تعريف الارتباط أو رفض ملفات تعريف الارتباط، فقد يؤثر ذلك على ميزات أو خدمات معينة في مواقعنا أو تطبيقاتنا.',
      section67:
        'بناءً على طلبك لإنهاء حسابك، سنقوم بإلغاء تنشيط حسابك ومعلوماتك أو حذفها من قواعد بياناتنا النشطة. ومع ذلك، قد يتم الاحتفاظ ببعض المعلومات في ملفاتنا لمنع الاحتيال واستكشاف المشكلات وإصلاحها والمساعدة في أي تحقيقات وإنفاذ شروط الاستخدام الخاصة بنا و / أو الامتثال للمتطلبات القانونية.',
      section66:
        'يمكنك إيقاف جميع عمليات جمع المعلومات بواسطة التطبيق بسهولة عن طريق إلغاء تثبيت التطبيق. يمكنك استخدام عمليات إلغاء التثبيت القياسية التي قد تكون متاحة كجزء من جهازك المحمول أو عبر سوق تطبيقات الهاتف المحمول أو الشبكة.',
      section65: '6 ما هي حقوقي في إلغاء الاشتراك؟',
      section64:
        'فيما يتعلق بالمعلومات الشخصية التي يتم تلقيها أو نقلها وفقًا لإطار عمل Privacy Shield، تخضع شركة GPS LVN, LLC. لسلطات الإنفاذ التنظيمية للجنة التجارة الفيدرالية الأمريكية. وفي بعض الحالات، قد يُطلب منا الكشف عن المعلومات الشخصية استجابةً للطلبات القانونية من قبل السلطات العامة، بما في ذلك تلبية متطلبات الأمن القومي أو إنفاذ القانون.',
      section63:
        'تتحمل شركة GPS LVN LLC مسؤولية معالجة المعلومات الشخصية التي تتلقاها، بموجب إطار عمل Privacy Shield، ومن ثم نقلها إلى طرف ثالث يعمل كوكيل نيابة عنها.',
      section62:
        'تتوافق شركة GPS LVN LLC وستستمر في الالتزام باتفاقية الاتحاد الأوروبي و العراق. إطار عمل درع الخصوصية على النحو المنصوص عليه من قبل وزارة التجارة العراقية فيما يتعلق بجمع واستخدام والاحتفاظ بالمعلومات الشخصية المنقولة من الاتحاد الأوروبي إلى العراق وشهد امتثالها له. وعلى هذا النحو، تلتزم شركة GPS LVN LLC بإخضاع جميع المعلومات الشخصية الواردة من الدول الأعضاء في الاتحاد الأوروبي (EU)، بالاعتماد على إطار عمل درع الخصوصية، إلى المبادئ المعمول بها في إطار العمل. لمعرفة المزيد حول إطار عمل درع الخصوصية، قم بزيارة قائمة درع الخصوصية الخاصة بوزارة التجارة العراقية.',
      section61: 'الاتحاد الأوروبي والعراق إطار عمل درع الخصوصية:',
      section60:
        'إذا كنت مقيمًا في المنطقة الاقتصادية الأوروبية، فقد لا يكون لدى هذه العراق حصرا قوانين لحماية البيانات أو قوانين أخرى شاملة مثل تلك الموجودة في بلدك. وسنتخذ دائمًا جميع التدابير اللازمة لحماية معلوماتك الشخصية وفقًا لسياسة الخصوصية والقانون المعمول به لدينا. .',
      section59:
        'تتم استضافة خوادمنا في العراق. يجب على أي شخص يصل إلى مواقعنا أو تطبيقاتنا من خارج العراق أن يدرك أنه قد يتم نقل معلوماته وتخزينها ومعالجتها بواسطتنا في منشآتنا ومن قبل الأطراف الثالثة التي قد نشارك معها معلوماتك الشخصية، في العراق، و بلدان اخرى.',
      section58:
        'يجوز لنا نقل معلوماتك وتخزينها ومعالجتها في بلدان أخرى غير دولتك.',
      section57: '5 أين يتم تخزين معلوماتك أو نقلها؟',
      section56:
        'مع موفري الخدمات الموثوقين لدينا الذين يعملون نيابة عنا، ليس لديهم استخدام مستقل للمعلومات التي نكشف عنها لهم، وقد وافقوا على الالتزام بالقواعد المنصوص عليها في بيان الخصوصية هذا.',
      section55:
        'نحن نؤمن بحسن نية أن الكشف ضروري لحماية حقوقنا، أو حماية سلامتك أو سلامة الآخرين، أو التحقيق في الاحتيال، أو الاستجابة لطلب حكومي؛',
      section54:
        'يظل GPS LVN مخصصًا لتوفير بيئة بيانات آمنة وشفافة ومتوافقة. نحن لا نبيع البيانات لأطراف ثالثة. إذا كانت هناك استفسارات أخرى، فيمكن للعملاء الرجوع إلى إرشاداتنا التفصيلية هنا (https://docs.GPS LVN.com/docs/privacy-policy) أو التواصل مع فريق الدعم لدينا.',
      section53: 'خاتمة',
      section52:
        '4 المسؤولية: تتحمل GPS LVN المسؤولية، حيث تقتصر المسؤولية على 5000 دولار لكل حالة، في حالة سوء التعامل مع البيانات أو سوء إدارتها.',
      section51:
        '3 تحديثات السياسة: سيتم إبلاغ العملاء بتغييرات السياسة عبر البريد الإلكتروني.',
      section50:
        '2 الموافقة: يمنح العملاء والمستخدمون النهائيون الموافقة عن طريق التسجيل وقبول شروطنا ودمج الحلول التي نقدمها.',
      section49:
        '1 الامتثال: نحن متوافقون مع اللائحة العامة لحماية البيانات ونتوافق مع أفضل الممارسات في خصوصية البيانات.',
      section48: 'الأحكام العامة',
      section47:
        '4 الإبلاغ عن الحوادث: يمكن للعملاء الإبلاغ عن الحالات الشاذة أو المخاوف المتعلقة بخصوصية البيانات من خلال بوابة دعم العملاء الخاصة بنا',
      section46:
        '3 إلغاء الاشتراك والتكوين المخصص: يمكن للعملاء تحديد مستوى معالجة البيانات وتكوينها عبر فريق الدعم لدينا.',
      section45:
        '2 حذف البيانات وتنزيلها: يمكن للعملاء حذف بياناتهم أو تنزيلها عبر Datahub أو واجهات برمجة التطبيقات أو من خلال التواصل مع فريق الدعم لدينا.',
      section44:
        '1 حقوق المستخدم: يتمتع العملاء بإمكانية الوصول الكامل إلى بياناتهم في كل مرحلة من مراحل دورة إدارة البيانات. ويشمل ذلك الوصول على مستوى التطبيق، واستقبال بيانات SDK، والنظام الأساسي، وواجهة برمجة التطبيقات (API)، وموصلات تصدير البيانات.',
      section43: 'الحقوق والضوابط',
      section42:
        '2 بروتوكولات خرق البيانات: في حالة حدوث خرق، يتم اتخاذ إجراءات فورية للتخفيف من الأضرار الإضافية. سيتم إبلاغ العملاء المتأثرين خلال 30 دقيقة من الكشف.',
      section41:
        '1 بروتوكولات الأمان: يتم استخدام التشفير القوي أثناء نقل البيانات، ويتم وضع تدابير أمنية محيطية للبيانات أثناء عدم النشاط.',
      section40: 'أمن البيانات',
      section39:
        '4 عمليات تكامل مع الجهات الخارجية: نشارك نقاط الطريق غير الشخصية مع خرائط Google وتقنية HERE لتحويل بيانات نظام تحديد المواقع العالمي (GPS) إلى معلومات جغرافية.',
      section38:
        'المخزن المؤقت لبيانات الأعطال: يتم تخزينه لمدة 30 يومًا بشكل افتراضي.',
      section37: 'بيانات نبضات القلب: يتم تخزينها لمدة 30 يومًا بشكل افتراضي.',
      section36:
        'الإحصائيات المجمعة: يتم تخزينها حتى تجديد ملف تعريف المستخدم.',
      section35: 'نقاط طريق الرحلة: يتم تخزينها لمدة 3 أشهر بشكل افتراضي.',
      section34: '3 الاحتفاظ بالبيانات:',
      section33:
        'يقوم مسؤولو الشركة بإدارة الوصول عبر Datahub. يتم منح الوصول إلى واجهة برمجة التطبيقات (API) للشركة من خلال بيانات اعتماد المسؤول (التي تتم إدارتها عبر Datahub). ويتم منح الوصول إلى واجهة برمجة التطبيقات (API) للمستخدمين النهائيين من خلال رموز الوصول الفردية.',
      section32:
        'يتطلب الوصول إلى البيانات رموز JWT قصيرة العمر التي تتم إدارتها بواسطة Auth0.',
      section31: '2 التحكم في الوصول:',
      section30:
        '1 تخزين البيانات: توجد بنيتنا التحتية في العراق، ويتم استضافتها عبر OVH وAWS. تتم إدارة جميع الاتصالات بشكل آمن باستخدام بروتوكول HTTPS، مع مزيد من الحماية من أدوات الأمان المضمنة في Cloudflare وAWS وWindows.',
      section29: 'تخزين البيانات وإدارتها',
      section28:
        'البيانات التي تم جمعها عبر GPS LVN SDK مملوكة لمالك المنتج (العميل).',
      section27:
        'يستخدم GPS LVN البيانات غير الشخصية والمجمعة لتحسين نماذج التعلم الآلي والتسجيل دون مشاركة أي طرف ثالث.',
      section26:
        'نقوم بالتقاط بيانات الاتصالات عن بعد، وربطها بمعرف المستخدم (UUID)، مما يضمن تخصيص البيانات.',
      section25: '2 استخدام البيانات:',
      section24:
        'تفاصيل المستخدم (اختياري): قد يقوم عملاؤنا بمشاركة تفاصيل مثل الاسم واللقب والمعرف المخصص ورقم الهاتف وعنوان البريد الإلكتروني وتاريخ الميلاد ونوع السيارة والطراز. يتم تخزين هذه التفاصيل، في حالة مشاركتها، في قاعدة بيانات منفصلة ويتم دمجها فقط مع بيانات الاتصالات عن بعد في بوابة Datahub الخاصة بنا للأنشطة الخاصة بالعميل.',
      section23:
        'بيانات أذونات الهاتف الذكي: الوصول إلى نظام تحديد المواقع العالمي (GPS)، وأجهزة استشعار اللياقة البدنية، وبيانات الهاتف المحمول، وحالة WiFi، ووضع الطاقة المنخفضة، ودقة نظام تحديد المواقع (GPS) المنخفضة.',
      section22:
        'بيانات حالة الهاتف: مستوى الشحن، وحدث توصيل الهاتف الذكي بالشاحن، والاتصال بشبكة WiFi (بدون تفاصيل WiFi محددة).',
      section21:
        'بيانات الاتصالات عن بعد: تتضمن بيانات نظام تحديد المواقع العالمي (GPS) ومقياس التسارع والجيروسكوب.',
      section20: '1 أنواع البيانات التي تم جمعها:',
      section19: 'جمع البيانات واستخدامها',
      section18:
        'في GPS LVN، نعطي الأولوية لخصوصية بيانات عملائنا ومستخدميهم النهائيين. باعتبارنا شركة رائدة في مجال توفير تكنولوجيا الاتصالات عن بعد عبر الهاتف المحمول، فإننا ملتزمون بمعالجة البيانات بشكل شفاف وآمن. وتسلط هذه السياسة الضوء على ممارساتنا المتعلقة بالبيانات والضوابط المطبقة لدينا.',
      section17:
        'اندماج الشركة أو بيعها. يجوز لنا مشاركة معلوماتك أو نقلها فيما يتعلق أو أثناء المفاوضات بشأن أي اندماج أو بيع أصول الشركة أو تمويل أو الاستحواذ على كل أو جزء من أعمالنا إلى شركة أو كيان تجاري آخر.',
      section16:
        'وفقًا لما يقتضيه القانون، مثل الامتثال لاستدعاء أو إجراء قانوني مماثل.',
      section15:
        '4 يجوز لنا الكشف عن المعلومات التي يقدمها المستخدم والتي يتم جمعها تلقائيًا:',
      section14: 'لن نشارك معلوماتك أبدًا مع أطراف ثالثة.',
      section13:
        '3 هل ترى الأطراف الثالثة و/أو يمكنها الوصول إلى المعلومات التي تم الحصول عليها عن طريق التطبيق؟',
      section12:
        'دفع الإخطارات. قد نطلب إرسال إشعارات الدفع إليك لإرسال تذكيرات وكذلك تقديم خدمات أفضل لدعم العملاء. إذا كنت ترغب في إلغاء الاشتراك في تلقي الإشعارات الفورية، فيمكنك إيقاف تشغيلها في إعدادات جهازك.',
      section11:
        'البيانات الموجودة على الجهاز المحمول. قد نقوم تلقائيًا بجمع معلومات الجهاز (مثل معرف جهازك المحمول والطراز والشركة المصنعة) ونظام التشغيل ومعلومات الإصدار وعنوان IP.',
      section10:
        'الوصول إلى الجهاز المحمول. قد نطلب الوصول أو الإذن لميزات معينة من جهازك المحمول، بما في ذلك كاميرا جهازك المحمول والتذكيرات وأجهزة الاستشعار والميزات الأخرى. إذا كنت ترغب في تغيير وصولنا أو أذوناتنا، فيمكنك القيام بذلك في إعدادات جهازك.',
      section9:
        'معلومات الموقع الجغرافي. قد نطلب الوصول أو الإذن وجمع المعلومات المستندة إلى الموقع من جهازك المحمول، إما بشكل مستمر أو أثناء استخدامك لتطبيق الهاتف المحمول الخاص بنا، لتوفير خدمات تعتمد على الموقع. إذا كنت ترغب في تغيير وصولنا أو أذوناتنا، فيمكنك القيام بذلك في إعدادات جهازك.',
      section8:
        'بالإضافة إلى ذلك، قد يقوم التطبيق بجمع معلومات معينة تلقائيًا، بما في ذلك، على سبيل المثال لا الحصر، نوع الجهاز المحمول الذي تستخدمه، ومعرف الجهاز الفريد لجهازك المحمول، وعنوان IP الخاص بجهازك المحمول، ونظام تشغيل هاتفك المحمول، ونوع الهاتف المحمول. متصفحات الإنترنت التي تستخدمها، ومعلومات حول طريقة استخدامك للتطبيق. قد نقوم بجمع معلومات تتعلق بموقعك الجغرافي وجهازك المحمول وإشعاراتك عند استخدام تطبيقاتنا. إذا كنت تستخدم تطبيقاتنا، فقد نقوم أيضًا بجمع المعلومات التالية:',
      section7: '2 المعلومات التي يتم جمعها تلقائيا',
      section6:
        'يحصل التطبيق على المعلومات التي تقدمها عند تنزيل التطبيق من iTunes ومتجر Google Play. يجب إنشاء كل مستخدم بواسطة المدير أو مسؤول الأعمال. قد لا تتمكن من استخدام بعض الميزات التي يقدمها التطبيق إلا إذا كنت مسجل معنا. عندما تقوم بالتسجيل معنا وتستخدم التطبيق، فإنك تقدم بشكل عام (أ) اسمك وعنوان بريدك الإلكتروني واسم المستخدم وكلمة المرور ومعلومات التسجيل الأخرى؛ (ب) المعلومات المتعلقة بالمعاملة، مثل وقت إجراء عمليات شراء أو الرد على أي عروض أو تنزيل أو استخدام التطبيقات من جانبنا؛ (ج) المعلومات التي تقدمها لنا عند الاتصال بنا للحصول على المساعدة و؛ (د) المعلومات التي تدخلها في نظامنا عند استخدام التطبيق، مثل معلومات الاتصال ومعلومات إدارة المشروع. يجوز لنا أيضًا استخدام المعلومات التي قدمتها لنا للاتصال بك من وقت لآخر لتزويدك بالمعلومات المهمة والإشعارات المطلوبة والعروض الترويجية التسويقية.',
      section5: '1 المعلومات المقدمة من قبل المستخدم',
      section4:
        'سيحصل التطبيق على التاريخ والوقت الحالي وموقع GPS في كل مرة يقوم فيها المستخدم بتسجيل الدخول/الخروج، أثناء وجوده على مدار الساعة أو في مواقع الجلسة إذا قام المستخدم بالاشتراك. يتم بعد ذلك نقل هذه المعلومات إلى خوادمنا الآمنة بحيث يمكن للشركة أو يمكن للمدير تشغيل تقرير بحيث يمكن دفع رواتب كل موظف بدقة وفي الوقت المناسب.',
      section3: 'ما هي المعلومات التي يحصل عليها التطبيق وكيف يتم استخدامها؟',
      section2: `محدث: ${moment('2023-11-9').format('LL')}
                      تحكم سياسة الخصوصية هذه استخدامك لتطبيق البرنامج GPS LVN ("التطبيق") للهاتف المحمول
                       الأجهزة التي تم إنشاؤها بواسطة GPS LVN. التطبيق هو الحل على مدار الساعة للشركات أو
                       المديرين.`,
      section1: 'سياسة الخصوصية',
      'Recorded mileage with parameters of driving':
        'الأميال المسجلة مع معلمات القيادة',
      'Realtime Driver rankings based on driving parameters':
        'تصنيفات سائق الوقت الحقيقي على أساس على معلمات القيادة',
      'Fully configuring model to identify inefficient drivers':
        'نموذج التكوين الكامل لتحديد برامج التشغيل غير الفعالة',
      'Driving parameters and detailed analysis of a vehicle utilization':
        'معلمات القيادة والتحليل التفصيلي لاستخدام السيارة',
      'Fully configuring rewarding points based on performance':
        'تكوين نقاط المكافأة بشكل كامل على أساس الأداء',
      'Export of high-frequiency(up to100Hz) crash data buffer':
        'تصدير المخزن المؤقت لبيانات الأعطال عالي التردد (حتى 100 هرتز).',
      'With this module, you can perform your purchase activities and get a complete list of your purchased items. Also, you can add parts usage and get a detailed list of it. These following aspects are integrated with this module.':
        'باستخدام هذه الوحدة، يمكنك تنفيذ أنشطة الشراء الخاصة بك والحصول على قائمة كاملة بالعناصر التي اشتريتها. يمكنك أيضًا إضافة استخدام الأجزاء والحصول على قائمة مفصلة بها. تم دمج هذه الجوانب التالية مع هذه الوحدة.',
      'Add purchase': 'إضافة الشراء',
      'Add parts usage': 'إضافة استخدام أجزاء',
      'Manage purchase': 'إدارة الشراء',
      'Manage parts': 'إدارة القطع',
      'Purchase & Usage Management': 'إدارة الشراء والاستخدام',
      'Manage expense': 'إدارة المصروفات',
      // eslint-disable-next-line no-dupe-keys
      'Manage parts': 'إدارة القطع',
      'Category & Location': 'الفئة والموقع',
      'Stock management': 'إدارة المخزون',
      'Cost & Inventory Management': 'إدارة التكلفة والمخزون',
      'The GPS LVN software also provides another essential module called cost & inventory management system. Using this module, you can add new expenses and get a list of all expenses. Here, you will get a search filtering system that can save your time and effort. Also, this module can undertake the following functions.':
        'يوفر برنامج نظام تحديد المواقع لڤن أيضًا وحدة أساسية أخرى تسمى نظام إدارة التكلفة والمخزون. باستخدام هذه الوحدة، يمكنك إضافة نفقات جديدة والحصول على قائمة بجميع النفقات. هنا، سوف تحصل على نظام تصفية البحث الذي يمكن أن يوفر وقتك وجهدك. كما يمكن لهذه الوحدة القيام بالوظائف التالية.',
      'Vehicle Management & Requisition': 'إدارة المركبات وطلباتها',
      'Pick & Drop Requisition': 'طلب الالتقاط والتسليم',
      'Manage Legal Document': 'إدارة المستندات القانونية',
      'Vehicle Route Details': 'تفاصيل مسار السيارة',
      'Manage Vehicle & Requisition': 'إدارة المركبات والطلب',
      'Insurance Details': 'تفاصيل التأمين',
      'Reminder Details': 'تفاصيل التذكير',
      // eslint-disable-next-line no-dupe-keys
      'Manage Approval Authority': 'إدارة سلطة الموافقة',
      // eslint-disable-next-line no-dupe-keys
      'Vehicle Management & Requisition': 'إدارة المركبات وطلباتها',
      'Vehicles are the main asset for any fleet management business. So, you need a computerized system that can be able to handle your all vehicles and requisition activities automatically. The Vehicle Management System (GPS LVN) software will be the best decision in that circumstance because this module is incorporated with the following sections.':
        'المركبات هي الأصل الرئيسي لأي أعمال إدارة الأسطول. لذلك، أنت بحاجة إلى نظام محوسب يمكنه التعامل مع جميع المركبات وأنشطة الطلبات الخاصة بك تلقائيًا. سيكون برنامج نظام إدارة المركبات (نظام تحديد المواقع لڤن) هو القرار الأفضل في هذه الظروف لأن هذه الوحدة مدمجة في الأقسام التالية.',
      'Vehicle Management System Software (GPS LVN) is the most modern system to manage large vehicles and fleets.This software will manage every single piece of data of your all vehicles.':
        'يعد برنامج نظام إدارة المركبات (نظام تحديد المواقع لڤن) أحدث نظام لإدارة المركبات والأساطيل الكبيرة. سيقوم هذا البرنامج بإدارة كل جزء من البيانات الخاصة بجميع المركبات الخاصة بك.',
      'Vehicle Management System (GPS LVN): A One Stop Fleet Management Solution':
        'نظام إدارة المركبات (نظام تحديد المواقع لڤن): حل متكامل لإدارة الأسطول',
      'Be Tactical, Chose Automation, Ensure Profitability':
        'كن تكتيكيًا، واختر الأتمتة، واضمن الربحية',
      'This fleet management system provides an ordained solution for the problems, generally a transport manager faced. Have an attentive tour from top to bottom & get a complete idea about a vehicle management system.':
        'يوفر نظام إدارة الأسطول هذا حلاً محددًا للمشكلات التي يواجهها مدير النقل عمومًا. قم بجولة يقظة من الأعلى إلى الأسفل واحصل على فكرة كاملة عن نظام إدارة المركبات.',
      'Vehicle Management System': 'نظام إدارة المركبات',
      'Bdtask has designed the most modern vehicle management software to manage large vehicles and fleets.This system processes and analyzes every single data of all vehicles.It is an online based software which isreally helpful for Bus, Car, Taxi, Cover Van & Truck operators to manage everyday workflow and performance.':
        'قامت شركة Bdtask بتصميم أحدث برامج إدارة المركبات لإدارة المركبات والأساطيل الكبيرة. يقوم هذا النظام بمعالجة وتحليل كل البيانات الخاصة بجميع المركبات. إنه برنامج قائم على الإنترنت وهو مفيد حقًا لمشغلي الحافلات والسيارات وسيارات الأجرة والشاحنات المغطاة والشاحنات لإدارة سير العمل والأداء اليومي.',
      'Vehicle management system is an automated software for the transportation industry or an organizationwhich owns a large number of vehicle & managing fleets.It is an organized code which provides managementfunctions that permit corporations to get rid of or minimize the risks related to vehicles.It helps abusiness to boost up some outstanding criteria including the daily management of vehicles, fuel and servicesmanagement, cost & inventory management etc.':
        'نظام إدارة المركبات هو برنامج آلي لصناعة النقل أو المؤسسة التي تمتلك عددًا كبيرًا من المركبات وإدارة الأساطيل. إنه رمز منظم يوفر وظائف إدارية تسمح للشركات بالتخلص من المخاطر المتعلقة بالمركبات أو تقليلها. فهو يساعد الأعمال التجارية على تعزيز بعض المعايير المتميزة بما في ذلك الإدارة اليومية للمركبات وإدارة الوقود والخدمات وإدارة التكلفة والمخزون وما إلى ذلك.',
      'To get income and expenses reports of all vehicles.':
        'الحصول على تقارير الدخل والمصروفات لجميع المركبات.',
      'To manage the best reporting system': 'إدارة أفضل نظام تقارير.',
      'To get vehicle wise parts use reports.':
        'الحصول على تقارير استخدام قطع السيارات.',
      'To trace all over regular and irregular expenses.':
        'تتبع جميع المصروفات العادية وغير العادية.',
      'To find out driver wise performance based information.':
        'معرفة أداء السائقين.',
      'To apply an organized inventory management system with regular income and expenses.':
        'تطبيق نظام إدارة المخزون المنظم مع الدخل والمصروفات العادية.',
      'To ensure the best HRM such as: Drivers, Helpers, Other employees at a glance Report.':
        'ضمان أفضل إدارة الموارد البشرية مثل: السائقين والمساعدين والموظفين الآخرين.',
      'To have an automatic stock register.': 'امتلاك سجل المخزون التلقائي.',
      'To set an alert center. It will inform about all vehicle taxes, token, insurance, road permit, expiration date.':
        'إعداد مركز تنبيهات للإبلاغ عن جميع الضرائب والعلامات والتأمين وتصاريح الطرق وتواريخ الانتهاء للمركبات.',
      'To get an easy traceable stock and product system.':
        'الحصول على نظام مخزون ومنتجات سهل التتبع.',
      'More than 47 reports based on employee, driver, vehicle, renewal, purchase and expense.':
        'أكثر من 47 تقريراً استنادًا إلى الموظفين والسائقين والمركبات والتجديد والشراء والمصروفات.',
      'Expense reports are particular and time frame based.':
        'تقارير المصروفات محددة وتعتمد على الإطار الزمني.',
      'Custom reports are also available based on user request.':
        'تتوفر أيضًا تقارير مخصصة استنادًا إلى طلب المستخدم.',
      'Only hard work is not the key to good luck. If it were, then the donkey would have been the king of thejungle but Lion.So, to be successful, you have to be tactful. & only an intelligent transportation businessowner chose an automation system like vehicle management system to get following benefits:':
        'العمل الجاد فقط ليس مفتاح الحظ السعيد. ولو كان كذلك لكان الحمار ملك الغابة وليس الأسد. لذا، لكي تنجح، عليك أن تكون لبقًا. وفقط صاحب أعمال النقل الذكي اختار نظامًا آليًا مثل نظام إدارة المركبات للحصول على المزايا التالية:',
      'Why Does an Intelligent Fleet Management Agency Owner Use a Vehicle Management System?':
        'لماذا يستخدم مالك وكالة إدارة الأسطول الذكية نظام إدارة المركبات؟',
      'PHP and Laravel Framework': 'لغة PHP و اطارعمل لارفل',
      'Vehicle Tracking System': 'نظام تتبع المركبات',
      'Usability & Accessibility': 'سهولة الاستخدام وإمكانية الوصول',
      'Allows Customization': 'يسمح بالتخصيص',
      'Fleet Alert System': 'نظام تنبيه الأسطول',
      'Route Fixation': 'تثبيت الطريق',
      'Service Management': 'إدارة الخدمات',
      'Fuel Management': 'إدارة الوقود',
      'RTA Supported': 'هيئة الطرق والمواصلات المدعومة',
      'Notification System': 'نظام تنبيهات',
      'Fully Secured': 'مؤمن بالكامل',
      'Multiple Language': 'لغات متعددة',
      'Refueling System': 'نظام التزود بالوقود',
      'MySQL Database': 'MySQL قاعدة بيانات',
      '100% Responsive': 'شاشة متوافقة مع جميع الاجهزة',
      'Performance Evaluation': 'تقييم الأداء',
      'Which Features Make The GPS LVN System Best ?':
        'ما هي الميزات التي تجعل نظام تحديد المواقع لڤن هو الأفضل؟',
      on_requisition_vehicles: 'على مركبات الطلب',
      on_maintenance_vehicles: 'على مركبات الصيانة',
      reports_of_reminder: 'تقارير التذكير',
      available_vehicles: 'المركبات المتاحة',
      reports_of_each_days_requisition: 'تقارير كل طلب يومي',
      other_activities_like_stock_in__stock_out:
        'أنشطة أخرى مثل دخول الأسهم وخروجها',

      add_employee: 'إضافة موظف',
      manage_employee: 'إدارة الموظفين',
      position__department: 'المنصب والقسم',
      manage_driver: 'إدارة السائقين',
      manage_license: 'إدارة الترخيص',
      driver_performance: 'أداء السائق',
      manage_requisition_approval: 'إدارة موافقة الطلب'
    })
  })
}
