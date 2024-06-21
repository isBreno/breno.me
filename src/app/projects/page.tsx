import { Header } from '../_components/header'
import { Heading } from '../_components/ui/heading'
import { ProjectCard } from './components/project-card'

const mockProjects = [
  {
    name: 'AskRooms',
    description:
      'A community-based platform for people to ask questions and share their thoughts',
    images: ['/askrooms.png'],
    githubUrl: null,
    liveUrl: null,
    tags: [
      'NextJS',
      'Tailwind',
      'NextAuth',
      'Prisma',
      'Zod',
      'React Query',
      'React Hook Form',
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="px-6">
      <Header />

      <section>
        <div className="mx-auto w-fit">
          <Heading level={1} className="text-center">
            Projects
          </Heading>
          <span className="text-muted mt-3 block text-center italic">
            Projects I have worked on
          </span>
        </div>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto my-16 md:[&>*:nth-child(odd)]:flex-row-reverse">
          {mockProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>
    </div>
  )
}
