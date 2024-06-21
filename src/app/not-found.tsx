<<<<<<< HEAD
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="absolute top-3 left-3">
        <Link className="font-mono text-base flex items-center gap-2" href="/">
          <ArrowLeft size={16} />
          Voltar
        </Link>
      </div>

      <div className="absolute top-1/2 left-1/2 space-y-2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl text-center font-bold">404</h1>
        <p className="text-2xl">Página não encontrada</p>
      </div>
    </div>
  )
};
=======
'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
  const { push: redirect } = useRouter()

  useEffect(() => {
    new Promise((resolve) => setTimeout(resolve, 3000)).then(() =>
      redirect('/'),
    )
  }, [redirect])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-12 bg-accent px-8 py-8 rounded">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-center">
            <span className="text-error">404</span> - Page not found
          </h1>

          <p className="w-4/5 mx-auto text-center">
            The page that you are looking for does not exist.
          </p>
        </div>
        <p className="text-muted text-sm text-center mt-8">
          Wait until we redirect you to the home page
        </p>
      </div>
    </div>
  )
}
>>>>>>> 351d5497819b1cf61a92f204b563b05e94a516df
