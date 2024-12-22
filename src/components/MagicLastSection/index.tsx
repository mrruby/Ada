import React from "react"
import magicForm from "../../values/forms/magic-form.html"

const MagicLastSection = () => {
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full max-w-sm md:w-1/2 text-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Przestań eksperymentować
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            Dowiedz się, jakie zmiany naprawdę zadziałają w 2025 roku i wyprzedź
            konkurencję, która nadal tkwi w starych schematach.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            <span role="img" aria-label="present">
              🎁
            </span>{" "}
            Bonus dla obecnych na żywo: notatka graficzna z podsumowaniem
            spotkania
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div dangerouslySetInnerHTML={{ __html: magicForm }} />
        </div>
      </div>
    </section>
  )
}

export default MagicLastSection
