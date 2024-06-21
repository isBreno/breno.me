import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/_components/ui/carousel'
import { Heading } from '@/app/_components/ui/heading'
import { Paragraph } from '@/app/_components/ui/paragraph'
import { cn } from '@/lib/utils'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Link2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
  name: string
  description: string
  images?: string[] | null
  githubUrl?: string | null
  liveUrl?: string | null
  tags?: string[] | null
}

const LinkButton = ({
  href,
  children,
  variant,
}: {
  href?: string | null
  children: React.ReactNode
  variant: 'primary' | 'secondary'
}) => {
  // If href is null, the link will become a button with no href and disabled
  function Tag({
    href,
    children,
    variant,
  }: {
    href?: string
    children: React.ReactNode
    variant: 'primary' | 'secondary'
  }) {
    const variantClass =
      variant === 'primary'
        ? 'bg-info flex gap-2 items-center justify-center font-bold text-foreground w-fit rounded px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors filter hover:brightness-110'
        : 'border border-info flex gap-2 items-center justify-center font-bold text-info disabled:cursor-not-allowed disabled:text-muted disabled:border-muted w-fit rounded px-4 py-2 filter hover:brightness-110 transition-[filter]'

    return href ? (
      <Link href={href} target="_blank" className={variantClass}>
        {children}
      </Link>
    ) : (
      <button className={variantClass} disabled>
        {children}
      </button>
    )
  }

  return (
    <Tag variant={variant} href={href || undefined}>
      {children}
    </Tag>
  )
}

export function ProjectCard({
  description,
  name,
  githubUrl,
  images,
  liveUrl,
  tags,
}: Project) {
  return (
    <>
      <div key={name} className={cn('flex gap-4 md:flex-row flex-col')}>
        {images ? (
          <>
            <Carousel className="md:max-w-[400px] w-full">
              <CarouselContent className="w-auto">
                {images.map((image, i) => (
                  <CarouselItem className="" key={i}>
                    <Image
                      src={image}
                      alt={name}
                      width={300}
                      height={200}
                      quality={95}
                      className="rounded w-full bg-foreground object-fill"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </>
        ) : (
          <div className="md:h-auto w-full h-[200px] bg-card/30 rounded"></div>
        )}

        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-2">
            <Heading level={2}>{name}</Heading>
            <Paragraph>{description}</Paragraph>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-muted text-sm">Tags</span>
            {tags && (
              <div className="flex flex-wrap gap-2 select-none">
                {tags.slice(0, 6).map((tag) => (
                  <div
                    key={tag}
                    className="bg-accent px-3 flex min-w-0 items-center py-1 rounded"
                  >
                    <span className="text-xs w-full truncate text-foreground">
                      {tag}
                    </span>
                  </div>
                ))}

                {tags.length > 6 && (
                  <div className="bg-accent px-3 flex min-w-0 items-center py-1 rounded">
                    <span className="text-xs w-full truncate text-foreground">
                      +{tags.length - 6}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <LinkButton href={githubUrl} variant="primary">
              <SiGithub size={16} /> Github
            </LinkButton>
            <LinkButton href={liveUrl} variant="secondary">
              <Link2 size={16} /> Demo
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  )
}
