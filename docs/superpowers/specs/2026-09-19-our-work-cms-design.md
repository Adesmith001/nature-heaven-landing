# Our Work CMS and Public Content Hub Design

## Scope

Implement the MVP described in the supplied PRD across three existing projects:

- `nature-haven-landing`: public listing, article detail, navigation, SEO, YouTube embeds, and the featured upcoming-event announcement.
- `moneyquest-dashboard`: authenticated content management, draft/publish workflow, preview, filters, and Cloudinary image upload.
- `Question-generator-BE`: authenticated Cloudinary image upload for Our Work content, reusing the existing Cloudinary service without exposing its secret to either browser application.

The work will use a `new-update-our-works` branch in each repository. Features outside the PRD's MVP, including comments, public accounts, approval chains, automatic YouTube synchronization, and a media library, remain out of scope.

## Architecture

Appwrite remains the content source of truth. The MVP uses two collections:

1. `work_posts` stores the article, event, publication, SEO, link, and cover-image fields.
2. `work_post_images` stores ordered additional article images and their Cloudinary metadata.

Event data is kept on `work_posts` instead of introducing a separate `events` collection. An event is a work post whose `contentType` is `webinar`, `meeting`, or `event`. This avoids multi-document synchronization while still supporting the header announcement and event detail content.

The dashboard uses the existing Appwrite browser SDK and logged-in Appwrite session for CRUD. Collection permissions in Appwrite, rather than route protection alone, enforce write access. Published posts and their images receive public read permission; drafts receive only admin-team read/write permission.

The public landing site uses the Appwrite Web SDK with the public project ID. It queries only `status = published`; Appwrite document permissions provide the second enforcement layer so drafts cannot be fetched by an unauthenticated visitor.

Cover and article images are uploaded through the existing Python backend. Before accepting an upload, the endpoint validates an Appwrite JWT, loads the authenticated user, and requires an `admin` or `ceo` label/role consistent with the dashboard's existing administrator detection. The server accepts only JPEG and PNG files, uploads to `nurture-haven/our-work`, returns the URL and public ID, and never sends the Cloudinary API secret to the browser.

## Appwrite Schema

### `work_posts`

| Attribute | Type | Required | Notes |
| --- | --- | --- | --- |
| `slug` | string, 180 | yes | Stable, lowercase URL slug |
| `title` | string, 240 | yes | Public title |
| `subtitle` | string, 500 | no | Detail-page subtitle |
| `excerpt` | string, 1000 | no | Listing summary |
| `body` | string, 100000 | yes | Sanitized Markdown source |
| `contentType` | enum | yes | `article`, `webinar`, `meeting`, `event`, `project-update`, `recorded-session` |
| `status` | enum | yes | `draft`, `published`, `archived` |
| `coverImageUrl` | string, 2000 | no | Cloudinary secure URL |
| `coverImagePublicId` | string, 500 | no | Used for asset replacement/deletion |
| `coverImageAlt` | string, 300 | no | Required by the dashboard when a cover exists |
| `publishedAt` | datetime | no | Set when published; preserved on later edits |
| `eventStartsAt` | datetime | no | UTC instant for webinar/meeting/event |
| `eventTimezone` | string, 80 | no | IANA time-zone label used for display |
| `registrationUrl` | string, 2000 | no | Registration destination |
| `meetingUrl` | string, 2000 | no | Meeting destination |
| `youtubeVideoUrl` | string, 2000 | no | Validated YouTube watch/share/embed URL |
| `youtubeChannelUrl` | string, 2000 | no | Validated YouTube channel URL |
| `youtubeVideoTitle` | string, 240 | no | Accessible iframe/link title |
| `isFeaturedInHeader` | boolean | yes | Default `false` |
| `seoTitle` | string, 70 | no | Falls back to `title` |
| `seoDescription` | string, 170 | no | Falls back to `excerpt`/`subtitle` |

Indexes:

- Unique key index on `slug`.
- Key index on `status`.
- Key index on `contentType`.
- Key index on `publishedAt`.
- Composite key index on `status`, `publishedAt`.
- Composite key index on `status`, `isFeaturedInHeader`, `eventStartsAt`.

Permissions:

- Collection create/update/delete: the Appwrite team or label used for approved dashboard administrators.
- Published document read: `Role.any()`.
- Draft/archived document read and all document writes: approved administrator team/label only.
- The dashboard updates document permissions whenever status changes.

### `work_post_images`

| Attribute | Type | Required | Notes |
| --- | --- | --- | --- |
| `workPostId` | string, 64 | yes | Parent `work_posts` document ID |
| `url` | string, 2000 | yes | Cloudinary secure URL |
| `publicId` | string, 500 | yes | Cloudinary public ID |
| `altText` | string, 300 | yes | Accessible image description |
| `width` | integer | no | Cloudinary metadata |
| `height` | integer | no | Cloudinary metadata |
| `format` | string, 30 | no | Cloudinary metadata |
| `sortOrder` | integer | yes | Zero-based display order |

Indexes:

- Key index on `workPostId`.
- Composite key index on `workPostId`, `sortOrder`.

Image-document permissions mirror the parent post. Deleting a post deletes its image documents after the post delete succeeds; Cloudinary asset deletion is best-effort and reported if it fails.

## Content Format and Validation

The body uses Markdown rather than a large rich-text editor dependency. The dashboard provides a textarea with formatting guidance and side-by-side preview. Public rendering supports headings, paragraphs, lists, links, quotes, emphasis, and images. Raw HTML is not rendered.

Shared pure helpers cover:

- Slug generation and validation.
- YouTube watch/share/embed URL normalization.
- Content-type and event-field validation.
- Publish validation, including required title, slug, body, content type, cover alt text when needed, and a future date for a featured event.
- Featured-event selection: published, explicitly featured, event-capable type, and `eventStartsAt` later than the current time; the nearest start wins.

Only one featured event is allowed. Publishing or featuring one post clears the flag from any other currently featured post before saving the new selection.

## Dashboard Experience

Add an `Our Work` sidebar item and two protected routes:

- `/our-work`: searchable and filterable table/list with status, content type, publish date, and featured indicator. Actions include create, edit, preview, publish/unpublish, archive, and delete with confirmation.
- `/our-work/new` and `/our-work/:id/edit`: a single editor used for create and update.

The editor contains content, media, event/link, and SEO sections. Images are selected from the user's device and uploaded as JPEG or PNG files; there is no manual URL or image-metadata input. The author is fixed to `Nurture Haven` in the public presentation and is not editable. Draft saves require only the core record shape; publishing runs full public validation. Preview renders the same presentation component used by the editor's preview panel without temporarily publishing the record.

Loading, empty, validation, Appwrite error, upload-progress, and destructive-confirmation states are explicit. Existing protected routing remains in place, and the page also checks the existing administrator role helper before allowing CMS operations.

## Public Experience

Add `Our Work` to desktop and mobile navigation.

`/our-work` queries published posts ordered by `publishedAt` descending. It supports content-type filtering and an initial page of cards with a `Load more` action. The page includes loading skeletons, an empty state, and a retryable error state.

`/our-work/:slug` fetches one published post by slug and renders its cover, metadata, Markdown body, additional images, event actions, responsive YouTube embed, channel link, and up to three recent published posts. Unknown or unpublished slugs show a not-found state.

The fixed header queries the nearest valid featured event. Desktop hover and focus reveal an accessible popover; click/tap toggles it on mobile. Escape and outside click close it. A session-storage dismissal hides the announcement for the current browser session only. Expired events are filtered automatically.

SEO metadata uses the existing `SEO` component with per-post title, description, canonical URL, Open Graph image, and article type. `/our-work` has its own canonical metadata.

## API and Security

The backend adds an `Our Work` upload route that accepts one JPEG or PNG image and an Appwrite JWT. It verifies the JWT with the configured Appwrite endpoint/project, rejects non-admin users, validates MIME type and size, uploads into `nurture-haven/our-work`, and returns only `url` and `publicId`.

The dashboard requests a short-lived JWT from the existing Appwrite session for each upload and sends it to the backend. Cloudinary credentials stay server-side. CORS is limited to configured dashboard origins in deployed environments.

The landing site has read-only public Appwrite access. It contains only public endpoint, project, database, and collection IDs; no Appwrite API key or Cloudinary secret is included in browser configuration.

## Failure Handling

- Appwrite query failures render retryable UI and do not reveal implementation details.
- Invalid or missing public configuration produces a clear empty/error state rather than crashing the app.
- Failed uploads leave the draft unchanged and allow retry.
- Failed Appwrite saves do not discard editor state.
- Post deletion requires confirmation. If Cloudinary cleanup fails, the content record is still removed and the dashboard reports the orphaned asset ID for manual cleanup.
- A failed featured-flag cleanup prevents setting the new featured post, avoiding multiple active header events.

## Testing and Verification

Implementation follows small red-green cycles for pure behavior and service operations.

Automated checks will cover:

- Slug normalization and YouTube URL conversion.
- Draft versus publish validation.
- Public query construction and filtering.
- Nearest featured-event selection and past-event exclusion.
- Dashboard Appwrite create/update/status-change payloads and permissions.
- Backend upload authentication, admin authorization, MIME/size validation, and Cloudinary response mapping.
- Public routes and dashboard editor/list rendering for loading, empty, error, and populated states where the current test stack supports component tests.

Each repository must pass its existing lint, test, type-check, and production build commands. The public site and dashboard will also receive a manual responsive browser pass for the primary flows and console errors.

## Deployment Requirements

Code cannot create production Appwrite schema safely from browser applications. Delivery therefore includes an Appwrite setup checklist with the two collections, attributes, indexes, and permissions above, plus required environment variables for all three deployments.

Before release:

1. Create the Appwrite collections and attributes.
2. Configure admin-team/label collection permissions and enable document security.
3. Add public read permissions only to published documents.
4. Configure landing and dashboard Appwrite collection IDs.
5. Configure backend Appwrite verification values and Cloudinary credentials.
6. Add the deployed landing and dashboard hostnames to Appwrite platforms and backend CORS.
7. Publish a test draft, confirm it is private, publish it, and verify the public list/detail/header flows.

## Acceptance Mapping

The design satisfies the supplied acceptance criteria through Appwrite-backed draft/published records, protected dashboard CRUD, secure Cloudinary uploads, validated YouTube links, public list/detail pages, automatic upcoming-event filtering, accessible desktop/mobile header behavior, and explicit loading/empty/error states. The final handoff will include the exact Appwrite setup steps and environment-variable list.
