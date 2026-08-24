import React, { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  as?: "div" | "li"
}

// Delikatne pojawianie sekcji po przewinięciu. Elementy widoczne od razu
// (i użytkownicy z prefers-reduced-motion) nie są animowane.
const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  as = "div",
}) => {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const node = ref.current
    if (!node || !("IntersectionObserver" in window)) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (node.getBoundingClientRect().top < window.innerHeight) return

    setIsVisible(false)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.14 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as as React.ElementType

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-[600ms] ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[22px] opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  )
}

export default Reveal
