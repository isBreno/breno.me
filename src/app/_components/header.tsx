import { SiGithub as Github, SiLinkedin } from '@icons-pack/react-simple-icons'
import { Menu, Moon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

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
      <ul className="hidden sm:flex space-x-4 items-center">
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

      <Sheet>
        <SheetTrigger className="sm:hidden aspect-square px-1 hover:bg-accent transition-colors rounded">
          <Menu className={iconClass} />
        </SheetTrigger>

        <SheetContent className="w-full sm:hidden">
          <ul className="space-y-4">
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
        </SheetContent>
      </Sheet>
    </nav>
  </header>
)
