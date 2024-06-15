'use client'

import { Wrench } from 'lucide-react'
import { Header } from '../_components/header'
import { Heading } from '../_components/ui/heading'
import Link from 'next/link'

export default function BlogPage() {
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

        <main className="mt-16">
          {/* Newest Posts */}
          <section>
            <Heading className="text-muted" level={5}>
              Newest Posts
            </Heading>

            <div className="flex flex-col gap-8 max-w-3xl mx-auto my-16 md:[&>*:nth-child(odd)]:flex-row-reverse"></div>
          </section>
        </main>
      </section>
    </div>
  )
}
