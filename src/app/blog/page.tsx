import { Header } from '../_components/header'
import { Heading } from '../_components/ui/heading'
import Link from 'next/link'
import { getPosts } from '../data/posts'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="px-6">
      <Header />

      <section>
        <div className="mx-auto w-fit">
          <Heading level={1} className="text-center">
            Blog
          </Heading>
          <span className="text-muted mt-3 block text-center italic">
            Here you can find some of my thoughts
          </span>
        </div>

        <main className="max-w-3xl mx-auto my-16">
          <div className="space-y-2 [&>:not(:last-child)]:border-b">
            {/* Post */}
            {posts.map((post) => (
              <div
                key={post.slug}
                className="flex justify-between gap-2 hover:bg-accent transition-colors rounded"
              >
                <Link
                  href={'/blog/' + post.slug}
                  className="flex flex-col w-full p-4"
                >
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <span className="text-muted text-sm">{post.createdAt}</span>
                  </div>
                  <p className="text-muted mt-1">
                    {post.content.slice(0, 100)}...
                  </p>
                </Link>
              </div>
            ))}

            {/* Post */}
          </div>
        </main>
      </section>
    </div>
  )
}
