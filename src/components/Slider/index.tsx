import React, { useState, useEffect } from "react"

type SliderProps = {
  items: string[]
  interval?: number
}

const Slider: React.FC<SliderProps> = ({ items, interval = 1500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [items.length, interval])

  return (
    <div className="relative overflow-hidden w-full max-w-[800px] mx-auto h-[60px] md:h-[80px]">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <span
            className={`text-adaBase md:text-adaSubtitle font-medium ${
              index % 2 === 0 ? "text-ada-pink2" : "text-ada-purple"
            }`}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Slider
