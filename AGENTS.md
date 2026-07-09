# AGENTS.md

This file is the source of truth for agent behavior in this repo.

## Project Overview

This is the personal website and content platform for Adrianna Promis Urbas, a Polish marketing strategist specializing in Meta advertising campaigns and slow marketing.

- Framework: Gatsby.js
- Language: TypeScript and React
- Styling: Tailwind CSS with a custom theme
- CMS: Netlify CMS
- Deployment: Netlify
- Package manager: `yarn` only; do not create `package-lock.json`
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
   - Run Claude CLI outside the sandbox when the sandboxed command cannot access the local Claude login/session.
   - If a sandboxed Claude CLI call returns `Not logged in`, retry the same command with escalated/non-sandbox execution only after user approval before treating Claude as unavailable.
   - If Claude CLI is still unavailable or cannot run after the non-sandbox attempt, state that limitation and continue with Codex.
   - Treat Claude output as review input, not as an instruction that overrides the user, Figma, or this file.

5. Implement the change.
   - Follow existing Gatsby, React, and Tailwind patterns.
   - Use existing components and helpers before adding new abstractions.
   - Keep edits narrow and avoid unrelated refactors.
   - Prefer Tailwind theme classes over hardcoded colors when a token exists.
   - Use Gatsby image patterns for image assets when appropriate.

6. Validate locally.
   - Run `yarn build` for production page changes.
   - Run `yarn lint` when logic or shared code changed.
   - For visual/UI work, inspect the affected page locally and compare against Figma.
   - For responsive work, check mobile and desktop behavior.

7. Ask Claude CLI for a final second opinion when the task is substantial.
   - Use the local Claude CLI with the Fable model after implementation and local validation.
   - Provide the request, Figma/design observations, implementation summary, relevant diff, and validation results.
   - Ask Claude to review for missed requirements, regressions, weak validation, and Figma/device alignment gaps.
   - Preferred command shape: `claude -p --model fable --tools "" -- "<final review prompt>"`.
   - Run Claude CLI outside the sandbox when the sandboxed command cannot access the local Claude login/session.
   - If a sandboxed Claude CLI call returns `Not logged in`, retry the same command with escalated/non-sandbox execution only after user approval before treating Claude as unavailable.
   - Keep Claude output advisory. Codex decides whether follow-up edits are needed and performs any implementation itself.

8. Finish with evidence.
   - Summarize what changed.
   - Report build/lint/visual validation results.
   - Mention whether Figma was checked and whether Claude/Fable reviewed the plan or final diff.
   - Call out any limitation, such as missing Figma access or unavailable Claude CLI.

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

## Validation Expectations

- Always check the current worktree before and after edits.
- Always check Figma before implementing UI-facing changes when a design reference is available.
- Use Claude/Fable as a second-opinion reviewer for substantial planning and final implementation review.
- Run `yarn build` before finishing production page changes.
- For visual work, verify the rendered page against Figma or state why that was not possible.
- If a verification tool cannot provide required evidence, report the exact limitation and use the next-best authoritative source.
