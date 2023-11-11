import moment from 'moment'
moment.locale('en')

export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        title: 'A simple example',
        subtitle: "It's a blank-page. Start to build your'e page from here.",
        error_with_status: 'An error occurred on server',
        '404': 'This page could not be found.',
        '404_subtitle':
          'You can either stay and chill here, or go back to the beginning.',
        back: 'back to home',
        error_without_status: 'An error occurred on the server',
        contact_title: 'Free Project Quote',
        contact_title2: 'Say Hello to Us',
        contact_subtitle:
          'Do you have any questions? Are you ready to reduce cost and create new revenue? Or you simply want to say hi? Drop us a message.',
        form_name: 'What is your name? *',
        form_email: 'What is your email? *',
        form_phone: 'What is your phone number?',
        form_company: 'What is your company?',
        form_message: 'Write your message here',
        form_terms: 'I have read and accept the Terms of',
        form_privacy: 'Service & Privacy Policy *',
        form_send: 'Send Message',
        login: 'Login',
        login_create: 'Create new account',
        login_or: 'Or login with email',
        login_email: 'Email',
        login_password: 'Password',
        login_remember: 'Remember',
        login_forgot: 'Forgot Password',
        continue: 'Continue',
        auth_desc:
          'A platform with efficient integration of many features and so much more',
        login_title: 'Welcome back',
        login_subtitle: 'Please login to continue',
        register: 'register',
        register_already: 'Already have account?',
        register_or: 'Or register with email',
        register_name: 'Name? *',
        register_email: 'Email? *',
        register_password: 'Password',
        register_confirm: 'Confirm Password',
        register_title: 'Nice to meet you :)',
        register_subtitle: 'Just register to join with us',
        accept: 'Accept',
        header_language: 'language',
        header_theme: 'theme mode',
        header_dark: 'dark',
        header_light: 'light',
        header_search: 'Search',
        footer_quick_links: 'Quick Links',
        btn_read_more: 'read more',
        btn_detail: 'see detail',
        btn_submit: 'submit',
        btn_seeall: 'see all',
        btn_next: 'next',
        btn_prev: 'prev',
        btn_contact: 'contact us',
        btn_get: 'get started',
        btn_join: 'join now!',
        blog_subscribe: 'Subscribe',
        blog_subscribe_desc: 'Subscribe our newsletter',
        blog_about: 'About Us',
        blog_born: 'Born',
        blog_phone: 'Phone',
        blog_address: 'Address',
        blog_post: 'Latest Post',
        blog_comment: 'Latest Comment',
        blog_archived: 'Archived',
        blog_album: 'Album Post',
        blog_share: 'Share to social media',
        blog_write: 'Write Comments',
        about_team: 'Team Member',
        about_gallery: 'Gallery',
        about_ready: 'Ready to get started ?',
        pricing_title: 'pricing and plan',
        pricing_desc:
          'The best value designed for your workplace, starting at just $24/user/month.',
        pricing_free: 'start for free',
        pricing_buy: 'buy now',
        faq_title: 'Frequently Answers and Questions',
        faq_desc:
          'Have a question? Check out our frequently asked questions to find your answer.',
        faq_topic: 'Topic Navigation',
        faq_related: 'Related TOpic',
        faq_luck: 'Still no luck? We can help!',
        faq_luck_desc:
          'Contact us and we’ll get back to you as soon as possible.',
        faq_luck_btn: 'submit a request',
        list_title: 'Milion of resources for everyone',
        list_subtitle:
          'Browse over 300 million stock items. Quickly find authentic and premium items.',
        list_search: "I'm looking for...",
        list_filter: 'All categories',
        list_help: 'Still couldn’t find? We can help!',
        list_cart: 'Add to cart',
        list_whislist: 'Add to wishlist',
        list_desc: 'Description',
        list_related: 'Related Products',
        list_comments: 'comments',
        list_report: 'report this item',
        list_need: 'need help',
        list_opt: 'other option',
        util_maintenance: 'Under Maintenance',
        util_maintenance_dec:
          'Our website is under maintenance. We will be back shortly.',
        util_soon: 'Coming Soon',
        util_soon_desc: 'Will come with performance in design',
        util_notif: 'notify me',
        en: 'English',
        de: 'Deutsch',
        zh: '简体中文',
        pt: '󠁥󠁮󠁧󠁿Português',
        id: '󠁥󠁮󠁧󠁿Bahasa Indonesia',
        ar: '󠁥󠁮󠁧󠁿العربيّة',
        notif_msg:
          '🍪 We use cookies for better user experience. By continuing to browse this site, you agree to the use of cookies.',
        header_language: 'language',
        header_theme: 'theme mode',
        header_dark: 'dark',
        header_light: 'light',
        header_sample_page: 'inner Page',
        header_about: 'about',
        header_team: 'team and culture',
        header_blog: 'blog home',
        'header_blog detail': 'blog detail',
        header_login: 'login',
        header_register: 'register',
        header_contact: 'contact',
        'header_contact map': 'contact with map',
        header_card: 'card collection',
        header_product: 'product with filter',
        'header_product detail': 'detail product',
        header_pricing: 'pricing and faq',
        header_faq: 'frequently answer & questions',
        header_maintenance: 'maintenance',
        'header_coming soon': 'coming soon',
        header_error: 'error not found',
        footer_company: 'company',
        footer_team: 'team',
        footer_history: 'history',
        footer_contact: 'contact us',
        footer_locations: 'locations',
        footer_resources: 'Products',
        footer_resources_name: 'resources name',
        footer_resources_another: 'resources another',
        footer_resources_final: 'resources final',
        footer_legal: 'legal',
        footer_privacy: 'Privacy policy',
        footer_terms: 'Terms of use',
        footer_terms: 'Terms of use',
        footer_link: 'link',
        footer_news: 'news'
      },
      saas2: {
        caption_mileage_tracker: 'mileage tracker',
        caption_leaderboard: 'leaderboard',
        caption_eco_driving: 'eco driving',
        caption_driving_details: 'driving details',
        caption_drive_coins: 'drive coins',
        caption_export_data: 'export data',
        header_applications: 'applications',
        fomtTitle2: 'Employee Management System',
        formdetail2:
          'In this VMS software, you will get a complete employee management system that can aid you to manage the entire employee related activities easily and efficiently. It will save your time and perform the employee related activities in an organized way.',
        firstFormdetail:
          'With this module, you can get an overall synopsis of your system. This module can be able to represent the expense summary and maintenance cost through pie-chart and line chart. Moreover, these graphical representations help to enhance the users experience. This module can provide the following aspects as well.',
        firFomtTitle: 'Some Exclusive Module of Vehicle Management Software',
        'GPS devices online': 'GPS devices online',
        online_servers: 'Local Active Server ',
        'slid3-title': 'Fleet management made easy',
        'slid3-subtitle':
          "You won't need any specialized tracking system for company vehicles - with GPSLVN smart app, you can keep a close eye on your fleet in a few simple clicks.Manage everything through our user- friendly administrative system - fuel log entries, costs and many other features necessary for the management of your company's vehicles.",
        'Data privacy and security': 'Data privacy and security',
        'fleet management': 'Fleet Management',
        'slid2-title':
          'Fleet Management and Scalability Reliability in Challenging Environments in iraq State institutions',
        'slid2-subtitle1': 'Integration with Local Infrastructure:',
        'slid2-subtitle':
          'LVN systems are designed to be low-maintenance, which can be an advantage in areas where infrastructure and support for fleet management technology may be limited.',
        'Tracking Server': 'Tracking Server',
        'Customization and Scalability': 'Customization and Scalability',
        'Personal tracking': 'Personal tracking .',
        'slid1-title':
          'Why GPS LVN Mobile Telematics is the Better Choice for Fleet Management in iraq',
        'slid1-subtitle':
          'Local Support and Expertise Choosing a GPS LVN mobile telematics provider with local presence and support in Iraq can be valuable for technical assistance, maintenance, and troubleshooting',
        'Privacy policy': 'Privacy policy',
        'Terms of use': 'Terms of use',
        contact: 'contact',
        Pricing: 'Pricing',
        'Postman collection': 'Postman collection',
        Support: 'Support',
        Blog: 'Blog',
        'safe-driving': 'Safe driving',
        'eco-driving': 'Eco driving',
        'fleet-tracker': 'Fleet tracker',
        insights: 'Insights',
        'in-vehicle-data': 'In Vehicle data',
        'driver-engagements': 'Driver Engagements',
        // eslint-disable-next-line no-dupe-keys
        'driver-engagements': 'Driver engagements',
        details:
          'The national operator of the national platform for tracking units in Iraq by the Ministry of Communications and licensed by the Communications and Media Commission .',
        header_feature: 'feature',
        header_testimonials: 'testimonials',
        header_blog: 'blog',
        header_integration: 'integration',
        banner_title: 'Amazing company deserve',
        banner_titlestrong: 'amazing software',
        banner_subtitle:
          'Millions of happy users work better with our integrated Apps.',
        banner_watchvideo: 'Watch Video',
        getstarted: 'Get Started',
        counter_month: 'Month',
        counter_free: 'Free Trial',
        counter_users: 'Active Users',
        counter_providers: 'Providers',
        feature_title1: 'Fleet Management System',
        feature_titlestrong1: 'in one dashboard',
        feature_desc1:
          'Transportation trade is always dependable on the capability to manage it’s scheduled fleet.We have designed every fleet management steps with our system.Record your vehicle details, schedule, time, availability, seat no.Manage every single ticket booking history related to your fleet Track your agent & counter activities 24/7 Adjust your agent activities & make your fleet hassle free',
        see_detail: 'See Detail',
        feature_title2: 'Everything you need is a',
        feature_titlestrong2: 'unique value proposition',
        feature_desc2:
          'With strong technical foundations, has allowed us to leverage business experts to build hundreds of improvements.',
        feature_title3: 'Accelerating to Intelligent',
        feature_titlestrong3: 'Enterprise',
        feature_desc3:
          'We empowers your marketing, sales and services teams to collaborate across the entire customer lifecycle for more meaningful, memorable experiences.',
        testi_title: 'What Our Customers',
        testi_titlestrong: 'Testimonial',
        pricing_title: 'Pricing & Plan',
        pricing_subtitle:
          'The best value designed for your workplace, starting at just $24/user/month.',
        faq_subtitle:
          'Have a question? Check out our frequently asked questions to find your answer.',
        caption_news: 'news',
        caption_event: 'event',
        news_readmore: 'read more',
        footer_waiting: 'What are you waiting for?'
      },
      section82:
        'If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at info@gpslvn.com.',
      section81: '12 CONTACT US',
      section80:
        'By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. “Processing,” means using cookies on a computer/ hand held device or using or touching information in any way, including, but not limited to, collecting,     storing, deleting, using, combining and       disclosing information, all of which activities will take place in the United States.If you reside outside the United States your information will be transferred, processed and stored there under United States privacy standards.',
      section79: '11 YOUR CONSENT',
      section78:
        'This Privacy Policy may be updated from time to time for any reason. We will notify each paid subscriber of any changes to our Privacy Policy at the email address that was provided during the purchasing process.You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.',
      section77: '10 CHANGES',
      section76:
        'We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain.For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application.Please be aware that, although we endeavor to provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.',
      section75: '9 SECURITY',
      section74:
        'We do not use the Application to knowingly solicit data from or market to children under the age of 18. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at info@gpslvn.com',
      section73: '8 CHILDREN',
      section72:
        ' When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible(for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.',
      section71:
        ' We will retain some User Provided data for as long as you use the Application and for a reasonable time thereafter.If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at info@timeero.com and we will respond in a reasonable time.Please note that some or all of the User Provided Data may be required in order for the Application to function properly.',
      section70: '7 DATA RETENTION POLICY, MANAGING YOUR INFORMATION',
      section69:
        'Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below.You will then be removed from the marketing email list – however, we will still need to send you service- related emails that are necessary for the administration and use of your account.You can also request to opt - out via email, at info @gpslvn.com',
      section68:
        'Cookies and similar technologies: Most Web browsers by default accept cookies. Web browsers can be set to remove cookies and to reject cookies.If you choose to remove cookies or reject cookies, this could affect certain features or services of our Sites or Apps.',
      section67:
        'Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.However, some information may be retained in our files to prevent fraud,troubleshoot problems, assist with any investigations, enforce our Terms of Use and/ or comply with legal requirements.',
      section66:
        'You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.',
      section65: '6 WHAT ARE MY OPT-OUT RIGHTS?',
      section64:
        'With respect to personal information received or transferred pursuant to the Privacy Shield Framework, GPS LVN, LLC.is subject to the regulatory enforcement powers of the U.S.FTC.In certain situations, we may be required to disclose personal information in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.',
      section63:
        'GPS LVN LLC is responsible for the processing of personal information it receives, under the Privacy Shield Framework, and subsequently transfers to a third party acting as an agent on its behalf.',
      section62:
        'GPS LVN LLC complies and will continue to comply with the EU-U.S. Privacy Shield Framework as set forth by the U.S.Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union to the United States and has certified its compliance with it.As such, GPS LVN LLC is committed to subjecting all personal information received from European Union(EU) member countries, in reliance on the Privacy Shield Framework, to the Framework’s applicable Principles.To learn more about the Privacy Shield Framework, visit the U.S.Department of Commerce’s Privacy Shield List.',
      section61: 'EU-U.S. Privacy Shield Framework:',
      section60:
        'If you are a resident in the European Economic Area, then these countries may not have data protectionor other laws as comprehensive as those in your country.We will always take all necessary measures to protect your personal information in accordance with our privacy policy and applicable law.',
      section59:
        'Our servers are hosted in United States. Anyone accessing our sites or Applications from outside United States, should be aware that their information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information, in United States, and other countries.',
      section58:
        'We may transfer, store, and process your information in countries other than your own.',
      section57: '5 WHERE IS YOUR INFORMATION STORED OR TRANSFERRED?',
      section56:
        'With our trusted services providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.',
      section55:
        'We believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request; ',
      section54:
        "GPS LVN remains dedicated to providing a secure, transparent, and compliant data environment. We don't sell data to third parties.If there are further queries, clients can refer to our detailed guidelines here(https://docs.GPS LVN.com/docs/privacy-policy) or reach out to our support team.",
      section53: 'Conclusion',
      section52:
        '4 Liability: GPS LVN assumes responsibility, with liability limited to $5000 per case, in the event of data mishandling or mismanagement.',
      section51:
        '3 Policy Updates: Clients will be informed about policy changes via email.',
      section50:
        '2 Consent: Clients and end-users grant consent by registering, accepting our terms, and integrating our solution.',
      section49:
        '1 Compliance: We are GDPR-compliant and align with best practices in data privacy.',
      section48: 'General Provisions',
      section47:
        '4 Incident Reporting: Clients can report anomalies or concerns related to data privacy through our customer support portal',
      section46:
        '3 Opt-Out & Custom Configuration: Clients can determine the level of data processing and can configure it via our support team.',
      section45:
        '2 Data Deletion & Download: Clients can delete or download their data via Datahub, APIs, or by reaching out to our support team.',
      section44:
        '1 User Rights: Clients have full access to their data at every stage of the data management cycle.This includes access at the application level, SDK data reception, platform, API, and data-export connectors.',
      section43: 'Rights and Controls',
      section42:
        '2 Data Breach Protocols: In case of a breach, immediate actions are taken to mitigate further damages. Affected clients will be informed within 30 minutes of detection.',
      section41:
        '1 Security Protocols: Robust encryption is used during data transfer, and perimeter security measures are in place for data at rest.',
      section40: 'Data Security',
      section39:
        '4 Third-Party Integrations: We share depersonalized waypoints with Google Maps and HERE Technology to transform GPS data into geo- information.',
      section38: 'Crash Data Buffer: Stored for 30 days by default.',
      section37: 'Heartbeats Data: Stored for 30 days by default.',
      section36:
        'Aggregated Statistics: Stored until the user profile renewal.',
      section35: 'Trip Waypoints: Stored for 3 months by default.',
      section34: '3 Data Retention:',
      section33:
        'Company administrators manage access via Datahub. API access for a company is granted through admin credentials(managed via Datahub).API access for end - users is granted through individual access tokens.',
      section32:
        'Data access requires short-lived JWT tokens managed by Auth0.',
      section31: '2 Access Control:',
      section30:
        '1 Data Storage: Our infrastructure resides in France, hosted across OVH and AWS. All communication issecurely managed using HTTPS protocol, with further protection from Cloudflare, AWS, and Windows in-built security tools.',
      section29: 'Data Storage and Management',
      section28:
        'Data collected via GPS LVN SDK belongs to a product owner (Customer).',
      section27:
        'GPS LVN uses depersonalized and aggregated data to refine ML and scoring models without any third- party sharing.',
      section26:
        'We capture telematics data, linking it to a user ID (UUID), ensuring data personalization.',
      section25: '2 Use of Data:',
      section24:
        'User Details (Optional): Our clients may share details like name, surname, custom ID, phone number,email address, date of birth, car make, and model.These details, if shared, are stored in a separate database and only combined with telematics data in our Datahub portal for client - specific activities.',
      section23:
        'Smartphone Permissions Data: Access to GPS, fitness sensors, mobile data, WiFi status, low power mode, and low GPS accuracy.',
      section22:
        'Phone Status Data: Charging level, event of connecting smartphone to a charger, and connecting to WiFi(without specific WiFi details).',
      section21:
        'Telematics Data: This includes GPS, accelerometer, and gyroscope data.',
      section20: '1 Types of Data Collected:',
      section19: 'Data Collection and Use',
      section18:
        'At GPS LVN, we prioritize the data privacy of our clients and their end-users. As a leading provider of mobile telematics technology, we are committed to transparent and secure data handling.This policy sheds light on our data practices and the controls we have in place.',
      section17:
        'Merger or sale of company. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company or business entity.',
      section16:
        'As required by law, such as to comply with a subpoena, or similar legal process.',
      section15:
        '4 WE MAY DISCLOSE USER PROVIDED AND AUTOMATICALLY COLLECTED INFORMATION:',
      section14: 'We will never share your information with third parties.',
      section13:
        '3 Do third parties see and/or have access to information obtained by the Application?',
      section12:
        'Push notifications. We may request to send you push notifications to send reminders and also offer you better customer support services.If you wish to opt- out from receiving push notifications, you may turn them off in your device’s settings.',
      section11:
        'Data on mobile device. We may automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and IP address.',
      section10:
        'Access to mobile device. We may request access or permission to certain features from your mobile device, including your mobile device’s camera, reminders, sensors, and other features.If you wish to change our access or permissions, you may do so in your device’s settings.',
      section9:
        'Geo-Location Information. We may request access or permission to and gather location-based information from your mobile device, either continuously or while you are using our mobile application, to provide location- based services.If you wish to change our access or permissions, you may do so in yourdevice’s settings.',
      section8:
        'In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application. We may collect information regarding your geolocation, mobile device, push notifications, when you use our apps. If you use our Applications, we may also collect the following information: ',
      section7: '2 AUTOMATICALLY COLLECTED INFORMATION',
      section6:
        'The Application obtains the information you provide when you download the Application from iTunes & the Google Play Store.Each user must be created by the manager or business administrator.You may not be able to use some of the features offered by the Application unless you are registered with us. When you are registered with us and use the Application, you generally provide(a) your name, email address, user name, password and other registration information; (b) transaction - related information, such as when you make purchases, respond to any offers, or download or use applications from us; (c) information you provide us when you contact us for help and; (d) information you enter into our system when using the Application, such as contact information and project management information. We may also use the information you provided us to contact you from time to time to provide you with important information, required notices and marketing promotions.',
      section5: '1 USER PROVIDED INFORMATION',
      section4:
        'The Application will obtain the current date, time and GPS location each time a user clocks in/out, while on the clock or clock in session locations if user has opted in.This information is then transmitted to our secure servers so that the business or manager can run a report so that each employee can be paid accurately and timely.',
      section3:
        'What information does the Application obtain and how is it used?',
      section2: `
      Updated:  November 9, 2023 This privacy policy governs your use of the software applicati GPS LVN(“Application”) for mobile
                      devices that was created by GPS LVN LLC.The Application is a time clock solution for businesses or
                      managers.`,
      section1: 'Privacy Policy',
      on_requisition_vehicles: 'On requisition vehicles',
      on_maintenance_vehicles: 'On maintenance vehicles',
      reports_of_reminder: 'Reports of reminder',
      available_vehicles: 'Available vehicles',
      reports_of_each_days_requisition: 'Reports of each day’s requisition',
      other_activities_like_stock_in__stock_out:
        'Other activities like stock in & stock out',
      add_employee: 'Add employee',
      manage_employee: 'Manage employee',
      position__department: 'Position & Department',
      manage_driver: 'Manage driver',
      manage_license: 'Manage license',
      driver_performance: 'Driver performance',
      manage_requisition_approval: 'Manage requisition approval'
    })
  })
}
