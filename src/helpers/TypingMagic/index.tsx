import React, { useEffect, useState } from "react"

interface TypingMagicProps {
  text: string
  textStyle?: string
  speed?: number
}

const TypingMagic: React.FC<TypingMagicProps> = ({
  text,
  textStyle = "",
  speed = 150,
}) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1))
      index++
      if (index === text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return <span className={textStyle}>{displayedText}</span>
}

export default TypingMagic
