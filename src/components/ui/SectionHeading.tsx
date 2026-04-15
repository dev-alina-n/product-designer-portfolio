import { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  label: string;
  title: ReactNode;
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
};

export function SectionHeading({
  id,
  label,
  title,
  className = "",
  labelClassName = "",
  titleClassName = "",
}: SectionHeadingProps) {
  return (
    <div id={id} className={className}>
      <p className={["section-label", labelClassName].join(" ").trim()}>{label}</p>
      <h2
        className={[
          "mt-5 max-w-[12ch] text-[2.65rem] font-medium leading-[0.98] tracking-tightest text-ink sm:text-[3.3rem] lg:text-[4.15rem]",
          titleClassName,
        ]
          .join(" ")
          .trim()}
      >
        {title}
      </h2>
    </div>
  );
}
