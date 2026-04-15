import { cases } from "@/data/site";

function CaseCard({
  year,
  category,
  title,
  description,
  href,
  imagePath,
}: (typeof cases)[number]) {
  return (
    <a
      href={href}
      className="group block transition-transform duration-300 hover:-translate-y-0.5"
    >
      <article className="space-y-6">
        <div
          className="aspect-[1.14/1] rounded-[34px] border border-line bg-[#d8d8d3] bg-cover bg-center transition-opacity duration-300 group-hover:opacity-95"
          style={{ backgroundImage: `url(${imagePath})` }}
          aria-label={`${title} — плейсхолдер изображения`}
        />
        <div className="space-y-3.5">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            {year} {category}
          </p>
          <div className="space-y-2.5">
            <h3 className="text-[1.85rem] font-medium leading-[1.02] tracking-[-0.04em] text-ink sm:text-[2.05rem]">
              {title}
            </h3>
            <p className="max-w-[36ch] text-[0.95rem] leading-7 text-muted">
              {description}
            </p>
          </div>
        </div>
      </article>
    </a>
  );
}

export function Cases() {
  return (
    <section
      id="cases"
      className="section-shell scroll-mt-24 pb-20 pt-12 sm:scroll-mt-28 sm:pb-28 sm:pt-14 lg:scroll-mt-32 lg:pb-32 lg:pt-16"
    >
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
        {cases.map((item) => (
          <CaseCard key={`${item.year}-${item.title}`} {...item} />
        ))}
      </div>
    </section>
  );
}
