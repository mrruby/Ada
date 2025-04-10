import ResponsiveYouTubeEmbed from "components/ResponsiveYouTubeEmbed"
import CountdownTimer from "helpers/CountdownTimer"
import React from "react"

interface MagicWebinarHeroProps {
  title: string
  countdownTargetDate: Date
  countdownText: string
  videoId: string
  videoTitle: string
  ctaLink?: string
  ctaText?: React.ReactNode // Allow JSX for text with <br />
}

const MagicWebinarHero: React.FC<MagicWebinarHeroProps> = ({
  title,
  countdownTargetDate,
  countdownText,
  videoId,
  videoTitle,
  ctaLink,
  ctaText,
}) => {
  const renderCta = () => {
    if (!ctaLink || !ctaText) return null

    return (
      <a
        href={ctaLink}
        className="bg-ada-pink7 hover:bg-ada-pink7 text-white font-bold py-3 px-6 rounded-full text-adaNav md:text-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        {ctaText}
      </a>
    )
  }

  return (
    <div className="flex flex-col items-center py-12 mt-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {title}
      </h1>
      <CountdownTimer text={countdownText} targetDate={countdownTargetDate} />
      <ResponsiveYouTubeEmbed videoId={videoId} title={videoTitle} />
      {renderCta()}
    </div>
  )
}

export default MagicWebinarHero
