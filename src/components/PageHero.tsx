type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="bg-teal px-4 py-16 text-cream sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        {eyebrow ? (
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
          {intro}
        </p>
      </div>
    </section>
  );
}
