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
  title: 'Web Developer, Digital Media Creator'
};

export const about = {
  name: 'Justin Tsugranes',
  title: 'Web Developer, Digital Media Creator',
  quote:
    'I believe the best designs are driven by user-centered, equity-focused principles that ensure any user from any nation can interact with your product from any device and any internet connection',
  bioOne: `As a front-end web developer with experience in full-stack and back-end development, I specialize in solving the problem of creating high-performing, user-friendly web applications and communicating with non-technical clients.`,
  bioTwo: `I hold a Master of Arts degree, served 13 years as a member of the US Army Band,
      and have over 20 years of combined experience working with government entities,
      Fortune 500 companies, and international organizations across several industries,
      including media & entertainment, IT, sales, marketing, real estate, and
      hospitality.`,
  bioThree: `Outside of work, I am an avid learner and enjoy tinkering with new software and apps.  When I'm not coding, I'm usually writing music, playing guitar, hiking, reading non-fiction, or spending time with my wife and son.`
};
