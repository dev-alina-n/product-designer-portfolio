import { experienceItems } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section className="section-shell pb-20 pt-20 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32">
      <SectionHeading id="experience" label="" title="Опыт работы" />

      <div className="mt-14 divide-y divide-line rounded-[34px] border border-line bg-[rgba(255,255,255,0.46)] lg:mt-20">
        {experienceItems.map((item) => (
          <article
            key={`${item.dates}-${item.role}`}
            className="grid gap-4 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 lg:px-10"
          >
            <p className="text-[0.95rem] leading-7 text-muted">{item.dates}</p>
            <div>
              <h3 className="text-[1.55rem] font-medium leading-[1.04] tracking-[0.01em] text-ink sm:text-[1.8rem]">
                {item.role}
              </h3>
              <p className="mt-3 text-[1rem] leading-7 text-muted">{item.company}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
