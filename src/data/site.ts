export const siteMeta = {
  name: "Алина Нурмамедова",
  email: "alina.nurmamedova@bk.ru",
  telegram: "https://t.me/localhost_1337",
  cv: "#",
};

export const navigationItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Кейсы", href: "#cases" },
  { label: "CV", href: siteMeta.cv, disabled: false },
  { label: "Tg", href: siteMeta.telegram, external: true },
];

export const heroContent = {
  intro:
    "Более 3 лет создаю web-сервисы в сфере B2C. Провожу UX-исследования и работаю с метриками",
  title: "Product Designer",
};

export const cases = [
  {
    year: "2025",
    category: "B2B",
    title: "Кейс 1",
    description: "Описание проекта будет добавлено позже.",
    href: "#",
    imagePath: "/images/case-1-placeholder.jpg",
  },
  {
    year: "2024",
    category: "SaaS",
    title: "Кейс 2",
    description: "Описание проекта будет добавлено позже.",
    href: "#",
    imagePath: "/images/case-2-placeholder.jpg",
  },
];

export const aboutContent = {
  title: "Обо мне",
  heading: "Привет! Я Алина, Продуктовый дизайнер",
  paragraphs: [
    "Более 3 лет разрабатываю веб-сервисы",
    "Работаю в кросс–функциональных командах, включающих менеджеров, разработчиков, дизайнеров, ,бизнес. Провожу UX–исследования, анализирую метрики, выдвигаю гипотезы и влияю на бизнес, не забывая о потребностях пользователей.",
  ],
  imagePath: "/images/Photo.jpg",
};

export const experienceItems = [
  {
    dates: "2025 — настоящее время",
    role: "Product Designer",
    company: "Company Name",
  },
  {
    dates: "2023 — 2025",
    role: "Product Designer",
    company: "Company Name",
  },
  {
    dates: "2022 — 2023",
    role: "UX/UI Designer",
    company: "Company Name",
  },
];

export const contactLinks = [
  { label: "Написать", href: siteMeta.telegram, prominent: true },
  { label: "Mail", href: `mailto:${siteMeta.email}` },
  { label: "Telegram", href: siteMeta.telegram },
];
