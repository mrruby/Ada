import React, { useEffect, useState } from "react"

interface Props {
  words: string[]
  speed?: number
  pauseDuration?: number
  className?: string
}

const TypingWordSwitch: React.FC<Props> = ({
  words,
  speed = 150,
  pauseDuration = 2000,
  className = "",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentWord.length) {
            setDisplayedText(currentWord.substring(0, displayedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(currentWord.substring(0, displayedText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed
    )

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentWordIndex, words, speed, pauseDuration])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-blink">|</span>
    </span>
  )
}

export default TypingWordSwitch
