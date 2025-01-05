import React from "react"

export const H1 = React.forwardRef<HTMLHeadingElement, {children: React.ReactNode}>(
  ({children}, ref) => {
    return <h1 ref={ref} className="scroll-m-20 text-3xl font-bold tracking-tight">{children}</h1>
  }
)

export const H2 = React.forwardRef<HTMLHeadingElement, {children: React.ReactNode}>(
  ({children}, ref) => {
    return <h2 ref={ref} className="scroll-m-20 text-2xl font-bold tracking-tight">{children}</h2>
  }
)

export const H3 = React.forwardRef<HTMLHeadingElement, {children: React.ReactNode}>(
  ({children}, ref) => {
    return <h3 ref={ref} className="scroll-m-20 text-xl font-bold tracking-tight">{children}</h3>
  }
)

export const P = React.forwardRef<HTMLParagraphElement, {children: React.ReactNode}>(
  ({children}, ref) => {
    return <p ref={ref} className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  }
)
