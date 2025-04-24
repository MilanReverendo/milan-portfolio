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
}

export const dummyProjects: Project[] = [
    {
        title: 'Chatify',
        description: 'A real-time chat application with rooms, direct messages, and emojis built using Socket.io and React.',
        link: '/projects/chatify',
        imageUrl: '/images/test.jpg',
        tags: ['React', 'Socket.io', 'Node.js'],
        slug: 'chatify',
        features: [
            'Real-time messaging',
            'Customizable chat rooms',
            'Emoji support for messages',
        ],
        technologies: 'Built with React for the frontend, Socket.io for real-time communication, and Node.js for the backend.',
        challenges: 'Handling real-time communication and maintaining synchronization across multiple users simultaneously.',
        screenshots: ['/images/chatify1.jpg', '/images/chatify2.jpg'],
        lessonsLearned: 'Gained deep insights into WebSocket technology and state management in real-time applications. Learned to optimize performance for low-latency communication.',
        impact: 'Enabled seamless communication for remote teams, improving collaboration with an intuitive and engaging interface.',
        futureImprovements: 'Add end-to-end encryption for messages and integrate video call functionality to enhance user interaction.'
    },
    {
        title: 'ShopEase',
        description: 'An e-commerce platform featuring product listings, shopping cart, and payment integration.',
        link: '/projects/shopease',
        imageUrl: '/images/test.jpg',
        tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
        slug: 'shopease',
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
        futureImprovements: 'Implement AI-based product recommendations and support for multiple payment gateways to enhance user experience.'
    },
    {
        title: 'FitTrack',
        description: 'A fitness tracker app that lets users log workouts and monitor progress over time.',
        link: '/projects/fittrack',
        imageUrl: '/images/test.jpg',
        tags: ['React Native', 'Expo', 'Firebase'],
        slug: 'fittrack',
        features: [
            'Workout logging and progress tracking',
            'Goal setting and reminders',
            'Data synchronization across devices',
        ],
        technologies: 'Built with React Native and Expo for cross-platform support, Firebase for backend and real-time database functionality.',
        challenges: 'Implementing efficient real-time data syncing and handling device compatibility for both Android and iOS.',
        screenshots: ['/images/fittrack1.jpg', '/images/fittrack2.jpg'],
        lessonsLearned: 'Developed expertise in cross-platform mobile development and real-time database management. Learned to address platform-specific quirks effectively.',
        impact: 'Empowered users to achieve fitness goals through intuitive tracking and motivational features, promoting healthier lifestyles.',
        futureImprovements: 'Add social sharing features and integration with wearable devices for more comprehensive fitness tracking.'
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
        futureImprovements: 'Incorporate historical weather data analysis and support for multiple API providers for redundancy.'
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
        futureImprovements: 'Add support for real-time content previews and integrate a commenting system for reader interaction.'
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
        futureImprovements: 'Introduce team collaboration features and integrate with calendar apps for better task scheduling.'
    },
];