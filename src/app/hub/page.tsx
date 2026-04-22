import type { ReactNode } from "react";
import Link from "next/link";
import { Contacts } from "@/components/sections/Contacts";
import { cases, siteMeta } from "@/data/site";
import { hubCase } from "@/data/hub-case";

function CaseSection({
  label,
  children,
  className = "",
  contentClassName = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section className={`section-shell ${className}`}>
      <div className="hub-page-shell">
        <div className="hub-grid">
          <div className="hub-label pt-1">{label}</div>
          <div className={["hub-section-content", contentClassName].join(" ").trim()}>{children}</div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="hub-metric-card">
      <div className="hub-metric-value">{value}</div>
      <p className="hub-metric-label">{label}</p>
    </div>
  );
}

function StarBulletList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 text-[0.98rem] leading-[1.78] text-muted">
          <span className="pt-[0.22rem] text-[0.95rem] text-[#b7b0ff]">✦</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SignedBulletList({
  items,
  sign,
  signClassName,
}: {
  items: readonly string[];
  sign: string;
  signClassName: string;
}) {
  return (
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 text-[0.98rem] leading-[1.78] text-muted">
          <span
            className={[
              "mt-[0.16rem] inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[1.18rem] leading-none",
              signClassName,
            ].join(" ")}
          >
            {sign}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MediaImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={["hub-media-frame", className].join(" ").trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}

function OtherProjectCard() {
  const otherProject = cases[1];

  return (
    <div className="mx-auto max-w-[720px]">
      <Link
        href={otherProject.href === "#" ? "/#cases" : otherProject.href}
        className="group block transition-transform duration-300 hover:-translate-y-0.5"
      >
        <article className="space-y-6">
          <div
            className="aspect-[1.14/1] rounded-[28px] border border-line bg-[#d8d8d3] bg-cover bg-center transition-opacity duration-300 group-hover:opacity-95"
            style={{ backgroundImage: "none" }}
            aria-label={otherProject.title}
          />
          <div className="space-y-3.5 text-left">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
              {otherProject.category}
            </p>
            <div className="space-y-2.5">
              <h3 className="text-[1.72rem] font-medium leading-[1.02] tracking-[-0.04em] text-ink sm:text-[1.95rem]">
                {otherProject.title}
              </h3>
              <p className="w-full text-[0.92rem] leading-7 text-muted">
                {otherProject.description}
              </p>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}

export default function HubCasePage() {
  return (
    <>
      <main className="pb-8 pt-9 sm:pt-10">
        <section className="section-shell">
          <div className="hub-page-shell">
            <div className="flex items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[0.98rem] text-muted transition-opacity hover:opacity-60"
              >
                <span className="text-[1.2rem] leading-none">←</span>
                <span>{hubCase.backLabel}</span>
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href={siteMeta.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-[rgba(255,255,255,0.6)] text-[0.98rem] text-muted transition-colors hover:text-ink"
                >
                  Tg
                </a>
                <a
                  href="/files/Нурмамедова_Алина_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-[rgba(255,255,255,0.6)] text-[0.98rem] text-muted transition-colors hover:text-ink"
                >
                  Cv
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-14 sm:pt-16 lg:pt-20">
          <div className="hub-page-shell">
            <div className="hub-grid hub-intro-grid">
              <div>
                <h1 className="text-[3.2rem] font-medium leading-[0.96] tracking-[-0.06em] text-ink sm:text-[4rem] lg:text-[4.4rem]">
                  {hubCase.title}
                </h1>
              </div>

              <div className="hub-text-column space-y-6 text-[1rem] leading-[1.66] text-muted sm:text-[1.06rem]">
                {hubCase.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="hub-grid mt-12">
              <div aria-hidden="true" />
              <div className="hub-metrics-grid">
                {hubCase.metrics.map((item) => (
                  <MetricCard key={item.label} {...item} />
                ))}
              </div>
            </div>

            <div className="hub-grid mt-12 sm:mt-14">
              <div aria-hidden="true" />
              <div className="hub-meta-grid">
                <div className="space-y-10">
                  {hubCase.meta.map((item) => (
                    <div key={item.label}>
                      <p className="text-[0.9rem] leading-7 text-[#a5a3a2]">{item.label}</p>
                      <p className="mt-2 text-[1rem] leading-8 text-muted">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-[0.9rem] leading-7 text-[#a5a3a2]">Команда</p>
                  <ul className="mt-3 space-y-3">
                    {hubCase.team.map((member) => (
                      <li key={member} className="flex items-start gap-3 text-[1rem] leading-8 text-muted">
                        <span className="text-[0.92rem] text-[#b7b0ff]">✦</span>
                        <span>{member}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-16 sm:pt-20 lg:pt-24">
          <div className="hub-page-shell">
            <MediaImage src="/images/themes.png" alt="themes" className="hub-hero-image" />
            <div className="hub-image-pair mt-4">
              <MediaImage src="/images/phone.webp" alt="phone" />
              <MediaImage src="/images/app.avif" alt="app" />
            </div>
          </div>
        </section>

        <CaseSection label="ЦЕЛЬ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <h2 className="hub-section-title max-w-[16ch] text-[2.02rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.76rem]">
            {hubCase.goal}
          </h2>
        </CaseSection>

        <CaseSection label="МОЯ РОЛЬ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <h2 className="hub-section-title max-w-[19ch] text-[1.96rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.32rem] lg:text-[2.68rem]">
            {hubCase.roleLead}
          </h2>

          <ul className="mt-9 max-w-[700px] space-y-4.5">
            {hubCase.roleBullets.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 text-[0.96rem] leading-[1.72] text-muted"
              >
                <span className="pt-[0.22rem] text-[0.95rem] text-[#b7b0ff]">✦</span>
                <p>
                  <span className="font-medium text-muted">{item.title}:</span>{" "}
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </CaseSection>

        <section className="section-shell pt-16 sm:pt-20 lg:pt-24">
          <div className="hub-page-shell">
            <div className="hub-image-stack">
              <MediaImage src="/images/after.avif" alt="themes" />
              <MediaImage src="/images/statistics-2.avif" alt="phone" />
            </div>
          </div>
        </section>

        <CaseSection label="ПРОБЛЕМА НА СТАРТЕ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column">
            <StarBulletList items={hubCase.problemBullets} />
          </div>
        </CaseSection>

        <CaseSection label="ИССЛЕДОВАНИЯ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column space-y-14">
            {hubCase.researchBlocks.map((item) => (
              <div key={item.title}>
                <h2 className="text-[2rem] font-medium leading-[1.16] tracking-[-0.05em] text-ink sm:text-[2.3rem]">
                  {item.title}
                </h2>
                <p className="mt-5 text-[1rem] leading-[1.68] text-muted sm:text-[1.04rem]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </CaseSection>

        <section className="section-shell pt-16 sm:pt-20 lg:pt-24">
          <div className="hub-page-shell">
            <MediaImage src="/images/users.avif" alt="themes" />
          </div>
        </section>

        <CaseSection label="UI-РЕШЕНИЕ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <h2 className="hub-section-title max-w-[18ch] text-[2.18rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.8rem]">
            {hubCase.uiSolutionTitle}
          </h2>
        </CaseSection>

        <section className="section-shell pt-10 sm:pt-12">
          <div className="hub-page-shell">
            <div className="hub-grid">
              <div aria-hidden="true" />
              <div className="hub-comparison-card">
                <div className="space-y-8">
                  <h3 className="text-[2.12rem] font-medium leading-[1.08] tracking-[-0.05em] text-ink">
                    Было:
                  </h3>

                  <MediaImage src="/images/before.avif" alt="themes" />

                  <p className="text-center text-[0.95rem] leading-7 text-[#9a9896]">
                    {hubCase.oldListTitle}
                  </p>

                  <SignedBulletList
                    items={hubCase.oldBullets}
                    sign="−"
                    signClassName="border-[rgba(255,183,170,0.32)] text-[#ff9f8c]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pt-10 sm:pt-12">
          <div className="hub-page-shell">
            <div className="hub-grid">
              <div aria-hidden="true" />
              <div className="hub-comparison-card">
                <div className="space-y-8">
                  <h3 className="text-[2.12rem] font-medium leading-[1.08] tracking-[-0.05em] text-ink">
                    Стало:
                  </h3>

                  <MediaImage src="/images/after.avif" alt="themes" />
                  <div className="hub-image-pair">
                    <MediaImage src="/images/ui.avif" alt="phone" />
                    <MediaImage src="/images/card.avif" alt="app" />
                  </div>

                  <SignedBulletList
                    items={hubCase.newBullets}
                    sign="+"
                    signClassName="border-[rgba(169,255,212,0.32)] text-[#9cefc4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CaseSection label="ДИЗАЙН-СИСТЕМА" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column">
            <h2 className="hub-section-title text-[2.02rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.7rem]">
              {hubCase.designSystemLead}
            </h2>
            <StarBulletList items={hubCase.designSystemBullets} className="mt-9" />
          </div>
        </CaseSection>

        <CaseSection label="РЕЗУЛЬТАТЫ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]" contentClassName="hub-results-layout">
          <div className="hub-text-column">
            <h2 className="hub-section-title text-[2.02rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.7rem]">
              {hubCase.resultsLead}
            </h2>
            <StarBulletList items={hubCase.resultsBullets} className="mt-9" />
          </div>

          <div className="hub-quote-card">
            <p className="text-[2rem] leading-none text-[#ddd9f7]">“</p>
            <p className="mt-4 text-[1.16rem] leading-[1.58] tracking-[-0.03em] text-ink sm:text-[1.4rem]">
              {hubCase.testimonial.quote}
            </p>
            <p className="mt-10 text-[1rem] leading-7 text-[#9f9bab]">
              — {hubCase.testimonial.author}
            </p>
          </div>
        </CaseSection>

        <section className="section-shell pt-16 sm:pt-20 lg:pt-24">
          <div className="hub-page-shell">
            <MediaImage src="/images/statistics.avif" alt="app" />
          </div>
        </section>

        <CaseSection label="ВЫВОД" className="sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column space-y-6 text-[1rem] leading-[1.7] text-muted sm:text-[1.04rem]">
            {hubCase.conclusion.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </CaseSection>

        <section className="section-shell pb-4 pt-24 sm:pt-28 lg:pt-[7rem]">
          <div className="hub-page-shell">
            <div className="hub-projects-marquee overflow-hidden">
              <div className="hub-projects-marquee__track flex w-max items-center gap-7 text-[3rem] font-medium leading-none tracking-[-0.06em] text-ink sm:text-[3.6rem] lg:text-[4rem]">
                <div className="flex items-center gap-7">
                  <span className="text-[#b7b0ff]">✦</span>
                  <span className="whitespace-nowrap">Другие проекты</span>
                  <span className="text-[#b7b0ff]">✦</span>
                  <span className="whitespace-nowrap">Другие проекты</span>
                  <span className="text-[#b7b0ff]">✦</span>
                  <span className="whitespace-nowrap">Другие проекты</span>
                </div>
                <div className="flex items-center gap-7" aria-hidden="true">
                  <span className="text-[#b7b0ff]">✦</span>
                  <span className="whitespace-nowrap">Другие проекты</span>
                  <span className="text-[#b7b0ff]">✦</span>
                  <span className="whitespace-nowrap">Другие проекты</span>
                  <span className="text-[#b7b0ff]">✦</span>
                  <span className="whitespace-nowrap">Другие проекты</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <OtherProjectCard />
            </div>
          </div>
        </section>

        <Contacts />
      </main>
      <style>{`
        @keyframes hubProjectsMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .hub-page-shell {
          margin: 0 auto;
          width: 100%;
          max-width: 1160px;
        }

        .hub-grid {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          column-gap: 48px;
        }

        .hub-label {
          font-size: 0.78rem;
          line-height: 1.3;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a8a6b2;
        }

        .hub-section-content {
          min-width: 0;
        }

        .hub-text-column {
          max-width: 700px;
        }

        .hub-section-title {
          max-width: 700px;
        }

        .hub-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .hub-metric-card {
          border: 1px solid rgba(17, 17, 17, 0.08);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.56);
          padding: 24px;
          text-align: center;
        }

        .hub-metric-value {
          font-size: 2.45rem;
          line-height: 1;
          letter-spacing: -0.05em;
          color: #111111;
        }

        .hub-metric-label {
          margin-top: 10px;
          font-size: 0.84rem;
          line-height: 1.55;
          color: #a3a19e;
        }

        .hub-meta-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px;
          max-width: 700px;
        }

        .hub-media-frame img {
          display: block;
          width: 100%;
          border-radius: 24px;
        }

        .hub-hero-image img {
          border-radius: 28px;
        }

        .hub-image-pair {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .hub-image-stack {
          display: grid;
          gap: 16px;
        }

        .hub-comparison-card {
          max-width: 700px;
        }

        .hub-results-layout {
          display: grid;
          grid-template-columns: minmax(0, 700px) minmax(260px, 1fr);
          gap: 32px;
          align-items: start;
        }

        .hub-quote-card {
          border: 1px solid rgba(17, 17, 17, 0.08);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.5);
          padding: 40px 28px;
        }

        .hub-projects-marquee {
          height: 78px;
        }

        .hub-projects-marquee__track {
          animation: hubProjectsMarquee 22s linear infinite;
        }

        @media (max-width: 1023px) {
          .hub-grid {
            grid-template-columns: minmax(0, 1fr);
            row-gap: 20px;
          }

          .hub-metrics-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .hub-meta-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }

          .hub-results-layout {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @media (max-width: 767px) {
          .hub-page-shell {
            max-width: 100%;
          }

          .hub-image-pair {
            grid-template-columns: minmax(0, 1fr);
          }

          .hub-projects-marquee {
            height: 68px;
          }
        }
      `}</style>
    </>
  );
}
