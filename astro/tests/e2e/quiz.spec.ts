/**
 * /quiz: 12 questions, the total decides the personality type
 * (≤17 dzielna-poszukiwaczka, ≤34 zosia-samosia, else freelance-ninja — see
 * src/data/quiz/results.ts). Each case answers to an exact total around the
 * thresholds.
 */
import type { Page } from "@playwright/test"
import { expect, test } from "./fixtures"

const RESULTS = ["dzielna-poszukiwaczka", "zosia-samosia", "freelance-ninja"] as const

/** Answer index per question giving exactly `total` points (or null). */
const answersForTotal = (points: number[][], total: number): number[] | null => {
  // reachable[i] maps a running sum after question i to the answer that got there.
  const reachable: Map<number, { prev: number; answer: number }>[] = []
  let sums = new Map<number, { prev: number; answer: number }>([[0, { prev: -1, answer: -1 }]])
  for (const answers of points) {
    const next = new Map<number, { prev: number; answer: number }>()
    for (const sum of sums.keys()) {
      answers.forEach((value, answer) => {
        if (!next.has(sum + value)) next.set(sum + value, { prev: sum, answer })
      })
    }
    reachable.push(next)
    sums = next
  }
  if (!sums.has(total)) return null
  const picks: number[] = []
  let sum = total
  for (let i = points.length - 1; i >= 0; i--) {
    const step = reachable[i].get(sum)!
    picks.unshift(step.answer)
    sum = step.prev
  }
  return picks
}

const readPoints = (page: Page) =>
  page
    .locator("[data-quiz-question]")
    .evaluateAll((questions) =>
      questions.map((question) =>
        [...question.querySelectorAll<HTMLElement>("[data-points]")].map((button) =>
          Number(button.dataset.points)
        )
      )
    )

const cases: { total: number; result: (typeof RESULTS)[number] }[] = [
  { total: 17, result: "dzielna-poszukiwaczka" },
  { total: 18, result: "zosia-samosia" },
  { total: 34, result: "zosia-samosia" },
  { total: 35, result: "freelance-ninja" },
]

for (const { total, result } of cases) {
  test(`${total} points → ${result}`, async ({ page }) => {
    await page.goto("/quiz/")
    const quiz = page.locator("[data-quiz]")
    const current = quiz.locator("[data-quiz-current]")

    const points = await readPoints(page)
    expect(points).toHaveLength(12)
    const picks = answersForTotal(points, total)
    expect(picks, `answers summing to ${total}`).not.toBeNull()

    await expect(current).toHaveText("1")
    for (const [index, answer] of picks!.entries()) {
      const question = quiz.locator("[data-quiz-question]:not([hidden])")
      await expect(question).toHaveCount(1)
      await expect(question.locator("h2")).toHaveId(`quiz-question-${index + 1}`)
      await question.locator("[data-points]").nth(answer).click()

      if (index < picks!.length - 1) {
        await expect(current).toHaveText(String(index + 2))
        await expect(quiz.locator("[data-quiz-question]").nth(index + 1)).toBeFocused()
      }
    }

    const resultSection = quiz.locator("[data-quiz-result]")
    await expect(resultSection).toBeVisible()
    await expect(quiz).toHaveAttribute("data-quiz-result", result)
    await expect(quiz.locator("[data-quiz-steps]")).toBeHidden()
    await expect(quiz.locator("[data-quiz-progress]")).toBeHidden()
    await expect(resultSection.locator("[data-quiz-result-intro]")).toBeFocused()

    for (const id of RESULTS) {
      const form = resultSection.locator(`[data-quiz-form="${id}"]`)
      if (id === result) {
        await expect(form).toBeVisible()
        await expect(form.locator("input[type=email]")).toBeVisible()
      } else {
        await expect(form).toBeHidden()
      }
    }
  })
}

test("the result form signs up via MailerLite and opens /thank/", async ({ page, thirdParty }) => {
  await page.goto("/quiz/")
  const points = await readPoints(page)
  const picks = answersForTotal(points, 25)!
  for (const answer of picks) {
    const before = await page.locator("[data-quiz-current]").textContent()
    await page.locator("[data-quiz-question]:not([hidden]) [data-points]").nth(answer).click()
    if (before !== "12") await expect(page.locator("[data-quiz-current]")).not.toHaveText(before!)
  }

  const form = page.locator('[data-quiz-form="zosia-samosia"] form')
  await expect(form).toBeVisible()
  const action = await form.getAttribute("action")
  await form.locator('input[name="fields[name]"]').fill("Ada")
  await form.locator('input[name="fields[email]"]').fill("ada@example.com")
  await form.locator("input[type=checkbox]").check({ force: true })
  await form.locator("button[type=submit]").click()

  await expect(page).toHaveURL(/\/thank\/$/)
  const posts = thirdParty.filter((request) => request.method === "POST")
  expect(posts.map((request) => request.url)).toEqual([action])
})
