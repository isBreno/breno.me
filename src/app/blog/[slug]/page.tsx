import { Header } from '@/_components/header'
import { Heading } from '@/_components/ui/heading'
import { getPostBySlug } from '@/data/posts'
import Link from 'next/link'

interface Params {
  slug: string
}

export default async function BlogPage({ params }: { params: Params }) {
  const { slug } = params
  const data = await getPostBySlug(slug)

  if (!data) {
    return (
      <div className="px-6">
        <header>
          <Link href="/blog">Back</Link>
        </header>

        <Heading level={1}>Post not found</Heading>
      </div>
    )
  }

  return (
    <div className="px-6">
      <Header />
      <section className="my-16 max-w-3xl mx-auto">
        <div>
          <Heading level={1} className="text-start">
            {data.title}
          </Heading>
          <span className="text-muted mt-3 block italic">
            {data.createdAt} - {Math.ceil(data.content.split(' ').length / 200)}{' '}
            min read.
          </span>
        </div>
        <div className="my-8">
          <p>{data.content}</p>
        </div>
      </section>
    </div>
  )
}
