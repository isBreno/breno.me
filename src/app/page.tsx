<<<<<<< HEAD
import { Command, Notebook, NotepadText, Projector } from "lucide-react";
import Link from "next/link";
import { socials } from '@/app/variables'
=======
'use client'

import Link from 'next/link'
import {
  mySocials as socials,
  myTechnologies as technologies,
} from '@/variables'
import { Strong } from './_components/ui/strong'
import { Heading } from './_components/ui/heading'
import { Paragraph } from './_components/ui/paragraph'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './_components/ui/tooltip'
import { Header } from './_components/header'
>>>>>>> 351d5497819b1cf61a92f204b563b05e94a516df

const technologies = ["TailwindCSS", "Typescript", "Vite", "Testing", "Databases", "Git", "NodeJS"]

export default function Page() {
  return (
<<<<<<< HEAD
    <div>
      <header className="py-3 px-3 w-full">
        <nav className="flex justify-between max-w-4xl mx-auto gap-3 items-center">
          <Link href="/">
            <Command />
          </Link>

          <ul className="flex gap-3 items-center">
            <li>
              <Link
                className="flex gap-1 items-center text-sm text-muted hover:text-foreground transition-colors font-medium"
                href="/"
              >
                <NotepadText size={14} /> Sobre
              </Link>
            </li>

            <li>
              <Link
                className="flex gap-1 items-center text-sm text-muted hover:text-foreground transition-colors font-medium"
                href="/projects"
              >
                <Projector size={14} /> Projetos
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-1 items-center text-sm text-muted hover:text-foreground transition-colors font-medium"
                href="/blog"
              >
                <Notebook size={14} /> Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>


      <div className="my-6 px-3 max-w-3xl mx-auto">
        <span className="text-muted text-sm leading-tigh">Hello, i am</span>
        <h3 className="text-3xl font-bold leading-relaxed">Breno Vieira</h3>

        <p className="leading-relaxed">
          Hi there, I'm Breno Vieira, a web developer. I started diving into web development back in 2021 during the pandemic out of my deep interest in technology and computers. Since then, I've been happily building web applications for both leisure and to make my daily tasks easier. Now, I'm eager to leverage my skills for a career and actively seeking opportunities.

            <br /> <br />
          Let me share a bit more about myself. I'm Breno Vieira, 18 years old, based in Rio de Janeiro, Brazil. When I'm not coding, you'll find me gaming with friends or catching up on my favorite anime series.
        </p>


        <div className="space-y-4 mt-4">
          <div className="space-y-3">
            <h4 className='text-2xl font-bold'>Experiences</h4>
            <p>Currently i don't have any professional experience in web development. But i have been working with some technologies in my personal projects to adquire some knowledge, i got a lot of experience with: {technologies.join(", ").split("").map(tech => <strong key={tech} className="font-bold text-highlight">{tech}</strong>)} and much more...</p>
          </div>

          <div className="space-y-3">
            <h4 className='text-2xl font-bold'>Socials</h4>
            <p> Connect with me on{' '}
=======
    <>
      <div className="px-6">
        <Header />
      </div>
      <main className="md:max-w-2xl mx-auto px-8">
        <div className="w-full">
          <div className="w-1/12 rounded my-2 bg-info h-px"></div>
          <Heading level={1}>Welcome to breno.me</Heading>
          <section className="space-y-3 my-6">
            <div className="space-y-3">
              <Paragraph>
                Hello, i am Breno Vieira, a <Strong>web developer</Strong>. I
                started to learn web development at 2021 in my free time due to
                pandemic and my love for technology and computers, since then i
                have been building web applications for fun and facilitate my
                tasks.
              </Paragraph>

              <Paragraph>
                Now i want to use these knowledge to my future, and for that i
                am looking for a job.
              </Paragraph>

              <Paragraph>
                Let me introduce myself better. My name is Breno Vieira, i am 18
                years old, i live at Rio de Janeiro, Brazil. I like to code and
                play games with my friends, sometimes i watch some animes too.
              </Paragraph>
            </div>
          </section>

          <section className="space-y-3 my-6">
            <Heading level={3}>Experiences</Heading>

            <div>
              <Paragraph>
                Currently{' '}
                <Strong>
                  i don&apos;t have any professional experience in web
                  development
                </Strong>
                . But i have been working with some technologies in my personal
                projects to adquire some knowledge, i got a lot of experience
                with:{' '}
                {technologies.map(({ name, url, description }, index) => (
                  <>
                    {index === 0 ? '' : ', '}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Link
                            className="underline inline underline-[#f7ab0a] rounded font-medium"
                            key={name}
                            href={url}
                            target="_blank"
                          >
                            {name}
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent className="text-sm bg-info px-2 py-1 rounded">
                          {description}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </>
                ))}{' '}
                and much more.
              </Paragraph>
            </div>
          </section>

          <section className="space-y-3 my-6">
            <Heading level={3}>Socials</Heading>

            <div>
              <Paragraph>
                Connect with me on{' '}
>>>>>>> 351d5497819b1cf61a92f204b563b05e94a516df
                {socials.map(({ name, url }, index) => (
                  <>
                    {index === 0 ? '' : ', '}
                    <Link
                      className="underline inline underline-[#f7ab0a] rounded font-medium"
                      key={name}
                      href={url}
                      target="_blank"
                    >
                      {name}
                    </Link>
                  </>
                ))}
<<<<<<< HEAD
                <br />
            </p>
                <p>You can also contact me at   <Link
=======
              </Paragraph>

              <Paragraph>
                You can also contact me by email at{' '}
                <Link
>>>>>>> 351d5497819b1cf61a92f204b563b05e94a516df
                  className="underline inline underline-[#f7ab0a] rounded font-medium"
                  href="mailto:eusoubrenovieira@gmail.com"
                >
                  eusoubrenovieira@gmail.com
<<<<<<< HEAD
                </Link></p>
          </div>
        </div>

        <span className="block w-fit mx-auto my-8 text-muted text-sm">
          © breno.me
        </span>
      </div>
    </div>
  );
=======
                </Link>
                .
              </Paragraph>
            </div>
          </section>

          <section>
            <Heading level={3}>Thank you for visiting</Heading>

            <Paragraph>
              Have a nice day! You can also check my blog and projects by
              clicking on the links in the navigation bar.{' '}
            </Paragraph>
          </section>

          <span className="text-center mt-16 block text-muted">
            © 2024 breno.me
          </span>
        </div>
      </main>
    </>
  )
>>>>>>> 351d5497819b1cf61a92f204b563b05e94a516df
}
