import React, { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
  variant?: "h1" | "h2" | "h3" | "body" | "small"
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className = "",
  variant = "body",
}) => {
  const styles = {
    h1: "text-2xl md:text-4xl font-bold leading-tight",
    h2: "text-2xl md:text-3xl font-bold",
    h3: "text-xl md:text-2xl font-bold",
    body: "text-sm md:text-base leading-relaxed",
    small: "text-sm leading-relaxed",
  }

  const Component = variant.startsWith("h") ? variant : "p"

  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  )
}

export default Typography
