import Image from "next/image";
import { navigationItems, siteMeta } from "@/data/site";

export function Header() {
  const centerItems = navigationItems.filter(
    (item) => item.label === "Обо мне" || item.label === "Кейсы",
  );
  const rightItems = navigationItems.filter(
    (item) => item.label === "CV" || item.label === "Tg",
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4 sm:pt-5">
        <div className="soft-card flex min-h-[58px] flex-col gap-3 px-4 py-3 shadow-card sm:px-5 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:px-6 md:py-[0.95rem]">
          <div className="flex min-w-0 items-center gap-3 self-start md:self-auto">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-line bg-[#d8d8d3]">
              <Image
                src="/images/Photo.jpg"
                alt="Мини-портрет Алины Нурмамедовой"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <div className="min-w-0">
              <p
                className="block truncate text-[0.92rem] font-medium tracking-[0.02em] text-ink"
              >
                {siteMeta.name}
              </p>
              <a
                href={`mailto:${siteMeta.email}`}
                className="mt-1 block truncate text-[0.74rem] leading-none text-muted transition-colors hover:text-ink"
              >
                {siteMeta.email}
              </a>
            </div>
          </div>

          <nav
            aria-label="Навигация по разделам"
            className="w-full overflow-x-auto md:w-auto md:justify-self-center"
          >
            <ul className="flex min-w-max items-center gap-4 text-[0.88rem] text-ink sm:gap-5">
              {centerItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    aria-disabled={item.disabled || undefined}
                    className={[
                      "transition-opacity hover:opacity-60",
                      item.disabled ? "pointer-events-none opacity-35" : "",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            aria-label="Внешние ссылки"
            className="w-full overflow-x-auto md:w-auto md:justify-self-end"
          >
            <ul className="flex min-w-max items-center gap-4 text-[0.88rem] text-ink sm:gap-5">
              {rightItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    aria-disabled={item.disabled || undefined}
                    className={[
                      "transition-opacity hover:opacity-60",
                      item.disabled ? "pointer-events-none opacity-35" : "",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
