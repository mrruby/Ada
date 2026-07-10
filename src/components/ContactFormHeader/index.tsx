import React from "react"

const ContactFormHeader = () => {
  return (
    <section className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-4 py-20 text-center text-black md:min-h-[560px] md:translate-y-4 md:py-24">
      <h1 className="font-anton text-[48px] font-normal leading-none text-ada-magicOrange md:text-[64px]">
        Porozmawiajmy!
      </h1>
      <div className="mt-8 w-full max-w-[460px] rounded-[32px] border border-ada-magicOrange bg-ada-magicGreen px-6 py-8 md:mt-16 md:px-10">
        <h2 className="font-anton text-[36px] font-normal leading-none md:text-[48px]">
          Napisz do mnie!
        </h2>
        <p className="mt-5 text-[13px] font-medium leading-snug">
          Kampanie? Strategia? Szkolenia? Konsultacje? A może po prostu
          wirtualna kawka? Chętnie spotkam się, aby obgadać wspólne plany,
          porozmawiać o marketingu i biznesach. Kto wie, co z tego wyniknie… ;)
        </p>
      </div>
    </section>
  )
}

export default ContactFormHeader
