export default function Section({ id, title, children, className = "" }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className={`scroll-mt-20 border-t border-line py-16 sm:py-20 md:grid md:grid-cols-[180px_1fr] md:gap-10 ${className}`}
    >
      <h2
        id={`${id}-titulo`}
        className="mb-8 font-display text-2xl font-bold tracking-tight md:mb-0"
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}