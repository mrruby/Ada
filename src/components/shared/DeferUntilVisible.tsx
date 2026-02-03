import React, { useEffect, useRef, useState } from "react"

type DeferUntilVisibleProps = {
  children: React.ReactNode
  fallback?: React.ReactNode
  rootMargin?: string
  threshold?: number
}

const DeferUntilVisible = ({
  children,
  fallback = null,
  rootMargin = "0px",
  threshold = 0,
}: DeferUntilVisibleProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isVisible) return
    if (typeof window === "undefined") return
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold }
    )

    const node = ref.current
    if (node) {
      observer.observe(node)
    }

    return () => observer.disconnect()
  }, [isVisible, rootMargin, threshold])

  return <div ref={ref}>{isVisible ? children : fallback}</div>
}

export default DeferUntilVisible
