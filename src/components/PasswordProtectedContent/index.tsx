import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

interface PasswordProtectedContentProps {
  children: React.ReactNode
  password: string
}

const PasswordProtectedContent: React.FC<PasswordProtectedContentProps> = ({
  children,
  password,
}) => {
  const [input, setInput] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === password) {
      setIsAuthenticated(true)
    } else {
      alert("Nieprawidłowe hasło")
    }
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-ada-light-pink p-4">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <StaticImage
          src={"../../images/ada_flower.webp"}
          alt="Ada Promis - hero"
          placeholder="blurred"
          width={609}
          height={644}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md text-center md:w-1/2"
      >
        <p className="mb-4 text-lg font-bold">
          Ta strona jest chroniona hasłem. Proszę wprowadzić hasło.
        </p>
        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700">
            Wprowadź hasło:
          </span>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ada-pink2 hover:bg-ada-pink3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Zatwierdź
        </button>
      </form>
    </div>
  )
}

export default PasswordProtectedContent
