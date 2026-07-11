# AGENTS.md

This file is the source of truth for agent behavior in this repo.

## Project Overview

This is the personal website and content platform for Adrianna Promis Urbas, a Polish marketing strategist specializing in Meta advertising campaigns and slow marketing.

- Framework: Gatsby.js (current production stack)
- Language: TypeScript and React
- Styling: Tailwind CSS with a custom theme
- CMS: none wired in the repo (verified 2026-07-11: no `static/admin` config and no CMS plugin in `package.json`/`gatsby-config.js`; the earlier "Netlify CMS" declaration was stale — see PLAN.md §1.6). Content changes go through Git.
- Deployment: Netlify
- Package manager: `yarn` only; do not create `package-lock.json`
- Audience: Polish-speaking business owners and marketers

A migration is planned per [PLAN.md](./PLAN.md): route-by-route (via Netlify rewrites, no big-bang rewrite) to Astro 7 + React 19 islands + TypeScript strict + Tailwind CSS 4 design tokens + Sanity + Netlify. Until a route is cut over, its production source of truth remains this Gatsby codebase.

## Agent Roles

This repo uses a lead/implementer model. See [PLAN.md](./PLAN.md) for the migration decision report and §23 there for the full delegation model and verified command reference.

- **Lead: Claude Code (Fable).** Claude is the technical lead. It decides what should be done, breaks work into task briefs, routes each brief to a Codex model, reviews the resulting diff, and owns final validation and the user-facing summary. The lead does not implement — all implementation is delegated to Codex. The only exception is when Codex CLI is unavailable; the lead then implements itself and states that limitation explicitly.
- **Implementers: Codex models (Sol / Terra / Luna) via `codex exec`.** Implementers execute the task brief, stay strictly within its scope, follow the Implementation Rules below, and report what changed and how it was validated. Implementers do not expand scope, refactor unrelated code, or delegate further.
- **Second opinion: Sol.** For architecture decisions, risky changes, or when the lead's review is uncertain, consult Sol read-only. In that role Sol reviews and advises; it does not edit files. Its output is advisory — the lead decides.
- If Codex is launched directly by the user in this repo, it acts as the implementer for the user's request and follows the same Implementation Rules and Delivery Flow expectations.

## Model Routing

Route each task brief by complexity:

- **Luna (`gpt-5.6-luna`)** — fastest/cheapest tier: mechanical edits, copy changes, small styling tweaks, first-pass drafts, lightweight reviews. Use low/medium reasoning effort.
- **Terra (`gpt-5.6-terra`)** — balanced everyday tier and the default when unsure: routine-to-moderate coding, standard component work, analysis.
- **Sol (`gpt-5.6-sol`)** — flagship tier: complex, high-stakes, or multi-step work, architecture decisions, tricky debugging; also the second-opinion reviewer.
- Escalation: if a Luna/Terra result fails review twice, escalate one tier up instead of iterating further on the same model.
- Best-of-N (Luna/Terra only): when the lead judges that comparing a few competing implementations would improve the outcome (open-ended composition, high-variance first-pass work), it may dispatch 2–3 parallel variants of the same brief and pick the best. Never on Sol. Preferred mechanics: parallel `codex exec` runs in separate git worktrees; alternatively a coordinator session can spawn Codex sub-agents via `multi_agent_v1__spawn_agent` with `model` pinned to `gpt-5.6-luna`/`gpt-5.6-terra` (sub-agents share one worktree, so file-competing variants belong in worktrees). The lead reviews all variants, picks the winner, and discards the rest. Details in PLAN.md §23.

For migration work, route per PLAN.md §23: Luna for Phase 0 audits and mechanical first-pass work, Terra for standard implementation (primitives, sections, route-by-route migration, tests), Sol for architecture, consent, OTO/commerce adapters, and second opinions.

Delegation command shapes (verified on codex-cli 0.144.1):

- Implement: `codex exec -m <model> -s workspace-write -o <report-file> "<task brief>"`
- Iterate after review: `codex exec resume --last "<review feedback>"`
- Second opinion / review: `codex exec review --uncommitted -m gpt-5.6-sol` or `codex exec -m gpt-5.6-sol -s read-only "<review prompt>"`
- Effort override: `-c model_reasoning_effort="low|medium|high|xhigh"`

## Delivery Flow

1. (Lead) Check the current worktree before editing.
   - Run `git status --short`.
   - Do not overwrite unrelated user changes.

2. (Lead) Read the request and relevant local context.
   - Inspect the page, component, data, and asset files touched by the request.
   - Keep the work scoped to the requested content, style, or behavior.

3. (Lead) Check Figma first.
   - For every UI-facing change, inspect the relevant Figma design before any code is written.
   - Use the Figma link from the user, task, issue, comments, or project notes.
   - Inspect the exact frame, node, or prototype state that matches the requested page/section.
   - Compare layout, copy, spacing, colors, imagery, responsive behavior, and component states.
   - If Figma access or a Figma link is unavailable, state that limitation and use the current site/code as the next-best reference.
   - Do not guess visual details when a Figma reference exists.

4. (Lead) Write the task brief and delegate.
   - The brief includes: goal, relevant files, constraints from this file, design notes from Figma, and the definition of done.
   - Pick the model tier per Model Routing and dispatch with `codex exec`.
   - Send only the context needed for the task; do not include credentials, tokens, or unrelated private data.
   - Delegation is the rule for all implementation, including small edits; the lead implements itself only when Codex CLI is unavailable.

5. (Implementer) Implement the change.
   - Follow existing Gatsby, React, and Tailwind patterns.
   - Use existing components and helpers before adding new abstractions.
   - Keep edits narrow and avoid unrelated refactors.
   - Prefer Tailwind theme classes over hardcoded colors when a token exists.
   - Use Gatsby image patterns for image assets when appropriate.
   - Report what changed and any validation performed.

6. (Lead) Review the implementation.
   - Read the implementer's report and review `git diff` against the brief and this file's rules.
   - If changes are needed, iterate in the same session: `codex exec resume --last "<feedback>"`.
   - Escalate the model tier after two failed review rounds.

7. (Lead) Validate locally.
   - Run `yarn build` for production page changes.
   - Run `yarn lint` when logic or shared code changed.
   - For visual/UI work, inspect the affected page locally and compare against Figma.
   - For responsive work, check mobile and desktop behavior.
   - The lead runs validation itself; sandboxed implementers may lack network access.

8. (Lead) Ask Sol for a second opinion when the task is substantial.
   - Provide the request, Figma/design observations, implementation summary, relevant diff, and validation results.
   - Ask Sol to review for missed requirements, regressions, weak validation, and Figma/device alignment gaps.
   - Keep Sol's output advisory. The lead decides whether follow-up edits are needed and dispatches them.

9. (Lead) Finish with evidence.
   - Summarize what changed and which model implemented it.
   - Report build/lint/visual validation results.
   - Mention whether Figma was checked and whether Sol reviewed the plan or final diff.
   - Call out any limitation, such as missing Figma access or unavailable Codex CLI.

## Project Commands

- Install dependencies: `yarn install`
- Develop: `yarn develop`
- Build: `yarn build`
- Serve built site: `yarn serve`
- Lint: `yarn lint`
- Format: `yarn format`
- Clean Gatsby cache: `yarn clean`

Use `yarn` exclusively.

## Held Dependencies

- Keep `eslint` and `@eslint/js` on the current ESLint 9 line until the React linting stack used here supports ESLint 10. `eslint-plugin-react@7.37.5` currently breaks under ESLint 10.
- Keep `typescript` on `6.0.3` until `typescript-eslint` supports the next TypeScript major. `typescript-eslint@8.63.0` declares support for TypeScript `<6.1`, and TypeScript 7 currently causes parser runtime failures in this repo.
- If revisiting TypeScript 7, consider a separate Biome migration spike rather than forcing TypeScript 7 through the current ESLint parser stack.

## Implementation Rules

- Do not modify `tsconfig.json`.
- Do not add type declaration libraries or packages such as `@types/*`.
- Do not create or modify generic type declaration files.
- Do not add global type declarations.
- Do not create new type declaration files for images or other assets.
- Do not modify TypeScript configuration to "improve type safety".
- Focus only on content, style, and behavior changes that are requested.
- Do not delete React imports in files; they are required for JSX compilation in this project.
- Keep Polish copy natural and appropriate for Polish-speaking business owners and marketers.
- Preserve mobile-first responsive behavior.
- Keep GDPR and analytics behavior intact unless explicitly asked to change it.
- Avoid hardcoded colors when a Tailwind theme class exists.
- Do not introduce unnecessary abstractions.
- Do not use npm for scripts or package management.

## Migration Rules (from PLAN.md)

These apply to any work related to the Gatsby → Astro migration; the full rules are in PLAN.md §18–19 and the owner decisions of 2026-07-11 in §21.

- Visual target is NOT pixel parity. Build clean, simple markup on Tailwind defaults (12-column grids, default spacing/type scales, minimal arbitrary values) that approximates the current site. The screenshot baselines in `baselines/` are a review reference, not a pixel contract.
- Phase 2 pilot routes: `/magic/` and `/magic-kolektyw/` (owner decision; preview-URL validation before any cutover).
- Phase 1 has no CMS: content lives in Git as typed PageSpec data. Design section contracts so a CMS can be attached later without contract changes.

- Do not add new numeric `version`/`part` variants anywhere; new work uses named variants and semantic section contracts.
- Do not put Tailwind classes, raw HTML, React nodes, `<script>` tags, or executable expressions into content data or CMS.
- Do not touch OTO (`src/api/oto`, `src/server/oto`) outside explicit Phase 4 work; its endpoint URLs, response JSON, and the `ada_oto_session` cookie contract must stay unchanged.
- Migrate route-by-route via Netlify rewrites; URLs stay unchanged and each route must be individually rollback-able.
- After a route is cut over, one source of truth per route: freeze the legacy copy or generate both from the same CMS.
- A migrated route ships only after the gates from PLAN.md (visual regression, SEO parity, forms, consent, a11y, performance budgets) pass.

## Validation Expectations

- Always check the current worktree before and after edits.
- Always check Figma before implementing UI-facing changes when a design reference is available.
- The lead reviews every delegated diff before validation; use Sol as the second-opinion reviewer for substantial planning and final implementation review.
- Run `yarn build` before finishing production page changes.
- For visual work, verify the rendered page against Figma or state why that was not possible.
- If a verification tool cannot provide required evidence, report the exact limitation and use the next-best authoritative source.
