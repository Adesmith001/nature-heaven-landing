import test from 'node:test';
import assert from 'node:assert/strict';
import {
  contentTypeLabel,
  excerptForPost,
  selectFeaturedEvent,
  youtubeEmbedUrl,
} from './helpers.js';

test('youtubeEmbedUrl handles watch and short links', () => {
  assert.equal(
    youtubeEmbedUrl('https://www.youtube.com/watch?v=abcDEF123_-'),
    'https://www.youtube.com/embed/abcDEF123_-',
  );
  assert.equal(
    youtubeEmbedUrl('https://youtu.be/abcDEF123_-'),
    'https://www.youtube.com/embed/abcDEF123_-',
  );
  assert.equal(youtubeEmbedUrl('https://example.com/watch?v=abcDEF123_-'), null);
});

test('selectFeaturedEvent returns the nearest future published event', () => {
  const posts = [
    { title: 'Past', status: 'published', contentType: 'event', isFeaturedInHeader: true, eventStartsAt: '2026-01-01T10:00:00Z' },
    { title: 'Later', status: 'published', contentType: 'webinar', isFeaturedInHeader: true, eventStartsAt: '2027-02-01T10:00:00Z' },
    { title: 'Nearest', status: 'published', contentType: 'meeting', isFeaturedInHeader: true, eventStartsAt: '2027-01-01T10:00:00Z' },
    { title: 'Draft', status: 'draft', contentType: 'event', isFeaturedInHeader: true, eventStartsAt: '2026-11-01T10:00:00Z' },
  ];

  assert.equal(
    selectFeaturedEvent(posts, new Date('2026-09-19T10:00:00Z')).title,
    'Nearest',
  );
});

test('excerptForPost falls back from excerpt to subtitle to body', () => {
  assert.equal(excerptForPost({ excerpt: 'Custom excerpt', subtitle: 'Subtitle', body: 'Body' }), 'Custom excerpt');
  assert.equal(excerptForPost({ excerpt: '', subtitle: 'Subtitle', body: 'Body' }), 'Subtitle');
  assert.equal(excerptForPost({ excerpt: '', subtitle: '', body: '# Heading\n\nA **useful** body.' }), 'Heading A useful body.');
});

test('contentTypeLabel creates readable labels', () => {
  assert.equal(contentTypeLabel('recorded-session'), 'Recorded Session');
});
