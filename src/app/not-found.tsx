import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

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
}
