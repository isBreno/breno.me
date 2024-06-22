import { Command, Notebook, NotepadText, Projector } from "lucide-react";
import Link from "next/link";
import { socials } from '@/app/variables'
import { Header } from "./_components/header";

const technologies = ["TailwindCSS", "Typescript", "Vite", "Testing", "Databases", "Git", "NodeJS"]

export default function Page() {
  return (
    <div>
      <Header />
      <div className="my-6 px-3 max-w-3xl mx-auto">
        <span className="text-muted text-sm leading-tigh">Hello, i am</span>
        <h3 className="text-3xl font-bold leading-relaxed">Breno Vieira</h3>

        <p className="leading-relaxed">
          Hi there, I'm Breno Vieira, a web developer. I started diving into web development back in 2021 during the pandemic out of my deep interest in technology and computers. Since then, I've been happily building web applications for both leisure and to make my daily tasks easier. Now, I'm eager to leverage my skills for a career and actively seeking opportunities.

            <br />
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
                <br />
            </p>
                <p>You can also contact me at   <Link
                  className="underline inline underline-[#f7ab0a] rounded font-medium"
                  href="mailto:eusoubrenovieira@gmail.com"
                >
                  eusoubrenovieira@gmail.com
                </Link></p>
          </div>
        </div>

        <span className="block w-fit mx-auto my-8 text-muted text-sm">
          © breno.me
        </span>
      </div>
    </div>
  );
}
