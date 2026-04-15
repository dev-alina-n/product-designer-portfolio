import { siteMeta } from "@/data/site";

export function Footer() {
  return (
    <footer className="section-shell pb-6 pt-2">
      <div className="flex flex-col gap-2 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{siteMeta.name}</p>
        <p>{siteMeta.email}</p>
      </div>
    </footer>
  );
}
