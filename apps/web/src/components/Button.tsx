import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'danger'
}

export function Button({ className = '', variant = 'primary', ...props }: Props) {
  const base =
    'inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60'

  const variants: Record<NonNullable<Props['variant']>, string> = {
    // inspirado no rpkage (indigo)
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    ghost: 'bg-transparent hover:bg-white/10 text-white border border-white/15',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  }

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
