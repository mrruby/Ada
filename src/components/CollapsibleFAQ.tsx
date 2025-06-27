import React from "react"
import Section from "./shared/Section"
import Typography from "./shared/Typography"

const faqItems = [
  {
    question: "Czy będę mieć kontrolę nad kampaniami?",
    answer:
      "Tak! Masz dostęp do swojego konta reklamowego, dodatkowo jesteśmy z bieżącym kontakcie na Trello. Wspólnie ustalamy plan działania. Możesz liczyć na naszą elastyczność i zaangażowanie. Gdy trzeba, powiemy: \"przemyślmy to jeszcze raz\".",
  },
  {
    question: "Czy dajecie gwarancję wyników?",
    answer:
      "Nie dajemy gwarancji wyników, bo wolimy realne spojrzenie na sytuację niż puste obietnice. Dlatego przed rozpoczęciem współpracy spotykamy się na wirtualnej kawce, na której rozmawiamy o perspektywach, możliwościach, oczekiwaniach. Tak, zdarza nam się odradzać współprac.",
  },
  {
    question: "Ile czasu zajmuje uruchomienie pierwszej kampanii?",
    answer:
      "Pierwszą kampanię ustawiamy w ciągu 2-3 dni roboczych od podpisania umowy. Kolejną - do 5 dni.",
  },
]

const CollapsibleFAQ = (): JSX.Element => {
  return (
    <Section>
      <div className="max-w-[800px] mx-auto">
        <div className="border-ada-orange border rounded-3xl max-w-[200px] mx-auto mb-6">
          <Typography
            variant="h2"
            className="p-2 font-anton font-normal text-center text-ada-orange"
          >
            FAQ
          </Typography>
        </div>
        {faqItems.map((item, idx) => (
          <details key={idx} className="mb-4 group bg-white p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold flex justify-between items-center list-none">
              <span>{item.question}</span>
              <span className="ml-2 transition-transform group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-2 leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

export default CollapsibleFAQ