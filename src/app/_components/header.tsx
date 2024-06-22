'use client'

import { Command, NotepadText, Notebook, Projector } from 'lucide-react'
import { SiGithub as Github, SiLinkedin } from '@icons-pack/react-simple-icons'
import { Menu, Moon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const iconClass = 'w-5 h-5 text-foreground'

const navLinks = [
  { content: "Sobre", icon: NotepadText, href: '/' },
  { content:  "Projetos", icon: Projector, href: '/projects' },
  { content:  "Blog", icon: Notebook, href: '/blog' },
  {
    content: "",
    icon: Github,
    href: 'https://github.com/isBreno',
  },
  {
    content: "",
    icon: SiLinkedin,
    href: 'https://linkedin.com/in/brenovs',
  },
]

export const Header = () => {
  const pathname = usePathname()

  return (
      <header className="py-3 px-3 w-full">
        <nav className="flex justify-between max-w-4xl mx-auto gap-3 items-center">
          <Link href="/">
            <Command />
          </Link>

          <ul className="flex gap-3 items-center">
            {navLinks.map(({ icon: Icon, href, content }) => (
      
            <li>
              <Link
                className="flex gap-1 items-center text-sm text-muted hover:text-foreground transition-colors font-medium"
                href={href}
              >
                <Icon size={14} />
                {content}
              </Link>
            </li>
            ))}
          </ul>
        </nav>
      </header>

  )
}
