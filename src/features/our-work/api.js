import { Client, Databases, Query } from 'appwrite';

const config = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1',
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || '691a7162000351b16b2a',
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || '69bf8e370027ff1361e7',
  postsCollectionId: import.meta.env.VITE_APPWRITE_WORK_POSTS_COLLECTION_ID || 'work_posts',
  imagesCollectionId: import.meta.env.VITE_APPWRITE_WORK_POST_IMAGES_COLLECTION_ID || 'work_post_images',
};

const missingConfig = Object.entries(config)
  .filter(([key, value]) => !value && !key.endsWith('CollectionId'))
  .map(([key]) => key);

let databases;
if (missingConfig.length === 0) {
  const client = new Client().setEndpoint(config.endpoint).setProject(config.projectId);
  databases = new Databases(client);
}

function requireConfiguration() {
  if (!databases) {
    throw new Error(`Our Work is not configured yet (${missingConfig.join(', ')}).`);
  }
}

export async function listPublishedPosts({ limit = 9, offset = 0 } = {}) {
  requireConfiguration();
  const response = await databases.listDocuments(
    config.databaseId,
    config.postsCollectionId,
    [
      Query.equal('status', 'published'),
      Query.orderDesc('publishedAt'),
      Query.limit(limit),
      Query.offset(offset),
    ],
  );
  return { posts: response.documents, total: response.total };
}

export async function getPublishedPostBySlug(slug) {
  requireConfiguration();
  const response = await databases.listDocuments(
    config.databaseId,
    config.postsCollectionId,
    [Query.equal('status', 'published'), Query.equal('slug', slug), Query.limit(1)],
  );
  return response.documents[0] || null;
}

export async function listWorkPostImages(workPostId) {
  requireConfiguration();
  const response = await databases.listDocuments(
    config.databaseId,
    config.imagesCollectionId,
    [Query.equal('workPostId', workPostId), Query.orderAsc('sortOrder'), Query.limit(100)],
  );
  return response.documents;
}

export async function listRecentPosts(excludeId, limit = 3) {
  const { posts } = await listPublishedPosts({ limit: limit + 1 });
  return posts.filter((post) => post.$id !== excludeId).slice(0, limit);
}

export async function listFeaturedEvents() {
  requireConfiguration();
  const response = await databases.listDocuments(
    config.databaseId,
    config.postsCollectionId,
    [
      Query.equal('status', 'published'),
      Query.equal('isFeaturedInHeader', true),
      Query.orderAsc('eventStartsAt'),
      Query.limit(10),
    ],
  );
  return response.documents;
}
