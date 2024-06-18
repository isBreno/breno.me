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

export default function Home() {
  return (
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
              </Paragraph>

              <Paragraph>
                You can also contact me by email at{' '}
                <Link
                  className="underline inline underline-[#f7ab0a] rounded font-medium"
                  href="mailto:eusoubrenovieira@gmail.com"
                >
                  eusoubrenovieira@gmail.com
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
}
