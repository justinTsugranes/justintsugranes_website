import {
  // AdobeIcon,
  // MediumIcon,
  // StackBlitzIcon,
  // TwitterIcon
  CodepenIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon
} from '../assets';

export const navLinks = {
  home: {
    id: '/'
  },
  contactsuccess: {
    id: '/contact-success'
  },
  projects: {
    id: '/projects',
    title: 'Projects'
  },
  about: {
    id: '/about',
    title: 'About'
  },
  cv: {
    id: './cv',
    title: 'CV'
  }
};

export const socialMedia = [
  {
    id: 'linkedin',
    icon: <LinkedInIcon />,
    link: `https://linkedin.com/in/justin-tsugranes`
  },
  {
    id: 'github',
    icon: <GithubIcon />,
    link: `https://github.com/justintsugranes`
  },
  {
    id: 'codepen',
    icon: <CodepenIcon />,
    link: `https://codepen.io/justintsugranes`
  },
  {
    id: 'spotify',
    icon: <SpotifyIcon />,
    link: `https://open.spotify.com/artist/4vV18ClJAixgpNfKaJkEmR?si=bOY2nkJXT_esmViVXk6GbA`
  },
  {
    id: 'instagram',
    icon: <InstagramIcon />,
    link: `https://instagram.com/justintsugranes`
  }
  // {
  //   id: 'medium',
  //   icon: <MediumIcon />,
  //   link: `https://justintsugranes.medium.com`
  // },
  // {
  //   id: 'adobe',
  //   icon: <AdobeIcon/>,
  //   link: `https://${tags.adobe}.myportfolio.com/`
  // },
  // {
  //   id: 'stackblitz',
  //   icon: <StackBlitzIcon/>,
  //   link: `https://stackblitz.com/@${tags.stackblitz}`
  // },
  // {
  //   id: 'twitter',
  //   icon: <TwitterIcon/>,
  //   link: `http://twitter.com/${tags.twitter}`
  // },
  // {
  //   id: 'devto',
  //   icon: <DevToIcon/>,
  //   link: ``
  // },
];

export const user = {
  name: 'Justin Tsugranes',
  title: 'Web Developer, Digital Media Creator',
  resumeUrl:
    'https://docs.google.com/document/d/1gY7devKB9AqWcEZWi5jYOk-nbw-d6eSrRxpIUg9Uxtw/edit?usp=sharing'
};

export const about = {
  quote:
    'I believe the best designs are driven by user-centered, equity-focused principles that ensure any user from any nation can interact with your product from any device and any internet connection',
  bioOne: `I am a frontend web developer with 2 years of experience designing, building, and
      implementing web applications using JavaScript, JavaScript frameworks (React.js,
        Next.js), HTML, CSS, and CSS frameworks (TailwindCSS and Bootstrap). I have also used UI Libraries like Material UI, React-Bootstrap, and Chakra UI to build React apps.`,
  bioTwo: `I hold a Master of Arts degree, served 13 years as a member of the US Army Band,
      and have over 20 years of combined experience working with government entities,
      Fortune 500 companies, and international organizations across several industries,
      including media &amp; entertainment, IT, sales, marketing, real estate, and
      hospitality.`
};
