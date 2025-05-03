import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    // {
    //     id: 1,
    //     name: 'Missions to Kopileft',
    //     description:  `
    //     Active participation in the various phases of development, including drafting specifications, design, coding, and validation. 
    //     Implementation of REST APIs and the business layer in Java with Spring Boot, including the development of microservices. 
    //     Migration of internal applications to Java 17 and integration of messaging solutions for data synchronization using JMS and ActiveMQ.
    //     Planning and execution of functional tests with Docker and JUnit, along with the optimization of the testing process through automated test integration.
    //     `,
    //     tools: [
    //       'Kotlin', 'Java', 'Python', 'TypeScript', 'Spring Boot', 'Angular', 'Exposed',
    //       'PostgreSQL', 'Linux', 'Git', 'GitHub', 'JMS', 'ActiveMQ', 'REST API',
    //       'Java 17', 'Java 8', 'PowerShell', 'CI/CD', 'Agile Scrum'
    //     ],
    //     role: 'Software engineer',
    //     code: '',
    //     demo: '',
    //     image: crefin,
    // },      
    {
        id: 2,
        name: 'Monitoring Application for PGuard',
        description: 'Developed a multi-robot application for real-time diagnostics, enabling continuous monitoring of robot states. Generated detailed reports and maintained historical logs for analysis. Improved system performance and supported data-driven decision-making.',
        tools: ["Java", "TypeScript", 'Angular', 'Spring Boot', "Websocket", "MongoDB",  "JSON", "REST API ", "Scrum"  ],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'E-learning platform',
        description: 'Designed and developed an interactive educational platform that converted traditional textbooks into engaging digital content and educational videos.',
        tools: ["Java", "TypeScript", 'Angular', 'Spring Boot', "MySQL", "JUnit", "REST API "],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://abajim.com/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Club and Association Management application.',
        description: 'Developed a comprehensive web application to streamline club management and boost student engagement at the university.',
        tools: ["Java", "TypeScript", 'Angular', 'Spring Boot', "MySQL", "JUnit", "REST API "],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Bank Manager application ',
        description: 'Built a web-based Bank Manager application to manage accounts, process transactions, and support customer service in core banking operations.',
        tools: ["Java","JavaEE", "MySQL"],
        code: '',
        role: 'Backend Developer',
        demo: '',
        image: '',
    }
];

//Bank Manager application is a web-based solution developed using Java EE and MySQL, designed to facilitate banking operations. It provides features such as account management, transaction processing, and customer service functionalities
// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },