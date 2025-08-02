import MaxWithBgColorContainer from "components/Layout/MaxWithBgColorContainer"
import QuizProgress from "components/Quiz/QuizProgress"
import QuizQuestion from "components/Quiz/QuizQuestion"
import QuizResult from "components/Quiz/QuizResult"
import QuizTitle from "components/Quiz/QuizTitle"
import SEO from "components/seo"
import React, { useState } from "react"

const quizData = [
  {
    question: "⏰ Jak długo prowadzisz swoją markę lub działasz w marketingu?",
    answers: [
      { text: "🌱 Jeszcze nie zaczęłam, jestem na etapie planowania", points: 0 },
      { text: "🚀 Od kilku miesięcy", points: 1 },
      { text: "💪 Od ponad roku", points: 2 },
      { text: "👑 Kilka lat, to moja codzienność", points: 3 },
    ],
  },
  {
    question: "📊 Jak często korzystasz z Menedżera Reklam Meta?",
    answers: [
      { text: "❓ Nigdy, nawet nie wiem, gdzie to się włącza", points: 0 },
      { text: "🔍 Czasem próbuję coś ustawić sama", points: 2 },
      { text: "📈 Regularnie ustawiam kampanie dla siebie", points: 4 },
      { text: "🎯 Prowadzę kampanie dla kilku klientów", points: 6 },
    ],
  },
  {
    question: "🎨 Co robisz, gdy potrzebujesz grafiki do posta lub reklamy?",
    answers: [
      {
        text: "📱 Szukam darmowego zdjęcia lub wrzucam coś z telefonu",
        points: 0,
      },
      {
        text: "✨ Tworzę proste grafiki w Canvie lub zlecam to graficzce",
        points: 1,
      },
      {
        text: "💎 Mam swoje szablony i działam w Canvie jak mistrzyni",
        points: 2,
      },
      { text: "🖼️ Działam w zaawansowanych programach graficznych", points: 3 },
    ],
  },
  {
    question: "📸 Czy prowadzisz konto na Instagramie dla swojej marki?",
    answers: [
      { text: "⏳ Jeszcze nie, ale planuję", points: 0 },
      { text: "🌊 Tak, ale publikuję nieregularnie", points: 1 },
      {
        text: "📅 Staram się mieć harmonogram publikacji i się go trzymać",
        points: 2,
      },
      {
        text: "🚀 Mam strategię, publikuję regularnie, analizuję wyniki",
        points: 3,
      },
    ],
  },
  {
    question: "📈 Kiedy ostatnio analizowałaś wyniki swoich kampanii/reklam?",
    answers: [
      { text: "🆕 Jeszcze nie miałam żadnej kampanii", points: 0 },
      {
        text: "🤔 Zajrzałam z ciekawości, ale nie do końca rozumiem dane",
        points: 1,
      },
      { text: "👀 Dość często zaglądam do Menedżera Reklam", points: 3 },
      {
        text: "📊 Tworzę miesięczne raporty i na bieżąco sprawdzam wyniki",
        points: 4,
      },
    ],
  },
  {
    question: "✍️ Tworzenie treści to dla Ciebie...",
    answers: [
      { text: "😰 Stres i zagadka - nie wiem, co publikować", points: 0 },
      { text: "⏰ Dodatek - brakuje mi czasu lub pomysłów", points: 1 },
      { text: "📆 Część mojej rutyny - mam pomysły i strategię", points: 2 },
      {
        text: "❤️ Mój żywioł - tworzę treści również dla innych marek",
        points: 3,
      },
    ],
  },
  {
    question: "📲 Co sądzisz o reklamach na Facebooku i Instagramie?",
    answers: [
      { text: "😵 Jeszcze nie ogarniam jak to działa", points: 0 },
      { text: "😬 Trochę przerażające, ale chcę się nauczyć", points: 1 },
      { text: "🔧 Skuteczne narzędzie - już trochę testowałam", points: 2 },
      {
        text: "🏆 Moja specjalność - wiem, jak ustawić skuteczną kampanię",
        points: 4,
      },
    ],
  },
  {
    question: "🌐 Masz stronę internetową lub landing page?",
    answers: [
      { text: "🚧 Nie mam jeszcze", points: 0 },
      {
        text: "📣 Mam prosty landing lub kilka (np. na zapis na webinar)",
        points: 1,
      },
      { text: "🏠 Mam zbudowaną stronę internetową", points: 2 },
      { text: "👩‍💻 Robię takie strony również dla innych", points: 3 },
    ],
  },
  {
    question:
      "🤝 Czy współpracujesz z kimś przy marketingu (WA, graficzka, agencja)?",
    answers: [
      { text: "👩 Wszystko robię sama", points: 1 },
      { text: "🔄 Czasem zlecam pojedyncze zadania", points: 2 },
      { text: "👥 Mam wsparcie w stałej współpracy", points: 3 },
      { text: "👑 Sama jestem wsparciem marketingowym dla innych", points: 4 },
    ],
  },
  {
    question: "📝 Jakie treści publikujesz najchętniej?",
    answers: [
      { text: "🙈 Jeszcze się nie odważyłam", points: 0 },
      { text: "🌤️ Posty z życia codziennego, trochę o marce", points: 1 },
      { text: "🎆 Edukacyjne, inspirujące, sprzedażowe - mam mix", points: 2 },
      {
        text: "🎨 Tworzę przemyślane serie i testuje wiele rozwiązań",
        points: 3,
      },
    ],
  },
  {
    question: "🎯 Jakie cele ustawiasz najczęściej w reklamach Meta?",
    answers: [
      { text: "🤷 Nie ustawiałam żadnych", points: 0 },
      { text: "🔍 Kliknięcia lub zasięg - tak na próbę", points: 1 },
      { text: "💰 Konwersje lub leady - chcę konkretnych efektów", points: 3 },
      { text: "🌊 Różne - w zależności od strategii (lub klienta)", points: 5 },
    ],
  },
  {
    question: "💼 Czy prowadzisz reklamy dla innych osób lub firm?",
    answers: [
      { text: "🙋 Nie, tylko dla siebie", points: 0 },
      { text: "👫 Dorywczo dla znajomych", points: 2 },
      { text: "💪 Tak, jest to moja dodatkowa praca", points: 6 },
      {
        text: "🌟 Tak, jest to moja standardowa praca i mam stałych klientów",
        points: 8,
      },
    ],
  },
]

const QuizPage = (): JSX.Element => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (points: number) => {
    console.log("Answer clicked with points:", points)
    const newTotalPoints = totalPoints + points
    setTotalPoints(newTotalPoints)

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResult(true)
      }
    }, 100)
  }

  const getPersonalityType = () => {
    if (totalPoints <= 17) {
      return "Dzielna poszukiwaczka"
    } else if (totalPoints <= 34) {
      return "Zosia Samosia"
    } else {
      return "Freelance Ninja"
    }
  }

  return (
    <div className="min-h-screen">
      <MaxWithBgColorContainer bgColor="bg-ada-white2">
        <QuizTitle />
      </MaxWithBgColorContainer>

      {!showResult ? (
        <>
          <MaxWithBgColorContainer bgColor="bg-magic-grid relative">
            <QuizQuestion
              key={currentQuestion}
              question={quizData[currentQuestion].question}
              answers={quizData[currentQuestion].answers}
              questionNumber={currentQuestion + 1}
              onAnswer={handleAnswer}
            />
          </MaxWithBgColorContainer>

          <MaxWithBgColorContainer bgColor="bg-ada-white2">
            <QuizProgress
              current={currentQuestion + 1}
              total={quizData.length}
            />
          </MaxWithBgColorContainer>
        </>
      ) : (
        <MaxWithBgColorContainer bgColor="bg-ada-magicGreen">
          <QuizResult personalityType={getPersonalityType()} />
        </MaxWithBgColorContainer>
      )}
    </div>
  )
}

export const Head = () => (
  <SEO
    title="Quiz: Jaka jest Twoja Adsowa Osobowość?"
    image="https://adrianna.com.pl/img/ada_purple.webp"
  />
)

export default QuizPage
