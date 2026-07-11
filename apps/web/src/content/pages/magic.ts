import { parsePageSpec } from "../../page-spec/parse-page-spec"
import type { PageSpecInput } from "../../page-spec/page.schema"

export const magicPageInput = {
  schemaVersion: 1,
  path: "/magic/",
  locale: "pl-PL",
  brand: "magic",
  seo: {
    title: "Magic: Marketing Ads Girls Inside Collective",
    description:
      "Pracuję z biznesami, które dbają o dobrostan psychiczny i fizyczny: praktykuję slow marketing, przemyślany, wartościowy, zbudowany na relacjach",
  },
  sections: [
    {
      type: "sticky-cta",
      presentation: "membership",
      label: "🔥 Dołącz do MAGIC:",
      targetCta: {
        label: "Dołączam!",
        href: "#magic-package",
        analyticsKey: "magic-sticky",
      },
    },
    {
      type: "hero",
      presentation: "membership",
      heading: "Meta Ads Girls Inside Club",
      body: [
        {
          kind: "paragraph",
          content: [
            {
              text: "Skaluj swój biznes dzięki reklamom, AI i automatyzacjom: z konkretnym planem wdrożeniowym.",
              marks: [],
            },
          ],
        },
      ],
      primaryCta: {
        label: "DOŁĄCZAM",
        href: "#magic-package",
        analyticsKey: "magic-hero",
      },
      decorations: {
        heading: {
          src: "src/images/star-pink.webp",
          alt: "",
          width: 160,
          height: 152,
        },
        afterCta: {
          src: "src/images/star-pink.webp",
          alt: "",
          width: 160,
          height: 152,
        },
      },
      media: {
        src: "src/images/magic-landing-2026-hero.webp",
        alt: "Marketing Ads Girls Inside Club",
        width: 2732,
        height: 2732,
      },
    },
    {
      type: "proof",
      presentation: "case-studies",
      heading: "Case study MAGIC",
      entries: [
        {
          type: "case-study",
          title: "Case study MAGIC",
          summary: "Materiały wideo z historiami kampanii MAGIC.",
          figures: ["Wideo"],
        },
      ],
    },
    {
      type: "audience",
      presentation: "membership-dual",
      heading: "JEŚLI PROWADZISZ MARKETING...",
      groups: [
        {
          title: "DLA SWOJEGO BIZNESU",
          criteria: [
            "✅ dla osób, które jeszcze nie prowadziły reklam i potrzebują pewnego startu w świecie płatnej promocji",
            "✅ dla tych, którzy boją się, że źle klikną i stracą budżet reklamowy na nieefektywnych kampaniach",
            "✅ które mają pierwsze reklamy za sobą (lub klikały w \"promuj post\") ale nie są zadowolone z wyników",
            "✅ które do tej pory polegały głównie na działaniach organicznych i chcą bezpiecznie wejść w reklamy",
            "✅ dla osób, które zlecały reklamy na zewnątrz, ale chcą przejąć kontrolę nad swoim budżetem reklamowym",
          ],
        },
        {
          title: "DLA KLIENTÓW",
          criteria: [
            "✅ które chcą poznać najnowsze trendy i narzędzia reklamowe, wyprzedzając konkurencję",
            "✅ dla social media managerek, wirtualnych asystentek, które otrzymują zapytania o reklamy i chcą zarabiać na prowadzeniu kampanii",
            "✅ dla tych, którzy chcą nauczyć się lepiej gospodarować budżetem i optymalizować koszty pozyskania klienta",
            "✅ które chcą skonsultować swoje wyniki i dowiedzieć się, jak je poprawić",
            "✅ dla tych, którzy już prowadzą reklamy i chcą robić to lepiej, osiągając wyższe ROAS",
          ],
        },
      ],
    },
    {
      type: "problem-solution",
      presentation: "situations",
      heading: "Rozpoznajesz te sytuacje?",
      problems: [
        "📊 Twoje wyniki rozczarowują, zamiast zachwycać?",
        "🤝 Tworzysz samodzielnie teksty, maile, landingi?",
        "🤨 Wyniki reklam nie są takie, jakich oczekiwałaś?",
        "🤨 Ustawiasz reklamy „na czuja\" i trzymasz kciuki?",
        "😮‍💨 Twoje konto reklamowe zostało zablokowane?",
        "🤷‍♀️ Godziny na rolkach, a sprzedaży brak?",
      ],
      outcomes: [
        "Dostaniesz plan, co poprawić w pierwszej kolejności - i sprawdzisz każdą zmianę ze specjalistką, zanim wydasz kolejną złotówkę.",
        "W Magic otrzymasz audyt swoich treści oraz grafik - przygotowany przez specjalistki",
        "Przyjdź na grupowe konsultacje w MAGIC, aby skonsultować plan działania ze specjalistkami, które spędzają w Managerze Reklam 5+ godzin dziennie.",
        "Skonsultujesz swój plan z dziewczynami, które spędzają w Managerze Reklam 5+ godzin dziennie. Zawodowo, nie z nudów. 🤭",
        "Dostaniesz instrukcję krok po kroku, co robić - nawet gdy support Mety rozkłada ręce.",
        "Dobrze ustawiona reklama sprzedaje też wtedy, kiedy Ty nie siedzisz w telefonie.",
      ],
    },
    {
      type: "learning-path",
      presentation: "curriculum",
      heading: "Co sprawia, że MAGIC jest wyjątkowy?",
      stages: [
        {
          title: "5 spotkań na żywo miesięcznie",
          body: "5 spotkań na żywo miesięcznie",
        },
        {
          title: "4 poziomy nauki",
          body: "pasek progresu ułatwiający naukę",
        },
        {
          title: "Asystentka AI",
          body: "napisz wiadomość (albo nagraj głosówkę), a Kapibara Barbara pomoże Ci z każdą reklamową zagwozdką - o każdej porze",
        },
        {
          title: "Konsultacje pisemne na Circle",
          body: "zadajesz pytanie o SWOJĄ reklamę, kiedy Ci wygodnie - odpowiedź specjalistki czeka na Ciebie na Circle",
        },
        {
          title: "5 ekspertów",
          body: "pomożemy Ci w: reklamach Meta Ads, tekstach, grafikach, newsletterze, automatyzacjach",
        },
      ],
    },
    {
      type: "learning-path",
      presentation: "monthly-plan",
      heading: "Jak wygląda przykładowy miesiąc w MAGIC?",
      stages: [
        {
          title: "Twój MAGIC Plan",
          body: "Twój MAGIC Plan podpowie, które z tych spotkań są dla Ciebie najważniejsze w pierwszym miesiącu.",
        },
        {
          title: "5 spotkań na żywo miesięcznie",
          body: "konsultacje grupowe, warsztaty, LIVE - wszystkie nagrywane",
        },
      ],
    },
    {
      type: "team",
      presentation: "membership-experts",
      heading: "Kogo spotkasz w MAGIC?",
      people: [
        {
          name: "Adrianna Promis-Urbas",
          role: "5 specjalistów pod jednym dachem",
          bio: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Kreatywna dusza i mózg MAGIC. Specjalizuje się w kampaniach Meta Ads i marketingu zbudowanym na relacjach. Z Adą skonsultujesz strukturę i wyniki swoich kampanii.",
                  marks: [],
                },
              ],
            },
          ],
          media: {
            src: "src/images/ada_portrait.webp",
            alt: "Adrianna Promis-Urbas",
            width: 1200,
            height: 1200,
          },
        },
        {
          name: "Justyna Król",
          role: "5 specjalistów pod jednym dachem",
          bio: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Socjolożka i zaklinaczka słów. Tworzy teksty reklamowe budujące autentyczne relacje między marką a klientami. Justynie wyślesz tekst reklamy do sprawdzenia, zanim odpalisz reklamę.",
                  marks: [],
                },
              ],
            },
          ],
          media: {
            src: "src/images/justyna_portrait.webp",
            alt: "Justyna Król",
            width: 952,
            height: 1000,
          },
        },
        {
          name: "Dorota Woźniak",
          role: "5 specjalistów pod jednym dachem",
          bio: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Architektka z pasją do projektowania. Zamienia nudne reklamy w przyciągające wzrok kreacje graficzne. Dorota powie, co poprawić w grafikach i pokaże, jakie materiały ustawić w reklamie.",
                  marks: [],
                },
              ],
            },
          ],
          media: {
            src: "src/images/dorota_portrait.webp",
            alt: "Dorota Woźniak",
            width: 1000,
            height: 997,
          },
        },
        {
          name: "Nicola Kut",
          role: "5 specjalistów pod jednym dachem",
          bio: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Analityczka biznesu-to-be, dla której żadne liczby i raporty nie są straszne. Przeprowadza researche, tworzy kampanie i ogarnia kulisy pracy. Z Nicolą zaczniesz i skonsultujesz reklamy. To ona poprowadzi Twoje spotkanie startowe i przygotuje Twój MAGIC Plan.",
                  marks: [],
                },
              ],
            },
          ],
          media: {
            src: "src/images/nicola_portrait.webp",
            alt: "Nicola Kut",
            width: 1000,
            height: 997,
          },
        },
        {
          name: "Dawid Urbas",
          role: "5 specjalistów pod jednym dachem",
          bio: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Pasjonat AI i automatyzacji. Pokazuje, jak nowe technologie mogą być Twoją tajną bronią, oszczędzając czas i otwierając nowe możliwości dla Twojego biznesu. Z Dawidem ustawisz automatyzacje i stworzysz swojego asystenta AI, który pracuje dla Ciebie",
                  marks: [],
                },
              ],
            },
          ],
          media: {
            src: "src/images/dawid_portrait.webp",
            alt: "Dawid Urbas",
            width: 1200,
            height: 1200,
          },
        },
      ],
    },
    {
      type: "media",
      presentation: "invitation-video",
      heading: "Zaproszenie do MAGIC",
      provider: "vimeo",
      providerAssetId: "1117395484",
      poster: {
        src: "src/images/magic-hero.webp",
        alt: "Twoje zaproszenie do MAGIC",
        width: 458,
        height: 458,
      },
      consentCategory: "functional",
    },
    {
      type: "proof",
      presentation: "results",
      heading: "Wyniki i opinie członkiń",
      entries: [
        {
          type: "result",
          label: "Wyniki kampanii",
          value: "18 zakupów",
          context: "6832,20 zł wartości konwersji i 989,92 zł wydanej kwoty",
          media: {
            src: "src/images/magic-landing-2026-result-1.webp",
            alt: "Wyniki kampanii: 18 zakupów, 6832,20 zł wartości konwersji i 989,92 zł wydanej kwoty",
            width: 1397,
            height: 330,
          },
        },
        {
          type: "result",
          label: "Wyniki kampanii",
          value: "128 przesłanych zgłoszeń",
          context: "przy koszcie wyniku 17,61 zł",
          media: {
            src: "src/images/magic-landing-2026-result-2.webp",
            alt: "Wyniki kampanii: 128 przesłanych zgłoszeń przy koszcie wyniku 17,61 zł",
            width: 1284,
            height: 262,
          },
        },
        {
          type: "result",
          label: "Wyniki kampanii",
          value: "68 zakupów w witrynie",
          context: "9461,00 zł wartości konwersji i 236,99 zł wydanej kwoty",
          media: {
            src: "src/images/magic-landing-2026-result-3.webp",
            alt: "Wyniki kampanii: 68 zakupów w witrynie, 9461,00 zł wartości konwersji i 236,99 zł wydanej kwoty",
            width: 1279,
            height: 332,
          },
        },
      ],
    },
    {
      type: "offer",
      presentation: "membership-packages",
      heading: "Dołącz do MAGIC:",
      offers: [
        {
          name: "Pakiet miesięczny",
          features: [
            "👩‍💻 konsultacje pisemne z ekspertkami",
            "🎥 materiały szkoleniowe video z ustawiania kampanii reklamowych i nie tylko",
            "🚀 dostęp do wewnętrznej bazy wiedzy",
            "🗓️ udział w dwóch 1,5-godzinnych sesjach konsultacji grupowych miesięcznie",
            "💡 udział w dwóch autorskich warsztatach tematycznych w miesiącu",
            "👀 nielimitowany dostęp do nagrań ze wszystkich spotkań",
          ],
          price: { label: "cena", value: "557 zł" },
          cta: {
            label: "Tak, dołączam!",
            href: "https://slowmarketing.zanfia.co/c/magic-pakiet-basic-rXx5",
            analyticsKey: "magic-monthly",
            external: true,
          },
        },
      ],
    },
    {
      type: "proof",
      presentation: "qa-sample",
      heading: "Zobacz przykładowe pytania i odpowiedzi!",
      entries: [
        {
          type: "qa",
          question: "Zobacz przykładowe pytania i odpowiedzi!",
          answer: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Przykładowe pytania i odpowiedzi z MAGIC",
                  marks: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "proof",
      presentation: "customer-story",
      heading: "Historie klientek MAGIC",
      entries: [
        {
          type: "customer-story",
          title: "Jak Magda uporządkowała chaos reklamowy w swoim biznesie (i przestała bać się Managera Reklam)?",
          body: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Przeczytaj, co Magda mówi o MAGIC:",
                  marks: [],
                },
              ],
            },
          ],
          media: {
            src: "src/images/opiniaMagdy.webp",
            alt: "Opinia Magdy o MAGIC",
            width: 1304,
            height: 836,
          },
        },
        {
          type: "customer-story",
          title: "Jak Magda - marketerka - prowadzi kampanie klientów ze wsparciem MAGIC?",
          body: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Posłuchaj, co Magda mówi o MAGIC:",
                  marks: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "faq",
      presentation: "membership",
      heading: "FAQ",
      items: [
        {
          question: "🔍 Na jakiej platformie funkcjonuje MAGIC? ",
          answer: [
            {
              kind: "paragraph",
              content: [{ text: "MAGIC działa na platformie Circle.", marks: [] }],
            },
          ],
        },
        {
          question: "💎 Co sprawia, że MAGIC jest wyjątkowy?",
          answer: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "To żywa społeczność, nie kolejny kurs z nagraniami. Masz 5 spotkań na żywo miesięcznie (wszystkie nagrywane), pytania zadajesz pisemnie, kiedy Ci wygodnie - a każda nowa członkini zaczyna od spotkania 1:1 z Nicolą i własnego MAGIC Planu. Każdy pakiet zawiera dokładnie to samo; różni się tylko długością i ceną za miesiąc.",
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          question: "🚀 Jak wygląda MAGIC Plan na start?",
          answer: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Po dołączeniu wypełniasz krótki formularz (10 minut) i umawiasz spotkanie 1:1 z Nicolą - rozmowa o Twoim biznesie i reklamach. Do 5 dni po spotkaniu w MAGIC czeka na Ciebie gotowy plan: co ustawić, w jakiej kolejności i z jakim budżetem.",
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          question: "🎯 Co czeka na mnie w MAGIC?",
          answer: [
            {
              kind: "list",
              style: "bullets",
              items: [
                [{ text: "- Na start: spotkanie 1:1 z Nicolą i Twój MAGIC Plan", marks: [] }],
                [{ text: "- 5 spotkań na żywo (konsultacje grupowe, warsztaty, ustawianie reklam na żywo: 60–90 min) miesięcznie", marks: [] }],
                [{ text: "- Nielimitowane konsultacje pisemne", marks: [] }],
                [{ text: "- Regularne inspiracje i praktyczne wskazówki", marks: [] }],
                [{ text: "- Aktualne informacje branżowe w formie przystępnych prasówek", marks: [] }],
              ],
            },
            {
              kind: "paragraph",
              content: [
                {
                  text: "A to wszystko w cenie niższej niż pojedyncza konsultacja 1:1!",
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          question: "📚 Czego się nauczę?",
          answer: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Skupiamy się na digital marketingu, ze szczególnym naciskiem na kampanie w Meta Ads. Dodatkowo poznasz skuteczne techniki copywritingu i zasady tworzenia przyciągających grafik. Dowiesz się, jak stworzyć własny newsletter oraz jakie narzędzia AI warto wykorzystać w swojej pracy, aby działać szybciej i skuteczniej! Jak sprawić, żeby reklamy sprzedawały - a AI i automatyzacje robiły część roboty za Ciebie.",
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          question: "⏰ Ile czasu zajmuje MAGIC?",
          answer: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "2-3 godziny tygodniowo, jeśli chcesz skorzystać z bieżących spotkań. Jak dużo czasu spędzisz na konsultowaniu swoich treści czy czytaniu materiałów - to zależy od Ciebie! Uspokajamy: MAGIC został stworzony z myślą o zabieganych przedsiębiorczyniach. Wszystkie spotkania są nagrywane, więc możesz z nich skorzystać w dowolnym momencie. Wiemy, że biznes to nie 9-17. Działamy dokładnie tak samo - bez sztywnych ram czasowych!",
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          question: "🦫 Kim jest Kapibara Barbara?",
          answer: [
            {
              kind: "paragraph",
              content: [
                {
                  text: "Kapibara Barbara jest naszą Asystentką AI napędzaną całą wiedzą z MAGIC. Możesz z nią skonsultować swoje zagwostki związane z reklamami, pokazać wyniki, nagrać głosówkę i traktować jak swoją adsową koleżankę.",
                  marks: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "final-cta",
      presentation: "membership",
      heading: "Dołączam do Magic!",
      body: [
        {
          kind: "paragraph",
          content: [{ text: "Dołączam do Magic!", marks: [] }],
        },
      ],
      primaryCta: {
        label: "Dołączam do Magic!",
        href: "#magic-package",
        analyticsKey: "magic-final",
      },
      socialLinks: [
        { label: "@klub.magic", href: "https://www.instagram.com/klub.magic/" },
        { label: "@adapromis", href: "https://www.instagram.com/adapromis/" },
      ],
    },
  ],
} satisfies PageSpecInput

export const magicPageSpec = parsePageSpec(magicPageInput)
