import React, { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  bgColor?: string
  rounded?: string
  padding?: string
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  bgColor = "bg-white",
  rounded = "rounded-xl",
  padding = "p-8",
}) => {
  return (
    <div className={`${bgColor} ${rounded} ${padding} ${className}`}>
      {children}
    </div>
  )
}

export default Card
