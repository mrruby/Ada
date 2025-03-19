import React, { useEffect, useState, useCallback } from "react"

interface TextSegment {
  text: string
  style: string
}

interface Props {
  text: string | TextSegment[]
  textStyle?: string
}

const useTypingEffect = (textContent: string | TextSegment[]) => {
  const fullText =
    typeof textContent === "string"
      ? textContent
      : textContent.map((segment) => segment.text).join("")

  const [displayedText, setDisplayedText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isTyping, setIsTyping] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const updateTextDisplay = useCallback(
    (index: number) => {
      setDisplayedText(fullText.substring(0, index))
      setCurrentIndex(index)
    },
    [fullText]
  )

  const toggleCursorVisibility = useCallback((visible: boolean) => {
    setCursorVisible(visible)
  }, [])

  useEffect(() => {
    if (!isTyping) {
      toggleCursorVisibility(false)
      return
    }

    let index = currentIndex
    const delay = 200

    const intervalId = setInterval(() => {
      if (index > fullText.length) {
        setIsTyping(false)
        clearInterval(intervalId)
        setTimeout(() => {
          setIsTyping(true)
          toggleCursorVisibility(true)
          index = 0
          setCurrentIndex(0)
        }, 10000)
        return
      }
      updateTextDisplay(++index)
    }, delay)

    return () => clearInterval(intervalId)
  }, [
    fullText,
    isTyping,
    updateTextDisplay,
    toggleCursorVisibility,
    currentIndex,
  ])

  return { displayedText, cursorVisible, currentIndex }
}

const TypingAnimation: React.FC<Props> = ({ text, textStyle }) => {
  const { displayedText, cursorVisible, currentIndex } = useTypingEffect(text)

  const renderContent = () => {
    if (typeof text === "string") {
      return <h3 className={textStyle}>{displayedText}</h3>
    }

    let currentPosition = 0
    return (
      <h3>
        {text.map((segment, index) => {
          const segmentLength = segment.text.length
          const start = currentPosition
          const end = currentPosition + segmentLength
          currentPosition = end

          const visibleText = displayedText.substring(
            start,
            Math.min(end, currentIndex)
          )

          return visibleText ? (
            <span key={index} className={segment.style}>
              {visibleText}
            </span>
          ) : null
        })}
      </h3>
    )
  }

  return (
    <div>
      {renderContent()}
      {typeof text === "string" && cursorVisible && (
        <span className="animate-blink">|</span>
      )}
    </div>
  )
}

export default TypingAnimation
