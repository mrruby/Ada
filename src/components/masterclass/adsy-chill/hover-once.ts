/**
 * Marks `[data-hover-once]` blocks with `data-hovered` the first time the
 * pointer enters them, so CSS (`group-data-hovered:`) can play an entrance
 * animation once. Imported from component scripts; runs once per page.
 */
document.querySelectorAll<HTMLElement>("[data-hover-once]").forEach((root) => {
  root.addEventListener("pointerenter", () => root.setAttribute("data-hovered", ""), {
    once: true,
  })
})
