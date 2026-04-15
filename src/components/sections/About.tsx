import Image from "next/image";
import { aboutContent, siteMeta } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="section-shell scroll-mt-24 pb-20 pt-20 sm:scroll-mt-28 sm:pb-28 sm:pt-28 lg:scroll-mt-32 lg:pb-32 lg:pt-32"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(320px,0.78fr)_minmax(0,1fr)] lg:items-start lg:gap-16 xl:gap-20">
        <div className="soft-card overflow-hidden rounded-[34px]">
          <div className="relative aspect-[0.92/1] bg-[#d8d8d3]">
            <Image
              src={aboutContent.imagePath}
              alt="Портрет Алины Нурмамедовой"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            label={aboutContent.title}
            title={
              <>
                <span className="block lg:whitespace-nowrap">Привет! Я Алина,</span>
                <span className="block lg:whitespace-nowrap">
                  Продуктовый дизайнер
                </span>
              </>
            }
            titleClassName="max-w-none text-[2.55rem] sm:text-[3.15rem] lg:text-[3.7rem] xl:text-[4rem]"
          />

          <div className="mt-10 max-w-[620px] space-y-6 text-[1rem] leading-[1.78] text-muted sm:text-[1.05rem]">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-[0.95rem] text-ink">
            <a
              href={siteMeta.telegram}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              Telegram
            </a>
            <a
              href={`mailto:${siteMeta.email}`}
              className="transition-opacity hover:opacity-60"
            >
              Mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
