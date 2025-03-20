import React, { useCallback, useEffect, useState } from "react"

interface Props {
  text: string
  textStyle: string
}

const useTypingEffect = (text: string) => {
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
    const delay = 200

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
    }, delay)

    return () => clearInterval(intervalId)
  }, [text, isTyping, updateTextDisplay, toggleCursorVisibility])

  return { displayedText, cursorVisible }
}

const TypingAnimation: React.FC<Props> = ({ text, textStyle }) => {
  const { displayedText, cursorVisible } = useTypingEffect(text)

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
