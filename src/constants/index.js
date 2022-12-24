import {
  LinkedInIcon,
  GithubIcon,
  CodepenIcon,
  MediumIcon,
  SpotifyIcon,
  InstagramIcon
} from '../components/icons';

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

export const socialLinks = [
  {
    adobe: 'https://justintsugranes.myportfolio.com/',
    audius: '',
    codepen: 'https://codepen.io/justintsugranes',
    github: `https://github.com/justintsugranes`,
    flickr: '',
    instagram: 'https://instagram.com/justintsugranes',
    linkedin: 'https://linkedin.com/in/justintsugranes',
    medium: 'https://justintsugranes.medium.com',
    spotify: 'https://open.spotify.com/artist/4vV18ClJAixgpNfKaJkEmR?si=bOY2nkJXT_esmViVXk6GbA',
    stackblitz: 'https://stackblitz.com/@justinTsugranes',
    twitter: 'http://twitter.com/justintsugranes',
    website: 'https://justintsugranes.com'
  }
];

export const socialTags = [
  {
    adobe: '',
    audius: '',
    email: 'justintsugranes@proton.me',
    github: 'justintsugranes'
  }
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: LinkedInIcon,
    link: socialLinks.linkedin
  },
  {
    id: 'social-media-2',
    icon: GithubIcon,
    link: socialLinks.github
  },
  {
    id: 'social-media-3',
    icon: CodepenIcon,
    link: socialLinks.codepen
  },
  {
    id: 'social-media-4',
    icon: MediumIcon,
    link: socialLinks.medium
  },
  {
    id: 'social-media-5',
    icon: SpotifyIcon,
    link: socialLinks.spotify
  },
  {
    id: 'social-media-6',
    icon: InstagramIcon,
    link: socialLinks.instagram
  }
];

export const user = {
  name: 'Justin Tsugranes',
  designation: 'Web Developer, Digital Media Creator'
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
