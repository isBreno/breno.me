import { cn } from '@/lib/utils'
import type React from 'react'

interface HeadingProps {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export const Heading = ({ children, className, level }: HeadingProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements
  const size = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
  }

  return (
    <Tag
      className={cn(size[`h${level}`], 'font-bold text-highlight', className)}
    >
      {children}
    </Tag>
  )
}
