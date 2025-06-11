export interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  tags: string[];
  slug: string;
  features: string[];
  technologies: string;
  challenges?: string;
  screenshots: string[];
  lessonsLearned?: string;
  impact?: string;
  futureImprovements?: string;
  details?: string;
  techStackReason?: string;
  projectUrl?: string;
}

export const dummyProjects: Project[] = [
  {
    title: 'Festival Applicatie',
    description: 'Een applicatie voor het beheren van festivalschema’s, ticketverkoop en gebruikersinteracties.',
    link: '/projects/festival-app',
    imageUrl: '/images/festival.jpg',
    tags: ['Angular', '.NET', 'TypeScript'],
    slug: 'festival-app',
    features: [
      'Spotify API integratie voor artiestinformatie',
      'Tijdschema`s voor festivalprogramma`s',
    ],
    technologies: 'De frontend is gebouwd met Angular en de backend met .NET Core.',
    challenges: 'De grootste uitdagingen waren het implementeren van de Spotify API en het deployen van de applicatie op een cloudplatform.',
    screenshots: ['/images/chatify1.jpg', '/images/chatify2.jpg'],
    lessonsLearned: 'Veel bijgeleerd over API-integraties en het werken met cloudservices. Vaardigheden in Angular en .NET verder ontwikkeld.',
    techStackReason: 'Angular is gekozen vanwege het robuuste framework en TypeScript-ondersteuning, terwijl .NET Core zorgt voor een schaalbare en veilige backend.',
  },
  {
    title: "Duffalo's Voetbal App",
    description: 'Een app voor een voetbalclub om spelers, statistieken, wedstrijdoverzichten en meer te beheren.',
    link: '/projects/duffalo',
    imageUrl: '/images/laravel.jpg',
    tags: ['Laravel', 'PHP', 'Tailwind CSS'],
    slug: 'duffalo',
    features: [
      'Veilige betalingsgateway-integratie',
      'Productzoekfunctie en filters',
      'Responsief en gebruiksvriendelijk ontwerp',
    ],
    technologies: 'Ontwikkeld met Laravel voor de backend en gestyled met Tailwind CSS.',
    challenges: 'Veilige en naadloze betalingsverwerking garanderen en prestaties optimaliseren voor snelle laadtijden.',
    screenshots: ['/images/shopease1.jpg', '/images/shopease2.jpg'],
    lessonsLearned: 'Server-side rendering technieken en veilige betalingsintegratie onder de knie gekregen. Vaardigheden in webprestaties en toegankelijkheid verbeterd.',
    impact: 'Kleine bedrijven een betrouwbaar platform geboden om producten online te verkopen, waardoor hun bereik en verkoopmogelijkheden toenamen.',
    futureImprovements: 'AI-gebaseerde productaanbevelingen implementeren en ondersteuning voor meerdere betalingsgateways toevoegen.',
    details: 'De app bevat een dashboard voor clubbeheerders om spelersprestaties bij te houden en teamroosters te beheren.',
    techStackReason: 'Laravel gekozen vanwege de snelle ontwikkelmogelijkheden en Tailwind CSS voor de utility-first styling.',
    projectUrl: 'https://duffalo-soccer.example.com',
  },
  {
    title: 'RoomService - Project 4.0',
    description: 'Een deskbooking-applicatie voor het beheren van kantoorruimtes en -middelen.',
    link: '/projects/roomservice',
    imageUrl: '/images/test.jpg',
    tags: ['Angular', 'Java', 'Auth0'],
    slug: 'roomservice',
    features: [
      'Boek en beheer kantoorruimtes',
      'Real-time beschikbaarheidsupdates',
      'Progressive web app-functionaliteiten',
    ],
    technologies: 'Gebouwd met Angular en Java Spring Boot voor backend en real-time databasefunctionaliteit.',
    challenges: 'Efficiënte real-time data-synchronisatie implementeren en apparaatcompatibiliteit voor Android en iOS ondersteunen.',
    screenshots: ['/images/fittrack1.jpg', '/images/fittrack2.jpg'],
    lessonsLearned: 'Praktische ervaring opgedaan in het bouwen van gebruiksvriendelijke interfaces voor boekingssystemen en effectief databaseconcurrentiebeheer.',
    impact: 'Het boeken van werkplekken in gedeelde werkruimtes gestroomlijnd, waardoor productiviteit werd verhoogd en planningsconflicten werden verminderd.',
    futureImprovements: 'Geavanceerde analytics voor ruimtebenutting implementeren en AI-gebaseerde aanbevelingen voor bureau-indeling integreren.',
    details: 'De applicatie ondersteunt multi-tenant kantoorruimtes met rolgebaseerde toegang voor beheerders en werknemers.',
    techStackReason: 'Angular en Java Spring Boot gekozen vanwege hun enterprise-grade schaalbaarheid en Auth0 voor veilige authenticatie.',
    projectUrl: 'https://roomservice.example.com',
  },
  {
    title: 'Mobile Auto Scanner',
    description: 'Een mobiele applicatie voor het scannen van voertuigen en het ophalen van voertuiggegevens.',
    link: '/projects/mobile-auto-scanner',
    imageUrl: '/images/test.jpg',
    tags: ['Flutter', 'Vuforia', 'Unity'],
    slug: 'mobile-auto-scanner',
    features: [
      'Scannen van autos',
      'Ophalen van voertuiggegevens',
      'Real-time gegevensverwerking',
    ],
    technologies: 'Flutter voor de frontend, Vuforia voor AR-functionaliteit en Unity voor 3D-modellering.',
    challenges: 'Nauwkeurige herkenning van autos en real-time gegevensverwerking.',
    screenshots: ['/images/mobile-auto-scanner1.jpg', '/images/mobile-auto-scanner2.jpg'],
    lessonsLearned: 'Ervaring opgedaan met AR-technologie en mobiele ontwikkeling.',
    futureImprovements: 'Integratie van machine learning voor verbeterde herkenning en gegevensanalyse.',
    details: 'De app biedt een gebruiksvriendelijke interface voor het scannen en beheren van autos.',
    techStackReason: 'Flutter gekozen voor cross-platform ontwikkeling en Vuforia voor AR-ondersteuning.',
  },
];