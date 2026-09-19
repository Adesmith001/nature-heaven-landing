import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import MarkdownContent from '../features/our-work/MarkdownContent';
import WorkCard from '../features/our-work/WorkCard';
import { getPublishedPostBySlug, listRecentPosts, listWorkPostImages } from '../features/our-work/api';
import { contentTypeLabel, excerptForPost, formatWorkDate, youtubeEmbedUrl } from '../features/our-work/helpers';

export default function OurWorkDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [images, setImages] = useState([]);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getPublishedPostBySlug(slug)
      .then(async (found) => {
        setError('');
        setPost(found);
        if (!found) return;
        const [gallery, related] = await Promise.all([listWorkPostImages(found.$id), listRecentPosts(found.$id)]);
        setImages(gallery);
        setRecent(related);
      })
      .catch((loadError) => setError(loadError instanceof Error ? loadError.message : 'This story could not be loaded.'))
      .finally(() => setLoading(false));
  }, [slug]);

  if (error) return <main className="min-h-screen bg-[#F7F0E8] px-5 pt-40"><div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center"><h1 className="text-3xl font-semibold">We couldn’t open this story</h1><p className="mt-3">{error}</p><Link to="/our-work" className="mt-6 inline-block font-semibold text-[#0F7A3D]">Back to Our Work</Link></div></main>;
  if (loading || (post && post.slug !== slug)) return <main className="min-h-screen bg-[#F7F0E8] pt-36"><div className="mx-auto h-96 max-w-4xl animate-pulse rounded-[2rem] bg-white/70" /></main>;
  if (!post) return <main className="min-h-screen bg-[#F7F0E8] px-5 pt-40"><SEO title="Story not found | Nurture Haven" description="The requested Our Work story could not be found." noindex /><div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center"><p className="text-sm font-semibold uppercase tracking-widest text-[#178247]">404</p><h1 className="mt-3 text-4xl font-semibold">That story isn’t here.</h1><Link to="/our-work" className="mt-7 inline-block rounded-full bg-[#052F1B] px-6 py-3 font-semibold text-white">Browse Our Work</Link></div></main>;

  const embedUrl = youtubeEmbedUrl(post.youtubeVideoUrl);
  const description = post.seoDescription || excerptForPost(post);
  const canonical = `https://www.nurtureehaven.com/our-work/${post.slug}`;

  return (
    <main className="min-h-screen bg-[#F7F0E8] pb-24 pt-32">
      <SEO title={`${post.seoTitle || post.title} | Nurture Haven`} description={description} url={canonical} canonicalUrl={canonical} image={post.coverImageUrl || 'https://www.nurtureehaven.com/hero-section-logo.png'} type="article" publishedTime={post.publishedAt} modifiedTime={post.$updatedAt} section={contentTypeLabel(post.contentType)} />
      <article>
        <header className="mx-auto max-w-5xl px-5 py-12 text-center sm:px-8 sm:py-20">
          <Link to="/our-work" className="text-sm font-semibold text-[#0F7A3D]">← All Our Work</Link>
          <div className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#178247]">{contentTypeLabel(post.contentType)} · {formatWorkDate(post.publishedAt)}</div>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#052F1B] sm:text-6xl">{post.title}</h1>
          {post.subtitle && <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#456456]">{post.subtitle}</p>}
          {post.authorName && <p className="mt-6 text-sm text-[#456456]">By {post.authorName}</p>}
        </header>
        {post.coverImageUrl && <div className="mx-auto max-w-7xl px-5 sm:px-8"><img src={post.coverImageUrl} alt={post.coverImageAlt || ''} className="max-h-[700px] w-full rounded-[2rem] object-cover" /></div>}
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-20"><MarkdownContent body={post.body} />
          {post.eventStartsAt && <aside className="my-12 rounded-[2rem] bg-[#052F1B] p-7 text-white sm:p-9"><p className="text-xs font-semibold uppercase tracking-widest text-[#75E29A]">{contentTypeLabel(post.contentType)}</p><h2 className="mt-3 text-2xl font-semibold">Join us</h2><p className="mt-2 text-white/75">{new Intl.DateTimeFormat('en-NG', { dateStyle: 'full', timeStyle: 'short', timeZone: post.eventTimezone || 'Africa/Lagos' }).format(new Date(post.eventStartsAt))} {post.eventTimezone && `(${post.eventTimezone})`}</p><div className="mt-6 flex flex-wrap gap-3">{post.registrationUrl && <a href={post.registrationUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#26D367] px-5 py-2.5 font-semibold text-[#052F1B]">Register</a>}{post.meetingUrl && <a href={post.meetingUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-5 py-2.5 font-semibold">Open meeting link</a>}</div></aside>}
          {embedUrl && <section className="my-12"><h2 className="mb-5 text-2xl font-semibold text-[#052F1B]">Watch the recording</h2><div className="aspect-video overflow-hidden rounded-3xl bg-black"><iframe src={embedUrl} title={post.youtubeVideoTitle || `${post.title} recording`} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div><a href={post.youtubeVideoUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-[#0F7A3D] underline">Watch on YouTube</a></section>}
          {post.youtubeChannelUrl && <a href={post.youtubeChannelUrl} target="_blank" rel="noreferrer" className="my-8 inline-flex rounded-full border border-[#0F3D2C]/20 px-5 py-3 font-semibold text-[#0F7A3D]">Visit our YouTube channel ↗</a>}
          {images.length > 0 && <section className="my-14 grid gap-5 sm:grid-cols-2">{images.map((image) => <img key={image.$id} src={image.url} alt={image.altText} className="h-full w-full rounded-3xl object-cover" loading="lazy" />)}</section>}
        </div>
      </article>
      {recent.length > 0 && <section className="mx-auto max-w-7xl border-t border-[#0F3D2C]/10 px-5 pt-16 sm:px-8"><h2 className="mb-8 text-3xl font-semibold text-[#052F1B]">Keep exploring</h2><div className="grid gap-6 md:grid-cols-3">{recent.map((item) => <WorkCard key={item.$id} post={item} />)}</div></section>}
    </main>
  );
}
