import React, { useState } from "react"

const MagicCollectiveForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    howToContact: "",
    metaAdsExperience: "",
    selfSetup: "",
    results: "",
    budget: "",
    instagram: "",
    emailList: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScWWFTLKbI4z7gIHU7-6gDcBcKLmlDP1QgB3EfODdomkHmpYw/formResponse"

    const formPayload = new URLSearchParams({
      "entry.847981100": formData.name, // This field is for name (IMIĘ)
      "entry.1253582086": formData.email,
      "entry.1617673006": formData.phone,
      "entry.936258867": formData.metaAdsExperience,
      "entry.1194124057": formData.selfSetup,
      "entry.1818554089": formData.results,
      "entry.1285326409": formData.budget,
      "entry.901101836": formData.instagram,
      "entry.1234567890": formData.howToContact, // This field is for "how to contact you"
      "entry.9876543210": formData.emailList, // This field is for email list
    })

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formPayload.toString(),
      })

      setSubmitStatus("success")
      setShowSuccessModal(true)
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          howToContact: "",
          metaAdsExperience: "",
          selfSetup: "",
          results: "",
          budget: "",
          instagram: "",
          emailList: "",
        })
        setShowSuccessModal(false)
        setSubmitStatus("idle")
      }, 5000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyles =
    "w-full px-4 py-4 bg-[#F2F0E9] border border-ada-magicOrange rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ada-magicOrange focus:ring-opacity-50 transition-all duration-200"
  const labelStyles =
    "block text-white font-bold text-sm uppercase tracking-wider mb-3"
  const radioGroupStyles = "flex gap-3 justify-center"
  const radioLabelStyles = "flex-1"

  return (
    <div className="min-h-screen bg-ada-magicGreen py-12 px-4">
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform scale-100 animate-bounce">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-ada-magicPurple3 mb-2">
                Sukces!
              </h3>
              <p className="text-gray-600 mb-4">
                Twoja ankieta została wysłana pomyślnie. Skontaktujemy się z
                Tobą wkrótce!
              </p>
              <button
                onClick={() => {
                  setShowSuccessModal(false)
                  setSubmitStatus("idle")
                }}
                className="px-6 py-2 bg-ada-magicPurple3 text-white rounded-lg hover:bg-ada-magicPurple2 transition-all"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md mx-auto">
        <div className="p-8 bg-ada-magicPurple3 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={labelStyles}>
                Imię
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="email" className={labelStyles}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelStyles}>
                Telefon:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="howToContact" className={labelStyles}>
                Jak najlepiej się do ciebie zwracać?
              </label>
              <input
                type="text"
                id="howToContact"
                name="howToContact"
                value={formData.howToContact}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder=""
              />
            </div>

            <div>
              <label className={`${labelStyles} text-center`}>
                Czy korzystałaś już z reklam w systemie Meta?
              </label>
              <div className={radioGroupStyles}>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      metaAdsExperience: "Tak",
                    }))
                  }
                  className={`${radioLabelStyles} py-3 px-8 ${formData.metaAdsExperience === "Tak" ? "bg-ada-orange2" : "bg-[#F2F0E9]"} ${formData.metaAdsExperience === "Tak" ? "text-white" : "text-ada-magicOrange"} border border-ada-magicOrange font-bold rounded-full cursor-pointer hover:bg-ada-orange2 hover:text-white transition-all duration-200 text-center uppercase tracking-wider`}
                >
                  Tak
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      metaAdsExperience: "Nie",
                    }))
                  }
                  className={`${radioLabelStyles} py-3 px-8 ${formData.metaAdsExperience === "Nie" ? "bg-ada-orange2" : "bg-[#F2F0E9]"} ${formData.metaAdsExperience === "Nie" ? "text-white" : "text-ada-magicOrange"} border border-ada-magicOrange font-bold rounded-full cursor-pointer hover:bg-ada-orange2 hover:text-white transition-all duration-200 text-center uppercase tracking-wider`}
                >
                  Nie
                </button>
              </div>
            </div>

            <div>
              <label className={`${labelStyles} text-center`}>
                Czy ustawiałaś je samodzielnie?
              </label>
              <div className={radioGroupStyles}>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, selfSetup: "Tak" }))
                  }
                  className={`${radioLabelStyles} py-3 px-8 ${formData.selfSetup === "Tak" ? "bg-ada-orange2" : "bg-[#F2F0E9]"} ${formData.selfSetup === "Tak" ? "text-white" : "text-ada-magicOrange"} border border-ada-magicOrange font-bold rounded-full cursor-pointer hover:bg-ada-orange2 hover:text-white transition-all duration-200 text-center uppercase tracking-wider`}
                >
                  Tak
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, selfSetup: "Nie" }))
                  }
                  className={`${radioLabelStyles} py-3 px-8 ${formData.selfSetup === "Nie" ? "bg-ada-orange2" : "bg-[#F2F0E9]"} ${formData.selfSetup === "Nie" ? "text-white" : "text-ada-magicOrange"} border border-ada-magicOrange font-bold rounded-full cursor-pointer hover:bg-ada-orange2 hover:text-white transition-all duration-200 text-center uppercase tracking-wider`}
                >
                  Nie
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="results" className={labelStyles}>
                Jak oceniasz wyniki?
              </label>
              <textarea
                id="results"
                name="results"
                value={formData.results}
                onChange={handleChange}
                required
                rows={2}
                className={`${inputStyles} rounded-3xl resize-none`}
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="instagram" className={labelStyles}>
                Podaj swój nick na IG
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="emailList" className={labelStyles}>
                Czy posiadasz bazę mailową? Jeśli tak - ilu odbiorców liczy?
              </label>
              <textarea
                id="emailList"
                name="emailList"
                value={formData.emailList}
                onChange={handleChange}
                rows={3}
                className={`${inputStyles} rounded-3xl resize-none`}
                placeholder=""
              />
            </div>

            <div>
              <label className={`${labelStyles} text-center`}>
                Wybierz swój budżet na marketing (obsługa, budżet reklamowy i
                inne)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, budget: "DO 2000" }))
                  }
                  className={`py-3 px-4 ${formData.budget === "DO 2000" ? "bg-ada-orange2" : "bg-[#F2F0E9]"} ${formData.budget === "DO 2000" ? "text-white" : "text-ada-magicOrange"} border border-ada-magicOrange font-bold rounded-full cursor-pointer hover:bg-ada-orange2 hover:text-white transition-all duration-200 text-center`}
                >
                  DO 2000
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, budget: "2000-5000" }))
                  }
                  className={`py-3 px-4 ${formData.budget === "2000-5000" ? "bg-ada-orange2" : "bg-[#F2F0E9]"} ${formData.budget === "2000-5000" ? "text-white" : "text-ada-magicOrange"} border border-ada-magicOrange font-bold rounded-full cursor-pointer hover:bg-ada-orange2 hover:text-white transition-all duration-200 text-center`}
                >
                  2000-5000
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, budget: "5000-10000" }))
                  }
                  className={`py-3 px-4 ${formData.budget === "5000-10000" ? "bg-ada-orange2" : "bg-[#F2F0E9]"} ${formData.budget === "5000-10000" ? "text-white" : "text-ada-magicOrange"} border border-ada-magicOrange font-bold rounded-full cursor-pointer hover:bg-ada-orange2 hover:text-white transition-all duration-200 text-center`}
                >
                  5000-10000
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      budget: "10000 I WIĘCEJ",
                    }))
                  }
                  className={`py-3 px-4 ${formData.budget === "10000 I WIĘCEJ" ? "bg-ada-orange2" : "bg-[#F2F0E9]"} ${formData.budget === "10000 I WIĘCEJ" ? "text-white" : "text-ada-magicOrange"} border border-ada-magicOrange font-bold rounded-full cursor-pointer hover:bg-ada-orange2 hover:text-white transition-all duration-200 text-center`}
                >
                  10000 I WIĘCEJ
                </button>
              </div>
            </div>
            {submitStatus === "error" && (
              <div className="p-4 bg-red-100 text-red-700 rounded-lg animate-pulse">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.
                </div>
              </div>
            )}
          </form>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full mt-6 py-4 px-6 bg-ada-magicOrange text-white font-bold text-lg rounded-full hover:bg-ada-orange2 transition-all duration-200 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Wysyłanie..." : "WYŚLIJ ZGŁOSZENIE"}
        </button>
      </div>
    </div>
  )
}

export default MagicCollectiveForm
