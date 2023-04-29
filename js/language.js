console.log('Language.js Loaded!')

const translations = {
    english: {
        // NAVBAR
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",

        // MAIN SECTION
        hello: "Hello! My Name is",
        iam: "And I'm a ",
        intro: "Informatics, computers and technology enthusiast! Very curious, I never stop studying and learning new things! Passion and dedication are what count the most!",
        downloadCV: "Download CV",

        // ABOUT SECTION
        about: "About ",
        description: "Hello there! I'm a motivated and passionate Full Stack Web Developer, having completed my master's at Boolean in 2022 and further advanced my skills with a master's in Java at Experis in 2023. My self-driven nature led me to expand my knowledge independently, gaining proficiency in Python, C#, and Unity. I bring sunshine to my work, exuding a positive, sociable attitude that thrives both in individual projects and within team environments. An insatiable curiosity fuels my continual pursuit of learning and mastering new technologies!",
        readMore: "Read More",

        // SKILLS SECTION
        my: "My ",

        // PORTFOLIO SECTION
        latest: "Latest ",
        booverDesc: "Boover is a website similar to Fiverr that provides a platform for finding freelancers. It has been developed using Laravel and Vue, as well as some external libraries.",
        photoGalleryDesc: "Complete photographic portal with Backoffice and Frontoffice. It has been developed using Java for the Backend, whereas for the Frontend HTML, CSS and JS were used.",
        neonSnakeDesc: "Modern version of the classic game Snake, developed using HTML, CSS, and JS. Modern design and some new features make the gameplay innovative and stimulating. The project is incomplete, but still playable!",
        boolflixDesc: "A simple clone of the Netflix streaming portal, leveraging theMovieDB API. The site includes working search filters and a mock initial logo along with a simulated login feature. Boolflix was built using HTML, CSS, Bootstrap, JS, via Vue.js.",
        boolzapDesc: "I have recreated the functionality of the WhatsApp Web App, featuring message sending and automated randomized replies to simulate bot conversations. This project was developed using HTML, CSS, Bootstrap, JS.",
        playstationDesc: "I have meticulously reproduced the landing page of the Sony PlayStation website as a layout, utilizing only HTML and CSS, so without any JavaScript functionality.",
        otherProjects: "You can find some other projects on my ",

        // CONTACT SECTION
        contactMe: "Contact ",
        me: "Me!",
        namePH: "Full Name",
        numberPH: "Mobile Number (optional)",
        subjectPH: "Email Subject",
        messagePH: "Your Message",
        sendMessage: "Send Message",
        otherContact: "Other contacts:",
        copied: "Copied!",

        // FOOTER SECTION
        footerPhrase: "Always be curious, never stop learning!",

    },
    italian: {
        // NAVBAR
        skills: "Competenze",
        projects: "Progetti",
        contact: "Contatti",

        // MAIN SECTION
        hello: "Ciao! Io sono",
        iam: "E sono un ",
        intro: "Appassionato di informatica, computer e tecnologia! Molto curioso, non smetto mai di studiare e imparare cose nuove! Passione e dedizione sono ciò che contano di più!",
        downloadCV: "Scarica CV",

        // ABOUT SECTION
        about: "Su di ",
        description: "Ciao! Sono un Full Stack Web Developer motivato e appassionato, ho completato il mio master presso Boolean nel 2022 e ho ulteriormente migliorato le mie competenze con un master in Java presso Experis nel 2023. La mia natura auto-motivata mi ha spinto ad ampliare le mie conoscenze in modo indipendente, acquisendo competenze in Python, C# e Unity. Porto allegria al mio lavoro, emanando un atteggiamento positivo e socievole che si adatta sia a progetti individuali che all'interno di ambienti di squadra. Una curiosità insaziabile alimenta la mia continua ricerca di apprendimento e padronanza di nuove tecnologie!",
        readMore: "Scopri di più",

        // SKILLS SECTION
        my: "Le mie ",

        // PORTFOLIO SECTION
        latest: "Ultimi ",
        booverDesc: "Boover è un sito web simile a Fiverr che fornisce una piattaforma per trovare professionisti freelance. È stato sviluppato utilizzando Laravel e Vue, oltre ad alcune librerie esterne.",
        photoGalleryDesc: "Completo portale fotografico con Backoffice e Frontoffice. È stato sviluppato utilizzando Java per il Backend, mentre per il Frontend sono stati utilizzati HTML, CSS e JS.",
        neonSnakeDesc: "Versione moderna del classico gioco Snake, sviluppato utilizzando HTML, CSS e JS. Il design moderno e alcune nuove funzionalità rendono il gameplay innovativo e stimolante. Il progetto non è completo, ma è comunque giocabile!",
        boolflixDesc: "Un semplice clone del portale di streaming Netflix, che sfrutta l'API di theMovieDB. Il sito include filtri di ricerca funzionanti e un logo iniziale simulato insieme a una funzione di accesso simulata. Boolflix è stato costruito utilizzando HTML, CSS, Bootstrap, JS, tramite Vue.js.",
        boolzapDesc: "Ho ricreato la funzionalità dell'applicazione web di WhatsApp, che include l'invio di messaggi e risposte casuali automatizzate per simulare conversazioni con bot. Questo progetto è stato sviluppato utilizzando HTML, CSS, Bootstrap e JS.",
        playstationDesc: "Ho riprodotto con meticolosità la pagina di accesso del sito web di Sony PlayStation come layout, utilizzando solo HTML e CSS, senza alcuna funzionalità JavaScript.",
        otherProjects: "Puoi trovare altri progetti sul mio profilo ",

        // CONTACT SECTION
        contactMe: "Contatta",
        me: "mi!",
        namePH: "Il tuo Nome",
        numberPH: "Telefono (opzionale)",
        subjectPH: "Oggetto dell'Email",
        messagePH: "Il tuo Messaggio",
        sendMessage: "Invia",
        otherContact: "Altri contatti:",
        copied: "Copiato!",

        // FOOTER SECTION
        footerPhrase: "Sii sempre curioso, non smettere mai di imparare!",

    },
    spanish: {

    }
}

document.querySelectorAll('.language-selector .language').forEach(function (language) {
    language.addEventListener('click', function () {
        document.querySelectorAll('.language-selector .language.active-language').forEach(function (activeLanguage) {
            activeLanguage.classList.remove('active-language');
        });

        this.classList.add('active-language');

        const language = this.classList[1]; // la seconda classe è la lingua
        changeLanguage(language);
    });
});

function changeLanguage(language) {
    console.log('Language changed into ' + language);

    // NAVBAR
    document.querySelector('a[href="#skills"]').innerText = translations[language].skills;
    document.querySelector('a[href="#projects"]').innerText = translations[language].projects;
    document.querySelector('a[href="#contact"]').innerText = translations[language].contact;

    // MAIN SECTION
    document.querySelector('.home-content h3:first-child').innerText = translations[language].hello;
    document.querySelector('.home-content h3:nth-of-type(2) span:first-child').innerText = translations[language].iam;
    document.querySelector('.home-content p').innerText = translations[language].intro;
    document.querySelector('.home-content a.btn').innerText = translations[language].downloadCV;

    // ABOUT SECTION
    document.querySelector('.about-content .heading span:first-child').innerText = translations[language].about;
    document.querySelector('.about-content p').innerText = translations[language].description;
    document.querySelector('.about-content a.btn').innerText = translations[language].readMore;

    // SKILLS SECTION
    document.querySelector('.skills .heading span:first-child').innerText = translations[language].my;
    document.querySelector('.skills .heading span:last-child').innerText = translations[language].skills;

    // PROJECTS SECTION
    document.querySelector('.portfolio h2.heading span:first-child').innerText = translations[language].latest;
    document.querySelector('.portfolio h2.heading span:last-child').innerText = translations[language].projects;
    document.querySelector('#boover p').innerText = translations[language].booverDesc;
    document.querySelector('#photo-gallery p').innerText = translations[language].photoGalleryDesc;
    document.querySelector('#neon-snake p').innerText = translations[language].neonSnakeDesc;
    document.querySelector('#boolflix p').innerText = translations[language].boolflixDesc;
    document.querySelector('#boolzap p').innerText = translations[language].boolzapDesc;
    document.querySelector('#playstation p').innerText = translations[language].playstationDesc;
    document.querySelector('.portfolio h3.heading-bottom-showed span:first-child').innerText = translations[language].otherProjects;

    // CONTACT SECTION
    document.querySelector('.contact h2.heading span:first-child').innerText = translations[language].contactMe;
    document.querySelector('.contact h2.heading span:last-child').innerText = translations[language].me;
    document.querySelector('input[name="name"]').placeholder = translations[language].namePH;
    document.querySelector('input[name="number"]').placeholder = translations[language].numberPH;
    document.querySelector('input[name="subject"]').placeholder = translations[language].subjectPH;
    document.querySelector('textarea[name="message"]').placeholder = translations[language].messagePH;
    document.querySelector('.contact input[type="submit"]').value = translations[language].sendMessage;
    document.querySelector('.contact h5.heading').innerText = translations[language].otherContact;
    document.querySelector('#copyConfirmation').innerText = translations[language].copied;

    // FOOTER SECTION
    document.querySelector('.footer-text p:last-child').innerText = translations[language].footerPhrase;
}

