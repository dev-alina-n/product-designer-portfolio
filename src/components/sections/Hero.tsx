import { heroContent } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="section-shell flex items-end pb-8 pt-32 sm:pb-10 sm:pt-40 lg:pb-12 lg:pt-44 xl:pt-48"
    >
      <div className="max-w-[1120px]">
        <p className="max-w-[560px] text-[1.14rem] leading-[1.78] text-muted sm:text-[1.22rem]">
          {heroContent.intro}
        </p>
        <h1 className="mt-10 max-w-[980px] text-[4rem] font-medium leading-[0.9] tracking-tightest text-ink sm:mt-12 sm:text-[6.15rem] lg:text-[8.8rem] xl:text-[9.4rem]">
          {heroContent.title}
        </h1>
      </div>
    </section>
  );
}
