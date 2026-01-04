import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

/**
 * Portfolio Projects Data
 * 
 * This array contains all portfolio projects with their details.
 * Each project should include:
 * - id: Unique identifier
 * - name: Project title
 * - description: Brief overview of the project
 * - tools: Array of technologies used
 * - role: Your role in the project
 * - code: GitHub repository URL (empty string if not available)
 * - demo: Live demo URL (empty string if not available)
 * - image: Project preview image
 * - github: GitHub repository URL for social link (optional)
 */
export const projectsData = [
   {
        id: 1,
        name: 'Book Social Network',
        description: 'Built a full-stack social network platform for book enthusiasts enabling users to share, rate, and review books. Implemented secure authentication with JWT, email verification system, and real-time features. Created responsive UI with Angular and robust backend APIs for book management and social interactions',
        tools: ["Java 17", "Spring Boot 3", "Angular 17", "TypeScript", "PostgreSQL", "Docker", "MailDev", "JWT", "REST API"],
        role: 'Full Stack Developer',
        demo: 'https://youtu.be/XEUTdd2zWk8',
        image: '', // You'll need to add your image reference
        github: 'https://github.com/Iyedchaabane/Book-Social-Network'
    },
    {
        id: 2,
        name: 'Web Image Scraper',
        description: 'Developed an automated Python tool for scraping and downloading images from dynamic websites. Implemented intelligent scrolling to handle lazy-loaded content, domain filtering capabilities, and safe image validation. Created CLI interface with customizable options for efficient dataset creation',
        tools: ["Python", "Selenium", "BeautifulSoup", "Pandas", "Pillow", "ChromeDriver"],
        role: 'Backend Developer',
        demo: '',
        image: '', // You'll need to add your image reference
        github: 'https://github.com/Iyedchaabane/Web-Image-Scraper'
    },
    {
        id: 3,
        name: 'Foodies - Online Food Delivery Platform',
        description: 'Created a comprehensive food delivery system with separate customer and admin interfaces. Integrated payment gateway (Konnect), email notifications (Brevo), and cloud storage (Cloudinary). Built scalable microservices architecture with MongoDB and Redis for high-performance order processing',
        tools: ["Java 21", "Spring Boot", "React", "TypeScript", "MongoDB", "Redis", "Docker", "TailwindCSS", "Vite", "JWT"],
        role: 'Full Stack Developer',
        demo: '',
        image: '', // You'll need to add your image reference
        github: 'https://github.com/Iyedchaabane/Foodies---Full-Stack-Online-Food-Delivery-System'
    },
    {
        id: 4,
        name: 'Spring Gemini AI Integration',
        description: 'Integrated Google Gemini AI with Spring Boot using Spring AI framework to create an intelligent chatbot API. Implemented REST endpoints with Swagger documentation for easy testing. Demonstrated modern AI integration patterns in enterprise Java applications',
        tools: ["Java 21", "Spring Boot", "Spring AI", "Google Gemini AI", "REST API", "Swagger", "Maven"],
        role: 'Backend Developer',
        demo: '',
        image: '', // You'll need to add your image reference
        github: 'https://github.com/Iyedchaabane/Spring-Gemini-AI'
    },
    {
        id: 5,
        name: 'Finance Tracking Web Application',
        description: 'Built a personal finance management system with real-time currency conversion and multi-language support (English, Arabic, French). Implemented secure transaction management, interactive data visualizations with charts, and category-based expense tracking. Features JWT authentication and soft-delete protection',
        tools: ["Java 21", "Spring Boot", "React", "PostgreSQL", "Docker", "TailwindCSS", "Recharts", "JWT", "MapStruct", "ExchangeRate API"],
        role: 'Full Stack Developer',
        demo: '',
        image: '', // You'll need to add your image reference
        github: 'https://github.com/Iyedchaabane/Finance-Tracking-Web-App'
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
//     demo: '',
//     image: crefin,
// },
