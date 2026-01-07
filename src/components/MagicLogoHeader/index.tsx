import React from "react"

const MagicLogoHeader: React.FC<{ variant?: "pink" | "purple" | "green" }> = ({
  variant = "pink",
}) => {
  const headerBgColor =
    variant === "pink"
      ? "bg-ada-magicPink3"
      : variant === "green"
        ? "bg-ada-magicGreen"
        : "bg-ada-magicPurple"
  const logoSrc =
    variant === "pink" || variant === "green"
      ? "/assets/magic-2.svg"
      : "/assets/magic.svg"
  const textColor = variant === "green" ? "text-ada-blue" : "text-white"

  return (
    <header className={`${textColor} py-4 px-6 md:px-12 ${headerBgColor}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoSrc} alt="Magic" className="h-12" />
        </div>
      </div>
    </header>
  )
}

export default MagicLogoHeader
