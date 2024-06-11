'use client'

import { Wrench } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex flex-col aspect-square justify-center items-center gap-12 bg-accent px-4 py-1 rounded">
        <div className="space-y-4">
          <Wrench size={48} className="mx-auto" />
          <h1 className="text-3xl font-bold text-center">
            🛠️ Under construction
          </h1>
          <p className="max-w-[260px] mx-auto text-center">
            The blog section is under construction. Check back later!
          </p>

          <button
            className="bg-info block mx-auto font-bold text-foreground rounded px-4 py-2"
            onClick={() => window.history.go(-1)}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}
