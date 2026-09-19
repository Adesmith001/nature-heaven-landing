import { Link } from 'react-router-dom';
import { contentTypeLabel, excerptForPost, formatWorkDate } from './helpers';

export default function WorkCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#0F3D2C]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#26D367]">
      <Link to={`/our-work/${post.slug}`} className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-[#26D367]/40">
        <div className="aspect-[16/10] overflow-hidden bg-[#DDEBDD]">
          {post.coverImageUrl ? (
            <img src={post.coverImageUrl} alt={post.coverImageAlt || ''} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
          ) : (
            <div className="flex h-full items-end bg-[#DDEBDD] p-6 text-5xl font-bold text-[#0F3D2C]/20">NH</div>
          )}
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#157440]">
            <span>{contentTypeLabel(post.contentType)}</span>
            <time dateTime={post.publishedAt}>{formatWorkDate(post.publishedAt)}</time>
          </div>
          <h2 className="text-2xl font-semibold leading-tight text-[#052F1B]">{post.title}</h2>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#345548]">{excerptForPost(post)}</p>
          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0F7A3D]">Read more <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
