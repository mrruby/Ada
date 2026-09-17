import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import VimeoFacade from "components/VimeoFacade"

export const Invitation = () => (
  <section
    className="sec lav center"
    id="wideo"
    style={{ paddingTop: "2.5rem" }}
  >
    <div className="wrap">
      <h2>
        O co chodzi w MAGIC? <em>Sprawdź w skrócie</em>
      </h2>
      <div className="panel" style={{ marginTop: "2rem" }}>
        <div className="invitation-player">
          <VimeoFacade
            videoId="1117395484"
            title="Twoje zaproszenie do MAGIC"
            sizes="(max-width: 900px) 100vw, 860px"
            maxThumbnailWidth={1280}
          />
        </div>
      </div>
    </div>
  </section>
)

export const Audience = () => (
  <section className="sec" id="dla-kogo">
    <div className="wrap">
      <div className="center">
        <p className="eyebrow">Dla kogo</p>
        <h2>
          Przedsiębiorczynie, które realnie działają w MAGIC.{" "}
          <em>Który profil jest Twój?</em>
        </h2>
        <p className="lead">
          MAGIC jest dla przedsiębiorczyń, które same ogarniają marketing
          swojego biznesu, i dla tych, które robią to dla klientek. Są u nas
          numerolożki, dietetyczki, nauczycielki języków, prawniczki,
          rękodzielniczki, właścicielki sklepów, social media managerki,
          wirtualne asystentki, a nawet hodowla owiec z manufakturą serów.
        </p>
      </div>
      <div className="profiles">
        <article className="card prof hover-lift">
          <div className="em">💼</div>
          <b>Przedsiębiorczyni z marką osobistą i usługami</b>
          <p className="pain">
            „Konsultacje, dietetyka, coaching, fotografia. Klientki przychodzą z
            polecenia, a chcę, żeby zapytania były regularne.”
          </p>
          <p>
            Kampania na obserwujących, remarketing i reklama, która przyprowadza
            zapytania także wtedy, kiedy nie siedzisz w telefonie.
          </p>
        </article>
        <article className="card prof hover-lift">
          <div className="em">🎓</div>
          <b>Ekspertka z produktem cyfrowym</b>
          <p className="pain">
            „Sprzedaję na launchach albo z Instagrama 1:1. Wszystko stoi na
            mojej obecności i zrywach.”
          </p>
          <p>
            W MAGIC budujesz stały lejek: reklama na obserwujących, zapis na
            lead magnet, sekwencja mailowa i kampania sprzedażowa, która
            pracuje, gdy Ciebie nie ma.
          </p>
        </article>
        <article className="card prof hover-lift">
          <div className="em">🧑‍💻</div>
          <b>Freelancerka / social media managerka</b>
          <p className="pain">
            „Wydaję pieniądze klientki, więc boję się cokolwiek testować.”
          </p>
          <p>
            Reklamy dopisujesz do oferty ze wsparciem przy pierwszej kampanii
            dla klientki: zaczynasz od własnego budżetu, konsultujesz konto
            klientki tak samo jak swoje.
          </p>
        </article>
        <article className="card prof hover-lift">
          <div className="em">🏥</div>
          <b>Lokalna usługa lub gabinet</b>
          <p className="pain">
            „Nie wiem, jak wypromować mój biznes i czy to ma w ogóle sens?”
          </p>
          <p>
            Pokażemy Ci, jak wystartować i dotrzeć reklamami do osób w Twojej
            okolicy.
          </p>
        </article>
        <article className="card prof hover-lift">
          <div className="em">🛍️</div>
          <b>Mikro e-commerce i rękodzieło</b>
          <p className="pain">
            „Ustawiam kampanie, ale nie wiem, czy one działają dobrze.”
          </p>
          <p>
            Z nami przygotujesz się na wysoki sezon, a także zadbasz o regularne
            działania z kampaniami reklamowymi.
          </p>
        </article>
        <article className="card prof hover-lift">
          <div className="em">🔑</div>
          <b>Przedsiębiorczyni, która zlecała reklamy agencji</b>
          <p className="pain">
            „Raporty, które otrzymywałam, były niejasne i nic z nich nie
            rozumiałam.”
          </p>
          <p>
            Spróbuj samodzielnie. Jasne, to zajmie nieco więcej czasu, ale
            zdejmie z głowy duże zobowiązanie finansowe i pomoże działać w Twoim
            tempie.
          </p>
        </article>
      </div>
      <div className="cta-row" style={{ marginTop: "1.6rem" }}>
        <a className="btn btn-primary" href="#pakiety">
          To o mnie, wchodzę w to!
        </a>
      </div>
    </div>
  </section>
)

export const Features = () => (
  <section className="sec" id="dlaczego">
    <div className="wrap">
      <div className="center">
        <p className="eyebrow">Czemu MAGIC</p>
        <h2>
          Co sprawia, że MAGIC jest wyjątkowy?{" "}
          <em>Tutaj „klikanie” reklam to tylko mały element wspólnej pracy!</em>
        </h2>
        <p className="lead">
          Grafika, tekst, strona www, ścieżka: to wszystko wpływa na sukces
          Twojego biznesu. To tutaj 5 ekspertów wspiera Ciebie w osiągnięciu
          celów finansowych.
        </p>
      </div>
      <div className="rows">
        <div className="row">
          <div className="txt">
            <p className="eyebrow">MAGIC Plan na start</p>
            <h3>Zaczynasz od spotkania 1:1 z Nicolą i własnego planu reklam</h3>
            <p>
              Pierwsze 20 osób otrzyma MAGIC Plan: spotkanie 1:1 i
              personalizowany plan reklam, propozycje budżetu oraz wskazówki,
              które nagrania warto zobaczyć i jakie cele reklamowe ustawić.
            </p>
          </div>
          <div className="ui">
            <div
              className="panel y"
              style={{ width: "100%", display: "grid", placeItems: "center" }}
            >
              <div className="uic plandoc" aria-label="Przykładowy MAGIC Plan">
                <div className="pd-head">
                  <span className="pd-ic">🎯</span>
                  <div>
                    <b>Twój MAGIC Plan</b>
                    <span>przygotowany przez Nicolę po spotkaniu 1:1</span>
                  </div>
                </div>
                <ol>
                  <li className="">
                    <i>1</i>
                    <div>
                      <b>Porządki na koncie</b>
                      <span>piksel, zdarzenia, struktura konta</span>
                    </div>
                    <em>tydzień 1</em>
                  </li>
                  <li className="">
                    <i>2</i>
                    <div>
                      <b>Kampania na grupę ciepłą</b>
                      <span>obserwujący, reakcje, odwiedziny profilu</span>
                    </div>
                    <em>tydzień 2</em>
                  </li>
                  <li className="">
                    <i>3</i>
                    <div>
                      <b>Landing i tekst do konsultacji</b>
                      <span>Justyna i Dorota sprawdzają przed startem</span>
                    </div>
                    <em>tydzień 3</em>
                  </li>
                  <li className="">
                    <i>4</i>
                    <div>
                      <b>Start kampanii sprzedażowej</b>
                      <span>omawiamy na konsultacjach grupowych</span>
                    </div>
                    <em>tydzień 4</em>
                  </li>
                </ol>
                <div className="pd-foot">
                  <span>Budżet na start</span>
                  <b>30–50 zł / dzień</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row rev">
          <div className="txt">
            <p className="eyebrow">Konsultacje pisemne na Circle</p>
            <h3>Zadajesz pytanie o SWOJĄ reklamę, kiedy Ci wygodnie</h3>
            <p>
              Dwa kanały, o których klubowiczki mówią najczęściej:{" "}
              <strong>„Zadaj pytanie”</strong>, gdzie wrzucasz screen wyników i
              dostajesz analizę swojego konta, oraz{" "}
              <strong>„Skonsultuj materiały”</strong>, gdzie Justyna sprawdza
              copy, a Dorota grafiki i identyfikację wizualną, zanim wydasz
              budżet. Do tego dwie 1,5-godzinne sesje konsultacji grupowych
              miesięcznie, na których możesz pokazać swój ekran i zadać pytanie!
            </p>
          </div>
          <div className="ui">
            <div
              className="panel p"
              style={{ width: "100%", display: "grid", placeItems: "center" }}
            >
              <div
                className="uic thread"
                aria-label="Przykład konsultacji pisemnej na Circle"
              >
                <div className="msg">
                  <div className="who">
                    <span className="av">R</span>
                    <b>Roksana</b>
                    <small>8 gru</small>
                  </div>
                  <p>
                    Hej, przemieniłam kampanię na Black Friday na kampanię z
                    kodem rabatowym do grupy ciepłej, głównie obserwujących. Coś
                    się chyba zawiesiło, reklamy prawie się nie wyświetlają.
                    Czekać? Zwiększyć budżet? 😞
                  </p>
                </div>
                <div className="msg reply">
                  <div className="who">
                    <StaticImage
                      src="../../images/ada_portrait.webp"
                      alt=""
                      placeholder="blurred"
                      formats={["auto", "webp"]}
                      quality={85}
                      layout="constrained"
                      className="portrait-photo"
                      width={208}
                      height={208}
                    />
                    <b>Ada</b>
                    <span className="adm">Admin</span>
                    <small>8 gru</small>
                  </div>
                  <p>
                    <span className="name">Roksana</span>, koniecznie zwiększ
                    grupę ciepłą, bo jest za mała: dodaj wszystkich, którzy
                    zareagowali na reklamy, obserwują Cię na IG i odwiedzili
                    profil. Częstotliwość powinna być minimum 4–5 przy grupie
                    kilkuset osób. Zobacz też nagranie o reklamach na Q5, tam
                    jest lejek na ten czas 👍
                  </p>
                  <div className="act">Like · Reply · 1 like</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="txt">
            <p className="eyebrow">5 spotkań na żywo miesięcznie</p>
            <h3>Konsultacje grupowe, warsztaty i LIVE z ustawianiem reklam</h3>
          </div>
          <div className="ui">
            <div
              className="panel y"
              style={{ width: "100%", display: "grid", placeItems: "center" }}
            >
              <div
                className="stack"
                aria-label="Przykładowy rozkład jazdy na miesiąc"
              >
                <div className="uic ann">
                  <div className="who">
                    <i>M</i>Asystentka MAGIC w Ogłoszenia · 1d
                  </div>
                  Hej dziewczyny! 💜 Październik będzie miesiącem pełnym
                  konkretnych tematów, pr…
                  <div className="banner">
                    <span>Rozkład jazdy</span> <em>na październik</em>
                  </div>
                </div>
                <div className="uic ev r1">
                  <div className="date">
                    <b>6</b>
                    <span>paź</span>
                  </div>
                  <div>
                    <b className="t">
                      Tworzenie asystenta do generowania raportów reklamowych z
                      pomocą Excela i Canvy
                    </b>
                    <span className="h">11:00 – 12:00</span>
                  </div>
                </div>
                <div className="uic ev r2">
                  <div className="date">
                    <b>15</b>
                    <span>paź</span>
                  </div>
                  <div>
                    <b className="t">Konsultacje grupowe</b>
                    <span className="h">11:00 – 12:30</span>
                  </div>
                </div>
                <div className="uic ev r3">
                  <div className="date">
                    <b>20</b>
                    <span>paź</span>
                  </div>
                  <div>
                    <b className="t">Dopasuj tekst AI do głosu marki</b>
                    <span className="h">17:00 – 18:00</span>
                  </div>
                </div>
                <div className="uic ev r4">
                  <div className="date">
                    <b>27</b>
                    <span>paź</span>
                  </div>
                  <div>
                    <b className="t">LIVE: ustawianie reklam na żywo</b>
                    <span className="h">18:00 – 19:00</span>
                  </div>
                </div>
                <div className="uic ev r1">
                  <div className="date">
                    <b>29</b>
                    <span>paź</span>
                  </div>
                  <div>
                    <b className="t">Konsultacje grupowe z Nicolą</b>
                    <span className="h">
                      17:00 – 18:30, termin dla pracujących w dzień
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row rev">
          <div className="txt">
            <p className="eyebrow">Nasza asystentka</p>
            <h3>„Barbara, tu masz wyniki reklamy…”</h3>
            <p>
              Kapibara Barbara to nasza sympatyczna asystentka AI, która nie
              korzysta z wiedzy ogólnodostępnej, a jest zasilana naszymi
              nagraniami, tekstami i skryptami: możesz przesłać jej screen,
              nagrać głosówkę (serio!) i potraktować jak koleżankę od reklam.
              Podpowie też, gdzie znaleźć nagranie na odpowiedni temat, jeśli
              zgubisz się w naszych poziomach!
            </p>
          </div>
          <div className="ui">
            <div
              className="panel p"
              style={{ width: "100%", display: "grid", placeItems: "center" }}
            >
              <div
                className="uic newmsg"
                aria-label="Nowa wiadomość do Kapibary Barbary"
              >
                <div className="nm-head">New message</div>
                <div className="nm-to">
                  To:{" "}
                  <span>
                    Kapi<i></i>
                  </span>
                </div>
                <div className="nm-sugg">
                  <StaticImage
                    src="../../images/kapibara_barbara_portrait.webp"
                    alt=""
                    width={68}
                    height={68}
                    className="barbara-photo"
                    placeholder="blurred"
                  />
                  Kapibara Barbara
                </div>
                <div className="reply">
                  Cześć Klubowiczko! 🌼 Nagranie o instalacji piksela jest w
                  Poziomie 0, lekcja 3: podsyłam link. Jak już podepniesz, wrzuć
                  screen zdarzeń na „Zadaj pytanie”, dziewczyny sprawdzą.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const Checklist = () => (
  <section className="sec lav" id="sprawdz">
    <div className="wrap">
      <div className="center">
        <p className="eyebrow">Zanim wybierzesz</p>
        <h2>
          Wybierając miejsce, w którym będziesz pracować z reklamami,{" "}
          <em>sprawdź…</em>
        </h2>
      </div>
      <div className="panel" style={{ marginTop: "2rem" }}>
        <div className="card report">
          <div className="rh">
            <div>
              <b>Co otrzymasz w ramach subskrypcji?</b>
            </div>
          </div>
          <ul>
            <li>
              <div>
                <b>
                  Plan na start pod Twój biznes, nie tylko dostęp do materiałów
                </b>
              </div>
              <span className="st">W MAGIC: spotkanie 1:1 i MAGIC Plan</span>
            </li>
            <li>
              <div>
                <b>
                  Ktoś, kto na żywo spojrzy na Twój ekran lub sprawdzi screeny
                </b>
              </div>
              <span className="st">W MAGIC: 2 sesje w miesiącu</span>
            </li>
            <li>
              <div>
                <b>
                  Możliwość konsultacji screenów i zadania pytania pomiędzy
                  spotkaniami
                </b>
              </div>
              <span className="st">
                W MAGIC: kontakt na Circle oraz rozmowy z Kapibarą
              </span>
            </li>
            <li>
              <div>
                <b>
                  Wsparcie w pisaniu i grafikach, nie tylko przy ustawieniu
                  reklamy
                </b>
              </div>
              <span className="st">W MAGIC: w cenie</span>
            </li>
            <li>
              <div>
                <b>Ścieżka nauki, nie lista tysiąca i jednego nagrania</b>
              </div>
              <span className="st">W MAGIC: poziomy 0→5</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="quote">
        <span className="qmark" aria-hidden="true">
          “
        </span>
        <StaticImage
          src="../../images/magic-jesien/ada_zen.webp"
          alt="Ada z laptopem na kolanach"
          width={360}
          height={360}
          placeholder="blurred"
          formats={["auto", "webp"]}
          quality={85}
          layout="constrained"
          className="quote-photo"
        />
        <p className="big">
          „Zatrudnienie agencji na start może zrobić krzywdę Twojemu biznesowi.
          Serio, serio.”
        </p>
        <p>
          Zarzucenie swojej firmy zbyt dużym zobowiązaniem finansowym to częsty
          problem małych biznesów. MAGIC stworzyłam właśnie dla małych marek:
          konsultacja Twojego konta, pomysłów na reklamy i pisemne „omówienie”
          tematów to najlepsza i najbardziej elastyczna opcja.
        </p>
        <div className="sig">
          <b>Ada Promis-Urbas</b>
          <span>ekspertka Meta Ads, założycielka MAGIC</span>
        </div>
      </div>
    </div>
  </section>
)

export const Progress = () => (
  <section className="sec lav" id="postepy">
    <div className="wrap">
      <div className="center">
        <h2>
          Co się zmieni po 1, 3 i 6 miesiącach?{" "}
          <em>Wartość, którą widać w czasie.</em>
        </h2>
      </div>
      <div className="progress" aria-hidden="true">
        <div className="track">
          <div className="fill"></div>
          <span className="lvl" style={{ left: "0%" }}>
            0
          </span>
          <span className="lvl" style={{ left: "20%" }}>
            1
          </span>
          <span className="lvl" style={{ left: "40%" }}>
            2
          </span>
          <span className="lvl" style={{ left: "60%" }}>
            3
          </span>
          <span className="lvl" style={{ left: "80%" }}>
            4
          </span>
          <span className="lvl" style={{ left: "100%" }}>
            5
          </span>
          <span className="flag start" style={{ left: "20%" }}>
            1 miesiąc
          </span>
          <span className="flag" style={{ left: "60%" }}>
            3 miesiące
          </span>
          <span className="flag end" style={{ left: "100%" }}>
            6 miesięcy
          </span>
        </div>
      </div>
      <div className="stages">
        <article className="card stage">
          <div className="em">🛟</div>
          <h3>Po 1 miesiącu</h3>
          <div className="lv">Poziomy 0–1: ADS Starter i ADS Beginner</div>
          <ul>
            <li>spotkanie 1:1 z Nicolą za Tobą i MAGIC Plan w ręku</li>
            <li>piksel podpięty (na żywo, w 15 minut) i konto zabezpieczone</li>
            <li>ustawisz Twoją pierwszą kampanię!</li>
          </ul>
          <div className="tally">5 spotkań na żywo za Tobą</div>
        </article>
        <article className="card stage">
          <div className="em">📈</div>
          <h3>Po 3 miesiącach</h3>
          <div className="lv">Poziomy 2–3: ADS Analyst i ADS Strategist</div>
          <ul>
            <li>
              zaczynasz tworzyć konkretny lejek i analizować wyniki reklam
            </li>
            <li>poprawiasz kreacje z pomocą graficzki i copywriterki</li>
            <li>Twoje reklamy nabierają rumieńców!</li>
          </ul>
          <div className="tally">
            15 spotkań, Black Friday i święta z planem
          </div>
        </article>
        <article className="card stage">
          <div className="em">🚀</div>
          <h3>Po 6 miesiącach</h3>
          <div className="lv">
            Poziomy 4–5: ADS Specialist oraz AI i automatyzacje
          </div>
          <ul>
            <li>
              kampanie sezonowe planujesz z wyprzedzeniem, a reklamy działają w
              tle
            </li>
            <li>skalujesz to, co działa, wyłączasz to, co nie działa</li>
            <li>
              możesz także podziałać z automatyzacjami i asystentem AI podczas
              spotkań z Dawidem!
            </li>
          </ul>
          <div className="tally">30 spotkań i pół roku nagrań</div>
        </article>
      </div>
    </div>
  </section>
)

export const Calendar = () => (
  <section className="sec lav" id="miesiac">
    <div className="wrap">
      <div className="center">
        <p className="eyebrow">Miesiąc w MAGIC</p>
        <h2>
          Jak może wyglądać Twój miesiąc w MAGIC?{" "}
          <em>Październik, przykładowo.</em>
        </h2>
      </div>
      <div
        className="card mcal"
        aria-label="Przykładowy miesiąc w MAGIC: spotkania i tematy do ogarnięcia"
      >
        <div className="mhead">
          <b>Październik 2026</b>
          <span>
            🗓️ spotkania na żywo   🟨 🟧 🟪 🟩 to, co ogarniasz w tym miesiącu
          </span>
        </div>
        <div className="mgrid">
          <div className="dh">pn</div>
          <div className="dh">wt</div>
          <div className="dh">śr</div>
          <div className="dh">cz</div>
          <div className="dh">pt</div>
          <div className="dh">sb</div>
          <div className="dh">nd</div>
          <div className="dd off">28</div>
          <div className="dd off">29</div>
          <div className="dd off">30</div>
          <div className="dd">
            1
            <i className="nt o">
              👩‍💻 czas na skonsultowanie <b>strony www</b>
            </i>
          </div>
          <div className="dd">2</div>
          <div className="dd">3</div>
          <div className="dd">4</div>
          <div className="dd">
            5
            <i className="nt p">
              💌 ustawiasz <b>automatyzację w reklamie</b> na kontakty
            </i>
          </div>
          <div className="dd">
            6<i className="nt live">💡 warsztat: raporty reklamowe z AI</i>
          </div>
          <div className="dd">7</div>
          <div className="dd">
            8
            <i className="nt y">
              🖌️ czas na skonsultowanie <b>tekstów</b>
            </i>
          </div>
          <div className="dd">9</div>
          <div className="dd">10</div>
          <div className="dd">11</div>
          <div className="dd">
            12
            <i className="nt k">
              🔮 poznajesz <b>aktualne trendy</b>
            </i>
          </div>
          <div className="dd">13</div>
          <div className="dd">
            14
            <i className="nt o">
              📰 krok po kroku ustawiasz kampanię z <b>zapisem na newsletter</b>
            </i>
          </div>
          <div className="dd">
            15<i className="nt live">🗓️ konsultacje grupowe, 1,5 h</i>
          </div>
          <div className="dd">16</div>
          <div className="dd">17</div>
          <div className="dd">18</div>
          <div className="dd">
            19
            <i className="nt k">
              🎨 skonsultujesz <b>grafiki</b>
            </i>
          </div>
          <div className="dd">
            20<i className="nt live">💡 warsztat: tekst AI w głosie marki</i>
          </div>
          <div className="dd">
            21
            <i className="nt y">
              🛎️ dodajesz do kampanii <b>remarketing</b>
            </i>
          </div>
          <div className="dd">22</div>
          <div className="dd">23</div>
          <div className="dd">24</div>
          <div className="dd">25</div>
          <div className="dd">
            26
            <i className="nt p">
              📬 <b>ścieżka mailowa</b> po zapisie na lead magnet
            </i>
          </div>
          <div className="dd">
            27<i className="nt live">🔴 LIVE: ustawianie reklam na żywo</i>
          </div>
          <div className="dd">
            28
            <i className="nt y">
              📊 rozwiązujesz <b>problemy z analityką</b>
            </i>
          </div>
          <div className="dd">
            29<i className="nt live">🗓️ konsultacje grupowe z Nicolą, 17:00</i>
          </div>
          <div className="dd">
            30
            <i className="nt o">
              🎥 czas na skonsultowanie <b>reklamowej rolki</b>
            </i>
          </div>
          <div className="dd">31</div>
          <div className="dd off">1</div>
        </div>
        <p className="mfoot">
          Przez cały miesiąc: konsultacje pisemne na kanałach „Zadaj pytanie” i
          „Skonsultuj materiały”, nagrania bez limitu i Kapibara Barbara. Twój
          MAGIC Plan podpowie, co jest dla Ciebie najważniejsze w tym miesiącu.
        </p>
      </div>
    </div>
  </section>
)

export const Team = () => (
  <section className="sec lav" id="zespol">
    <div className="wrap center">
      <p className="eyebrow">Kto prowadzi</p>
      <h2>
        Kogo spotkasz w MAGIC? <em>Cały team marketingowy!</em>
      </h2>
      <p className="lead">
        Meta Ads | Copywriting | Grafika | Koordynacja kampanii | AI i
        automatyzacje
      </p>
      <div className="team">
        <article className="card person hover-lift">
          <StaticImage
            src="../../images/ada_portrait.webp"
            alt="Ada"
            width={208}
            height={208}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={85}
            layout="constrained"
            className="portrait-photo"
          />
          <h3>Adrianna Promis-Urbas</h3>
          <div className="role">Meta Ads</div>
          <p>
            Kreatywna dusza i mózg MAGIC. Specjalizuje się w kampaniach Meta Ads
            i marketingu zbudowanym na relacjach. Z Adą skonsultujesz strukturę
            i wyniki swoich kampanii.
          </p>
        </article>
        <article className="card person hover-lift">
          <StaticImage
            src="../../images/nicola_portrait.webp"
            alt="Nicola"
            width={208}
            height={208}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={85}
            layout="constrained"
            className="portrait-photo"
          />
          <h3>Nicola Kut</h3>
          <div className="role">Koordynacja kampanii</div>
          <p>
            Analityczka, dla której żadne liczby i raporty nie są straszne. Z
            Nicolą zaczniesz i skonsultujesz reklamy: to ona poprowadzi Twoje
            spotkanie startowe i przygotuje Twój MAGIC Plan.
          </p>
        </article>
        <article className="card person hover-lift">
          <StaticImage
            src="../../images/justyna_portrait.webp"
            alt="Justyna"
            width={208}
            height={208}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={85}
            layout="constrained"
            className="portrait-photo"
          />
          <h3>Justyna Król</h3>
          <div className="role">Copywriting</div>
          <p>
            Socjolożka i zaklinaczka słów. Justynie wyślesz tekst reklamy do
            sprawdzenia, zanim odpalisz reklamę.
          </p>
        </article>
        <article className="card person hover-lift">
          <StaticImage
            src="../../images/dorota_portrait.webp"
            alt="Dorota"
            width={208}
            height={208}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={85}
            layout="constrained"
            className="portrait-photo"
          />
          <h3>Dorota Woźniak</h3>
          <div className="role">Grafika</div>
          <p>
            Architektka z pasją do projektowania. Dorota powie, co poprawić w
            grafikach i pokaże, jakie materiały ustawić w reklamie.
          </p>
        </article>
        <article className="card person hover-lift">
          <StaticImage
            src="../../images/dawid_portrait.webp"
            alt="Dawid"
            width={208}
            height={208}
            placeholder="blurred"
            formats={["auto", "webp"]}
            quality={85}
            layout="constrained"
            className="portrait-photo"
          />
          <h3>Dawid Urbas</h3>
          <div className="role">AI i automatyzacje</div>
          <p>
            Pasjonat AI i automatyzacji. Z Dawidem ustawisz automatyzacje i
            stworzysz swojego asystenta AI, który pracuje dla Ciebie.
          </p>
        </article>
      </div>
      <p className="lead" style={{ marginTop: "2rem", maxWidth: "none" }}>
        <strong>
          Dołącz do społeczności kobiet, które wspólnie rozwijają swoje biznesy
          i wspierają się w drodze do sukcesu w reklamach Meta.
        </strong>
      </p>
      <div className="cta-row center" style={{ marginTop: "1rem" }}>
        <a className="btn btn-primary" href="#pakiety">
          Wybieram pakiet
        </a>
      </div>
    </div>
  </section>
)

export const Results = () => (
  <section className="sec lav" id="wyniki">
    <div className="wrap center">
      <p className="eyebrow">Wyniki członkiń</p>
      <h2>
        Wyniki i opinie członkiń. <em>Chcesz takich liczb u siebie?</em>
      </h2>
      <div className="results">
        <article className="card res">
          <div className="rh2">
            <span>Kampania sprzedażowa</span>
            <i>Menedżer Reklam</i>
          </div>
          <b>
            <span>18</span> zakupów
          </b>
          <div className="r2">
            <span>wartość konwersji</span>
            <b>6 832,20 zł</b>
          </div>
          <div className="r2">
            <span>wydana kwota</span>
            <b>989,92 zł</b>
          </div>
        </article>
        <article className="card res">
          <div className="rh2">
            <span>Kampania na zgłoszenia</span>
            <i>Menedżer Reklam</i>
          </div>
          <b>
            <span>128</span> przesłanych zgłoszeń
          </b>
          <div className="r2">
            <span>koszt wyniku</span>
            <b>17,61 zł</b>
          </div>
          <div className="r2">
            <span>cel</span>
            <b>formularz kontaktowy</b>
          </div>
        </article>
        <article className="card res">
          <div className="rh2">
            <span>Kampania sprzedażowa</span>
            <i>Menedżer Reklam</i>
          </div>
          <b>
            <span>68</span> zakupów w witrynie
          </b>
          <div className="r2">
            <span>wartość konwersji</span>
            <b>9 461,00 zł</b>
          </div>
          <div className="r2">
            <span>wydana kwota</span>
            <b>236,99 zł</b>
          </div>
        </article>
      </div>
      <div className="cta-row center" style={{ marginTop: "1.2rem" }}>
        <a className="btn btn-primary" href="#pakiety">
          Dołączam
        </a>
      </div>
    </div>
  </section>
)
