import React from "react"

const ContactFormHeader = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <div className=" text-ada-blue flex flex-col md:items-center px-4 pt-[60px] lg:pt-[92px] lg:pb-[40px] md:text-center">
        <p className="text-adaSubtitle lg:text-adaBig text-ada-grey font-bold lg:h-[58px]">
          Porozmawiajmy!
        </p>
        <h1 className="text-adaTitle font-bold animate-bounce">
          Napisz do mnie!
        </h1>
        <p className="text-adaBase px-2 py-4 md:py-8 max-w-[840px]">
          Kampanie? Strategia? Szkolenia? Konsultacje? A może po prostu
          wirtualna kawka? Chętnie spotkam się, aby obgadać wspólne plany,
          porozmawiać o marketingu i biznesach. Kto wie, co z tego wyniknie… ;)
        </p>
      </div>
    </div>
  )
}

export default ContactFormHeader
