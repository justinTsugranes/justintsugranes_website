import { CodepenIcon, GithubIcon, InstagramIcon, LinkedInIcon, SpotifyIcon } from '../assets'

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
}

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
]
