/**
 * Copy for /kolektyw-na-start — the onboarding guide for new clients of the
 * Magic collective ("Jak będzie wyglądać nasza współpraca?").
 */
import type { LinkItem, RichText } from "@/lib/content"

export type GuideTopic = {
  /** Large emoji shown above the title (reporting columns). */
  icon?: string
  title: RichText
  /** Trusted HTML: one or more <p> (and <ul>) elements. */
  body: RichText
}

export type GuideCard = {
  tone: "green" | "paper"
  topics: GuideTopic[]
}

/** Wraps each text in a paragraph. */
const p = (...texts: RichText[]): RichText => texts.map((text) => `<p>${text}</p>`).join("")

/** Checklist with the ✅ marker in front of each line. */
const checklist = (...items: RichText[]): RichText =>
  `<ul>${items.map((item) => `<li>✅ ${item}</li>`).join("")}</ul>`

export const guideNav: LinkItem[] = [
  { label: "Zasady współpracy", href: "#zasady-wspolpracy" },
  { label: "Kontakt", href: "#kontakt" },
]

export const guideHero = {
  title: "Jak będzie wyglądać<br />nasza współpraca?",
  lead: "<strong>Cieszymy się, że będziemy razem tworzyć coś wyjątkowego!</strong> Przygotowałyśmy dla Ciebie przewodnik po naszej współpracy, żebyś wiedziała, czego możesz się spodziewać na każdym etapie naszej przygody.",
}

export const meetUs = {
  title: "Poznajmy się bliżej!",
  topics: [
    {
      title: "💪 👩‍💻 Twój zespół marzeń",
      body: p(
        "Podczas naszej współpracy będziesz pracować głównie z <strong>Nicolą i Pauliną</strong>. To nasze kreatywne serca kolektywu MAGIC! Jedna z dziewczyn zostanie Twoją dedykowaną menadżerką projektu (będzie znała Twój biznes jak własną kieszeń), a druga będzie zawsze gotowa do pomocy, gdy zajdzie taka potrzeba. Lubimy myśleć o sobie jak o Twoim zewnętrznym zespole marketingowym!"
      ),
    },
    {
      title: "👩‍💻 Jak się komunikujemy",
      body: p(
        "Nasza ulubiona platforma komunikacyjna to <strong>Trello</strong>. To tam dzieje się cała magia! Dlaczego akurat Trello? Bo każda z nas jest wtedy na bieżąco z Twoim projektem, możemy szybko zareagować w razie nagłych sytuacji, a Ty masz wszystko w jednym miejscu. Oczywiście, jesteśmy również dostępne mailowo, ale Trello to naprawdę nasze miejsce mocy."
      ),
    },
    {
      title: "🗓️ Nasze comiesięczne spotkania",
      body: p(
        "<strong>Raz w miesiącu organizujemy spotkanie online</strong>. To czas, kiedy razem przeglądamy, co udało nam się osiągnąć, analizujemy wyniki i układamy plany na kolejne tygodnie. To także moment, gdy możesz podzielić się swoimi pomysłami i marzeniami dotyczącymi rozwoju biznesu, a my podpowiemy Ci, jak wykorzystać do tego kampanie reklamowe."
      ),
    },
  ] satisfies GuideTopic[],
}

export const creation = {
  id: "zasady-wspolpracy",
  title: "Tworzenie, które sprzedaje:",
  cards: [
    {
      tone: "green",
      topics: [
        {
          title: "🎨 Twoja identyfikacja wizualna<br />To fundament dobrych kreacji",
          body: p(
            "Zanim zaczniemy tworzyć, bardzo ważne jest dla nas poznanie Twojej marki! Dlatego na samym początku <strong>zapytamy Cię o identyfikację wizualną</strong>, nawet najprostszą. Czy masz już ustalone kolory, fonty, styl graficzny? A może korzystasz z konkretnych elementów wizualnych?",
            "<strong>Jeśli jeszcze nie masz spójnej identyfikacji wizualnej,</strong> możemy dla Ciebie przygotować prostą identyfikację wizualną za dodatkową opłatą. Dobierzemy zestaw fontów, kolorów, charakterystyczne elementy jak ikonki czy kształty, a także szablony na Instagram i Facebook. To inwestycja, która sprawi, że Twoja marka będzie spójna i bardziej rozpoznawalna!"
          ),
        },
      ],
    },
    {
      tone: "paper",
      topics: [
        {
          title: "🧐 Materiały, których potrzebujemy na starcie",
          body:
            p("Żeby móc stworzyć dla Ciebie najlepsze kreacje, potrzebujemy kilku rzeczy:") +
            checklist(
              "<strong>Logotyp</strong> w wersji kolorowej, czarno-białej, poziomej i pionowej",
              "<strong>Zdjęcia produktowe i wizerunkowe</strong> (im więcej, tym lepiej!)",
              "<strong>Kolorystyka marki</strong> (konkretne kody kolorów, jeśli masz)",
              "<strong>Fonty</strong> (które używasz lub chcesz używać)",
              "<strong>Wykorzystywane wcześniej materiały</strong> (jako przykłady i punkt odniesienia)",
              "<strong>Inspiracje graficzne</strong> (pokaż nam, jaka estetyka Ci się podoba!)",
              "<strong>Opinie</strong> (najlepiej w formie screenów)"
            ) +
            p(
              "Im szybciej je otrzymamy, tym szybciej wystartujemy z kampaniami!",
              "<strong>Bardzo ważne:</strong> Opóźnienie w przekazaniu materiałów automatycznie wiąże się z opóźnieniem w starcie kampanii. Im szybciej będziemy mieli komplet, tym szybciej zobaczymy pierwsze efekty!"
            ),
        },
      ],
    },
    {
      tone: "green",
      topics: [
        {
          title: "🔮 Graficzne czary",
          body: p(
            "<strong>Przygotowujemy dla Ciebie wszystkie grafiki reklamowe i udostępniamy je w Canvie,</strong> gdzie możesz zostawić swoje uwagi i komentarze. To nasze wspólne studio kreatywne! Jeśli potrzebujesz czegoś więcej, materiałów brandingowych, grafik na stronę czy innych projektów, chętnie wycenimy to osobno. Lubimy graficzne wyzwania!"
          ),
        },
        {
          title: "👀 Jak przekazywać nam swoje pomysły?",
          body: p(
            "Wszystkie komentarze do projektów graficznych najlepiej zostawiać bezpośrednio w <strong>Canvie</strong>. Dzięki temu nic się nie zgubi, a my widzimy dokładnie, o co Ci chodzi."
          ),
        },
      ],
    },
  ] satisfies GuideCard[],
}

export const contact = {
  id: "kontakt",
  title: "Jeśli chcesz otrzymać wycenę,<br />odezwij się do Nicoli:",
  email: "nicola@getbold.agency",
}

export const pace = {
  title: "Nasze tempo pracy",
  topics: [
    {
      title: "🗓️ Kiedy się odzywamy?",
      body: p(
        "Standardowo <strong>odpowiadamy w ciągu 30 godzin roboczych,</strong> ale zazwyczaj jesteśmy znacznie szybsze! Czasem może się zdarzyć, że powiadomienie zginie gdzieś po drodze, więc jeśli cisza trwa dłużej niż zwykle, <strong>śmiało oznaczaj nas ponownie na Trello</strong>, nie obrażamy się, wręcz przeciwnie!"
      ),
    },
    {
      title: "📊 Przygotowanie kampanii",
      body: p(
        "Na przygotowanie i uruchomienie Twojej kampanii potrzebujemy zazwyczaj <strong>3–4 pełne dni robocze</strong> od momentu, gdy dostaniemy komplet materiałów. To orientacyjny czas. Wiele zależy od tego, jak szybko akceptujesz teksty i grafiki oraz liczby poprawek. Pamiętaj, że jeśli coś dostarczysz później (na przykład stronę z ofertą), to automatycznie przesuwa nam termin, ale zawsze Cię o tym poinformujemy!"
      ),
    },
    {
      title: "🚨 Kampanie na ostatnią chwilę",
      body: p(
        "Czy jesteśmy w stanie przygotować kampanię od zera w ciągu jednego dnia? Jeśli wyskoczy coś pilnego, zazwyczaj jesteśmy. <strong>Nie traktujmy tego jednak jako rutynę, tylko wyjątek.</strong> Pewnie Ty też nie byłabyś zadowolona, gdyby ktoś nagle zajął Twoje miejsce w kolejce, prawda?"
      ),
    },
  ] satisfies GuideTopic[],
}

export const reporting = {
  title: "Jak pokazujemy efekty<br />naszej pracy",
  topics: [
    {
      icon: "🗓️",
      title: "Miesięczne podsumowania",
      body: p(
        "Na koniec każdego miesiąca przygotowujemy dla Ciebie <strong>szczegółowy raport.</strong> Pokazujemy w nim, ile osób kupiło, zapisało się, jaki był koszt tych akcji, ile sprzedało się produktów, jaki był zysk, co działało najlepiej, a co warto jeszcze poprawić lub dodać. Cały raport analizujemy wspólnie podczas comiesięcznego spotkania."
      ),
    },
    {
      icon: "🤝",
      title: "Na bieżąco dzielimy się spostrzeżeniami",
      body: p(
        "Nie czekamy do końca miesiąca z komunikacją! Czasem odzywamy się <strong>3 razy w ciągu dnia, czasem raz na dwa tygodnie</strong>. Wszystko zależy od tego, co się dzieje z kampaniami. Gdy przychodzą nam do głowy nowe pomysły lub chcemy z Tobą przedyskutować jakąś strategię, organizujemy burzę mózgów na <strong>Trello oraz na comiesięcznych spotkaniach.</strong> To nasza ulubiona forma kreatywnej współpracy!"
      ),
    },
  ] satisfies GuideTopic[],
}

export const community = {
  title: "Dbamy o Twoją społeczność",
  card: {
    tone: "paper",
    topics: [
      {
        title: "❌ Moderacja komentarzy",
        body: p(
          "Moderowanie komentarzy <strong>nie wchodzi w zakres naszej współpracy.</strong> Wierzymy, że moderowanie komentarzy to część sztuki komunikacji z klientami, nie tylko reagowanie na problemy. Chociaż zdarza nam się sprawdzać komentarze i ukrywać te mniej przyjemne, moderacja komentarzy powinna być częścią strategii komunikacji."
        ),
      },
    ],
  } satisfies GuideCard,
}

export const boundaries = {
  title: "Nasze granice",
  note: "(ale w <strong>pozytywnym</strong> znaczeniu!)",
  topics: [
    {
      title: "✅ Co robimy z pasją",
      body: p(
        "Skupiamy się na tym, co robimy najlepiej, czyli <strong>kampaniach reklamowych i kreacjach, które sprzedają.</strong>"
      ),
    },
    {
      title: "❌ Czego nie robimy w ramach stałej współpracy",
      body: p(
        "Nasza umowa <strong>nie obejmuje tworzenia stron internetowych, copywritingu</strong> (poza tekstami reklamowymi), <strong>fotografii produktowej, konsultacji ścieżek mailowych, tworzenia newsletterów czy optymalizacji stron.</strong> Część z tych usług świadczymy w ramach innych pakietów, część zlecamy świetnym specjalistom. Jeśli będziesz potrzebować czegoś wychodzącego poza zakres naszej współpracy, chętnie przygotujemy dla Ciebie wycenę lub kogoś polecimy!"
      ),
    },
    {
      title: "🚀 Twoje konto reklamowe to nasza odpowiedzialność",
      body: p(
        "To bardzo ważne: podczas naszej współpracy <strong>kampanie są w 100% pod naszą opieką.</strong> Oczywiście możesz zaglądać na konto (zachęcamy!), ale <strong>wszelkie zmiany wprowadzamy tylko my, osoby z kolektywu MAGIC.</strong> Jeśli wprowadzisz zmiany samodzielnie, nie będziemy mogły zagwarantować wyników kampanii. To jak próba kierowania samochodem na dwie kierownice."
      ),
    },
  ] satisfies GuideTopic[],
}

export const firstSteps = {
  title: "Pierwsze kroki razem",
  topics: [
    {
      title: "👀 Okres poznawania się",
      body: p(
        "Pierwsze <strong>3 miesiące</strong> to nasz okres testowy. To czas, kiedy poznajemy się nawzajem, sprawdzamy, co możemy wspólnie zdziałać i czy dobrze nam się razem pracuje. W tym czasie <strong>wdrażamy nasze sprawdzone metody prowadzenia kampanii i dostosowujemy je do Twojego biznesu.</strong> Zależy nam, aby pierwsze 3 miesiące upłynęły nam pod hasłem „zaufanie”."
      ),
    },
    {
      title: "🚀 Nasza filozofia tworzenia",
      body: p(
        "Kreacje reklamowe mają być piękne i spójne z Twoją marką, ale przede wszystkim mają sprzedawać! <strong>Wierzymy, że najlepsza grafika to ta, która przynosi Ci klientów i zyski.</strong> Nie martw się. Nie poświęcimy estetyki, ale skuteczność zawsze będzie na pierwszym miejscu."
      ),
    },
  ] satisfies GuideTopic[],
}

export const guideFooter =
  "Przygotowane przez zespół kolektywu MAGIC ✨<br />Masz pytania? Napisz do nas na Trello. Zawsze się cieszymy, gdy możemy pomóc!"
