export const siteMeta = {
  name: "Алина Нурмамедова",
  email: "alina.nurmamedova@bk.ru",
  telegram: "https://t.me/port7070",
  cv: "/files/Нурмамедова_Алина_CV.pdf",
};

export const navigationItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Кейсы", href: "#cases" },
  { label: "CV", href: siteMeta.cv, disabled: false, external: true },
  { label: "Tg", href: siteMeta.telegram, external: true },
];

export const heroContent = {
  intro:
    "Более 3 лет создаю web-сервисы в сфере B2B. Провожу UX-исследования и работаю с метриками",
  title: "Product Designer",
};

export const cases = [
  {
    category: "SaaS",
    title: "HUB — облачная система товароучёта",
    description: "Спроектировала SaaS-сервис для продавцов на маркетплейсах, который заменил внешнее решение и стал частью экосистемы. Это дало рост LTV и вдвое снизило нагрузку на техподдержку.",
    href: "/hub",
    imagePath: "/images/case1.webp",
  },
  {
    category: "B2B",
    title: "Личный кабинет Beeline B2B",
    description: "Спроектировала ключевой сценарий работы с платежами в B2B-кабинете , объединив разрозненные счета и договоры в единый платежный документ. Это снизило количество ошибок и уменьшило нагрузку на техподдержку.",
    href: "/beeline",
    imagePath: "/images/case2.png",
  },
];

export const aboutContent = {
  title: "Обо мне",
  heading: "Привет! Я Алина, Продуктовый дизайнер",
  paragraphs: [
    "Более 3 лет разрабатываю веб-сервисы",
    "Работаю в кросс–функциональных командах, включающих менеджеров, разработчиков, дизайнеров, бизнес. Провожу UX–исследования, анализирую метрики, выдвигаю гипотезы и влияю на бизнес, не забывая о потребностях пользователей.",
  ],
  imagePath: "/images/Photo.jpg",
};

export const experienceItems = [
  {
    dates: "2024 — настоящее время",
    role: "Product Designer",
    company: "Beeline",
  },
  {
    dates: "2022 — 2024",
    role: "Product Designer",
    company: "Topseller",
  },
];

export const contactLinks = [
  { label: "Написать", href: siteMeta.telegram, prominent: true },
  { label: "Mail", href: `mailto:${siteMeta.email}` },
  { label: "Telegram", href: siteMeta.telegram },
];
