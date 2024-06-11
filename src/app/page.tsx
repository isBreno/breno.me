import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="md:max-w-2xl mx-auto px-8">
        <div className="my-20">
          <h1 className="text-4xl font-bold">Welcome to breno.me</h1>
          <p className="mt-8">Hello, i am Breno Vieira, a web developer.</p>

          <p className="mt-3">
            I started to learn web development at 2021 in my free time due to
            pandemic and my love for technology and computers, since then i have
            been building web applications for fun and facilitate my tasks.
          </p>

          <p className="mt-2">
            Now i want to use these knowledge to my future, and for that i am
            looking for a job.
          </p>

          <p className="mt-2">
            Let me introduce myself better. My name is Breno Vieira, i am 18
            years old, i live at Rio de Janeiro, Brazil. I like to code and play
            games with my friends, sometimes i watch some animes too.
          </p>

          <h2 className="mt-8 font-bold text-2xl">Experience</h2>

          <p className="mt-2">
            Currently i don&apos;t have any professional experience in web
            development. But i have been working with some technologies in my
            personal projects to adquire some knowledge, i got a lot of
            experience with:{' '}
            {['React', 'Next.js', 'TailwindCSS', 'Typescript', 'Vite'].map(
              (item, index) => (
                <>
                  {index === 0 ? '' : ', '}
                  <Link
                    className="underline inline underline-[#f7ab0a] rounded font-medium"
                    key={item}
                    href="https://reactjs.org"
                  >
                    {item}
                  </Link>
                </>
              ),
            )}
            .
          </p>

          <h2 className="mt-8 font-bold text-2xl">Socials</h2>

          <p className="mt-2">
            Connect with me on{' '}
            <Link
              className="underline inline underline-[#f7ab0a] rounded font-medium"
              href="https://github.com/brenovieira"
            >
              Github
            </Link>
            {', '}
            <Link
              className="underline inline underline-[#f7ab0a] rounded font-medium"
              href="https://www.linkedin.com/in/brenovieira"
            >
              Linkedin
            </Link>
            {', '}
            <Link
              className="underline inline underline-[#f7ab0a] rounded font-medium"
              href="https://twitter.com/brenovieira"
            >
              Twitter
            </Link>
            {' or '}
            <Link
              className="underline inline underline-[#f7ab0a] rounded font-medium"
              href="https://www.instagram.com/brenovieira"
            >
              Fiverr
            </Link>
            .
          </p>

          <p className="mt-2">
            You can also contact me by email at{' '}
            <Link
              className="underline inline underline-[#f7ab0a] rounded font-medium"
              href="mailto:9Ku5j@example.com"
            >
              9Ku5j@example.com
            </Link>
            .
          </p>

          <h2 className="mt-8 font-bold text-2xl">Thank you for visiting</h2>

          <p className="mt-2">
            Have a nice day! You can also check my blog and projects by clicking
            on the links in the navigation bar.{' '}
          </p>

          <span className="text-center mt-16 block text-muted">
            © 2024 breno.me
          </span>
        </div>
      </main>
    </>
  )
}
