# Our Work Appwrite Setup

The Our Work feature expects two Appwrite collections in the same database used by the MoneyQuest dashboard. Enable **Document security** on both collections.

Approved CMS users must have an Appwrite Auth label of either `admin` or `ceo`. The dashboard can recognize legacy preference roles, but Appwrite permissions cannot securely target preferences; add one of these labels before giving a user CMS access.

## Collection 1: `work_posts`

Create a collection whose ID is `work_posts`, or set `VITE_APPWRITE_WORK_POSTS_COLLECTION_ID` to its custom ID.

### Attributes

| Key | Appwrite type | Size / values | Required |
| --- | --- | --- | --- |
| `slug` | String | 180 | Yes |
| `title` | String | 240 | Yes |
| `subtitle` | String | 500 | No |
| `excerpt` | String | 1000 | No |
| `body` | String | 100000 | Yes |
| `contentType` | Enum | `article`, `webinar`, `meeting`, `event`, `project-update`, `recorded-session` | Yes |
| `status` | Enum | `draft`, `published`, `archived` | Yes |
| `coverImageUrl` | String | 2000 | No |
| `coverImagePublicId` | String | 500 | No |
| `coverImageAlt` | String | 300 | No |
| `publishedAt` | Datetime | — | No |
| `eventStartsAt` | Datetime | — | No |
| `eventTimezone` | String | 80 | No |
| `registrationUrl` | String | 2000 | No |
| `meetingUrl` | String | 2000 | No |
| `youtubeVideoUrl` | String | 2000 | No |
| `youtubeChannelUrl` | String | 2000 | No |
| `youtubeVideoTitle` | String | 240 | No |
| `isFeaturedInHeader` | Boolean | — | Yes |
| `seoTitle` | String | 70 | No |
| `seoDescription` | String | 170 | No |

Wait until every attribute reports `Available` before creating indexes.

The dashboard populates `coverImageUrl` and `coverImagePublicId` after a user uploads a JPEG or PNG. There is no manual image URL, width, height, format, author, or creator field. Public articles always display the author as **Nurture Haven**.

If these collections already exist from an earlier setup, remove `coverImageWidth`, `coverImageHeight`, `coverImageFormat`, `authorName`, and `createdBy` from `work_posts`. Also remove `width`, `height`, and `format` from `work_post_images` after confirming no other feature uses them.

### Indexes

| Index key | Type | Attributes and order |
| --- | --- | --- |
| `work_slug_unique` | Unique | `slug` ASC |
| `work_status` | Key | `status` ASC |
| `work_content_type` | Key | `contentType` ASC |
| `work_published_at` | Key | `publishedAt` DESC |
| `work_status_published` | Key | `status` ASC, `publishedAt` DESC |
| `work_featured_upcoming` | Key | `status` ASC, `isFeaturedInHeader` ASC, `eventStartsAt` ASC |

### Collection permissions

- Create: `label:admin`, `label:ceo`
- Read: `label:admin`, `label:ceo`
- Update: `label:admin`, `label:ceo`
- Delete: `label:admin`, `label:ceo`

Do not add `Any` at collection level. The dashboard adds `Any` read permission to individual published documents. Draft and archived documents receive only `admin` and `ceo` label permissions.

## Collection 2: `work_post_images`

Create a collection whose ID is `work_post_images`, or configure a custom ID with `VITE_APPWRITE_WORK_POST_IMAGES_COLLECTION_ID`.

### Attributes

| Key | Appwrite type | Size | Required |
| --- | --- | --- | --- |
| `workPostId` | String | 64 | Yes |
| `url` | String | 2000 | Yes |
| `publicId` | String | 500 | Yes |
| `altText` | String | 300 | Yes |
| `sortOrder` | Integer | — | Yes |

### Indexes

| Index key | Type | Attributes and order |
| --- | --- | --- |
| `work_image_post` | Key | `workPostId` ASC |
| `work_image_order` | Key | `workPostId` ASC, `sortOrder` ASC |

Use the same collection permissions and document-security setting as `work_posts`. Image-document permissions mirror the parent post.

## Frontend environment variables

Add these values to both the landing-site and dashboard deployments:

```env
VITE_APPWRITE_ENDPOINT=https://<region>.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=<project-id>
VITE_APPWRITE_DATABASE_ID=<database-id>
VITE_APPWRITE_WORK_POSTS_COLLECTION_ID=work_posts
VITE_APPWRITE_WORK_POST_IMAGES_COLLECTION_ID=work_post_images
```

The dashboard also needs the image-upload API URL. The landing site does not use this variable because it reads published content directly from Appwrite:

```env
VITE_API_BASE_URL=https://moneyquestproject-demo-development.up.railway.app/
```

These browser variables are identifiers, not secrets. Never add an Appwrite API key or Cloudinary secret to a `VITE_*` variable.

## Backend environment variables

```env
APPWRITE_ENDPOINT=https://<region>.cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=<project-id>
CLOUDINARY_CLOUD_NAME=<cloud-name>
CLOUDINARY_API_KEY=<api-key>
CLOUDINARY_API_SECRET=<api-secret>
CORS_ALLOWED_ORIGINS=https://<dashboard-host>
```

The Cloudinary folder is fixed to `nurture-haven/our-work`. Keep `CLOUDINARY_API_SECRET` only in backend deployment secrets.

## Release checks

1. Add the deployed landing and dashboard hostnames as Web platforms in Appwrite.
2. Add the `admin` or `ceo` Auth label to every approved CMS administrator.
3. Confirm anonymous visitors can list only documents carrying `Any` read permission.
4. Create a draft and verify its URL cannot be read while signed out.
5. Publish it and verify it appears at `/our-work`.
6. Feature a future webinar, meeting, or event and verify the header announcement appears.
7. Move its start time into the past and verify it no longer appears in the header.
