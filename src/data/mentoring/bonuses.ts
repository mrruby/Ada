import canvaIcon from "@/assets/images/canva.webp"
import canvaGuideIcon from "@/assets/images/canva2.svg"
import certificateIcon from "@/assets/images/certyfikat.svg"
import docsIcon from "@/assets/images/docs.svg"
import docs2Icon from "@/assets/images/docs2.svg"
import ebookIcon from "@/assets/images/ebook2.svg"
import ebookInstaIcon from "@/assets/images/ebookinsta.svg"
import helpIcon from "@/assets/images/help.svg"
import reportIcon from "@/assets/images/raport.svg"
import templateIcon from "@/assets/images/szablon.svg"
import wwwIcon from "@/assets/images/www.svg"
import www2Icon from "@/assets/images/www2.svg"
import type { BonusItem } from "./types"

/** Bonus tiles shared by the mentoring landings (navy line icons). */
export const bonus = {
  hotjar: {
    image: wwwIcon,
    width: 89,
    text: "<b>Hot Jar + strona</b> <br />w jaki sposób WWW może mieć wpływ na skuteczność Twoich kampanii i co warto poprawić (nagranie wideo)",
    value: "o wartości<b> 197 zł</b>",
  },
  report: {
    image: reportIcon,
    width: 87,
    text: "Szablon<b> raportu <br /> z kampanii reklamowych</b>",
    value: "o wartości<b> 247 zł</b>",
  },
  portfolio: {
    image: templateIcon,
    width: 71,
    text: "Szablon<b> portfolio<br /> kampanii reklamowych</b>",
    value: "o wartości<b> 247 z</b>",
  },
  canva: {
    image: canvaIcon,
    width: 81,
    text: "<b>Canva: </b> <br /> tips &amp; tricks",
    value: "o wartości<b> 97 zł</b>",
  },
  instagram: {
    image: docsIcon,
    width: 130,
    text: "<b>Dobre praktyki na Instagramie</b> <br /> (dokument pdf)",
    value: "o wartości<b> 97 zł</b>",
  },
  beauty: {
    image: docs2Icon,
    width: 102,
    text: "<b>Jak tworzyć materiały reklamowe dla branży beauty?</b> (dokument pdf)",
    value: "o wartości<b> 397 zł</b>",
  },
  community: {
    image: certificateIcon,
    width: 116,
    text: "<b>Pełna wsparcia i entuzjazmu społeczność przedsiębiorczych kobiet. Wartość: bezcenna!</b>",
  },
  certificate: {
    image: certificateIcon,
    width: 116,
    text: "<b>Certyfikat ukończenia programu dla każdej uczestniczki!</b><br />Warunkiem otrzymania certyfikatu jest obecność na co najmniej 4 spotkaniach w środy i ustawienie każdego omawianego na programie mentoringowym typu kampanii.",
  },
} satisfies Record<string, BonusItem>

/** Bonus tiles of "Ogarnij swoje adsy!" (bold black icons). */
export const adsyBonuses: BonusItem[][] = [
  [
    {
      image: www2Icon,
      width: 127,
      text: "Szkolenie:<b> “Hot Jar + strona”</b>",
      value: "o wartości<b> 197 zł</b>",
    },
    {
      image: canvaGuideIcon,
      width: 112,
      text: "<b>Poradnik: “Canva </b> <br /> tips &amp; tricks”",
      value: "o wartości<b> 97 zł</b>",
    },
    {
      image: ebookInstaIcon,
      width: 160,
      text: "<b>Ebook: </b> “Dobre praktyki na Instagramie”",
      value: "o wartości<b> 97 zł</b>",
    },
  ],
  [
    {
      image: ebookIcon,
      width: 109,
      text: "<b>E-book:</b> „Slow Marketing a reklama na Facebooku i Instagramie”",
      value: "o wartości<b> 179 zł</b>",
    },
    {
      image: ebookIcon,
      width: 109,
      text: "<b>E-book:</b> “Jak tworzyć materiały reklamowe dla branży beauty?”",
      value: "o wartości<b> 397 zł</b>",
    },
    {
      image: helpIcon,
      width: 100,
      text: "<b>Pełna wsparcia i entuzjazmu społeczność przedsiębiorczych kobiet</b>",
      value: "wartość:<b> bezcenna!</b>",
    },
  ],
]
