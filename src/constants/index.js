import {
  LinkedInIcon,
  GithubIcon,
  CodepenIcon,
  MediumIcon,
  SpotifyIcon,
  InstagramIcon
} from '../assets';

export const nav = {
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

export const tags = {
  adobe: 'justintsugranes',
  codepen: 'justintsugranes',
  github: 'justintsugranes',
  instagram: 'justintsugranes',
  linkedin: 'justin-tsugranes',
  medium: 'justintsugranes',
  spotify: 'https://open.spotify.com/artist/4vV18ClJAixgpNfKaJkEmR?si=bOY2nkJXT_esmViVXk6GbA',
  stackblitz: 'justinTsugranes',
  twitter: 'justintsugranes'
};

export const socialLinks = {
  adobe: `https://${tags.adobe}.myportfolio.com/`,
  codepen: `https://codepen.io/${tags.codepen}`,
  github: `https://github.com/${tags.github}`,
  instagram: `https://instagram.com/${tags.instagram}`,
  linkedin: `https://linkedin.com/in/${tags.linkedin}`,
  medium: `https://${tags.medium}.medium.com`,
  spotify: `https://open.spotify.com/artist/4vV18ClJAixgpNfKaJkEmR?si=bOY2nkJXT_esmViVXk6GbA`,
  stackblitz: `https://stackblitz.com/@${tags.stackblitz}`,
  twitter: `http://twitter.com/${tags.twitter}`,
  website: `https://justintsugranes.com`
};

export const socialMedia = [
  {
    id: 'linkedin',
    icon: <LinkedInIcon />,
    link: `https://linkedin.com/in/${tags.linkedin}`
  },
  {
    id: 'github',
    icon: <GithubIcon />,
    link: `https://github.com/${tags.github}`
  },
  {
    id: 'codepen',
    icon: <CodepenIcon />,
    link: `https://codepen.io/${tags.codepen}`
  },
  {
    id: 'medium',
    icon: <MediumIcon />,
    link: `https://${tags.medium}.medium.com`
  },
  {
    id: 'spotify',
    icon: <SpotifyIcon />,
    link: `https://open.spotify.com/artist/4vV18ClJAixgpNfKaJkEmR?si=bOY2nkJXT_esmViVXk6GbA`
  },
  {
    id: 'instagram',
    icon: <InstagramIcon />,
    link: `https://instagram.com/${tags.instagram}`
  }
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
];

// export const socialMedia = [
//   {
//     id: 'social-media-1',
//     icon: LinkedInIcon,
//     link: socialLinks.linkedin
//   },
//   {
//     id: 'social-media-2',
//     icon: GithubIcon,
//     link: socialLinks.github
//   },
//   {
//     id: 'social-media-3',
//     icon: CodepenIcon,
//     link: socialLinks.codepen
//   },
//   {
//     id: 'social-media-4',
//     icon: MediumIcon,
//     link: socialLinks.medium
//   },
//   {
//     id: 'social-media-5',
//     icon: SpotifyIcon,
//     link: socialLinks.spotify
//   },
//   {
//     id: 'social-media-6',
//     icon: InstagramIcon,
//     link: socialLinks.instagram
//   }
// ];

export const user = {
  name: 'Justin Tsugranes',
  title: 'Web Developer, Digital Media Creator'
};

export const about = {
  quote:
    'I believe the best designs are driven by user-centered, equity-focused principles that ensure any user from any nation can interact with your product from any device and any internet connection',
  bioOne: `I am a frontend web developer with 2 years of experience designing, building, and
      implementing web applications using JavaScript, JavaScript frameworks (React.js,
        Next.js), HTML, CSS, and CSS frameworks (Bootstrap).`,
  bioTwo: `I hold a Master of Arts degree, served 13 years as a member of the US Army Band,
      and have over 20 years of combined experience working with government entities,
      Fortune 500 companies, and international organizations across several industries,
      including media &amp; entertainment, IT, sales, marketing, real estate, and
      hospitality.`
};

export const experience = [
  {
    resumeUrl:
      'https://docs.google.com/document/d/1gY7devKB9AqWcEZWi5jYOk-nbw-d6eSrRxpIUg9Uxtw/edit?usp=sharing'
  },
  {
    title: 'Frontend Developer',
    company: 'misfitDodo Media',
    year: '2021',
    companyLink: '',
    description: ''
  }
];
