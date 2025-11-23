import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useRef, useState } from "react"

const Cursor = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    <path
      d="M7.5 28L7.5 4L23.5 19.5L14.5 19.5L19.5 28L16.5 29.5L11.5 21L7.5 28Z"
      fill="black"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
)

interface Props {
  title: string
  subtitle1: string | React.JSX.Element
  subtitle2: React.JSX.Element
  subtitle3: string
  efects: string[]
  forWhom: string
  forWhomInfo: string | React.JSX.Element
  btn: string
  paragraph?: string | React.JSX.Element
  paragraph2?: string | React.JSX.Element
  image?: React.JSX.Element
  imageInfo?: React.JSX.Element
  btnStyle?: string
  btnMargin?: string
  textColor?: "text-black" | "text-white"
  btnLink?: string
}

const pStyle = "mt-1 pr-4 text-adaMin md:text-adaStandard"

export const MasterclassInfo3: React.FC<Props> = ({
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  efects,
  forWhom,
  forWhomInfo,
  btn,
  paragraph,
  paragraph2,
  image,
  imageInfo,
  btnStyle,
  btnMargin,
  textColor = "text-black",
  btnLink = "#pakiety",
}) => {
  const [showDetailsDesktop, setShowDetailsDesktop] = useState(false)
  const [showDetailsMobile, setShowDetailsMobile] = useState(false)

  const hoverActiveRef = useRef(false)
  const cycleCount = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const runCycle = () => {
    if (!hoverActiveRef.current || cycleCount.current >= 5) return

    timerRef.current = setTimeout(() => {
      if (!hoverActiveRef.current) return
      setShowDetailsDesktop(true)

      timerRef.current = setTimeout(() => {
        if (!hoverActiveRef.current) return
        setShowDetailsDesktop(false)
        cycleCount.current += 1

        if (hoverActiveRef.current && cycleCount.current < 5) {
          runCycle()
        }
      }, 7000)
    }, 7000)
  }

  const handleMouseEnter = () => {
    if (window.innerWidth < 1024) return
    if (hoverActiveRef.current) return
    hoverActiveRef.current = true
    cycleCount.current = 0
    runCycle()
  }

  const handleMouseLeave = () => {
    if (window.innerWidth < 1024) return
    hoverActiveRef.current = false
    cycleCount.current = 0
    setShowDetailsDesktop(false)
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  const showDetailsDesktopRef = useRef(showDetailsDesktop)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showCursor, setShowCursor] = useState(false)
  const [cursorAtTarget, setCursorAtTarget] = useState(false)
  const [cursorClick, setCursorClick] = useState(false)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    showDetailsDesktopRef.current = showDetailsDesktop
  }, [showDetailsDesktop])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !hasAnimatedRef.current &&
            !showDetailsDesktopRef.current
          ) {
            hasAnimatedRef.current = true

            setTimeout(() => {
              if (showDetailsDesktopRef.current) return
              setShowCursor(true)

              // Start moving to target shortly after appearing
              setTimeout(() => {
                if (showDetailsDesktopRef.current) {
                  setShowCursor(false)
                  return
                }
                setCursorAtTarget(true)

                // Click after movement finishes
                setTimeout(() => {
                  if (showDetailsDesktopRef.current) {
                    setShowCursor(false)
                    return
                  }
                  setCursorClick(true)
                  setTimeout(() => {
                    if (showDetailsDesktopRef.current) {
                      setShowCursor(false)
                      return
                    }
                    setShowDetailsDesktop(true)
                    setCursorClick(false)
                    setTimeout(() => {
                      setShowCursor(false)
                    }, 500)
                  }, 300)
                }, 1000)
              }, 100)
            }, 3000)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative w-full lg:h-[880px] py-5 md:py-10 px-2 overflow-visible transition-all duration-700 ${textColor}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`hidden lg:flex w-full transition-transform duration-700 ease-in-out ${
          showDetailsDesktop ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="hidden lg:block">{image}</div>
        <div className="flex-shrink-0 w-full flex flex-col items-center z-10 justify-center">
          <div className="lg:pl-8 max-w-[480px] flex flex-col items-center mx-auto">
            <div className="flex flex-col gap-2 justify-center bg-ada-white2 border border-ada-magicOrange rounded-[24px] shadow-xl text-center p-4 max-w-[480px] mb-4">
              <h2 className="text-adaSubtitle lg:text-adaSubtitleThird uppercase font-anton text-ada-magicOrange">
                {title}
              </h2>
              <p className="uppercase font-bold md:text-adaDesc text-center">
                {subtitle1}
              </p>
              <p className="pt-2">{subtitle2}</p>
            </div>

            <div className="flex flex-col justify-center gap-[20px] w-full">
              <div className="px-6 lg:px-0">
                <h3 className="font-bold md:text-adaDesc py-2 text-center lg:text-start">
                  Poziom trudności:
                </h3>
                <p className="flex flex-row text-adaMin md:text-adaStandard">
                  <span className="lg:-ml-8 pr-2">✅ </span>
                  {forWhom}
                </p>
                <p className="pt-4">{forWhomInfo}</p>
              </div>
              <div className="lg:min-w-[350px] px-6 lg:px-0">
                <h3 className="font-bold md:text-adaDesc pb-2 mt-2 text-center lg:text-start">
                  Efekty:
                </h3>
                <ul className="flex flex-col lg:gap-[10px] mx-auto mr-2">
                  {efects.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row text-adaMin md:text-adaStandard"
                    >
                      <span className="lg:-ml-8 pr-2">✅ </span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`${btnStyle} my-6`}>
              <div
                className={`px-3 lg:w-[420px] rounded-full md:h-[70px] flex justify-center items-center bg-ada-magicPink2 mx-auto border border-black ${btnMargin}`}
              >
                <a
                  className="font-bold md:text-adaBase uppercase text-black text-center"
                  href={btnLink}
                  rel="noopener noreferrer"
                >
                  {btn}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-full flex flex-col justify-between items-center relative z-10">
          <div className="mx-auto">
            <div className="w-full bg-ada-magicPink2">
              <p className="pt-2 text-center text-adaStandard lg:text-adaSubtitle font-bold mb-4">
                {subtitle3}
              </p>
            </div>
            {paragraph && (
              <div className="py-4 max-w-[700px] mx-auto">
                <p className={pStyle}>{paragraph}</p>
              </div>
            )}
            <div className="mx-auto flex justify-center">{imageInfo}</div>
            {paragraph2 && <div className="mx-auto">{paragraph2}</div>}
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        {!showDetailsMobile ? (
          <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <h2 className="text-adaSubtitle uppercase font-anton text-ada-magicOrange">
                {title}
              </h2>
              <p className="uppercase font-bold">{subtitle1}</p>
              <p className="pt-2">{subtitle2}</p>
            </div>
            <div className="px-4 w-full">
              <h3 className="font-bold text-adaDesc py-2 text-center">
                Poziom trudności:
              </h3>
              <p className="flex flex-row justify-center text-adaMin md:text-adaStandard">
                <span className="pr-2">✅</span> {forWhom}
              </p>
              <p className="pt-4 text-center">{forWhomInfo}</p>
            </div>
            <div className="px-4 w-full mt-4">
              <h3 className="font-bold text-adaDesc pb-2 text-center">
                Efekty:
              </h3>
              <ul className="flex flex-col items-center gap-1">
                {efects.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row text-adaMin md:text-adaStandard"
                  >
                    <span className="pr-2">✅</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${btnStyle} my-6`}>
              <div
                className={`px-3 rounded-full h-[60px] flex justify-center items-center bg-ada-magicPink2 mx-auto border border-black ${btnMargin}`}
              >
                <a
                  className="font-bold md:text-adaBase uppercase text-black text-center"
                  href={btnLink}
                  rel="noopener noreferrer"
                >
                  {btn}
                </a>
              </div>
            </div>

            <button
              onClick={() => setShowDetailsMobile(true)}
              className="mt-1 flex flex-col items-center"
            >
              <StaticImage
                src="../../images/magicArrowLeft.svg"
                alt="Otwórz szczegóły"
                placeholder="blurred"
                width={40}
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
              />
              <StaticImage
                src="../../images/pst.svg"
                alt="pst"
                placeholder="blurred"
                width={100}
                className="mt-4"
              />
            </button>
            {image}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-6">
            <div className="w-full bg-ada-magicPink2">
              <p className="pt-2 text-center text-adaStandard font-bold mb-4">
                {subtitle3}
              </p>
            </div>
            {paragraph && (
              <div className="py-4 max-w-[700px] mx-auto">
                <p className={pStyle}>{paragraph}</p>
              </div>
            )}
            <div className="mx-auto flex justify-center">{imageInfo}</div>
            {paragraph2 && <div className="mx-auto">{paragraph2}</div>}

            <button
              onClick={() => setShowDetailsMobile(false)}
              className="mt-6 flex flex-col items-center"
            >
              <StaticImage
                src="../../images/magicArrowLeft.svg"
                alt="Wróć"
                placeholder="blurred"
                width={40}
                className="cursor-pointer rotate-180 hover:scale-110 transition-transform duration-300"
              />
            </button>
          </div>
        )}
      </div>
      <button
        onClick={() => setShowDetailsDesktop(!showDetailsDesktop)}
        className={`opacity-0 lg:opacity-100 absolute top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${
          showDetailsDesktop ? "left-0 rotate-180" : "right-0"
        }`}
      >
        <StaticImage
          src="../../images/magicArrowLeft.svg"
          alt={showDetailsDesktop ? "Wróć" : "Otwórz szczegóły"}
          placeholder="blurred"
          width={80}
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        />
        {!showDetailsDesktop && (
          <div>
            <StaticImage
              src="../../images/pst.svg"
              alt="pst"
              placeholder="blurred"
              width={140}
              className="mt-6"
            />
          </div>
        )}
      </button>
      {showCursor && (
        <div
          className={`hidden lg:block absolute z-50 transition-all duration-1000 ease-in-out pointer-events-none ${
            cursorClick ? "scale-90" : "scale-100"
          }`}
          style={{
            top: "50%",
            right: cursorAtTarget ? "45px" : "0px",
            transform: `translate(${cursorAtTarget ? "0px" : "0px"}, ${
              cursorAtTarget ? "10px" : "50px"
            })`,
            opacity: showCursor ? 1 : 0,
          }}
        >
          <Cursor />
        </div>
      )}
    </div>
  )
}
