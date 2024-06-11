import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
]

export const Header = () => (
  <header className="w-full flex  justify-between items-center my-10">
    <h1 className="text-3xl font-bold">breno.me</h1>

    <nav>
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-foreground hover:text-highlight transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
