import React, { useEffect, useState } from "react"

interface Props {
  text: string
  textStyle: string
}

const TypingAnimation: React.FC<Props> = ({ text, textStyle }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    let delay = 200
    let intervalId: NodeJS.Timeout

    const animateTyping = () => {
      intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.substring(0, currentIndex))
          currentIndex++
        } else {
          setIsTyping(false)
          clearInterval(intervalId)
          setTimeout(() => {
            setIsTyping(true)
            setCursorVisible(true)
            currentIndex = 0
          }, 10000)
        }
      }, delay)
    }

    if (isTyping) {
      animateTyping()
    } else {
      setCursorVisible(false)
    }

    return () => clearInterval(intervalId)
  }, [text, isTyping])

  return (
    <div>
      <h3 className={textStyle}>
        {displayedText}
        {cursorVisible && <span className="animate-blink">|</span>}
      </h3>
    </div>
  )
}

export default TypingAnimation
