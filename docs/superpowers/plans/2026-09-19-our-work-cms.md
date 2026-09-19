# Our Work CMS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a secure Appwrite-backed Our Work CMS in the MoneyQuest dashboard and a public Our Work hub on the Nurture Haven landing site.

**Architecture:** Appwrite stores posts and additional-image records with document-level publication permissions. The dashboard performs authenticated CRUD and sends short-lived Appwrite JWTs to the existing Python backend for Cloudinary uploads; the landing site has public read-only access to published records.

**Tech Stack:** React, TypeScript/JavaScript, Vite, Appwrite Web SDK, FastAPI, Cloudinary, Vitest, Node test runner, Pytest.

---

### Task 1: Prepare repositories and shared planning state

**Files:**
- Create: `task_plan.md`
- Create: `findings.md`
- Create: `progress.md`

- [ ] **Step 1: Create matching feature branches**

Run `git switch -c new-update-our-works` in `moneyquest-dashboard` and `Question-generator-BE`, starting from their current checked-out branches. The landing repository is already on `new-update-our-works`.

- [ ] **Step 2: Record clean baselines**

Run landing `npm run lint && npm run build`, dashboard `pnpm test && pnpm run lint && pnpm run build`, and backend targeted `pytest` smoke tests. Record pre-existing failures before changes.

### Task 2: Add backend admin-authenticated Cloudinary uploads

**Files:**
- Create: `Question-generator-BE/our_work/router.py`
- Create: `Question-generator-BE/our_work/auth.py`
- Create: `Question-generator-BE/tests/test_our_work_upload.py`
- Modify: `Question-generator-BE/main.py`
- Modify: `Question-generator-BE/storage/cloudinary_service.py`

- [ ] **Step 1: Write failing auth and upload tests**

Test missing JWT returns 401, non-admin Appwrite account data returns 403, invalid MIME/oversized files return 400/413, and an admin upload maps Cloudinary metadata to `{url, publicId}`.

- [ ] **Step 2: Verify tests fail for the missing router**

Run `pytest tests/test_our_work_upload.py -q`; expect import or route failures caused by the unimplemented feature.

- [ ] **Step 3: Implement minimal auth and upload route**

Use `httpx.AsyncClient` to call `${APPWRITE_ENDPOINT}/account` with `X-Appwrite-Project` and `X-Appwrite-JWT`. Accept `admin`/`ceo` labels or matching preferences, validate JPEG/PNG up to 10 MB, upload to `nurture-haven/our-work`, and return the secure URL and public ID.

- [ ] **Step 4: Register router and verify**

Register an `/our-work/images` router in `main.py`, run the targeted test, then run the existing backend tests that import `main.py`.

- [ ] **Step 5: Commit backend slice**

Commit as `feat: add secure our work image uploads`.

### Task 3: Add dashboard domain helpers and Appwrite API

**Files:**
- Create: `moneyquest-dashboard/src/features/our-work/types.ts`
- Create: `moneyquest-dashboard/src/features/our-work/helpers.ts`
- Create: `moneyquest-dashboard/src/features/our-work/helpers.test.ts`
- Create: `moneyquest-dashboard/src/features/our-work/api.ts`
- Create: `moneyquest-dashboard/src/features/our-work/api.test.ts`
- Modify: `moneyquest-dashboard/src/lib/appwrite.ts`
- Modify: `moneyquest-dashboard/src/vite-env.d.ts`

- [ ] **Step 1: Write failing helper tests**

Cover slug generation, supported YouTube URLs, invalid host rejection, embed conversion, draft/publish validation, post-to-Appwrite payload mapping, and published/admin permission construction.

- [ ] **Step 2: Run tests and confirm expected failures**

Run `pnpm test -- src/features/our-work/helpers.test.ts src/features/our-work/api.test.ts`.

- [ ] **Step 3: Implement types and helpers**

Define `WorkPost`, `WorkPostDraft`, content/status unions, `slugify`, `youtubeEmbedUrl`, and `validateForPublish`. Keep Markdown as a plain string and UTC event time as one ISO datetime.

- [ ] **Step 4: Implement Appwrite CRUD**

Add collection IDs, list/get/create/update/delete, feature exclusivity, status transitions, additional-image operations, and `uploadOurWorkImage(file)` that uses `account.createJWT()` and the backend base URL.

- [ ] **Step 5: Run focused and full dashboard tests**

Run focused tests, then `pnpm test`.

### Task 4: Build dashboard list and editor

**Files:**
- Create: `moneyquest-dashboard/src/pages/OurWork.tsx`
- Create: `moneyquest-dashboard/src/pages/OurWorkEditor.tsx`
- Create: `moneyquest-dashboard/src/features/our-work/MarkdownPreview.tsx`
- Modify: `moneyquest-dashboard/src/App.tsx`
- Modify: `moneyquest-dashboard/src/components/layout/Sidebar.tsx`
- Modify: `moneyquest-dashboard/src/components/layout/Layout.tsx`

- [ ] **Step 1: Add protected routes and navigation**

Add `/our-work`, `/our-work/new`, and `/our-work/:id/edit`, an Our Work sidebar item, and layout titles.

- [ ] **Step 2: Implement management list**

Render search, content-type/status filters, publish-date ordering, status and featured badges, plus preview, publish/unpublish, archive, and confirmed-delete actions with loading/empty/error states.

- [ ] **Step 3: Implement editor**

Add content, cover image, event/link, YouTube, SEO, draft-save, publish, and preview fields. Require alt text when an image is selected and preserve form state after errors.

- [ ] **Step 4: Implement safe Markdown preview**

Use `react-markdown` without raw-HTML support for headings, paragraphs, lists, links, quotes, emphasis, and images. Open external links safely.

- [ ] **Step 5: Verify dashboard**

Run `pnpm test`, `pnpm run lint`, and `pnpm run build`; fix only failures introduced by this feature.

- [ ] **Step 6: Commit dashboard slice**

Commit as `feat: add our work content management`.

### Task 5: Add landing data layer and pure behavior

**Files:**
- Create: `src/features/our-work/helpers.js`
- Create: `src/features/our-work/helpers.test.js`
- Create: `src/features/our-work/api.js`
- Modify: `package.json`

- [ ] **Step 1: Write failing Node tests**

Use `node:test` to cover YouTube embed conversion, nearest featured-event selection, past-event exclusion, excerpt fallback, and content-type labels.

- [ ] **Step 2: Verify tests fail**

Run `node --test src/features/our-work/helpers.test.js`; expect missing-export failures.

- [ ] **Step 3: Implement helpers and public Appwrite queries**

Add pure helpers and Appwrite queries for published pages, slug lookup, related posts, additional images, and nearest featured event. Return a configuration error when required `VITE_APPWRITE_*` values are absent.

- [ ] **Step 4: Verify focused tests**

Run the Node test file and confirm all cases pass.

### Task 6: Build public listing, detail, and header announcement

**Files:**
- Create: `src/features/our-work/WorkCard.jsx`
- Create: `src/features/our-work/MarkdownContent.jsx`
- Create: `src/pages/OurWork.jsx`
- Create: `src/pages/OurWorkDetail.jsx`
- Create: `src/components/FeaturedEventAnnouncement.jsx`
- Modify: `src/components/Header.jsx`
- Modify: `src/App.jsx`
- Modify: `src/index.css`
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Add routes and navigation**

Add `/our-work` and `/our-work/:slug` routes plus desktop/mobile navigation links.

- [ ] **Step 2: Implement listing**

Render reverse-chronological cards, content-type filters, 9-item incremental loading, loading skeletons, empty state, and retryable error state.

- [ ] **Step 3: Implement detail page**

Render cover metadata, Markdown, gallery, event actions, responsive YouTube embed with fallback link, channel link, recent posts, and per-post SEO. Unpublished/missing slugs render a not-found state.

- [ ] **Step 4: Implement header announcement**

Show the nearest published future featured event. Support hover, focus, click/tap, Escape, outside click, keyboard traversal, and session-only dismissal.

- [ ] **Step 5: Polish responsive/accessibility behavior**

Ensure focus rings, semantic headings, alt text, reduced-motion handling, mobile layouts, and no header overlap on public pages.

- [ ] **Step 6: Verify landing site**

Run `npm test`, `npm run lint`, and `npm run build`.

- [ ] **Step 7: Commit landing slice**

Commit as `feat: add public our work hub`.

### Task 7: Add Appwrite setup documentation and final verification

**Files:**
- Create: `docs/our-work-appwrite-setup.md`
- Modify: `README.md`
- Modify: `moneyquest-dashboard/README.md`
- Modify: `Question-generator-BE/README.md`

- [ ] **Step 1: Document schema and permissions**

List both collections, every attribute/type/size/default, every index, document-security setting, collection create permission, and published/draft document permissions.

- [ ] **Step 2: Document environment variables**

List landing/dashboard collection IDs and backend Appwrite/Cloudinary/CORS variables without including secret values.

- [ ] **Step 3: Run fresh full verification**

Run all targeted tests, repository test suites, linters, type checks, and production builds. Inspect all three git diffs and statuses.

- [ ] **Step 4: Perform browser smoke test**

Open the landing and dashboard builds, exercise primary responsive flows that do not require unavailable production credentials, and verify no console errors attributable to the feature.

- [ ] **Step 5: Complete final commits and handoff**

Commit documentation and any verified fixes. Report exact branches, commits, verification evidence, and the Appwrite console setup checklist.
