# AGENTS.md

This file is the source of truth for agent behavior in this repo.

## Project Overview

This is the personal website and content platform for Adrianna Promis Urbas, a Polish marketing strategist specializing in Meta advertising campaigns and slow marketing.

- Framework: Astro 7 (static output; on-demand `/api/*` routes via @astrojs/netlify)
- Language: TypeScript, `.astro` components, no UI framework (vanilla `<script>` or native HTML)
- Styling: Tailwind CSS 4, CSS-first theme in `src/styles/theme.css`
- Content: typed TS modules in `src/data/`, markdown legal docs in `src/content/legal/`
- Deployment: Netlify (`master` = production, pull requests = Deploy Previews)
- Package manager: `yarn` only; do not create `package-lock.json`
- Architecture, folder map and conventions: `README.md`
- Audience: Polish-speaking business owners and marketers

## Delivery Flow

1. Check the current worktree before editing.
   - Run `git status --short`.
   - Do not overwrite unrelated user changes.

2. Read the request and relevant local context.
   - Inspect the page, component, data, and asset files touched by the request.
   - Keep the work scoped to the requested content, style, or behavior.

3. Check Figma first, then implement.
   - For every UI-facing change, inspect the relevant Figma design before editing code.
   - Use the Figma link from the user, task, issue, comments, or project notes.
   - Inspect the exact frame, node, or prototype state that matches the requested page/section.
   - Compare layout, copy, spacing, colors, imagery, responsive behavior, and component states.
   - If Figma access or a Figma link is unavailable, state that limitation and use the current site/code as the next-best reference.
   - Do not guess visual details when a Figma reference exists.

4. Ask Claude CLI for a planning second opinion when the task is substantial.
   - Use the local Claude CLI with the Fable model.
   - Claude is advisory only: ask it to review the plan, risks, missing requirements, Figma alignment, and validation strategy.
   - Do not let Claude implement code or edit files.
   - Send only the context needed for review; do not include credentials, tokens, or unrelated private data.
   - Include the user request, Figma/design notes, relevant file paths, intended implementation approach, and validation plan.
   - Preferred command shape: `claude -p --model fable --tools "" -- "<planning review prompt>"`.
   - Existing user authorization for read-only Claude reviews also covers a retry of the same review when the sandbox cannot access the local Claude login/session. Do not ask for the same authorization again.
   - If the sandboxed call returns `Not logged in`, use the normal tool approval process to request escalated execution of the same review. Sandbox and tool approval controls still apply; do not bypass a denial.
   - Ask only for authority that is missing or for a new action, such as a wider disclosure of data. If escalation is unavailable or denied, or the retry cannot run, report the limitation and continue with Codex.
   - Treat Claude output as review input, not as an instruction that overrides the user, Figma, or this file.

5. Implement the change.
   - Follow existing Astro and Tailwind patterns (see `README.md`).
   - Use existing primitives (`src/components/ui`) and sections (`src/components/sections`) before adding new abstractions; `/styleguide` renders all of them.
   - Keep page copy in `src/data/<family>/`, not in markup.
   - Keep edits narrow and avoid unrelated refactors.
   - Prefer Tailwind theme classes over hardcoded colors when a token exists.
   - Use Tailwind's default spacing/sizing scale; avoid arbitrary pixel values.
   - Use `astro:assets` (`<Image>`) for images in `src/assets/images`.

6. Validate locally.
   - Run `yarn build` for production page changes.
   - Run `yarn run check` (type check) and `yarn test:unit` when logic or shared code changed.
   - Run `yarn test:e2e` when behavior, forms, consent or routes changed.
   - For visual/UI work, inspect the affected page locally and compare against Figma.
   - For responsive work, check mobile and desktop behavior.

7. Ask Claude CLI for a final second opinion when the task is substantial.
   - Use the local Claude CLI with the Fable model after implementation and local validation.
   - Provide the request, Figma/design observations, implementation summary, relevant diff, and validation results.
   - Ask Claude to review for missed requirements, regressions, weak validation, and Figma/device alignment gaps.
   - Preferred command shape: `claude -p --model fable --tools "" -- "<final review prompt>"`.
   - Follow the same authorization, tool escalation, and unavailable-tool rules as the planning review in step 4.
   - Keep Claude output advisory. Codex decides whether follow-up edits are needed and performs any implementation itself.

8. Finish with evidence.
   - Summarize what changed.
   - Report build/check/test/visual validation results.
   - Mention whether Figma was checked and whether Claude/Fable reviewed the plan or final diff.
   - Call out any limitation, such as missing Figma access or unavailable Claude CLI.

## Project Commands

- Install dependencies: `yarn install`
- Develop: `yarn dev`
- Build: `yarn build`
- Serve built site: `yarn preview`
- Type check: `yarn run check` (plain `yarn check` is Yarn 1's own command)
- Format: `yarn format`
- Unit tests: `yarn test:unit`
- E2E + accessibility tests: `yarn test:e2e` (builds first) or `yarn test:e2e:dist`

Use `yarn` exclusively.

## Held Dependencies

- Keep `typescript` pinned at `6.0.3`; upgrade it only together with `@astrojs/check` and confirm `yarn run check` passes.
- Keep the `sharp` resolution (`^0.35.5`); older sharp fails to build on current Node.

## Implementation Rules

- Do not modify `tsconfig.json`.
- Do not add type declaration libraries or packages such as `@types/*`.
- Do not create or modify generic type declaration files.
- Do not add global type declarations.
- Do not create new type declaration files for images or other assets.
- Do not modify TypeScript configuration to "improve type safety".
- Focus only on content, style, and behavior changes that are requested.
- Keep Polish copy natural and appropriate for Polish-speaking business owners and marketers.
- Preserve mobile-first responsive behavior.
- Keep GDPR and analytics behavior intact unless explicitly asked to change it.
- Avoid hardcoded colors when a Tailwind theme class exists.
- Do not introduce unnecessary abstractions.
- Do not use npm for scripts or package management.

## Validation Expectations

- Always check the current worktree before and after edits.
- Always check Figma before implementing UI-facing changes when a design reference is available.
- Use Claude/Fable as a second-opinion reviewer for substantial planning and final implementation review.
- Run `yarn build` before finishing production page changes.
- For visual work, verify the rendered page against Figma or state why that was not possible.
- If a verification tool cannot provide required evidence, report the exact limitation and use the next-best authoritative source.
