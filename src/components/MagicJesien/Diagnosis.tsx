import React, { useState } from "react"

export default function Diagnosis() {
  const [withMagic, setWithMagic] = useState(false)
  return (
    <section className="sec" id="rozpoznajesz">
      <div className="wrap">
        <h2>
          Rozpoznajesz te zdania? <em>Zobacz, co możemy z nimi zrobić!</em>
        </h2>
        <div
          className="seg"
          role="group"
          aria-label="Porównanie"
          style={{ marginTop: ".6rem" }}
        >
          <button
            type="button"
            className={!withMagic ? "selected" : ""}
            aria-pressed={!withMagic}
            aria-controls="diag"
            onClick={() => setWithMagic(false)}
          >
            Bez MAGIC
          </button>
          <button
            type="button"
            className={withMagic ? "selected" : ""}
            aria-pressed={withMagic}
            aria-controls="diag"
            onClick={() => setWithMagic(true)}
          >
            Z MAGIC
          </button>
        </div>
        <div className={withMagic ? "diag magic" : "diag"} id="diag">
          <div>
            <ul className="plist list-bez">
              <li className="card">
                <span className="em2">🫠</span>
                <div>
                  <b>„Jak wchodzę do Menedżera Reklam, to dostaję zawału.”</b>
                  <p>
                    Nic dziwnego, sama chciałabym zobaczyć nagranie, na którym
                    Mark Zuckerberg korzysta z konta reklamowego.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">📼</span>
                <div>
                  <b>
                    „Wszystko wyglądało inaczej niż na kursach, które kupiłam.”
                  </b>
                  <p>
                    Wszystko w reklamach zmienia się bardzo dynamicznie, a w
                    MAGIC o tym pamiętamy.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">📊</span>
                <div>
                  <b>
                    „Nie umiem czytać tych wyników. Wspomagam się czatem, ale
                    nie wiem, na ile mu ufać.”
                  </b>
                  <p>
                    AI nie zawsze pomoże, jeśli chodzi o analizę reklam. Warto
                    polegać na doświadczeniu innych.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">🧩</span>
                <div>
                  <b>
                    „Piksel urósł mi w głowie do technicznego
                    nie-wiadomo-czego.”
                  </b>
                  <p>
                    Odkładany od miesięcy, bo brzmi jak coś dla programistek.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">🔒</span>
                <div>
                  <b>
                    „Straciłam konto reklamowe na 3 miesiące, bo ktoś z zewnątrz
                    je ustawiał.”
                  </b>
                  <p>
                    Dobrze jest zrozumieć reklamy samodzielnie i wyskalować je
                    do momentu, aby móc je przekazać dalej.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">💳</span>
                <div>
                  <b>
                    „Wydaję pieniądze klientki, więc boję się cokolwiek
                    testować.”
                  </b>
                  <p>
                    Reklamy to usługa, której nie odważasz się wpisać do oferty.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">📥</span>
                <div>
                  <b>„Mam dużo zapisów, ale zero klientów.”</b>
                  <p>
                    Co z tego, że mamy „tanie kontakty”, skoro dalej nie dzieje
                    się nic?
                  </p>
                </div>
              </li>
            </ul>
            <ul className="plist list-z">
              <li className="card">
                <span className="em2">🫠</span>
                <div>
                  <b>
                    Na LIVE klikamy razem, w Menedżerze, który widzisz dziś.
                  </b>
                  <p>
                    Osoby, które bały się Menedżera jak ognia, wpadają na
                    konsultacje grupowe i pokazują swój ekran.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">📼</span>
                <div>
                  <b>Spotykamy się na żywo.</b>
                  <p>
                    Wspólnie wyklikasz reklamę razem z nami, pokażesz swój ekran
                    lub skorzystasz z aktualnego nagrania.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">📊</span>
                <div>
                  <b>
                    Wrzucasz screen wyników na kanał „Zadaj pytanie” i dostajesz
                    analizę TWOJEGO konta.
                  </b>
                  <p>
                    Każdy przypadek jest inny, w MAGIC otrzymujesz rozwiązanie
                    dla Ciebie.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">🧩</span>
                <div>
                  <b>Otrzymujesz wytyczne, jak zainstalować piksel.</b>
                  <p>
                    A jeśli coś nie działa? Sprawdzamy wspólnie na konsultacjach
                    grupowych.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">🔒</span>
                <div>
                  <b>
                    Nie oddawaj nikomu konta, zanim sama nie zrozumiesz, co się
                    w nim dzieje.
                  </b>
                  <p>
                    Dzięki temu skalowanie Twoich reklam i każda współpraca, gdy
                    przekażesz reklamy, będzie o wiele skuteczniejsza.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">💳</span>
                <div>
                  <b>Boisz się cudzego budżetu? Zacznij od swojego.</b>
                  <p>
                    Freelancerki ustawiają pierwsze kampanie klientek z
                    konsultacją krok po kroku i dopisują reklamy do oferty.
                  </p>
                </div>
              </li>
              <li className="card">
                <span className="em2">📥</span>
                <div>
                  <b>Patrzymy na jakość leadów, nie tylko na ich koszt.</b>
                  <p>
                    Zapis za 3–5 zł ma sens dopiero wtedy, gdy zamienia się w
                    rozmowę, a nie tylko wtedy, gdy wygląda dobrze na raporcie
                    :)
                  </p>
                </div>
              </li>
            </ul>
            <div className="cta-row" style={{ marginTop: "1.4rem" }}>
              <a className="btn btn-primary" href="#pakiety">
                Tak! Zwiększam sprzedaż dzięki reklamom
              </a>
            </div>
          </div>
          <div
            className="phone"
            aria-label="Powiadomienia z tygodnia bez MAGIC i z MAGIC"
          >
            <div className="screen">
              <div className="clock">
                <b>07:12</b>
                <span>poniedziałek, 28 września</span>
              </div>
              <div className="nset bez">
                <div className="notif">
                  <span className="ic">🚫</span>
                  <div>
                    <b>Menedżer Reklam</b>
                    <p>Konto reklamowe zablokowane.</p>
                  </div>
                  <small>teraz</small>
                </div>
                <div className="notif">
                  <span className="ic">💸</span>
                  <div>
                    <b>Menedżer Reklam</b>
                    <p>Budżet dzienny wydany. Zakupy: 0.</p>
                  </div>
                  <small>1 min</small>
                </div>
                <div className="notif">
                  <span className="ic">📊</span>
                  <div>
                    <b>Raport tygodniowy</b>
                    <p>Zasięg 40 000. Nowe klientki: 0.</p>
                  </div>
                  <small>8 min</small>
                </div>
                <div className="notif">
                  <span className="ic">📣</span>
                  <div>
                    <b>Instagram</b>
                    <p>„Promuj post”: 14 polubień, 0 zapytań.</p>
                  </div>
                  <small>wczoraj</small>
                </div>
                <div className="notif">
                  <span className="ic">📩</span>
                  <div>
                    <b>Agencja</b>
                    <p>Faktura za reklamy: do zapłaty.</p>
                  </div>
                  <small>pon.</small>
                </div>
              </div>
              <div className="nset z">
                <div className="notif">
                  <span className="ic">✅</span>
                  <div>
                    <b>Circle · Ada</b>
                    <p>Kampania gotowa do startu. Ruszaj w czwartek.</p>
                  </div>
                  <small>teraz</small>
                </div>
                <div className="notif">
                  <span className="ic">📈</span>
                  <div>
                    <b>Menedżer Reklam</b>
                    <p>Zakupy: 31, koszt zakupu spadł o 38%.</p>
                  </div>
                  <small>3 min</small>
                </div>
                <div className="notif">
                  <span className="ic">✍️</span>
                  <div>
                    <b>Circle · Justyna</b>
                    <p>Poprawiłam nagłówek, sprawdź wersję B.</p>
                  </div>
                  <small>12 min</small>
                </div>
                <div className="notif">
                  <span className="ic">🐾</span>
                  <div>
                    <b>Kapibara Barbara</b>
                    <p>Odpowiedź na Twoje pytanie jest gotowa.</p>
                  </div>
                  <small>wczoraj</small>
                </div>
                <div className="notif">
                  <span className="ic">🗓️</span>
                  <div>
                    <b>Rozkład jazdy</b>
                    <p>Konsultacje grupowe: czwartek, 11:00.</p>
                  </div>
                  <small>pon.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
