import { Inter as Font, JetBrains_Mono as Mono } from 'next/font/google'

const font = Font({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const mono = Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export { font, mono }
