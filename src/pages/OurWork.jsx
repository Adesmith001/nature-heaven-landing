import { useCallback, useEffect, useMemo, useState } from 'react';
import SEO from '../components/SEO';
import WorkCard from '../features/our-work/WorkCard';
import { listPublishedPosts } from '../features/our-work/api';
import { contentTypeLabel } from '../features/our-work/helpers';

const PAGE_SIZE = 9;

export default function OurWork() {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await listPublishedPosts({ limit: PAGE_SIZE });
      setPosts(response.posts);
      setTotal(response.total);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'Our Work could not be loaded.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => void load(), [load]);

  const types = useMemo(() => [...new Set(posts.map((post) => post.contentType))], [posts]);
  const visiblePosts = filter === 'all' ? posts : posts.filter((post) => post.contentType === filter);

  const loadMore = async () => {
    setLoadingMore(true);
    try {
      const response = await listPublishedPosts({ limit: PAGE_SIZE, offset: posts.length });
      setPosts((current) => [...current, ...response.posts]);
      setTotal(response.total);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'More stories could not be loaded.');
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F0E8] pb-24 pt-32 text-[#052F1B]">
      <SEO title="Our Work | Nurture Haven" description="Explore Nurture Haven articles, events, webinars, meetings, projects, and recorded sessions." url="https://www.nurtureehaven.com/our-work" canonicalUrl="https://www.nurtureehaven.com/our-work" image="https://www.nurtureehaven.com/hero-section-logo.png" />
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl py-12 sm:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#178247]">Ideas into action</p>
          <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">Our work, shared openly.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#345548]">Stories, gatherings, and practical resources from our work to make financial confidence feel possible for every family.</p>
        </div>

        {!loading && posts.length > 0 && <div className="mb-10 flex flex-wrap gap-2" aria-label="Filter Our Work"><button onClick={() => setFilter('all')} className={`rounded-full px-5 py-2.5 text-sm font-medium ${filter === 'all' ? 'bg-[#052F1B] text-white' : 'border border-[#0F3D2C]/20 bg-white'}`}>All</button>{types.map((type) => <button key={type} onClick={() => setFilter(type)} className={`rounded-full px-5 py-2.5 text-sm font-medium ${filter === type ? 'bg-[#052F1B] text-white' : 'border border-[#0F3D2C]/20 bg-white'}`}>{contentTypeLabel(type)}</button>)}</div>}

        {error && <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">{error} <button onClick={load} className="font-semibold underline">Try again</button></div>}
        {loading ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }).map((_, index) => <div key={index} className="h-[430px] animate-pulse rounded-[2rem] bg-white/70" />)}</div> : visiblePosts.length === 0 ? <div className="rounded-[2rem] border border-[#0F3D2C]/10 bg-white p-12 text-center"><h2 className="text-2xl font-semibold">No stories here yet</h2><p className="mt-2 text-[#456456]">Please check back soon for new work from our team.</p></div> : <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{visiblePosts.map((post) => <WorkCard key={post.$id} post={post} />)}</div>}
        {posts.length < total && filter === 'all' && <div className="mt-12 text-center"><button onClick={loadMore} disabled={loadingMore} className="rounded-full bg-[#052F1B] px-7 py-3 font-semibold text-white hover:bg-[#0F7A3D] disabled:opacity-60">{loadingMore ? 'Loading…' : 'Load more'}</button></div>}
      </section>
    </main>
  );
}
