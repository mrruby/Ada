import { Accordion } from "helpers/Accordion"
import React from "react"
import Section from "../shared/Section"
import Typography from "../shared/Typography"

type ListItem = {
  question: string
  answer: string | React.JSX.Element
}

const MagicFAQ = () => {
  const faqList: ListItem[] = [
    {
      question: "Czy MAGIC jest dla początkujących?",
      answer:
        "Tak! MAGIC jest idealny zarówno dla osób, które dopiero zaczynają swoją przygodę z reklamami, jak i dla tych, którzy chcą udoskonalić swoje umiejętności.",
    },
    {
      question: "Jak długo trwa dostęp do MAGIC?",
      answer:
        "MAGIC to subskrypcja miesięczna. Możesz z niej korzystać tak długo, jak potrzebujesz wsparcia w reklamach.",
    },
    {
      question: "Czy mogę zrezygnować w każdej chwili?",
      answer: "Tak, możesz anulować subskrypcję w dowolnym momencie.",
    },
    {
      question: "Ile czasu potrzebuję na naukę?",
      answer:
        "To zależy od Ciebie! Materiały są dostępne 24/7, więc możesz uczyć się we własnym tempie. Konsultacje grupowe odbywają się 2 razy w miesiącu.",
    },
    {
      question: "Czy dostanę certyfikat?",
      answer:
        "Po ukończeniu programu otrzymasz zaświadczenie o uczestnictwie w MAGIC.",
    },
  ]

  const renderList = (list: ListItem[]) => {
    return list.map((item, index) => (
      <Accordion key={index} question={item.question} answer={item.answer} />
    ))
  }

  return (
    <Section bgColor="bg-transparent">
      <div className="max-w-3xl mx-auto">
        <Typography variant="h1" className="text-center mb-12 text-ada-black">
          Najczęściej zadawane pytania
        </Typography>
        <div className="flex flex-col items-center space-y-4">
          {renderList(faqList)}
        </div>
      </div>
    </Section>
  )
}

export default MagicFAQ