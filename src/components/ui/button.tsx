import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-light text-dark px-4 py-2 rounded-3xl w-fit outline-none focus:border-light ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
