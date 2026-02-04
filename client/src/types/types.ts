export interface INews {
  id: string
  info: {
    headerImgLink?: { content: string }
    title?: { content: string, characters: number }
    text?: { content: string, characters: number }
    externalLink?: { content: string }
    portalLink?: { content: string }
    appLink?: { content: string }
    desktopImgLink?: { content: string }
    mobileImgLink?: { content: string }
    dateTag?: { content: string }
    formatTag?: { content: string }
    regTag?: { content: string }
    priceTag?: { content: string }
    chatTag?: { content: string }
  }
  persons?: IPerson[]
  isReversed?: boolean
}

interface IPerson {
  id: string
  name: string
  portalLink: string
}

export interface IRubrics {
  name: TRubricName
  component: any
  news: INews[]
  isTheme?: boolean
}

export type TNewsTemplates = {
  'Шапка': INews
  'Внешние новости': INews
  'Внутренние новости': INews
  'Достижения': INews
  'Спецматериал': INews
  'Разработки': INews
  'Таланты': INews
  'Новости комьюнити': INews
  'Комьюнити Баннер': INews
  'Вакансии Баннер': INews
  'Мероприятия': INews
  'Новые продукты и назначения': INews
  'Городские мероприятия': INews
  'Объявления': INews
}

export type TRubricName = keyof TNewsTemplates
