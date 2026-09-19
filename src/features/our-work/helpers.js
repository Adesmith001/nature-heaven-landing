const EVENT_TYPES = new Set(['webinar', 'meeting', 'event']);

export function youtubeEmbedUrl(value = '') {
  if (!value.trim()) return null;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase().replace(/^www\./, '');
    let id = '';
    if (host === 'youtu.be') id = url.pathname.split('/').filter(Boolean)[0] || '';
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (url.pathname === '/watch') id = url.searchParams.get('v') || '';
      if (url.pathname.startsWith('/embed/') || url.pathname.startsWith('/shorts/')) {
        id = url.pathname.split('/')[2] || '';
      }
    }
    return /^[A-Za-z0-9_-]{6,}$/.test(id) ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

export function selectFeaturedEvent(posts, now = new Date()) {
  return posts
    .filter((post) => post.status === 'published' && post.isFeaturedInHeader &&
      EVENT_TYPES.has(post.contentType) && Date.parse(post.eventStartsAt) > now.getTime())
    .sort((a, b) => Date.parse(a.eventStartsAt) - Date.parse(b.eventStartsAt))[0] || null;
}

export function contentTypeLabel(value = '') {
  return value.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function excerptForPost(post) {
  const source = post.excerpt?.trim() || post.subtitle?.trim() || post.body || '';
  return source
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~-]+/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 220);
}

export function formatWorkDate(value, options = {}) {
  if (!value) return '';
  return new Intl.DateTimeFormat('en-NG', {
    dateStyle: 'medium',
    ...options,
  }).format(new Date(value));
}
