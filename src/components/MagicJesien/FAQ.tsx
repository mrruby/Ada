import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function FAQ({ promotionActive }: { promotionActive: boolean }) {
  return (
    <section className="sec" id="faq">
      <div className="wrap faqgrid">
        <div>
          <h2>
            Najczęściej zadawane pytania <em>o reklamy</em>
          </h2>
          <div className="faq" style={{ marginTop: "1.5rem" }}>
            <details>
              <summary>Ile budżetu potrzebuję na start?</summary>
              <p>
                Nasze członkinie pracują na budżetach między 20 a 80 zł
                dziennie. W ramach MAGIC Planu otrzymujesz rozpiskę tego, w jaki
                sposób warto rozłożyć Twój budżet.
              </p>
            </details>
            <details>
              <summary>Mam ChatGPT. Po co mi MAGIC?</summary>
              <p>
                ChatGPT i Claude to świetni asystenci, ale musisz ich naprawdę
                dobrze spromptować i wpisać mnóstwo danych, aby nie przytakiwali
                na wszystko, co im zaproponujesz. W MAGIC łączymy naszą Kapibarę
                Barbarę z wiedzą i doświadczeniem specjalistów.
              </p>
            </details>
            <details>
              <summary>
                Kupiłam już kursy i nie pomogły. Czym to się różni?
              </summary>
              <p>
                W MAGIC trzymamy rękę na pulsie. Ustawiamy reklamy na żywo,
                spotykamy się na bieżąco, przesyłamy sobie screeny, gdy nie
                możemy się spotkać lub do konsultacji zostało sporo czasu.
              </p>
            </details>
            <details>
              <summary>„Promuj post” a reklama w Menedżerze Reklam?</summary>
              <p>
                „Promuj post” to świetna opcja, ale w Menedżerze Reklam masz o
                wiele więcej dokładniejszych danych, celów reklamowych i
                możliwości. Od „promuj posta” sama zaczynałam, ale prawdziwe
                lejki ustawiamy na profesjonalnym koncie reklamowym :)
              </p>
            </details>
            <details>
              <summary>Dużo zapisów, zero klientów. Co jest nie tak?</summary>
              <p>
                Cały w tym ambaras, że dobra i słaba reklama na pierwszy rzut
                oka wyglądają tak samo. Grafika, wideo, tekst, strona www: to
                wszystko ma wpływ na sukces reklamy i to wspólnie analizujemy.
              </p>
            </details>
            <details>
              <summary>
                Advantage+ targetuje mi „klub geriatryczny”. Da się to ogarnąć?
              </summary>
              <p>
                Da się. Wyłączanie udoskonaleń Advantage+ to jedno, ale
                ważniejsze są grupy odbiorców, kreacje dopasowane do grupy i
                test 2–3 zestawów z tymi samymi kreacjami. Mamy dedykowane
                szkolenie na temat Advantage+, a jeżeli napotkasz trudności,
                pomożemy Ci na żywo!
              </p>
            </details>
          </div>
          <p className="faq-sub">O subskrypcji</p>
          <div className="faq">
            <details>
              <summary>🔍 Na jakiej platformie funkcjonuje MAGIC?</summary>
              <p>
                MAGIC działa na platformie Circle i ma wygodną aplikację! Możesz
                więc korzystać z platformy nawet w podróży.
              </p>
            </details>
            <details>
              <summary>💎 Co sprawia, że MAGIC jest wyjątkowy?</summary>
              <p>
                Dostajesz cały zespół, nie jedną specjalistkę od adsów: reklamy,
                teksty, grafiki, strategię i automatyzacje w jednej subskrypcji.
                Masz 5 spotkań na żywo miesięcznie (wszystkie nagrywane),
                pytania zadajesz pisemnie, kiedy Ci wygodnie, a każda nowa
                członkini zaczyna od spotkania 1:1 z Nicolą i własnego MAGIC
                Planu. Każdy pakiet zawiera dokładnie to samo; różni się tylko
                długością i ceną za miesiąc.
              </p>
            </details>
            <details>
              <summary>🚀 Jak wygląda MAGIC Plan na start?</summary>
              <p>
                Pierwsze 20 osób otrzyma MAGIC Plan. Po dołączeniu wypełniasz
                krótki formularz (10 minut) i umawiasz spotkanie 1:1 z Nicolą:
                rozmowę o Twoim biznesie i reklamach. Do 5 dni po spotkaniu w
                MAGIC czeka na Ciebie personalizowany plan reklam: propozycje
                budżetu, cele reklamowe i wskazówki, które nagrania warto
                zobaczyć.
              </p>
            </details>
            <details>
              <summary>🎯 Co czeka na mnie w MAGIC?</summary>
              <p>
                Na start: spotkanie 1:1 z Nicolą i Twój MAGIC Plan. 5 spotkań na
                żywo miesięcznie (konsultacje grupowe, warsztaty, ustawianie
                reklam na żywo: 60–90 min). Nielimitowane konsultacje pisemne,
                regularne inspiracje i praktyczne wskazówki oraz aktualne
                informacje branżowe w formie przystępnych prasówek. A to
                wszystko w cenie niższej niż pojedyncza konsultacja 1:1!
              </p>
            </details>
            <details>
              <summary>📚 Czego się nauczę?</summary>
              <p>
                Skupiamy się na digital marketingu, ze szczególnym naciskiem na
                kampanie w Meta Ads. Dodatkowo poznasz skuteczne techniki
                copywritingu i zasady tworzenia przyciągających grafik. Dowiesz
                się, jak stworzyć własny newsletter oraz jakie narzędzia AI
                warto wykorzystać w swojej pracy, aby działać szybciej i
                skuteczniej. Jak sprawić, żeby reklamy sprzedawały, a AI i
                automatyzacje robiły część roboty za Ciebie.
              </p>
            </details>
            <details>
              <summary>⏰ Ile czasu zajmuje MAGIC?</summary>
              <p>
                2–3 godziny tygodniowo, jeśli chcesz skorzystać z bieżących
                spotkań. Jak dużo czasu spędzisz na konsultowaniu swoich treści
                czy czytaniu materiałów, zależy od Ciebie. MAGIC został
                stworzony z myślą o zabieganych przedsiębiorczyniach: wszystkie
                spotkania są nagrywane, więc możesz z nich skorzystać w dowolnym
                momencie. Biznes to nie 9–17, działamy tak samo, bez sztywnych
                ram czasowych.
              </p>
            </details>
            <details>
              <summary>🦫 Kim jest Kapibara Barbara?</summary>
              <p>
                Kapibara Barbara jest naszą Asystentką AI napędzaną całą wiedzą
                z MAGIC. Możesz z nią skonsultować swoje zagwozdki związane z
                reklamami, pokazać wyniki, nagrać głosówkę i traktować jak swoją
                adsową koleżankę.
              </p>
            </details>
            <details>
              <summary>💜 Czym różnią się pakiety 1, 3 i 6?</summary>
              <p>
                Tylko długością i ceną za miesiąc. Zakres jest identyczny.
                {promotionActive &&
                  " Promocja trwa do 28.09.2026, do końca dnia, dla wszystkich."}
              </p>
            </details>

            <details>
              <summary>
                💳 Jak wygląda płatność za pakiet 3- i 6-miesięczny?
              </summary>
              <p>
                Płacisz co miesiąc przez wybrany okres: 3 lub 6 miesięcy. W tym
                czasie nie możesz anulować pakietu wcześniej. Po zakończeniu
                tego okresu pakiet przechodzi w subskrypcję miesięczną z
                zachowaniem Twojej ceny. Wariant subskrypcji wybierasz w
                koszyku.
              </p>
            </details>
          </div>
        </div>
        <StaticImage
          className="faqphoto"
          src="../../images/magic-jesien/ada_sofa.webp"
          alt="Ada do góry nogami na sofie z laptopem"
          width={800}
          placeholder="blurred"
          formats={["auto", "webp"]}
          quality={85}
          layout="constrained"
        />
      </div>
    </section>
  )
}
