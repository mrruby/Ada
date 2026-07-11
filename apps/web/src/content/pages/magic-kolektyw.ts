import { parsePageSpec } from "../../page-spec/parse-page-spec"
import type { PageSpecInput } from "../../page-spec/page.schema"

export const magicKolektywPageInput = {
  schemaVersion: 1,
  path: "/magic-kolektyw/",
  locale: "pl-PL",
  brand: "magic",
  seo: {
    title: "Magic: Marketing Ads Girls Inside Collective",
    description:
      "Pracuję z biznesami, które dbają o dobrostan psychiczny i fizyczny: praktykuję slow marketing, przemyślany, wartościowy, zbudowany na relacjach",
  },
  sections: [
    {
      type: "hero",
      presentation: "collective",
      heading: "Marketing Ads Girls Inside Collective",
      body: [
        {
          kind: "paragraph",
          content: [
            { text: "Zyskaj stabilny przypływ klientów", marks: ["strong"] },
            {
              text: " dzięki profesjonalnemu zespołowi marketingowemu - bez zatrudniania in-house",
              marks: [],
            },
          ],
        },
      ],
      primaryCta: {
        label: "Chcę z Wami pracować!",
        href: "#umawiam-spotkanie",
        analyticsKey: "kolektyw-hero",
      },
      logo: {
        src: "src/images/magic-kolektyw.png",
        alt: "MAGIC Kolektyw",
        width: 600,
        height: 312,
      },
      decorations: {
        afterCta: {
          src: "src/images/magicArrow.svg",
          alt: "",
          width: 22,
          height: 34,
        },
      },
      media: {
        src: "src/images/magic-hero1.webp",
        alt: "Ada Promis",
        width: 4187,
        height: 4547,
      },
    },
    {
      type: "benefit-grid",
      presentation: "value-proposition",
      heading: "Zwiększ swoje zarobki, rozwijaj markę i pozyskuj klientów dzięki reklamom Meta Ads!",
      items: [
        {
          title: "Dla przedsiębiorczyń prowadzących kursy online, mentoringi, usługi cyfrowe",
          body: "Dla przedsiębiorczyń prowadzących kursy online, mentoringi, usługi cyfrowe",
        },
        {
          title: "Ekspercka wiedza reklamowa i partnerskie podejście do Twojego biznesu",
          body: "✅ Ekspercka wiedza reklamowa i partnerskie podejście do Twojego biznesu",
        },
        {
          title: "Nie musisz być specjalistką od reklam, by kampanie pracowały dla Ciebie!",
          body: "✅ Nie musisz być specjalistką od reklam, by kampanie pracowały dla Ciebie!",
        },
      ],
    },
    {
      type: "problem-solution",
      presentation: "comparison",
      heading: "Rozpoznajesz się w tym?",
      problems: [
        "❌ Masz super produkt, ale nie wiesz jak go sprzedać",
        "❌ Tracisz godziny na social media zamiast rozwijać biznes",
        "❌ Nie wiesz, czy inwestujesz w marketing skutecznie",
        "❌ Chcesz skalować, ale zespół in-house to za duży koszt",
      ],
      outcomes: [
        "✅ Strategiczne wsparcie na każdym etapie sprzedaży",
        "✅ Czas na rozwój produktów zamiast \"kręcenia się\" w marketingu",
        "✅ Przewidywalne wyniki i stabilny przyrost klientów",
        "✅ Ekspertki, które myślą o Twoim biznesie jak o swoim",
      ],
    },
    {
      type: "benefit-grid",
      presentation: "principles",
      heading: "Dlaczego MAGIC?",
      items: [
        {
          title: "🤝 Działamy jako Twój zespół",
          body: "🤝 Działamy jako Twój zespół - jesteśmy stałym partnerem w rozwoju Twojego biznesu",
        },
        {
          title: "🏅 Pracujemy na poziomie premium",
          body: "🏅 Pracujemy na poziomie premium - skupiamy się na długoterminowych relacjach i mierzalnych rezultatach",
        },
        {
          title: "👩‍💻 Łączymy strategię z wykonaniem",
          body: "👩‍💻 Łączymy strategię z wykonaniem - nie tylko doradzamy, ale przede wszystkim wdrażamy i zarządzamy",
        },
        {
          title: "🧠 Jesteśmy ADHD friendly",
          body: "🧠 Jesteśmy ADHD friendly - rozumiemy dynamikę kreatywnego umysłu i wspólnie z Tobą wypracujemy najlepszy system współpracy",
        },
      ],
    },
    {
      type: "audience",
      presentation: "collective",
      heading: "Dla kogo jest MAGIC?",
      artwork: {
        src: "src/images/magic-hero2.webp",
        alt: "Adrianna Promis-Urbas",
        width: 410,
        height: 592,
      },
      decoration: {
        src: "src/images/magicFlower.svg",
        alt: "",
        width: 40,
        height: 40,
      },
      groups: [
        {
          title: "Nasze usługi są idealnym rozwiązaniem dla przedsiębiorczyń, które:",
          criteria: [
            "Prowadzą ustabilizowany biznes online (kursy, mentoring, usługi)",
            "Regularnie publikują treści i budują swoją społeczność",
            "Chcą wspólnie działać nad rozwojem swojej marki",
            "Są gotowe na skalowanie biznesu poprzez profesjonalny marketing",
          ],
        },
      ],
    },
    {
      type: "team",
      presentation: "collective-team",
      heading: "Kim jesteśmy?",
      people: [
        {
          name: "Adrianna Promis-Urbas",
          role: "Specjalistka od kampanii reklamowych z 10-letnim doświadczeniem",
          bio: [
            {
              kind: "paragraph",
              content: [
                { text: "Pomogłam ponad ", marks: [] },
                { text: "200 kobietom", marks: ["strong"] },
                {
                  text: " zwiększyć zyski i satysfakcję z prowadzenia własnej firmy. Specjalizuję się w przekształcaniu chaotycznych działań marketingowych w precyzyjne ",
                  marks: [],
                },
                { text: "systemy generujące przewidywalne wyniki,", marks: ["strong"] },
                { text: " nawet w niepewnych warunkach rynkowych.", marks: [] },
              ],
            },
          ],
          media: {
            src: "src/images/m1.webp",
            alt: "Adrianna Promis-Urbas",
            width: 860,
            height: 860,
          },
        },
        {
          name: "Nicola Kut",
          role: "Koordynatorka projektów i specjalistka od reklam",
          bio: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Nadzoruję realizację projektów, dbając o każdy szczegół i dotrzymanie terminów. Specjalizuję się ",
                  marks: [],
                },
                { text: "w pilnowaniu harmonogramów", marks: ["strong"] },
                {
                  text: " i zapewnianiu, że każdy element pracy jest wykonany zgodnie z planem, co pozwala całemu zespołowi ",
                  marks: [],
                },
                { text: "działać sprawnie i efektywnie.", marks: ["strong"] },
              ],
            },
          ],
          media: {
            src: "src/images/m4.webp",
            alt: "Nicola Kut",
            width: 860,
            height: 860,
          },
        },
        {
          name: "Dorota Woźniak",
          role: "Projektantka graficzna i architektka z ilustratorską pasją",
          bio: [
            {
              kind: "paragraph",
              content: [
                { text: "Zaprojektowałam ", marks: [] },
                { text: "setki", marks: ["strong"] },
                {
                  text: " kreacji reklamowych. Specjalizuję się w tworzeniu profesjonalnych materiałów wizualnych ",
                  marks: [],
                },
                { text: "dla social media i kampanii adsowych,", marks: ["strong"] },
                {
                  text: " przekształcając abstrakcyjne idee w przyciągające wzrok projekty, które realizują cele biznesowe.",
                  marks: [],
                },
              ],
            },
          ],
          media: {
            src: "src/images/m3.webp",
            alt: "Dorota Woźniak",
            width: 860,
            height: 860,
          },
        },
        {
          name: "Anna Ertekin",
          role: "Menedżerka projektów i kampanii reklamowych",
          bio: [
            {
              kind: "paragraph",
              content: [
                { text: "Wspieram marki ", marks: [] },
                { text: "w codziennych działaniach marketingowych,", marks: ["strong"] },
                {
                  text: " dbając o to, by pomysły, kampanie i strategie były nie tylko dobrze zaplanowane, ale także skutecznie wdrażane. ",
                  marks: [],
                },
                {
                  text: "Specjalizuję się w łączeniu działań marketingowych w spójną całość:",
                  marks: ["strong"],
                },
                { text: " od pomysłu aż po analizę wyników.", marks: [] },
              ],
            },
          ],
          media: {
            src: "src/images/m6.webp",
            alt: "Anna Ertekin",
            width: 808,
            height: 808,
          },
        },
        {
          name: "Paulina Oraczek",
          role: "Menedżerka projektów i kampanii reklamowych",
          bio: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Odpowiadam za to, aby kampanie reklamowe naszych klientów stabilnie ",
                  marks: [],
                },
                { text: "realizowały ich cele biznesowe", marks: ["strong"] },
                {
                  text: ". Dbając o ciągłość projektów, na bieżąco analizuję wyniki, co pozwala na ",
                  marks: [],
                },
                { text: "stałe ulepszanie procesów sprzedażowych", marks: ["strong"] },
                { text: ". Specjalizuję się ", marks: [] },
                { text: "we wdrażaniu ustalonego planu", marks: ["strong"] },
                { text: ", gwarantując klientom pełne wsparcie w rozwoju.", marks: [] },
              ],
            },
          ],
          media: {
            src: "src/images/paulina-kolektyw.webp",
            alt: "Paulina Oraczek",
            width: 1080,
            height: 1080,
          },
        },
        {
          name: "Papajka",
          role: "Asystentka Nicoli",
          bio: [],
          media: {
            src: "src/images/m5.webp",
            alt: "Papajka",
            width: 212,
            height: 212,
          },
        },
      ],
    },
    {
      type: "offer",
      presentation: "service-packages",
      heading: "Jak możesz z nami współpracować?",
      offers: [
        {
          name: "🚀 KAMPANIA SINGLE",
          features: [
            "Praca przy kampanii sprzedażowej jednego produktu cyfrowego/mentoringu (2 miesiące)",
            "Co otrzymujesz:",
            "🔥 Skuteczne kampanie, która zwiększa sprzedaż i zainteresowanie ofertą",
            "🎯 Strategię dopasowaną do Twojego produktu i grupy docelowej",
            "💡 Jasne wnioski, plany zmian i konkretne rekomendacje na przyszłość",
            "💼 Spokojną głowę podczas kampanii - wiesz, że reklamy są pod kontrolą i pracują na wynik!",
            "Dla kogo:",
            "🚀 Dla osób planujących premierę produktu, kursu lub mentoringu",
            "🧪 Dla marek, które chcą sprawdzić współpracę przed wejściem w długoterminowe działania",
          ],
        },
        {
          name: "⭐ MARKETING PARTNER",
          features: [
            "Kompleksowe zarządzanie kampaniami na wszystkich kluczowych platformach w systemie Meta (stała współpraca)",
            "Co otrzymujesz:",
            "🚀 Wzrost sprzedaży i rozwój marki dzięki profesjonalnym kampaniom reklamowym",
            "📈 Strategię nastawioną na skalowanie biznesu i lepszy zwrot z budżetu reklamowego",
            "💡 Skuteczniejsze reklamy i optymalizacja kosztów, dzięki regularnym optymalizacjom",
            "👩‍💻 Dostęp do eksperckiej wiedzy i bieżących rozwiązań zgodnych z aktualnymi trendami oraz algorytmami Meta",
            "😌 Pewność, że marketing jest prowadzony profesjonalnie i pod stałą kontrolą",
            "Dla kogo:",
            "💼 Dla firm, które chcą rozwijać sprzedaż w sposób przewidywalny i długoterminowy",
            "📊 Dla przedsiębiorczyń gotowych skalować biznes z pomocą strategicznego marketingu",
            "🎯 Dla właścicielek marek, które potrzebują stałego wsparcia i partnera do rozwoju biznesu",
          ],
        },
        {
          name: "💎 GROWTH INTENSIVE",
          features: [
            "Obsługa reklam Meta + konsultacje strategiczne 1:1 (premium)",
            "Co otrzymujesz:",
            "🚀 Skalowanie sprzedaży i rozwój marki dzięki kampaniom reklamowym",
            "🤝 Regularne konsultacje strategiczne, dzięki którym podejmujesz lepsze decyzje biznesowe i marketingowe",
            "📈 Jasny plan działań dopasowany do Twoich celów oraz etapu rozwoju firmy",
            "🎯 Magnetyczną strategię kontentu, która przyciągnie nowych klientów",
            "💡 Szybszy i bardziej świadomy rozwój biznesu, dzięki wsparciu ekspertek",
            "Dla kogo:",
            "💎 Dla ambitnych przedsiębiorczyń, które chcą wejść na wyższy poziom biznesowy",
            "🚀 Dla marek gotowych inwestować w profesjonalny marketing i realny wzrost",
            "📈 Dla biznesów nastawionych na intensywne skalowanie i mocniejsze wyniki sprzedażowe",
          ],
        },
        {
          name: "💌 NEWSLETTER MASTER",
          features: [
            "Wdrożenie newslettera + obsługa reklam Meta + prowadzenie newslettera",
            "Co otrzymujesz:",
            "📈 System komunikacji, który pomaga regularnie docierać do klientów i zwiększać sprzedaż",
            "💌 Silniejsze relacje z odbiorcami dzięki wartościowej i spójnej obecności marki",
            "🚀 Stały dopływ nowych potencjalnych klientów oraz rozwój własnej bazy kontaktów",
            "🤝 Większą niezależność od algorytmów i kanał komunikacji, który naprawdę należy do Ciebie",
            "📊 Działania stale optymalizowane pod lepsze wyniki, zaangażowanie i konwersję",
            "Dla kogo:",
            "💌 Dla marek, które chcą budować lojalną i zaangażowaną społeczność",
            "🎯 Dla biznesów szukających bardziej przewidywalnego i zautomatyzowanego marketingu",
            "📈 Dla przedsiębiorczyń, które myślą długoterminowo i chcą zwiększać sprzedaż bez ciągłego polegania wyłącznie na social mediach",
          ],
        },
      ],
    },
    {
      type: "proof",
      presentation: "results",
      heading: "Nasze wyniki w liczbach",
      entries: [
        {
          type: "result",
          label: "Subskrypcje w witrynie",
          value: "542",
          context: "Koszt wyniku 1,77 zł; wartość konwersji 3960,40 zł; 8 zakupów",
          media: {
            src: "src/images/kolektyw1.webp",
            alt: "542 subskrypcje w witrynie",
            width: 4048,
            height: 796,
          },
        },
        {
          type: "result",
          label: "Obserwatorzy na Instagramie",
          value: "1569",
          context: "Nowi obserwatorzy w koszcie mniejszym niż 0,7 zł; wydana kwota 1066,21 zł",
          media: {
            src: "src/images/kolektyw2.webp",
            alt: "1569 nowych obserwatorów na Instagramie",
            width: 3724,
            height: 976,
          },
        },
        {
          type: "result",
          label: "Przesłane zgłoszenia",
          value: "128",
          context: "Koszt wyniku 17,61 zł; wydana kwota 2253,55 zł",
          media: {
            src: "src/images/kolektyw3.webp",
            alt: "128 nowych zgłoszeń na regularne zajęcia w szkole językowej",
            width: 3548,
            height: 1080,
          },
        },
        {
          type: "result",
          label: "Obserwatorzy na Instagramie",
          value: "1628",
          context: "1628 nowych obserwatorów z budżetem 1400zł; wydana kwota 1397,17 zł",
          media: {
            src: "src/images/kolektyw4.webp",
            alt: "1628 nowych obserwatorów z budżetem 1400zł",
            width: 3989,
            height: 1041,
          },
        },
        {
          type: "result",
          label: "Zakupy",
          value: "18",
          context: "6832,20 zł wartości konwersji; 989,92 zł wydanej kwoty; ROAS 6,90 na produktach fizycznych",
          media: {
            src: "src/images/kolektyw5.webp",
            alt: "18 zakupów, 6832,20 zł wartości konwersji i ROAS 6,90 na produktach fizycznych",
            width: 3831,
            height: 940,
          },
        },
        {
          type: "result",
          label: "Przesłane zgłoszenia",
          value: "1596",
          context: "Koszt wyniku 0,81 zł; wydana kwota 1290,35 zł",
          media: {
            src: "src/images/kolektyw6.webp",
            alt: "Prawie 1600 zapisów pod lead magnet w miesiąc",
            width: 3832,
            height: 944,
          },
        },
        {
          type: "result",
          label: "Zakupy",
          value: "28",
          context: "Koszt zakupu 8,34 zł; wydana kwota 233,58 zł",
          media: {
            src: "src/images/kolektyw7.webp",
            alt: "Prawie 30 zakupów produktu za kilkaset złotych w 8-dniowym okienku sprzedażowym",
            width: 3151,
            height: 1120,
          },
        },
      ],
    },
    {
      type: "benefit-grid",
      presentation: "service-benefits",
      heading: "Dlaczego warto wybrać MAGIC?",
      items: [
        {
          title: "Oszczędzasz czas",
          body: "Oszczędzasz czas - nie musisz zarządzać marketingiem samodzielnie",
        },
        {
          title: "Redukujesz koszty",
          body: "Redukujesz koszty - zewnętrzny zespół to niższy wydatek niż budowa działu in-house",
        },
        {
          title: "Zyskujesz ekspertyzę",
          body: "Zyskujesz ekspertyzę - pracujesz z zespołem specjalistów z różnych dziedzin",
        },
        {
          title: "Skupiasz się na tym, co kochasz",
          body: "Skupiasz się na tym, co kochasz - my zajmujemy się marketingiem, Ty rozwijasz swój core business",
        },
      ],
    },
    {
      type: "consultation",
      presentation: "appointment",
      heading: "Rozpocznij współpracę z MAGIC",
      body: [
        {
          kind: "paragraph",
          content: [
            {
              text: "Umów się na niezobowiązującą rozmowę, podczas której:",
              marks: ["strong"],
            },
          ],
        },
        {
          kind: "list",
          style: "checks",
          items: [
            [
              {
                text: "porozmawiamy o Twoich planach, celach i wyzwaniach w związku z prowadzeniem kampanii",
                marks: [],
              },
            ],
            [
              {
                text: "odpowiemy na pytanie: czy i jak jesteśmy w stanie Ci z tym pomóc! 😉",
                marks: [],
              },
            ],
          ],
        },
      ],
      provider: "google-calendar",
      externalUrl:
        "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zcRiXUr4-wUE8kWad3VOUdAuWCYFT8Sx9MdThd_nrVecbrxdhp52S2M_iVeoZHU40tpiiuoEn?gv=true",
      cta: {
        label: "Umawiam spotkanie",
        href: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zcRiXUr4-wUE8kWad3VOUdAuWCYFT8Sx9MdThd_nrVecbrxdhp52S2M_iVeoZHU40tpiiuoEn?gv=true",
        analyticsKey: "kolektyw-spotkanie",
        external: true,
      },
    },
    {
      type: "proof",
      presentation: "case-studies",
      heading: "Historie kampanii",
      decoration: {
        src: "src/images/magicSign.svg",
        alt: "",
        width: 50,
        height: 50,
      },
      entries: [
        {
          type: "case-study",
          title: "Case study z kampanii kierującej na Instagrama",
          summary:
            "Monice zależało, żeby jej konto na Instagramie regularnie się rozwijało. Dzięki dobrze zaplanowanej kampanii na pozyskanie obserwujących w ciągu 6 miesięcy zyskała 9306 nowych obserwujących. Dodatkowy efekt?43 osoby przesłały zapytania o możliwość wykupienia zajęć językowych.",
          figures: [
            "Czas trwania kampanii: 6 miesięcy (styczeń-czerwiec 2025)",
            "Wydany budżet: 5781,47 zł",
            "Liczba nowych obserwujących: 9306",
            "Liczba zapytań o zajęcia (dodatkowo): 43",
          ],
          media: {
            src: "src/images/kolektywInfo1.webp",
            alt: "Case study z kampanii kierującej na Instagrama",
            width: 4292,
            height: 405,
          },
          supportingMedia: {
            src: "src/images/kolektywInfo1a.webp",
            alt: "Opinia klientki po kampanii kierującej na Instagrama",
            width: 1200,
            height: 860,
          },
        },
        {
          type: "case-study",
          title: "Case study kampanii z kampanii sprzedażowej",
          summary:
            "kampania z celem zapis na listę mailową; po dołączeniu subskrybenci otrzymują one time offer na dostęp do platformy kursowej",
          figures: [
            "Czas trwania kampanii: 2 miesiące",
            "Liczba osób, która wypełniła formularz zapisu: 1949",
            "Wydany budżet: 6892,61 zł",
            "Ilość zapisów: 28 x 2499 zł",
            "Wartość zakupów: 69 972 zł",
            "ROAS: 10,15",
          ],
          media: {
            src: "src/images/kolektywInfo2.webp",
            alt: "Case study kampanii z kampanii sprzedażowej",
            width: 4304,
            height: 804,
          },
          supportingMedia: {
            src: "src/images/kolektywInfo2a.webp",
            alt: "Opinia klientki po kampanii sprzedażowej",
            width: 1200,
            height: 860,
          },
        },
        {
          type: "case-study",
          title: "Case study z kampanii sprzedażowej",
          summary: "sprzedaż kursu dla właścicieli lokalnych firm",
          figures: [
            "Czas trwania kampanii: 14 miesięcy (lipiec 2024 - wrzesień 2025)",
            "Grupy docelowe: osoby zainteresowane marketingiem, właściciele lokalnych biznesów",
            "Wydany budżet: 55 858 zł",
            "Liczba osób, które zapisały się na webinar: 10 376",
            "Liczba sprzedanych kursów: 172, około 120 000 złotych",
          ],
          media: {
            src: "src/images/kolektywInfo3.webp",
            alt: "Case study z kampanii sprzedażowej",
            width: 4452,
            height: 721,
          },
          supportingMedia: {
            src: "src/images/kolektywInfo3a.webp",
            alt: "Opinia klientki po kampanii sprzedażowej",
            width: 1200,
            height: 860,
          },
        },
      ],
    },
    {
      type: "proof",
      presentation: "testimonials",
      heading: "Co o współpracy z nami mówią zadowolone klientki?",
      entries: [
        {
          type: "testimonial",
          quote: "Opinia o Magic",
          person: "Opinia o Magic",
          media: {
            src: "src/images/OpiniaKolektyw1.webp",
            alt: "Opinia o Magic",
            width: 1020,
            height: 1020,
          },
        },
        {
          type: "testimonial",
          quote: "Opinia o programie mentoringowym",
          person: "Opinia o programie mentoringowym",
          media: {
            src: "src/images/OpiniaKolektyw2.webp",
            alt: "Opinia o programie mentoringowym",
            width: 874,
            height: 874,
          },
        },
        {
          type: "testimonial",
          quote: "Opinia o programie mentoringowym",
          person: "Opinia o programie mentoringowym",
          media: {
            src: "src/images/OpiniaKolektyw3.webp",
            alt: "Opinia o programie mentoringowym",
            width: 1130,
            height: 1130,
          },
        },
        {
          type: "testimonial",
          quote: "Opinia o programie mentoringowym",
          person: "Opinia o programie mentoringowym",
          media: {
            src: "src/images/OpiniaKolektyw4.webp",
            alt: "Opinia o programie mentoringowym",
            width: 872,
            height: 872,
          },
        },
        {
          type: "testimonial",
          quote: "Opinia o programie mentoringowym",
          person: "Opinia o programie mentoringowym",
          media: {
            src: "src/images/OpiniaKolektyw5.webp",
            alt: "Opinia o programie mentoringowym",
            width: 1044,
            height: 1044,
          },
        },
      ],
    },
    {
      type: "final-cta",
      presentation: "collective",
      heading: "MAGIC to nie tylko nazwa",
      body: [
        {
          kind: "paragraph",
          content: [
            { text: "- to ", marks: [] },
            { text: "filozofia działania", marks: ["strong"] },
            {
              text: " oparta na współpracy, kreatywności i mierzalnych efektach. ",
              marks: [],
            },
            { text: "Skontaktuj się z nami", marks: ["strong"] },
            { text: " i przekonaj na własne oczy.", marks: [] },
          ],
        },
      ],
      primaryCta: {
        label: "Chcę dowiedzieć się, jak możecie mi pomóc",
        href: "#umawiam-spotkanie",
        analyticsKey: "kolektyw-final",
      },
    },
    {
      type: "faq",
      presentation: "services",
      heading: "FAQ",
      items: [
        {
          question: "Czy będę mieć kontrolę nad kampaniami?",
          answer: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Tak! Masz dostęp do swojego konta reklamowego, dodatkowo jesteśmy z bieżącym kontakcie na Trello. Wspólnie ustalamy plan działania. Możesz liczyć na naszą elastyczność i zaangażowanie. Gdy trzeba, powiemy: \"przemyślmy to jeszcze raz\".",
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          question: "Czy dajecie gwarancję wyników?",
          answer: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Nie dajemy gwarancji wyników, bo wolimy realne spojrzenie na sytuację niż puste obietnice. Dlatego przed rozpoczęciem współpracy spotykamy się na wirtualnej kawce, na której rozmawiamy o perspektywach, możliwościach, oczekiwaniach. Tak, zdarza nam się odradzać współprac.",
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          question: "Czy muszę znać się na reklamach, żeby umówić się na rozmowę?",
          answer: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Nie! Zupełnie rozumiemy, że chcesz rozwijać swój biznes dzięki adsom, nawet jeśli do tej pory nie miałaś doświadczenia z reklamami lub klikałaś tylko \"Promuj post\". Jesteśmy tu po to, by pomóc Ci w tym temacie - bez oceniania, za to z głową pełną pomysłów!",
                  marks: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} satisfies PageSpecInput

export const magicKolektywPageSpec = parsePageSpec(magicKolektywPageInput)
