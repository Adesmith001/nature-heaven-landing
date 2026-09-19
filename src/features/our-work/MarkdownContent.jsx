import ReactMarkdown from 'react-markdown';

export default function MarkdownContent({ body }) {
  return (
    <ReactMarkdown
      components={{
        h1: (props) => <h2 className="mb-5 mt-10 text-3xl font-semibold text-[#052F1B]" {...props} />,
        h2: (props) => <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#052F1B]" {...props} />,
        h3: (props) => <h3 className="mb-3 mt-8 text-xl font-semibold text-[#052F1B]" {...props} />,
        p: (props) => <p className="my-5 text-[1.05rem] leading-8 text-[#29483B]" {...props} />,
        ul: (props) => <ul className="my-5 list-disc space-y-2 pl-7 text-[#29483B]" {...props} />,
        ol: (props) => <ol className="my-5 list-decimal space-y-2 pl-7 text-[#29483B]" {...props} />,
        blockquote: (props) => <blockquote className="my-8 border-l-4 border-[#26D367] bg-[#E7F4E8] px-6 py-3 text-lg italic text-[#0F3D2C]" {...props} />,
        a: ({ node, ...props }) => { void node; return <a className="font-medium text-[#0F7A3D] underline underline-offset-4" target="_blank" rel="noreferrer noopener" {...props} />; },
        img: ({ node, ...props }) => { void node; return <img className="my-8 w-full rounded-3xl" loading="lazy" {...props} />; },
      }}
    >
      {body}
    </ReactMarkdown>
  );
}
