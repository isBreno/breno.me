'use client'

import { SiGithub as Github, SiLinkedin } from '@icons-pack/react-simple-icons'
import { Menu, Moon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

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

export const Header = () => {
  const pathname = usePathname()

  return (
    <header className="w-full flex  justify-between items-center my-10">
      <Link href="/">
        <Image src={'/logo.svg'} alt="logo" width={115} height={115} />
      </Link>

      <nav>
        <ul className="hidden sm:flex space-x-4 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                className={cn(
                  'text-foreground hover:text-highlight transition-colors',
                  pathname === link.href ? 'text-highlight' : '',
                )}
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
            <ul className="w-full my-4">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full">
                  <Link
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    className="text-foreground hover:bg-accent py-2 px-1 rounded text-center flex items-center justify-center transition-colors w-full"
                  >
                    {link.content}
                  </Link>
                </li>
              ))}
              <li className="w-full flex items-center justify-center">
                <button className="text-foreground hover:bg-accent py-2 px-1 rounded text-center flex items-center justify-center transition-colors w-full">
                  <Moon className={iconClass} />
                </button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
