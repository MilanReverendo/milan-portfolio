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
  screenshots?: string[];
  lessonsLearned?: string;
  impact?: string;
  futureImprovements?: string;
  details?: string;
  techStackReason?: string;
  projectUrl?: string;
  demoUrl?: string;
}

export const dummyProjects: Project[] = [
  {
    title: 'Festival Applicatie',
    description: 'Een applicatie voor het beheren van festivalschema’s, ticketverkoop en gebruikersinteracties.',
    link: '/projects/festival-app',
    imageUrl: '/images/festihome.webp',
    tags: ['Angular', '.NET', 'TypeScript'],
    slug: 'festival-app',
    features: [
      'Spotify API integratie voor artiestinformatie',
      'Tijdschema`s voor festivalprogramma`s',
    ],
    technologies: 'De frontend is gebouwd met Angular en de backend met .NET Core.',
    challenges: 'De grootste uitdagingen waren het implementeren van de Spotify API en het deployen van de applicatie op een cloudplatform. Het hosten van de applicatie was een leerproces, dit ging niet altijd even vlot.',
    screenshots: ['/images/artistinfo.webp', '/images/ticket.webp'],
    lessonsLearned: 'Veel bijgeleerd over API-integraties en het werken met cloudservices. Vaardigheden in Angular en .NET verder ontwikkeld. Mijn bijdrage aan dit project bestond voornamelijk uit het kunnen beheren van verschillende soorten tickets die werden aangeboden voor het festival. Ook het aankopen van tickets hoorde hierbij. Wanneer de gebruiker dan tickets aankocht werd er natuurlijk een bestelling geplaatst. Dit is nog een functionaliteit die ik heb geimplementeerd. Het beheren van deze gemaakte bestellingen.',
    techStackReason: 'Angular is gekozen vanwege het robuuste framework en TypeScript-ondersteuning, terwijl .NET Core zorgt voor een schaalbare en veilige backend.',
  },
  {
    title: "Duffalo's Voetbal App",
    description: 'Een app voor een voetbalclub om spelers, statistieken, wedstrijdoverzichten en meer te beheren.',
    link: '/projects/duffalo',
    imageUrl: '/images/stats.png',
    tags: ['Laravel', 'PHP', 'Tailwind CSS'],
    slug: 'duffalo',
    features: [
      'Matches en statistieken bijhouden',
      'Statistieken live tijdens een wedstrijd invullen',
      'Automatische e-mailnotificaties voor gebruikers',
      'Beheer van spelers en teams',
    ],
    technologies: 'Ontwikkeld met Laravel en LiveWire, gestyled met Tailwind CSS.',
    challenges: 'De grootste uitdaging voor mij was om terug met Laravel en PHP te werken, na een lange tijd met enkel en alleen JavaScript frameworks te hebben gewerkt. Het nam wel even tijd om terug in de PHP mindset te komen. Na enige tijd was het echter wel weer leuk om met PHP te werken.',
    screenshots: ['/images/stats_invullen.png', '/images/mailtemplates.png'],
    lessonsLearned: 'Mijn bijdrage aan dit mooie project is het invullen van de wedstrijd statistieken tijdens de wedstrijd en zowel de stats van voorbije matches terug bekijken. Het laatste waar ik nog aan gewerkt heb, maar waar wel een andere teamgenoot nog bij geholpen heeft is het aanpassen van mail templates die verzonden werden naar de gebruikers.',
    futureImprovements: 'Het implementeren van een betalingssysteem zodat leden hun lidgeld werkelijk online kunnen betalen via de app en producten kunnen aankopen via de wel geimplementeerde groepsaankoop functionaliteit.',
    techStackReason: 'Laravel gekozen vanwege de snelle ontwikkelmogelijkheden en Tailwind CSS voor de utility-first styling. Inloggen op de app kan met het voorzitters account: voorzitter@duffalos.com en wachtwoord: preview2024.',
    projectUrl: 'https://duffalos.org',
  },
  {
    title: 'RoomService - Project 4.0',
    description: 'Een deskbooking-applicatie voor het beheren van kantoorruimtes en -middelen.',
    link: '/projects/roomservice',
    imageUrl: '/images/seats_home.jpg',
    tags: ['Angular', 'Java', 'Auth0'],
    slug: 'roomservice',
    features: [
      'Boek en beheer kantoorruimtes',
      'Real-time beschikbaarheidsupdates',
      'Progressive web app-functionaliteiten',
      'Opdracht voor Forward en Elision'
    ],
    technologies: 'Gebouwd met Angular en Java Spring Boot voor backend en real-time databasefunctionaliteit.',
    challenges: 'Efficiënte real-time data-synchronisatie implementeren en apparaatcompatibiliteit voor Android en iOS ondersteunen. Werknemers motiveren om de app te gebruiken en effectief naar het kantoor te laten komen in plaats van altijd thuis te werken.',
    screenshots: ['/images/seats_calendar.jpg', '/images/seats_list.jpg'],
    lessonsLearned: 'Praktische ervaring opgedaan in het bouwen van gebruiksvriendelijke interfaces voor boekingssystemen. Mijn bijdrage aan dit project was het implementeren van de kalenderweergave en de lijstweergave voor geplande reservaties. Ook heb ik de Progressive Web App-functionaliteit toegevoegd, zodat de applicatie gemakkelijk en snel toegankelijk is op het hoofdscherm van mobiele apparaten. Dit had ik nog nooit eerder gedaan, dus vond ik zeker interessant om eens te doen.',
    impact: 'Het boeken van werkplekken in gedeelde werkruimtes gestroomlijnd, waardoor productiviteit werd verhoogd en planningsconflicten werden verminderd. Ook het motiveren van werknemers om de app te gebruiken en effectief naar het kantoor te laten komen in plaats van altijd thuis te werken. Dit was het grootste pijnpunt van de klant.',
    techStackReason: 'Angular en Java Spring Boot gekozen vanwege hun enterprise-grade schaalbaarheid en Auth0 voor veilige authenticatie.',
  },
  {
    title: 'Mobile Auto Scanner',
    description: 'Een mobiele applicatie voor het scannen van voertuigen en het ophalen van voertuiggegevens.',
    link: '/projects/mobile-auto-scanner',
    imageUrl: '/images/homepage.webp',
    tags: ['Flutter', 'Vuforia', 'Unity'],
    slug: 'mobile-auto-scanner',
    features: [
      'Scannen van autos',
      'Ophalen van voertuiggegevens',
      'Real-time gegevensverwerking',
    ],
    technologies: 'Flutter voor de frontend, Vuforia voor AR-functionaliteit en Unity voor 3D-modellering. Voor de backend werd gewoon een JSON server gebruikt, aangezien de app niet gehost moet worden.',
    challenges: 'Nauwkeurige herkenning van autos en real-time gegevensverwerking. Ook was dit zo wat de eerste keer dat ik met AR-technologie werkte en met Flutter.',
    lessonsLearned: 'Ervaring opgedaan met AR-technologie en mobiele ontwikkeling. Het was enorm leuk om een keer met iets anders te werken dan altijd een web applicatie te maken in een JavaScript framework.',
    details: 'De app biedt een gebruiksvriendelijke interface voor het scannen en beheren van autos. Gebruikers kunnen opslaan welke voertuigen ze hebben gescand en hun gegevens bekijken. Ook is er een geschiedenisfunctie om terug te kijken welke voertuigen in het verleden gescand zijn.',
    techStackReason: 'Flutter gekozen voor cross-platform ontwikkeling en Vuforia voor AR-ondersteuning.',
    demoUrl: 'https://www.youtube.com/watch?v=bijHhvLTaSA&source_ve_path=OTY3MTQ',
  },
];