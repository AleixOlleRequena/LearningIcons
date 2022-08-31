import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    informPage1: 'We offer a tool to help you decide which is the best license for your website',
                    informPage2: 'Choose your license:',
                    informPage3: 'Answering this questionnaire, you will be able to decide which license best fits your necessities.',

                    Main1: 'WHAT IS LEARNING ICONS',
                    Main2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum in lorem nec euismod. Nunc porttitor porta imperdiet. Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices. Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.',
                    Main3: 'COLLABORATORS',

                    Feedback1: 'HELP US TO KEEP IMPROVING',
                    Feedback2: 'Give your opinion about the different icons we have created',
                    Feedback3: 'If you think you have a good design, send us your propose and we will analise it to keep improving',
                    FeedbackButton1: 'Send',
                    FeedbackOpinion:'Choose the icon you want to improve',
                    FeedbackDesign:'Choose the icon you want to improve',
                    FeedbackDescriptive:'descriptive processing',
                    FeedbackDiagnostic:'diagnostic processing',
                    FeedbackPredictive:" predictive processing",
                    FeedbackPrescriptive:"prescriptive processing",
                    FeedbackCookies:"cookies",
                    FeedbackCache:"caching techniques",
                    FeedbackPersonal:"personal data gathering",
                    FeedbackGeneral:"general data gathering",
                    FeedbackMetadata:"metadata gathering",
                    FeedbackTransferExtern:"third-party data transfer",
                    FeedbackTransferIntern:"intern data transfer",
                    FeedbackNotAnonymized:"no anonymized data",
                    FeedbackAnonymized:"anonymized data",
                    FeedbackStored:"data stored during x time",
                    FeedbackPseudoanonymized:"pseudoanonymized data",
                    FeedbackEncrypted:"Encrypted data",
                    FeedbackProcessed:"data processed during x time",
                    FeedbackQuestion: "Do you want to send your opinion?",
                    FeedbackOpinionThank: 'Thank you for sending your opinion!',
                    FeedbackDesignThank: 'Thank you for sending your design!',
                    DragDrop1:'Drag & Drop file here',
                    DragDrop2:'Browse pictures',
                    DragDropButton:'Send',
                    DragDropQuestion: "Do you want to send your design?",
                    DragDrop1Image: "There is 1 image",
                    DragDropImages1: "There are ",
                    DragDropImages2: " images",

                    LearningIcons1: 'WHAT IS LEARNING ICONS',
                    LearningIcons2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum in lorem nec euismod. Nunc porttitor porta imperdiet. Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices. Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.Donec id lacus sed ipsum pulvinar venenatis non eu purus. Sed facilisis pulvinar risus non efficitur. Vestibulum iaculis tortor vel leo efficitur, at tempus arcu ultrices.',
                    FAQSQuestion1:  '¿What is Learning Icons for?',
                    FAQSAnswer1: 'Given a 24-hour day and 360 degrees of longitude around the Earth Given a 24-hour day and 360 degrees of longitude around the Earth Given a 24-hour day and 360 degrees of longitude around the Earth',
                    FAQSQuestion2: '¿How does it work?',
                    FAQSAnswer2: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
                    FAQSQuestion3: '¿Can I use it on my web?',
                    FAQSAnswer3: 'Binturongs smell like popcorn.',
                    FAQSQuestion4: '¿Do I have to pay for it?',
                    FAQSAnswer4: 'Binturongs smell like popcorn.',
                    PopUpExit: 'EXIT',

                    QuestionnaireProcessing: 'descriptive processing',
                    QuestionnaireDiagnostic: 'diagnostic processing',
                    QuestionnairePredictive: 'predictive processing',
                    QuestionnairePrescriptive: 'prescriptive processing',
                    QuestionnaireCookies: 'cookies',
                    QuestionnaireCache: 'local cache',
                    QuestionnairePersonal: 'personal data gathering',
                    QuestionnaireGeneral: 'general data gathering',
                    QuestionnaireMetadata: 'metadata gathering',
                    QuestionnaireTransferExtern: 'third-party data transfer',
                    QuestionnaireTransferIntern: 'intern data transfer',
                    QuestionnaireNotAnonymized: 'not anonymized data',
                    QuestionnaireAnonymized: 'anonymized data',
                    QuestionnaireStored: 'Data stored during ',
                    QuestionnairePseudoanonymized: 'pseudoanonymized data',
                    QuestionnaireEncrypted: 'encrypted data',
                    QuestionnaireProcessed: 'Data processed during ',
                    QuestionnaireLicense: 'Your license:',
                    QuestionnaireCopyCode: 'Copy this code to inform your students!',
                    QuestionnaireDownload: 'Download your license',
                    QuestionnairePreviousButton: 'Previous',
                    QuestionnaireNextButton: 'Next',
                    QuestionnaireCreateButton: 'Create License',
                    QuestionnaireAnalyticalName: 'Analytical processing',
                    QuestionnaireAnalyticalDescription: '¿Will the data be processed?',
                    QuestionnaireCookiesName: 'Cookies & cache',
                    QuestionnaireCookiesDescription: '¿Will you use Cookies or caching techniques?',
                    QuestionnaireCollectionName: 'Data collection',
                    QuestionnaireCollectionDescription: '¿Will the data be gathered?',
                    QuestionnaireTransferName: 'Data transfer',
                    QuestionnaireTransferDescription: '¿Will data be transferred?',
                    QuestionnaireStorageName: 'Data storage',
                    QuestionnaireStorageDescription: '¿How will the data be stored?',
                    QuestionnaireProcessingName: 'Data processing',
                    QuestionnaireProcessingDescription: '¿How much time will the data be processed?',
                    QuestionnaireExplanation1: 'Descriptive analysis helps describe, show or summarize data points in a constructive way such that patterns might emerge that fulfill every condition of the data.',
                    QuestionnaireExplanation2: 'Diagnostic analysis determines the causes of trends and correlations between variables.',
                    QuestionnaireExplanation3: 'Predictive analysis analyzes current and historical data to make predictions about future or otherwise unknown events.',
                    QuestionnaireExplanation4: 'Prescriptive analysis is a form of advanced analytics which examines data to answer the question \'What should be done?\' or \'What can we do to make something happen?\'',
                    QuestionnaireExplanation5: 'We use cookies to improve your navigation experience.',
                    QuestionnaireExplanation6: 'Caching allows you to efficiently reuse previously retrieved or processed data.',
                    QuestionnaireExplanation7: "Students' personal data is collected to improve their experience using the webpage.",
                    QuestionnaireExplanation8: '',
                    QuestionnaireExplanation9: 'Metadata is data that describes and identifies other data. For example, \'Zip code\', \'Day and time\' or \'Location\' are metadata that can identify a specific person.',
                    QuestionnaireExplanation10: 'There is an external data transfer when the data collected is shared with companies not directly related to the educational institution.',
                    QuestionnaireExplanation11: 'There is an internal data transfer when the data collected is shared within the same educational institution, between people and departments, and the data can go outside of it (both local and external servers).',
                    QuestionnaireExplanation12: 'The stored data is not anonymized, it means  that the data can be connected to the person providing it.',
                    QuestionnaireExplanation13: 'The stored data is anonymized, it means  that the data cannot be connected to the person providing it.',
                    QuestionnaireExplanation14: 'The stored data is pseudoanonymized, it means  that the data can be connected to the person providing it through indirect or additional information.',
                    QuestionnaireExplanation15: 'The stored data is encrypted, that means that infomation is transformed into another form, or code, so that only people with access to a secret key or password can read it.',
                    QuestionnaireExplanation16: 'The data is stored during a certain amount of time, after this period has ended the data is removed.',
                    QuestionnaireExplanation17: 'The data can be processed during a certain amount of time after being stored.',
                    QuestionnaireSeconds: 'Seconds',
                    QuestionnaireMinutes: 'Minutes',
                    QuestionnaireHours: 'Hours',
                    QuestionnaireDays: 'Days',
                    QuestionnaireMonths: 'Months',
                    QuestionnaireYears: 'Years',

                    Header1:'LEARNING ICONS',
                    Header2:'INFORM YOUR STUDENTS',
                    Header3:'FEEDBACK',
                }
            },
            es:{}
        }
    });

export default function (app) {
    app.use(I18NextVue, { i18next })
    return app
}