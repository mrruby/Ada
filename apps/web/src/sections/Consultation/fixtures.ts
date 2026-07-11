import type { ConsultationSectionInput } from "./schema"

export const consultationFixtures = [
  {
    type: "consultation",
    presentation: "appointment",
    heading: "Umów konsultację",
    body: [
      {
        kind: "paragraph",
        content: [{ text: "Porozmawiamy o potrzebach Twojej marki.", marks: [] }],
      },
    ],
    provider: "google-calendar",
    externalUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/example",
    cta: {
      label: "Wybierz termin",
      href: "https://calendar.google.com/calendar/u/0/appointments/schedules/example",
      analyticsKey: "magic.consultation.appointment",
      external: true,
    },
  },
] satisfies ConsultationSectionInput[]
