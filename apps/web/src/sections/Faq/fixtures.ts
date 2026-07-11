import type { FaqSectionInput } from "./schema"
import type { RichText } from "../../page-spec/common.schema"

const answer = [
  {
    kind: "paragraph",
    content: [{ text: "Tak, materiały są dostępne w Twoim tempie.", marks: [] }],
  },
] satisfies RichText

export const faqFixtures = [
  {
    type: "faq",
    presentation: "membership",
    heading: "Pytania o członkostwo",
    items: [{ question: "Czy mogę zacząć od podstaw?", answer }],
  },
  {
    type: "faq",
    presentation: "services",
    heading: "Pytania o współpracę",
    items: [{ question: "Jak zaczyna się współpraca?", answer }],
  },
] satisfies FaqSectionInput[]
