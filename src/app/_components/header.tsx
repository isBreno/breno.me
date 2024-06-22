'use client'

import { Command, NotepadText, Notebook, Projector } from 'lucide-react'
import { SiGithub as Github, SiLinkedin } from '@icons-pack/react-simple-icons'
import { Menu, Moon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import useIsMobile from '@/hooks/useIsMobile'

const iconClass = 'w-5 h-5 text-foreground'

const navLinks = [
  { content: "Sobre", icon: NotepadText, href: '/' },
  { content:  "Projetos", icon: Projector, href: '/projects' },
  { content:  "Blog", icon: Notebook, href: '/blog' },
  {
    content: "Github",
    icon: Github,
    href: 'https://github.com/isBreno',
  },
  {
    content: "LinkedIn",
    icon: SiLinkedin,
    href: 'https://linkedin.com/in/brenovs',
  },
]

export const Header = () => {
  const pathname = usePathname()
  const isMobile = useIsMobile()

  return (
      <header className="py-3 px-3 w-full">
        <nav className="flex justify-between max-w-4xl mx-auto gap-3 items-center">
          <Link href="/">
            <Command />
          </Link>


          {isMobile ? (
          <Sheet >
  <SheetTrigger>
              <Menu size={18} />
            </SheetTrigger>
  <SheetContent className="w-full py-10">
    <SheetHeader>
      <SheetDescription>
          <ul className="flex flex-col items-start">
            {navLinks.map(({ icon: Icon, href, content }) => (
      
            <li className="w-full ">
              <Link
                className={cn("flex py-2 rounded transition-colors hover:bg-accent/40 w-full gap-1 items-center justify-center text-sm text-muted hover:text-foreground transition-colors font-medium", pathname === href ? "text-highlight" : "")}
                href={href}
              >
                <Icon size={14} />
                {content}
              </Link>
            </li>
            ))}
          </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
          ) : (

          <ul className="flex gap-3 items-center">
            {navLinks.map(({ icon: Icon, href, content }) => (
      
            <li>
              <Link
                className={cn("flex gap-1 items-center text-sm text-muted hover:text-foreground transition-colors font-medium", pathname === href ? "text-highlight" : "")}
                href={href}
              >
                <Icon size={14} />
                {content}
              </Link>
            </li>
            ))}
          </ul>
          )}
        </nav>
      </header>

  )
}
