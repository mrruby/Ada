import React, { useCallback, useEffect, useState } from "react"

interface Props {
  text: string
  textStyle: string
  speed?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
  wrapperClassName?: string
}

const useTypingEffect = (text: string, speed: number = 200) => {
  const [displayedText, setDisplayedText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isTyping, setIsTyping] = useState(true)

  const updateTextDisplay = useCallback(
    (currentIndex: number) => {
      setDisplayedText(text.substring(0, currentIndex))
    },
    [text]
  )

  const toggleCursorVisibility = useCallback((visible: boolean) => {
    setCursorVisible(visible)
  }, [])

  useEffect(() => {
    if (!isTyping) {
      toggleCursorVisibility(false)
      return
    }

    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex > text.length) {
        setIsTyping(false)
        clearInterval(intervalId)
        setTimeout(() => {
          setIsTyping(true)
          toggleCursorVisibility(true)
          currentIndex = 0
        }, 10000)
        return
      }
      updateTextDisplay(++currentIndex)
    }, speed)

    return () => clearInterval(intervalId)
  }, [text, isTyping, updateTextDisplay, toggleCursorVisibility, speed])

  return { displayedText, cursorVisible }
}

const TypingAnimation: React.FC<Props> = ({
  text,
  textStyle,
  speed = 200,
  as = "h3",
  wrapperClassName = "min-w-[200px]",
}) => {
  const { displayedText, cursorVisible } = useTypingEffect(text, speed)
  const HeadingTag = as

  return (
    <div className={`relative inline-block ${wrapperClassName}`}>
      {/* Tekst animowany */}
      <HeadingTag className={`${textStyle} xl:whitespace-pre`}>
        {displayedText}
        {cursorVisible && <span className="animate-blink">|</span>}
      </HeadingTag>
    </div>
  )
}

export default TypingAnimation
