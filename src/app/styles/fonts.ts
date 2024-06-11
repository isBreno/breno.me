import { JetBrains_Mono as JetBrainsMono, Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '600', '500'],
})
const jetBrainsMono = JetBrainsMono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const font = {
  mono: jetBrainsMono,
  display: inter,
}
