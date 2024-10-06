import React from "react"

export const LoadingDots: React.FC = () => (
  <span className="flex items-center">
    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce2 mx-0.5"></span>
    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce2 mx-0.5 animation-delay-200"></span>
    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce2 mx-0.5 animation-delay-400"></span>
  </span>
)
