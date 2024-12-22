import React, { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  bgColor?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl"
  padding?: string
  id?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  bgColor = "bg-transparent",
  maxWidth = "5xl",
  padding = "py-8 md:py-12 px-4",
  id,
}) => {
  return (
    <section
      className={`${bgColor} ${padding} ${className}`}
      id={id}
      data-aos="fade-up"
    >
      <div className={`max-w-${maxWidth} mx-auto`}>{children}</div>
    </section>
  )
}

export default Section
