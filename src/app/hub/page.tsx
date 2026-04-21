import Link from "next/link";
import { Contacts } from "@/components/sections/Contacts";
import { cases, siteMeta } from "@/data/site";
import { hubCase } from "@/data/hub-case";

function CaseSection({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`section-shell ${className}`}>
      <div className="grid gap-8 lg:grid-cols-[208px_minmax(0,1fr)] lg:gap-16">
        <div className="pt-2 text-[0.82rem] font-normal uppercase tracking-[0.01em] text-[#a8a6b2]">
          {label}
        </div>
        <div>{children}</div>
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
    <div className="rounded-[26px] border border-line bg-[rgba(255,255,255,0.56)] px-6 py-5 text-center sm:py-6">
      <div className="text-[2.25rem] leading-none tracking-[-0.05em] text-ink sm:text-[2.55rem]">
        {value}
      </div>
      <p className="mt-3 text-[0.9rem] leading-6 text-[#a3a19e]">{label}</p>
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
            className="aspect-[1.14/1] rounded-[34px] border border-line bg-[#d8d8d3] bg-cover bg-center transition-opacity duration-300 group-hover:opacity-95"
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
                href={siteMeta.cv}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-[rgba(255,255,255,0.6)] text-[0.98rem] text-muted transition-colors hover:text-ink"
              >
                Cv
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell pt-14 sm:pt-16 lg:pt-20">
          <div className="grid lg:grid-cols-[208px_minmax(0,1fr)]">
            <div>
              <h1 className="text-[3.1rem] font-medium leading-[0.96] tracking-[-0.06em] text-ink sm:text-[3.9rem] lg:text-[4.2rem]">
                {hubCase.title}
              </h1>
            </div>

            <div className="max-w-[980px] space-y-6 text-[1rem] leading-[1.66] text-muted sm:text-[1.06rem]">
              {hubCase.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:ml-[208px] lg:mt-12 lg:gap-5">
            {hubCase.metrics.map((item) => (
              <MetricCard key={item.label} {...item} />
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:ml-[208px] lg:grid-cols-2 lg:gap-16">
            <div className="space-y-11">
              {hubCase.meta.map((item) => (
                <div key={item.label}>
                  <p className="text-[0.96rem] leading-7 text-[#a5a3a2]">{item.label}</p>
                  <p className="mt-2.5 text-[1.03rem] leading-8 text-muted">{item.value}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[0.96rem] leading-7 text-[#a5a3a2]">Команда</p>
              <ul className="mt-3 space-y-3">
                {hubCase.team.map((member) => (
                  <li key={member} className="flex items-start gap-3 text-[1.03rem] leading-8 text-muted">
                    <span className="text-[0.92rem] text-[#b7b0ff]">✦</span>
                    <span>{member}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-shell pt-16 sm:pt-20 lg:pt-24">
          <img style={{marginBottom: '12px'}} alt="themes" src="/images/themes.png" />
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
            <img style={{borderRadius: '20px'}} alt="phone" src="/images/phone.webp" />
            <img style={{borderRadius: '20px'}} alt="app" src="/images/app.avif" />
          </div>
        </section>

        <CaseSection label="ЦЕЛЬ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <h2 className="max-w-[940px] text-[2.02rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.76rem]">
            {hubCase.goal}
          </h2>
          
        </CaseSection>

        <CaseSection label="МОЯ РОЛЬ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <h2 className="max-w-[980px] text-[1.96rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.32rem] lg:text-[2.68rem]">
            {hubCase.roleLead}
          </h2>

          <ul className="mt-9 space-y-4.5">
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
          <img style={{borderRadius: '20px', marginBottom: '12px'}} alt="themes" src="/images/after.avif" />
          <img style={{borderRadius: '20px'}} alt="phone" src="/images/statistics-2.avif" />
        </section>



        <CaseSection label="ПРОБЛЕМА НА СТАРТЕ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <StarBulletList items={hubCase.problemBullets} />
        </CaseSection>

        <CaseSection label="ИССЛЕДОВАНИЯ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="space-y-16">
            {hubCase.researchBlocks.map((item) => (
              <div key={item.title}>
                <h2 className="text-[2rem] font-medium leading-[1.16] tracking-[-0.05em] text-ink sm:text-[2.35rem]">
                  {item.title}
                </h2>
                <p className="mt-5 max-w-[980px] text-[1rem] leading-[1.68] text-muted sm:text-[1.04rem]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </CaseSection>
        
        <section className="section-shell pt-16 sm:pt-20 lg:pt-24">
          <img style={{borderRadius: '20px'}} alt="themes" src="/images/users.avif" />
        </section>
        

        <CaseSection label="UI-РЕШЕНИЕ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <h2 className="text-[2.18rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.8rem]">
            {hubCase.uiSolutionTitle}
          </h2>
        </CaseSection>

        

        <section className="section-shell pt-10 sm:pt-12">
          <div>
            <div className="space-y-8">
              <h3 className="text-[2.12rem] font-medium leading-[1.08] tracking-[-0.05em] text-ink">
                Было:
              </h3>

              <img style={{borderRadius: '20px'}} alt="themes" src="/images/before.avif" />
              
              <p style={{marginTop: '12px', marginBottom: '70px'}} className="text-center text-[0.95rem] leading-7 text-[#9a9896]">
                {hubCase.oldListTitle}
              </p>

              <SignedBulletList
                items={hubCase.oldBullets}
                sign="−"
                signClassName="border-[rgba(255,183,170,0.32)] text-[#ff9f8c]"
              />
            </div>
          </div>
        </section>

      

        <section className="section-shell pt-10 sm:pt-12">
          <div>
            <div className="space-y-8">
              <h3 className="text-[2.12rem] font-medium leading-[1.08] tracking-[-0.05em] text-ink">
                Стало:
              </h3>
              
              <img style={{borderRadius: '20px', marginBottom: '12px'}} alt="themes" src="/images/after.avif" />
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '0'}}>
                <img style={{borderRadius: '20px'}} alt="phone" src="/images/ui.avif" />
                <img style={{borderRadius: '20px'}} alt="app" src="/images/card.avif" />
              </div>
              
              <SignedBulletList
                items={hubCase.newBullets}
                sign="+"
                signClassName="border-[rgba(169,255,212,0.32)] text-[#9cefc4]"
              />
            </div>
          </div>
        </section>

        <CaseSection label="ДИЗАЙН-СИСТЕМА" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <h2 className="max-w-[980px] text-[2.02rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.7rem]">
            {hubCase.designSystemLead}
          </h2>
          <StarBulletList items={hubCase.designSystemBullets} className="mt-9" />
        </CaseSection>

        <CaseSection label="РЕЗУЛЬТАТЫ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <h2 className="max-w-[930px] text-[2.02rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.7rem]">
            {hubCase.resultsLead}
          </h2>
          <StarBulletList items={hubCase.resultsBullets} className="mt-9" />

          <div className="mt-12 rounded-[28px] border border-line bg-[rgba(255,255,255,0.5)] px-7 py-10 sm:px-8 sm:py-11">
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
          <img style={{borderRadius: '20px'}} alt="app" src="/images/statistics.avif" />
        </section>

        <CaseSection label="ВЫВОД" className="sm:pt-28 lg:pt-[7.5rem]">
          <div className="max-w-[960px] space-y-6 text-[1rem] leading-[1.7] text-muted sm:text-[1.04rem]">
            {hubCase.conclusion.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </CaseSection>

        <section className="pb-4 pt-24 sm:pt-28 lg:pt-[7rem]">
          <div style={{height: '78px'}} className="hub-projects-marquee overflow-hidden">
            <div className="hub-projects-marquee__track -ml-8 flex w-max items-center gap-7 text-[3rem] font-medium leading-none tracking-[-0.06em] text-ink sm:text-[3.6rem] lg:text-[4rem]">
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

        .hub-projects-marquee__track {
          animation: hubProjectsMarquee 22s linear infinite;
        }
      `}</style>
    </>
  );
}
