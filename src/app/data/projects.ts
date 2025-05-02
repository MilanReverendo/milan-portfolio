interface Project {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    tags: string[];
    slug: string;
    features: string[];
    technologies: string;
    challenges: string;
    screenshots: string[];
    lessonsLearned: string;
    impact: string;
    futureImprovements: string;
    details?: string;
    techStackReason?: string;
    projectUrl?: string;
}

export const dummyProjects: Project[] = [
    {
        title: 'Festival Application',
        description: 'An application for managing festival schedules, ticket sales, and user interactions.',
        link: '/projects/festival-app',
        imageUrl: '/images/festival.jpg',
        tags: ['Angular', '.NET', 'TypeScript'],
        slug: 'festival-app',
        features: [
            'Real-time messaging',
            'Customizable chat rooms',
            'Emoji support for messages',
        ],
        technologies: 'The frontend was built with Angular, while the backend was developed using .NET Core.',
        challenges: 'Handling real-time communication and maintaining synchronization across multiple users simultaneously.',
        screenshots: ['/images/chatify1.jpg', '/images/chatify2.jpg'],
        lessonsLearned: 'Gained deep insights into WebSocket technology and state management in real-time applications. Learned to optimize performance for low-latency communication.',
        impact: 'Enabled seamless communication for remote teams, improving collaboration with an intuitive and engaging interface.',
        futureImprovements: 'Add end-to-end encryption for messages and integrate video call functionality to enhance user interaction.',
        details: 'The application supports multiple festivals with customizable schedules and integrated payment processing for ticket purchases.',
        techStackReason: 'Angular was chosen for its robust framework and TypeScript support, while .NET Core provided a scalable and secure backend.',
        projectUrl: 'https://festival-app.example.com'
    },
    {
        title: "Duffalo's Soccer App",
        description: 'An app for a soccer club to manage players, players statistics, match schedules, and much more.',
        link: '/projects/duffalo',
        imageUrl: '/images/laravel.jpg',
        tags: ['Laravel', 'PHP', 'Tailwind CSS'],
        slug: 'duffalo',
        features: [
            'Secure payment gateway integration',
            'Product search and filters',
            'Responsive and user-friendly design',
        ],
        technologies: 'Developed using Next.js for server-side rendering, styled with Tailwind CSS, and integrated with Stripe for secure payments.',
        challenges: 'Ensuring secure and seamless payment processing and optimizing performance for fast loading times.',
        screenshots: ['/images/shopease1.jpg', '/images/shopease2.jpg'],
        lessonsLearned: 'Mastered server-side rendering techniques and secure payment integration. Improved skills in optimizing web performance and accessibility.',
        impact: 'Provided small businesses with a reliable platform to sell products online, increasing their reach and sales potential.',
        futureImprovements: 'Implement AI-based product recommendations and support for multiple payment gateways to enhance user experience.',
        details: 'The app includes a dashboard for club administrators to track player performance and manage team rosters.',
        techStackReason: 'Laravel was selected for its rapid development capabilities and Tailwind CSS for its utility-first styling approach.',
        projectUrl: 'https://duffalo-soccer.example.com'
    },
    {
        title: 'RoomService - Project 4.0',
        description: 'A desk booking application for managing office spaces and resources.',
        link: '/projects/roomservice',
        imageUrl: '/images/test.jpg',
        tags: ['Angular', 'Java', 'Auth0'],
        slug: 'roomservice',
        features: [
            'Book and manage office spaces',
            'Real-time availability updates',
            'Progressive web app features',
        ],
        technologies: 'Built with Angular and Java Spring Boot for backend and real-time database functionality.',
        challenges: 'Implementing efficient real-time data syncing and handling device compatibility for both Android and iOS.',
        screenshots: ['/images/fittrack1.jpg', '/images/fittrack2.jpg'],
        lessonsLearned: 'Gained hands-on experience in building user-friendly interfaces for booking systems and managing database concurrency effectively. Learned to optimize user flows for efficient desk reservations.',
        impact: 'Streamlined the process of desk booking in shared workspaces, enhancing productivity and reducing scheduling conflicts for users.',
        futureImprovements: 'Implement advanced analytics for workspace utilization and integrate AI-based recommendations for desk allocation to improve user satisfaction.',
        details: 'The application supports multi-tenant office spaces with role-based access control for administrators and employees.',
        techStackReason: 'Angular and Java Spring Boot were chosen for their enterprise-grade scalability and Auth0 for secure authentication.',
        projectUrl: 'https://roomservice.example.com'
    },
    {
        title: 'Weatherly',
        description: 'A weather dashboard providing forecasts, maps, and alerts using a third-party API.',
        link: '/projects/weatherly',
        imageUrl: '/images/test.jpg',
        tags: ['Next.js', 'OpenWeather API', 'Chart.js'],
        slug: 'weatherly',
        features: [
            'Detailed weather forecasts',
            'Interactive weather maps',
            'Real-time alerts and notifications',
        ],
        technologies: 'Utilized Next.js for the frontend, OpenWeather API for fetching weather data, and Chart.js for visualizing data.',
        challenges: 'Fetching and caching large datasets efficiently while maintaining real-time updates.',
        screenshots: ['/images/weatherly1.jpg', '/images/weatherly2.jpg'],
        lessonsLearned: 'Enhanced skills in API integration and data visualization. Learned effective caching strategies to improve performance.',
        impact: 'Delivered accurate and timely weather information to users, aiding in planning and safety during adverse conditions.',
        futureImprovements: 'Incorporate historical weather data analysis and support for multiple API providers for redundancy.',
        details: 'The dashboard includes customizable widgets for users to prioritize specific weather metrics.',
        techStackReason: 'Next.js was selected for its SEO benefits and fast rendering, while Chart.js enabled dynamic data visualizations.',
        projectUrl: 'https://weatherly.example.com'
    },
    {
        title: 'BlogFlow',
        description: 'A headless CMS-powered blog with markdown support and SEO optimization.',
        link: '/projects/blogflow',
        imageUrl: '/images/test.jpg',
        tags: ['Gatsby', 'Contentful', 'GraphQL'],
        slug: 'blogflow',
        features: [
            'Markdown-based content creation',
            'SEO optimization tools',
            'Customizable templates and themes',
        ],
        technologies: 'Built with Gatsby for a static site generator, Contentful as the headless CMS, and GraphQL for fetching content.',
        challenges: 'Optimizing build times and ensuring seamless integration between Contentful and Gatsby.',
        screenshots: ['/images/blogflow1.jpg', '/images/blogflow2.jpg'],
        lessonsLearned: 'Gained proficiency in static site generation and headless CMS workflows. Improved understanding of SEO best practices.',
        impact: 'Enabled content creators to publish optimized blogs quickly, boosting their online visibility and engagement.',
        futureImprovements: 'Add support for real-time content previews and integrate a commenting system for reader interaction.',
        details: 'The blog supports multi-author content creation with draft and publish workflows.',
        techStackReason: 'Gatsby and Contentful were chosen for their flexibility in managing content-heavy sites with excellent performance.',
        projectUrl: 'https://blogflow.example.com'
    },
    {
        title: 'TaskMaster',
        description: 'A productivity app enabling users to manage tasks, set reminders, and track deadlines.',
        link: '/projects/taskmaster',
        imageUrl: '/images/test.jpg',
        tags: ['Vue.js', 'Vuetify', 'Firebase'],
        slug: 'taskmaster',
        features: [
            'Task creation and management',
            'Push notifications for reminders',
            'Color-coded categorization of tasks',
        ],
        technologies: 'Developed with Vue.js for the frontend, Vuetify for styling, and Firebase for real-time backend services.',
        challenges: 'Implementing reliable push notifications and creating a smooth UX for task management.',
        screenshots: ['/images/taskmaster1.jpg', '/images/taskmaster2.jpg'],
        lessonsLearned: 'Strengthened knowledge of Vue.js reactivity and notification systems. Learned to design intuitive user interfaces for productivity tools.',
        impact: 'Helped users stay organized and meet deadlines efficiently, enhancing personal and professional productivity.',
        futureImprovements: 'Introduce team collaboration features and integrate with calendar apps for better task scheduling.',
        details: 'The app includes offline support and task synchronization across multiple devices.',
        techStackReason: 'Vue.js and Vuetify were selected for their lightweight and modular design, while Firebase enabled rapid backend development.',
        projectUrl: 'https://taskmaster.example.com'
    },
];