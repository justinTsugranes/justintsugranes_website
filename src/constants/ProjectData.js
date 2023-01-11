import {
  // bandWebsite,
  // blackjack,
  // boredomterminator,
  // businessCard,
  // coworkingSpace,
  // goople,
  // ilovelucy,
  // imageMapping,
  // kittyStories,
  // lotto,
  // mangata,
  // nextBlog,
  // oldagram,
  // reactTacToe,
  // reactTodo,
  // recipes,
  // scoreCard,
  // unitConverter,
  // weblog,
  // webFlix,
  bankingApp,
  crashCourses,
  ecommerce,
  frontendBootcamp,
  fullstackStore,
  gpt3,
  landingPage,
  megamask,
  metaversus,
  misfitdodo,
  museract,
  nextTailwindBlog,
  passwordGenerator,
  personalWebsite,
  restaurantApp,
  shareme
} from '../assets';

export const projects = [
  // {
  //   id: 'project_template',
  //   title: '',
  //   descr: '',
  //   tech: '',
  //   imageUrl: ,
  //   demo: '',
  //   repo: ''
  // },
  {
    id: 'misfitdodo',
    title: 'misfitDodo Official Website',
    descr:
      'The official website for misfitDodo Media. The website was built using React.js and SanityCMS. The website features Framer Motion.',
    tech: 'React.js, Sanity CMS, Framer Motion',
    imageUrl: misfitdodo,
    demo: 'https://misfitdodo.vercel.app/',
    repo: 'https://github.com/justinTsugranes/project_misfitdodo-website'
  },
  {
    id: 'ecommerce',
    title: 'e-Commerce App',
    descr:
      'This is an ecommerce app built with the Next.js framework and Sanity CMS as the backend. It features a homepage that displays a hero banner and a list of products. The hero banner and products are sourced from the Sanity CMS. The app also has a footer banner that is sourced from the Sanity CMS. Users can browse and purchase the products. The app uses the Stripe API to handle payments.',
    tech: 'Next.js, Sanity CMS, Stripe',
    imageUrl: ecommerce,
    demo: 'https://justintsugranes-ecommerce-next-sanity-stripe.vercel.app/',
    repo: 'https://github.com/justinTsugranes/project_ecommerce-next-sanity-stripe'
  },
  {
    id: 'metaversus',
    title: 'MetaVersus',
    descr:
      'MetaVersus is a responsive and animated landing page for a metaverse company. The project was built using Next.js 13 and Tailwind CSS, with a focus on using Framer Motion animations to bring the design to life. The project was based off of a Figma design by One Week Wonders Agency, and was designed to showcase the capabilities of a metaverse company.',
    tech: 'Next.js, TailwindCSS, Framer Motion',
    imageUrl: metaversus,
    demo: 'https://justin-tsugranes-metaversus.vercel.app/',
    repo: 'https://github.com/justinTsugranes/project_metaversus'
  },
  {
    id: 'shareme',
    title: 'ShareMe',
    descr:
      'ShareMe is a full stack social app built with React.js. The project utilizes TailwindCSS for styling, Sanity CMS for content management, and Google Auth for user authentication. It is designed to allow users to connect with one another and share their interests and experiences.',
    tech: 'React.js, TailwindCSS, Sanity CMS, Google Auth',
    imageUrl: shareme,
    demo: 'https://github.com/justinTsugranes/project_shareme',
    repo: 'https://github.com/justinTsugranes/project_shareme'
  },
  {
    id: 'restaurantapp',
    title: 'Fine Dining Restaurant App',
    descr:
      "A mobile-first web application created for a fictitious fine dining establishment. The app was created with React and includes several React Icons for a visually appealing and intuitive user experience. Users can browse the restaurant's menu, make reservations, and learn more about the restaurant's history and mission through the app, which is hosted on Netlify. The app also includes a contact form where users can contact the restaurant with questions or special requests. Overall, the design aims to provide users with a simple and seamless way to discover and interact with the restaurant",
    tech: 'React, React Icons, Netlify',
    imageUrl: restaurantApp,
    demo: 'https://justintsugranes-restaurant-app.netlify.app/',
    repo: 'https://github.com/justinTsugranes/project_restaurant-app'
  },
  {
    id: 'bankingapp',
    title: 'Modern Banking App',
    descr:
      'This Modern Banking App is a responsive frontend web application designed to provide a sleek and intuitive interface for managing personal finances. Built using React and TailwindCSS, the app features a clean and modern design that is easy to navigate and use.',
    tech: 'React, TailwindCSS, Netlify',
    imageUrl: bankingApp,
    demo: 'https://justintsugranes-modern-bank-app.netlify.app/',
    repo: 'https://github.com/justinTsugranes/project_modern-bank-app'
  },
  {
    id: 'gpt3',
    title: 'GPT-3 Landing Page',
    descr:
      'Frontend application built using React.js that utilizes HTML and CSS for styling and layout. The user interface is clean, visually appealing, responsive, and user-friendly, allowing users to easily navigate and learn about GPT-3 AI.',
    tech: 'React.js, HTML, CSS, Netlify',
    imageUrl: gpt3,
    demo: 'https://justin-tsugranes-gpt3.netlify.app/',
    repo: 'https://github.com/justinTsugranes/project_jsm-gpt-3'
  },
  {
    id: 'frontendbootcamp',
    title: 'Frontend Bootcamp',
    descr:
      'This Frontend Bootcamp project is a responsive landing page that was created to showcase an example of a bootcamp program focused on frontend development. The page features a clean, modern design, with various sections detailing the curriculum and instructors. The page makes use of Bootstrap and React to provide a seamless user experience, with MapBox GL used for the contact section, unDraw for the graphics, and FontAwesome and LoremPicsum for the avatars. The project was deployed using Netlify, and the code is available for viewing on GitHub.',
    tech: 'Bootstrap, React Netlify',
    imageUrl: frontendBootcamp,
    demo: 'https://justin-tsugranes-bootstrap-example01.netlify.app',
    repo: `https://github.com/justintsugranes/project_bootstrap-frontend-example`
  },
  {
    id: 'fullstackstore',
    title: 'Fullstack Stripe Store',
    descr:
      'The Fullstack Stripe Store is a full-stack ecommerce application that allows users to purchase products using the Stripe payment platform. The frontend of the application was built with React and React-Bootstrap, while the backend was built with Express and Node.js. The application also utilizes Netlify for deployment. With this project, I gained experience in creating a complete ecommerce solution, including handling payment processing and securely storing sensitive customer information. The project also included features such as a shopping cart and a product catalog. Overall, this project provided me with a comprehensive understanding of how to build a full-stack ecommerce application from start to finish.',
    tech: 'React-Bootstrap, React, Express, Node.js, Stripe, Netlify',
    imageUrl: fullstackStore,
    demo: 'https://justintsugranes-react-stripe-store.netlify.app/',
    repo: `https://github.com/justinTsugranes/project_react-stripe-store`
  },
  {
    id: 'landingpage',
    title: 'Landing Page',
    descr:
      "This 'Landing Page' project is a responsive website designed for a fictional company. It was built using React and Bootstrap, and follows a design specification created in Figma. The project theoritically includes several pages, including a home page, about us page, and contact page. The home page features a full-width hero image, along with sections for product features, customer testimonials, and a call to action. Overall, the project showcases my ability to create a visually appealing and functional landing page website using modern web development tools.",
    tech: 'React, Bootstrap, HTML, CSS, Figma',
    imageUrl: landingPage,
    demo: 'https://justin-tsugranes-landing-page-example.netlify.app',
    repo: `https://github.com/justintsugranes/project_react_landing_page`
  },
  {
    id: 'nexttailwindblog',
    title: 'Next.js Tailwind Blog',
    descr:
      'The Next.js Tailwind Blog is an interactive project that demonstrates my skills in building a responsive and feature-rich blog website using Next.js and TailwindCSS. This project required me to utilize Next.js routing and API fetching, as well as implementing Swiper for interactive scrolling and working with React functional components. In addition, I was able to showcase my proficiency in HTML and CSS through the design and layout of the website. ',
    tech: 'HTML, CSS',
    imageUrl: nextTailwindBlog,
    demo: 'https://blog-website-using-next-tailwind.vercel.app',
    repo: 'https://github.com/justinTsugranes/tutorial_blog-website-using-next-tailwind'
  },
  {
    id: 'crashcourse',
    title: 'Crash Courses',
    descr:
      'The Crash Courses project is a website that I developed to consolidate my notes from a variety of coding crash courses that I completed on the Codevolution YouTube channel. These courses covered a range of topics, including HTML, CSS, Flexbox, Grid, and JavaScript. I used JavaScript, HTML, and CSS to create the website, which was then deployed on Netlify. The website serves as a reference resource for me to quickly access the key concepts and techniques that I learned from the crash courses, and also serves as a portfolio piece to showcase my skills in web development.',
    tech: 'JavaScript, HTML, CSS, Netlify',
    imageUrl: crashCourses,
    demo: 'https://justin-tsugranes-coding-crash-courses.netlify.app',
    repo: 'https://github.com/justinTsugranes/project_codevolution-crash-courses'
  },
  {
    id: 'megamask',
    title: 'MegaMask',
    descr:
      'MegaMask is a user interface (UI) clone of the popular Web3 Wallet, MetaMask. It was built using JavaScript, HTML, and CSS. The project aims to replicate the look and feel of the original MetaMask app, including its features and functionality. This project was created as a way to familiarize myself with the design and functionality of Web3 Wallets and to practice my front-end development skills.',
    tech: 'JavaScript, HTML, CSS',
    imageUrl: megamask,
    demo: 'https://justin-tsugranes-megamask.netlify.app',
    repo: 'https://github.com/justinTsugranes/project_metamask-clone'
  },
  {
    id: 'passwordgenerator',
    title: 'Password Generator',
    descr:
      'A web-based tool for generating secure, random passwords. The tool allows users to specify the length of the password and is setup to be deployed in the Chrome Web Store as a Chrome Extension. This project was built using JavaScript, HTML, and CSS, and was an opportunity to learn more about random number generation and implementing user input in a web application',
    tech: 'JavaScript, HTML, CSS',
    imageUrl: passwordGenerator,
    demo: 'https://justin-tsugranes-password-generator.netlify.app',
    repo: 'https://github.com/justinTsugranes/project_password-generator'
  },
  {
    id: 'personalwebsite',
    title: 'My Personal Website',
    descr:
      'My personal website is a portfolio website that showcases my recent coding projects. It was built using React, Bootstrap, HTML, and CSS, and makes use of the Swiper library for interactive scrolling, the Framer Motion library for animations, and Type-Animation for engaging text effects on the home page. The website is continuously integrated through GitHub and deployed on Netlify. The website serves as a platform for me to share my work and connect with potential employers or clients..',
    tech: 'React, Bootstrap, HTML, CSS, Framer Motion, Swiper, Type-Animation',
    imageUrl: personalWebsite,
    demo: 'http://www.justintsugranes.com',
    repo: 'https://github.com/justinTsugranes/justintsugranes_website'
  },
  {
    id: 'museract',
    title: 'Museract',
    descr:
      'Museract is a social media messaging app for musicians. With this project, I had the opportunity to learn about the JS .forEach() method, how to use CDNs, and how to conditionally render styles. The app allows musicians to create profiles, connect with other musicians, and send messages to each other. It was built using JavaScript, HTML, and CSS, and includes features such as FontAwesome icons and the use of UUIDs to uniquely identify users. The app is deployed on Netlify',
    tech: 'JavaScript, HTML, CSS, FontAwesome, UUIDs',
    imageUrl: museract,
    demo: 'https://justin-tsugranes-museract-app.netlify.app',
    repo: 'https://github.com/justinTsugranes/project_museract'
  }
  // {
  //   id: 'coworkingspaces',
  //   title: 'Coworking Space App',
  //   descr:
  //     'The Coworking Space App is a web application that allows users to book coworking spaces in their local area. The app has a responsive design and is optimized for mobile use. It was built using React and JavaScript, and features a clean and modern user interface.',
  //   tech: 'React, JavaScript',
  //   imageUrl: coworkingSpace,
  //   demo: 'https://justin-tsugranes-coworking-space-app.netlify.app',
  //   repo: `https://github.com/justintsugranes/project_coworking-spaces`
  // },
  // {
  //   id: 'reacttodo',
  //   title: 'React Todo',
  //   descr:
  //     'The React Todo project is a web app that allows users to create and manage their own personal to-do lists. The project was built using React.js and makes use of HTML and CSS for the front-end styling. The project includes features such as adding, editing, and deleting to-do items, as well as marking items as complete or incomplete. The project is hosted on StackBlitz and the source code is available on GitHub for anyone to view or use as a reference.',
  //   tech: 'React, JavaScript, HTML, CSS',
  //   imageUrl: reactTodo,
  //   demo: 'https://to-do-react-app.stackblitz.io',
  //   repo: 'https://github.com/justinTsugranes/tut_todo-react-app'
  // }
  // {
  //   id: 'weblog',
  //   title: 'Blog using Fetch',
  //   descr:
  //     'An example blog app where I learned more about REST APIs, resources, parameters, queries, HTTP Requests, URL endpoints, methods, and headers. Project uses the JSONPLaceholder API',
  //   tech: 'JavaScript, Fetch, HTML, CSS',
  //   imageUrl: weblog,
  //   demo: 'https://justin-tsugranes-blog-example.netlify.app',
  //   repo: 'https://github.com/justinTsugranes/project_weblog'
  // }
  // {
  //   id: 'boredomterminator',
  //   title: 'Boredom Terminator',
  //   descr:
  //     'An idea generator app that uses the App uses the Bored API where I leared more about Servers and Clients, Request/Response Cycle, APIs, JSON, fetch syntax',
  //   tech: 'JavaScript, Fetch, HTML, CSS',
  //   imageUrl: boredomterminator,
  //   demo: 'https://justin-tsugranes-boredom-terminator.netlify.app',
  //   repo: 'https://github.com/justinTsugranes/project_boredom-terminator'
  // }
  // {
  //   id: 'recipes',
  //   title: 'Recipes',
  //   descr: 'A website showcasing my favorite carb-loaded breakfast recipes',
  //   tech: 'HTML, CSS',
  //   imageUrl: recipes,
  //   demo: 'https://justin-tsugranes-breakfast-recipes.netlify.app',
  //   repo: `https://github.com/justintsugranes/project_recipe-website`
  // },
  // {
  //   id: 'oldagram',
  //   title: 'Oldagram',
  //   descr: 'A UI clone of Instagram',
  //   tech: 'JavaScript, HTML, CSS',
  //   imageUrl: oldagram,
  //   demo: 'https://justin-tsugranes-oldagram.netlify.app',
  //   repo: 'https://github.com/justinTsugranes/project_oldagram'
  // },
  // {
  //   id: 'bandwebsite',
  //   title: 'Band Website',
  //   descr: 'A band website built using vanilla JavaScript, HTML, and CSS',
  //   tech: 'JavaScript, HTML, CSS',
  //   imageUrl: bandWebsite,
  //   demo: 'https://justin-tsugranes-band-website-ex.netlify.app',
  //   repo: 'https://github.com/justinTsugranes/proj_band-website'
  // },
  // {
  //   id: 'unitconverter',
  //   title: 'Unit Converter',
  //   descr: 'Ui for a Metric Converter',
  //   tech: 'HTML, CSS',
  //   imageUrl: unitConverter,
  //   demo: 'https://justin-tsugranes-unit-converter.netlify.app',
  //   repo: 'https://github.com/justinTsugranes/project_unit-converter'
  // },
  // {
  //   id: 'scorecard',
  //   title: 'Scorecard',
  //   descr: 'A basketball scorecard that keeps track of the scores of two teams',
  //   tech: 'JavaScript, HTML, CSS',
  //   imageUrl: scoreCard,
  //   demo: 'https://justin-tsugranes-scorecard.netlify.app/',
  //   repo: 'https://github.com/justinTsugranes/project_scorecard'
  // }
  // {
  //   id: 'blackjack',
  //   title: 'Blackjack',
  //   descr:
  //     'A JavaScript implementation of the classic casino game, Blackjack where I learned more about data types, if/else statements, loops, Math objects, and object-oriented programming',
  //   tech: 'JavaScript, HTML, CSS',
  //   imageUrl: blackjack,
  //   demo: 'https://justin-tsugranes-blackjack.netlify.app',
  //   repo: 'https://github.com/justinTsugranes/project_blackjack'
  // },
  // {
  //   id: 'lotto',
  //   title: "Justin's Lucky Lottery",
  //   descr:
  //     'A project that maps shapes over an image using coordinates and makes those areas interactive',
  //   tech: 'JavaScript, HTML, CSS',
  //   imageUrl: lotto,
  //   demo: 'https://justin-tsugranes-lotto-app.netlify.app/',
  //   repo: 'https://github.com/justinTsugranes/project_lotto'
  // }
];
