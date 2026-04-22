import type { ReactNode } from "react";
import Link from "next/link";
import { Contacts } from "@/components/sections/Contacts";
import { siteMeta } from "@/data/site";

const beelineCase = {
  title: "pro beeline",
  backLabel: "Назад",
  intro: [
    "pro beeline — точка входа в B2B-экосистему, где клиент работает с документами: счетами, договорами и платежами по всем подключенным услугам. По каждой услуге формируются отдельные договоры и счета, из-за чего пользователю приходится работать сразу с несколькими начислениями.",
  ],
  meta: [
    { label: "Год", value: "2024-2026" },
    { label: "Ниша", value: "B2B" },
  ],
  team: ["Владелец продукта", "Продуктовый дизайнер", "Команда разработки"],
  goal:
    "Упростить сценарий оплаты и снизить количество ошибок, переосмыслив работу пользователя с несколькими счетами.",
  roleLead:
    "Я участвовала во всех этапах проекта: от исследований до презентации готовых решений.",
  roleBullets: [
    "Анализ: погрузилась в задачу, изучила целевую аудиторию",
    "UX-исследования: провела интервью с пользователями, проанализировала существующие решения, сформулировала гипотезы",
    "Архитектура: спроектировала логику интерфейса, проводила usability-тесты",
    "Презентация: защищала решения и предложения по улучшению продукта",
  ],
  metricsBefore: [
    { value: "20 мин", label: "Среднее время оплаты" },
    { value: "2% платежей", label: "Ошибочные оплаты" },
    { value: "~8% пользователей", label: "Обращаются в поддержку по вопросам оплаты" },
  ],
  problemLead:
    "До начала исследования было известно, что в сценарии оплаты присутствует высокая доля ошибок",
  problemBullets: [
    "Пользователи совершают ошибочные платежи при оплате счетов",
    "По одному клиенту формируется несколько счетов с разными реквизитами",
    "Процесс оплаты в отдельных случаях приводит к необходимости ручного исправления ошибок",
  ],
  problemAfter:
    "Так как у клиента несколько подключенных продуктов, каждый месяц по каждому из них выставляется счет на оплату",
  hypothesis:
    "Если пользователям приходится работать с несколькими счетами с разными реквизитами в одном сценарии оплаты, то это увеличивает вероятность ошибок, потому что требует ручной сверки и повышает когнитивную нагрузку.",
  researchLead:
    "Я провела глубинные интервью с бухгалтерами для проверки гипотезы — она подтвердилась",
  researchBullets: [
    "У счетов разные реквизиты и назначения платежей, что усложняет сверку",
    "Перед оплатой требуется ручная проверка данных",
    "В условиях отчетного периода цена ошибки и времени значительно возрастает",
  ],
  researchAfter:
    "В результате: основное время пользователей уходит не на саму оплату, а на подготовку и проверку платежа",
  limitations: [
    "Изменение биллинговой системы невозможно",
    "Счета формируются разными сервисами",
    "Решение должно работать поверх существующей архитектуры",
  ],
  solutionTitle: "ЕПД — это единый платежный документ",
  solutionCards: [
    {
      title: "Один платеж и одни реквизиты",
      text: "Все начисления объединены в один платёж — не нужно работать с разными реквизитами по каждому счету",
    },
    {
      title: "Фиксированный период выставления",
      text: "Документ формируется раз в месяц в один и тот же период — не нужно отслеживать разные даты по счетам",
    },
    {
      title: "Вся детализация — в одном документе",
      text: "Пользователь видит общую сумму и может посмотреть, из каких счетов она складывается — без переходов между разными документами",
    },
    {
      title: "Одно место получения и оплаты",
      text: "Документ приходит в личный кабинет, где его можно сразу проверить и оплатить",
    },
  ],
  transfer:
    "Спроектировала сценарии с состояниями и пояснениями. Также вела синхронные встречи с разработчиком, собрала документацию и обеспечила непрерывность передачи проекта.",
  metricsAfter: [
    { value: "5 мин", label: "Среднее время оплаты" },
    { value: "1% платежей", label: "Ошибочные платежи" },
    { value: "2% пользователей", label: "Обращаются в поддержку по вопросам оплаты" },
  ],
  results: [
    "Гипотеза подтвердилась: основная причина ошибок — необходимость работать с несколькими счетами и реквизитами в одном сценарии оплаты.",
    "Решение в виде ЕПД позволило упростить процесс оплаты, снизить количество ошибок и повысить прозрачность без изменения биллинговой системы",
  ],
  otherProjects: ["Другие проекты", "Другие проекты", "Другие проекты", "Другие проекты"],
  otherProjectTitle: "Hub — облачная система товароучёта",
} as const;

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
  return (
    <div className="mx-auto max-w-[720px]">
      <Link href="/hub" className="group block transition-transform duration-300 hover:-translate-y-0.5">
        <article className="space-y-6">
          <div
            className="aspect-[1.14/1] rounded-[28px] border border-line bg-[#d8d8d3] bg-cover bg-center transition-opacity duration-300 group-hover:opacity-95"
            style={{ backgroundImage: "none" }}
            aria-label={beelineCase.otherProjectTitle}
          />
          <div className="space-y-3.5 text-left">
            <div className="space-y-2.5">
              <h3 className="text-[1.72rem] font-medium leading-[1.02] tracking-[-0.04em] text-ink sm:text-[1.95rem]">
                {beelineCase.otherProjectTitle}
              </h3>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}

function SolutionCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[24px] border border-line bg-[rgba(255,255,255,0.56)] p-6">
      <h3 className="text-[1.34rem] font-medium leading-[1.18] tracking-[-0.03em] text-ink">
        {title}
      </h3>
      <p className="mt-4 text-[0.98rem] leading-[1.72] text-muted">{text}</p>
    </article>
  );
}

export default function BeelineCasePage() {
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
                <span>{beelineCase.backLabel}</span>
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
          <div className="main-description">
              
              <div>
                <h1 className="text-[3.2rem] font-medium leading-[0.96] tracking-[-0.06em] text-ink sm:text-[4rem] lg:text-[4.4rem]">
                  {beelineCase.title}
                </h1>
              </div>

              <div className="description-container">
              <div className="hub-text-column space-y-6 text-[1rem] leading-[1.66] text-muted sm:text-[1.06rem]">
                {beelineCase.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

            <div className="mt-12 sm:mt-14">
              <div aria-hidden="true" />
              <div className="hub-meta-grid">
                <div className="space-y-10">
                  {beelineCase.meta.map((item) => (
                    <div key={item.label}>
                      <p className="text-[0.9rem] leading-7 text-[#a5a3a2]">{item.label}</p>
                      <p className="mt-2 text-[1rem] leading-8 text-muted">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-[0.9rem] leading-7 text-[#a5a3a2]">Команда</p>
                  <ul className="mt-3 space-y-3">
                    {beelineCase.team.map((member) => (
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


          </div>
        </section>

        <section className="section-shell pt-16 sm:pt-20 lg:pt-24">
          <div className="hub-page-shell">
            <MediaImage src="/images/case2.png" alt="themes" className="hub-hero-image" />
          </div>
        </section>

        <CaseSection label="ЦЕЛЬ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <h2 className="hub-section-title max-w-[16ch] text-[2.02rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.76rem]">
            {beelineCase.goal}
          </h2>
        </CaseSection>

        <CaseSection label="МОЯ РОЛЬ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <h2 className="hub-section-title max-w-[19ch] text-[1.96rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.32rem] lg:text-[2.68rem]">
            {beelineCase.roleLead}
          </h2>

          <ul className="mt-9 max-w-[700px] space-y-4.5">
            {beelineCase.roleBullets.map((item) => (
              <li key={item} className="flex items-start gap-4 text-[0.96rem] leading-[1.72] text-muted">
                <span className="pt-[0.22rem] text-[0.95rem] text-[#b7b0ff]">✦</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection label="МЕТРИКИ ДО ЗАДАЧИ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-metrics-grid">
            {beelineCase.metricsBefore.map((item) => (
              <MetricCard key={item.label} {...item} />
            ))}
          </div>
        </CaseSection>

        <section className="section-shell pt-16 sm:pt-20 lg:pt-24">
          <div className="hub-page-shell">
            <div className="hub-image-stack">
              <MediaImage src="/images/lkbefore.png" alt="lk beeline b2b" />
            </div>
            <p className="text-center text-[0.95rem] leading-7 text-[#9a9896]">
             {beelineCase.problemAfter}
            </p>
          </div>
        </section>

        <CaseSection label="ПРОБЛЕМЫ НА СТАРТЕ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column">
            <h2 className="hub-section-title text-[2.02rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.7rem]">
              {beelineCase.problemLead}
            </h2>
            <StarBulletList items={beelineCase.problemBullets} className="mt-9" />
          </div>
        </CaseSection>

        <CaseSection label="ГИПОТЕЗЫ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column">
            <h2 className="hub-section-title text-[2.02rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.7rem]">
              {beelineCase.hypothesis}
            </h2>
          </div>
        </CaseSection>

        <CaseSection label="ИССЛЕДОВАНИЯ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column">
            <h2 className="hub-section-title text-[2.02rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.7rem]">
              {beelineCase.researchLead}
            </h2>
            <StarBulletList items={beelineCase.researchBullets} className="mt-9" />
            <p className="mt-9 text-[1rem] leading-[1.68] text-muted sm:text-[1.04rem]">
              {beelineCase.researchAfter}
            </p>
          </div>
        </CaseSection>

        <CaseSection label="ОГРАНИЧЕНИЯ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column">
            <StarBulletList items={beelineCase.limitations} />
          </div>
        </CaseSection>

        <CaseSection label="РЕШЕНИЕ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column">
            <h2 className="hub-section-title text-[2.18rem] font-normal leading-[1.34] tracking-[-0.05em] text-ink sm:text-[2.42rem] lg:text-[2.8rem]">
              {beelineCase.solutionTitle}
            </h2>
          </div>
        </CaseSection>

        <section className="section-shell pt-10 sm:pt-12">
          <div className="hub-page-shell">
            <div className="hub-grid">
              <div aria-hidden="true" />
              <div className="hub-solution-grid">
                {beelineCase.solutionCards.map((item) => (
                  <SolutionCard key={item.title} title={item.title} text={item.text} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <CaseSection label="ПЕРЕДАЧА В РАЗРАБОТКУ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column">
            <p className="text-[1rem] leading-[1.68] text-muted sm:text-[1.04rem]">{beelineCase.transfer}</p>
          </div>
        </CaseSection>

         <section className="section-shell pt-16 sm:pt-20 lg:pt-24">
          <div className="hub-page-shell">
            <MediaImage src="/images/lkbefore.png" alt="app" />
          </div>
        </section>

        <CaseSection label="РЕЗУЛЬТАТЫ" className="pt-24 sm:pt-28 lg:pt-[7.5rem]">
          <div className="hub-text-column">
            <div className="hub-metrics-grid">
              {beelineCase.metricsAfter.map((item) => (
                <MetricCard key={item.label} {...item} />
              ))}
            </div>

            <div className="mt-12 space-y-6 text-[1rem] leading-[1.7] text-muted sm:text-[1.04rem]">
              {beelineCase.results.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </CaseSection>

        <section className="section-shell pb-4 pt-24 sm:pt-28 lg:pt-[7rem]">
          <div className="hub-page-shell">
            <div className="hub-projects-marquee overflow-hidden">
              <div className="hub-projects-marquee__track flex w-max items-center gap-7 text-[3rem] font-medium leading-none tracking-[-0.06em] text-ink sm:text-[3.6rem] lg:text-[4rem]">
                <div className="flex items-center gap-7">
                  <span className="text-[#b7b0ff]">✦</span>
                  <span className="whitespace-nowrap">{beelineCase.otherProjects[0]}</span>
                  <span className="text-[#b7b0ff]">✦</span>
                  <span className="whitespace-nowrap">{beelineCase.otherProjects[1]}</span>
                </div>
                <div className="flex items-center gap-7" aria-hidden="true">
                  <span className="text-[#b7b0ff]">✦</span>
                  <span className="whitespace-nowrap">{beelineCase.otherProjects[2]}</span>
                  <span className="text-[#b7b0ff]">✦</span>
                  <span className="whitespace-nowrap">{beelineCase.otherProjects[3]}</span>
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

        .description-container {
        display: flex;
        flex-direction: column;
        }

        .main-description {
         display: flex;
         justify-content: space-between;
         gap: 120px;
        }

        .hub-page-shell {
          margin: 0 auto;
          width: 100%;
          max-width: 1160px;
        }

        .hub-grid {
          display: grid;
          grid-template-columns: 350px minmax(0, 1fr);
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
          grid-template-columns: minmax(220px, 1fr) minmax(220px, 1fr) 1fr;
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

        .hub-solution-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          max-width: 700px;
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

          .hub-solution-grid {
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
