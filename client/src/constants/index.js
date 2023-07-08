import {
  CodepenIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon,
} from '../assets'

export const NAV_LINKS = {
  HOME: {
    id: '/',
  },
  CONTACT_SUCCESS: {
    id: '/contact-success',
  },
  PROJECTS: {
    id: '/projects',
    title: 'Projects',
  },
  ABOUT: {
    id: '/about',
    title: 'About',
  },
  CV: {
    id: './cv',
    title: 'CV',
  },
}

export const SOCIAL_MEDIA = [
  {
    id: 'linkedin',
    icon: <LinkedInIcon />,
    link: `https://linkedin.com/in/justin-tsugranes`,
  },
  {
    id: 'github',
    icon: <GithubIcon />,
    link: `https://github.com/justintsugranes`,
  },
  {
    id: 'codepen',
    icon: <CodepenIcon />,
    link: `https://codepen.io/justintsugranes`,
  },
  {
    id: 'spotify',
    icon: <SpotifyIcon />,
    link: `https://open.spotify.com/artist/4vV18ClJAixgpNfKaJkEmR?si=bOY2nkJXT_esmViVXk6GbA`,
  },
  {
    id: 'instagram',
    icon: <InstagramIcon />,
    link: `https://instagram.com/justintsugranes`,
  },
]
