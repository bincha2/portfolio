export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 4,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: 'MealGenie - AI Healthy Recipe Generator',
        award: '🏆 Winner: Best Ai Application with Cloudflare - DubHacks 24',
        desc: 'MealGenie was built to assist people in eating healthier with ingredients they had at hand, as well as accommodating for dietary restrictions and personal health goals',
        subdesc:
            'Integrated Cloudflare Workers API w Llama 3-8b instruct to generate healthy recipes with user input. Developed front-end with JavaScript, HTML, and CSS making Fetch API calls to back-end developed with Python (Flask). Collaborated effectively with team members and gained experience in front/back-end development, AI integration, and API calls during the Hackathon ',
        href: '',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/genie.jpg',
        logoStyle: {
            backgroundColor: '#000000',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            // {
            //     id: 1,
            //     name: 'cloudflare',
            //     path: '/assets/cloudflare.png',
            // },
            {
                id: 2,
                name: 'JavaScript',
                path: 'assets/javascript.png',
            },
            {
                id: 3,
                name: 'HTML',
                path: '/assets/html.webp',
            },
            {
                id: 4,
                name: 'CSS',
                path: '/assets/css.png',
            },
            {
                id: 5,
                name: 'Python',
                path: '/assets/Python-Emblem.png',
            },
        ],
    },
    {
        title: 'CueZine - Local Food Finding App',
        desc: 'CueZine is built to help streamline the process in finding places to eat. Drawing inspiration from dating applications mechanics, users can quickly discover new and unique places to eat in their local area with just a swipe  ',
        subdesc:
            'Integrated Google places API to efficiently retrieve restaurant data and address within a 5 miles radius of the user location. ' +
            'Developed front-end and back-end with React Native and Type Script through Expo Go for test-driven development.' +
            'Implemented react native deck swiper to mimic Tinder swiping mechanics to display available restaurants, calling API for each cuisine type. Used Expo Dynamic routing to have one constant page available to display various cuisines, and AsyncStorage to allow users to locally save favorited restaurants ',
        href: '',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/cuezinelogo.jpg',
        logoStyle: {
            backgroundColor: '#ecb6b6',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #36201D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Expo',
                path: '/assets/expo.png',
            },
            {
                id: 2,
                name: 'React',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'Yelp Fusion API',
                path: '/assets/yelp.png',
            },
        ],
    },
    {
        title: 'Personal Website',
        desc: 'The website you are looking at right now',
        subdesc:
            'Developed portfolio website using React.js, Three.js, Node.js, React Three Fiber, React Three Drei, and Tailwind CSS. Used Vite for the development server as well as implemented interactive globe through react-globe.gl ',
        href: '',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/stars.jpg',
        logoStyle: {
            backgroundColor: '#000000',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #FFFFFFB3',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'ThreeJS',
                path: '/assets/threeJS.png',
            },
        ],
    },
    {
        title: 'Banking Application',
        desc: 'Final Project for CSS342 - Data Structures & Algorithms 1',
        subdesc:
            'Developed in purely C++, the CLI Banking Application is console based utilizing file based inputs to manage transactions. These transactions included creating a user account, tracking the fund and account history, depositing and withdrawing funds, and transferring between funds and accounts. Implemented Binary Search Tree to store user information and retrieve account data',
        href: '',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/bank.png',
        logoStyle: {
            backgroundColor: '#ffffff',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'cpp',
                path: '/assets/cpp.png',
            }
        ],
    }
]

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile || isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile || isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

