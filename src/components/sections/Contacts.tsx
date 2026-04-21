import { contactLinks } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contacts() {
  const primaryLink = contactLinks.find((item) => item.prominent);
  const secondaryLinks = contactLinks.filter((item) => !item.prominent);

  return (
    <section className="section-shell pb-24 pt-20 sm:pb-32 sm:pt-28 lg:pb-36 lg:pt-32">
      <div className="soft-card rounded-[36px] px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-[4.5rem]">
        <SectionHeading
          id="contacts"
          label="Контакты"
          title="Ваш проект — мой следующий успешный кейс"
          className="text-center"
          labelClassName="text-center"
          titleClassName="mx-auto max-w-[16ch] text-[2.15rem] font-normal leading-[1.04] sm:text-[2.7rem] lg:text-[3.15rem]"
        />

        <div className="mt-12 flex flex-col items-center">
          {primaryLink ? (
            <a
              id="btn-root"
              href={primaryLink.href}
              target={primaryLink.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={primaryLink.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="shimmer-button rounded-full text-[0.95rem] text-ink"
            >
              <span id="btn" className="shimmer-button__content">{primaryLink.label}</span>
            </a>
          ) : null}

          <div className="mt-6 flex flex-col items-center gap-3 text-[0.95rem] text-ink sm:flex-row sm:gap-6">
            {secondaryLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="transition-opacity hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
