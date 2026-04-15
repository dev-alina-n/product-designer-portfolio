# Portfolio Website

Минималистичное портфолио на `Next.js` (App Router), `TypeScript` и `Tailwind CSS`, собранное по структуре и визуальному ритму референса.

## Структура

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
      Footer.tsx
      Header.tsx
    sections/
      About.tsx
      Cases.tsx
      Contacts.tsx
      Experience.tsx
      Hero.tsx
    ui/
      SectionHeading.tsx
  data/
    site.ts
public/
  files/
  images/
```

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`

## Где заменить кейсы позже

- Данные карточек лежат в `src/data/site.ts`
- Описания кейсов обновляются в массиве `cases`
- Пути к изображениям кейсов тоже обновляются там же
- Если файлов `/images/case-1-placeholder.jpg` и `/images/case-2-placeholder.jpg` нет, карточки уже показывают нейтральные серые блоки

## Деплой

Проект готов для деплоя на Vercel без дополнительной настройки.
