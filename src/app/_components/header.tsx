import {
  SiGithub as Github,
  SiFiverr,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'
import { Moon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const iconClass = 'w-5 h-5 text-foreground'

const navLinks = [
  { content: 'About', href: '/' },
  { content: 'Projects', href: '/projects' },
  { content: 'Blog', href: '/blog' },
  {
    content: <Github className={iconClass} />,
    href: 'https://github.com/isBreno',
  },
  {
    content: <SiLinkedin className={iconClass} />,
    href: 'https://linkedin.com/in/brenovs',
  },
]

export const Header = () => (
  <header className="w-full flex  justify-between items-center my-10">
    <Image src={'/logo.svg'} alt="logo" width={115} height={115} />

    <nav>
      <ul className="flex space-x-4 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target="_blank"
              className="text-foreground hover:text-highlight transition-colors"
            >
              {link.content}
            </Link>
          </li>
        ))}
        <Moon className={iconClass} />
      </ul>
    </nav>
  </header>
)
