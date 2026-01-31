import React from "react"

const MagicLogoHeader: React.FC<{ variant?: "pink" | "purple" }> = ({
  variant = "pink",
}) => {
  const headerBgColor =
    variant === "pink" ? "bg-ada-magicPink3" : "bg-ada-magicPurple"
  const logoSrc =
    variant === "pink" ? "/assets/magic-2.svg" : "/assets/magic.svg"

  return (
    <header className={`text-white py-4 px-6 md:px-12 ${headerBgColor}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoSrc} alt="Magic" width={192} height={48} className="h-12" />
        </div>
      </div>
    </header>
  )
}

export default MagicLogoHeader
