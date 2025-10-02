import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  icon?: React.ReactNode
}

export function Button({ children, className, icon, ...props }: ButtonProps) {
  return (
    <div className="flex items-center cursor-pointer">
      <button
        className={`cursor-pointer bg-light flex items-center text-dark px-4 py-2 rounded-3xl w-fit outline-none focus:border-light ${className}`}
        {...props}
      >
        {children}
      </button>
      {icon && <div className="bg-light rounded-3xl p-2">{icon}</div>}
    </div>
  )
}
