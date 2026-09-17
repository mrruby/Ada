import React from "react"
import { MAGIC_CHECKOUT_URL } from "./config"

const formatPrice = (value: number) =>
  new Intl.NumberFormat("pl-PL").format(value)

export default function Offer({
  promotionActive,
}: {
  promotionActive: boolean
}) {
  const prices = promotionActive ? [509, 409, 379] : [557, 557, 557]
  return (
    <section className="sec" id="pakiety">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">Twój zespół od reklam</p>
          <h2>
            MAGIC to Twój zespół od reklam,{" "}
            <em>bez etatu i bez faktur od agencji</em>
          </h2>
          <p className="lead">
            Zakres każdej subskrypcji MAGIC jest ten sam, różni się tylko
            długością i ceną za miesiąc.
            {promotionActive &&
              " Ceny promocyjne obowiązują do 28.09, do końca dnia."}
          </p>
        </div>
        <div className="plans">
          <article className="card plan hover-lift">
            <div className="label">Subskrypcja elastyczna</div>
            <div className="months">
              <b>1</b>
              <span>miesiąc</span>
            </div>
            <div className="pricebox">
              <b>{prices[0]} zł</b>
              <span>/ miesiąc</span>
            </div>
            {promotionActive && (
              <div className="was">
                cena regularna <s>557 zł</s>
              </div>
            )}
            <p className="when">
              Sprawdzasz, jak to działa, bez długiego zobowiązania.
            </p>
            <p className="renew">
              🔁 Odnawia się co miesiąc. Możesz anulować w każdym momencie.
            </p>
            <a
              className="btn btn-primary"
              href={MAGIC_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dołączam na 1 miesiąc!
            </a>
          </article>
          <article className="card plan featured hover-lift">
            <span className="best">⚡ Top wybór!</span>
            <div className="label">3 miesiące w MAGIC</div>
            <div className="months">
              <b>3</b>
              <span>miesiące</span>
            </div>
            <div className="pricebox">
              <b>{prices[1]} zł</b>
              <span>/ miesiąc</span>
            </div>
            {promotionActive && (
              <div className="was">
                cena regularna <s>557 zł</s> / miesiąc
              </div>
            )}
            {promotionActive && (
              <span className="save">
                oszczędzasz 300 zł względem pakietu miesięcznego
              </span>
            )}
            <p className="when">
              Tyle trwa zbudowanie pierwszego lejka, przetestowanie kampanii i
              zobaczenie realnych wyników.
            </p>
            <a
              className="btn btn-primary"
              href={MAGIC_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dołączam na 3 miesiące!
            </a>
          </article>
          <article className="card plan hover-lift">
            <span className="best alt">💜 Najtaniej!</span>
            <div className="label">6 miesięcy w MAGIC</div>
            <div className="months">
              <b>6</b>
              <span>miesięcy</span>
            </div>
            <div className="pricebox">
              <b>{prices[2]} zł</b>
              <span>/ miesiąc</span>
            </div>
            {promotionActive && (
              <div className="was">
                cena regularna <s>557 zł</s> / miesiąc
              </div>
            )}
            {promotionActive && (
              <span className="save">
                oszczędzasz 780 zł względem pakietu miesięcznego
              </span>
            )}
            <p className="when">
              Dla tych, które wiedzą, że reklamy to nie sprint, tylko maraton.
            </p>
            <a
              className="btn btn-primary"
              href={MAGIC_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dołączam na 6 miesięcy!
            </a>
          </article>
        </div>

        <div className="card incl">
          <b>W każdym pakiecie dostajesz to samo:</b>
          <ul>
            <li>
              <strong>MAGIC Plan na start dla pierwszych 20 osób:</strong>
               spotkanie 1:1 z Nicolą i personalizowany plan reklam
            </li>
            <li>
              <strong>5 spotkań na żywo miesięcznie:</strong> 2 konsultacje
              grupowe (1,5 h), 2 warsztaty, LIVE, wszystkie nagrywane
            </li>
            <li>
              <strong>Konsultacje pisemne</strong> z ekspertkami na Circle, bez
              limitu
            </li>
            <li>
              <strong>Materiały szkoleniowe wideo</strong> i wewnętrzna baza
              wiedzy
            </li>
            <li>
              <strong>Nielimitowany dostęp do nagrań</strong> i Kapibara Barbara
              między spotkaniami
            </li>
          </ul>
        </div>

        <div className="card calc">
          <div className="ch">
            <b>Kalkulator: agencja czy MAGIC?</b>
            <span>przy stawce 2 000 zł / miesiąc za prowadzenie reklam</span>
          </div>
          <div className="ctable">
            <div className="cr head">
              <span>okres</span>
              <span>agencja lub freelancer</span>
              <span>MAGIC</span>
              <span>zostaje w Twoim budżecie</span>
            </div>
            <div className="cr">
              <span>1 miesiąc</span>
              <span>2 000 zł</span>
              <span>{formatPrice(prices[0] * 1)} zł</span>
              <b>{formatPrice((2000 - prices[0]) * 1)} zł</b>
            </div>
            <div className="cr">
              <span>3 miesiące</span>
              <span>6 000 zł</span>
              <span>{formatPrice(prices[1] * 3)} zł</span>
              <b>{formatPrice((2000 - prices[1]) * 3)} zł</b>
            </div>
            <div className="cr">
              <span>6 miesięcy</span>
              <span>12 000 zł</span>
              <span>{formatPrice(prices[2] * 6)} zł</span>
              <b>{formatPrice((2000 - prices[2]) * 6)} zł</b>
            </div>
          </div>
        </div>

        <p className="foot-note">
          {promotionActive
            ? "Promocja trwa do 28.09.2026, do końca dnia, i jest otwarta dla wszystkich."
            : "Promocja zakończona. Sprawdź aktualną ofertę w koszyku."}
        </p>
      </div>
    </section>
  )
}
