import { nanoid } from 'nanoid'
import type { TNewsTemplates } from '@/types/types.ts'

export const newsTemplates: TNewsTemplates = {
  'Шапка': {
    id: nanoid(),
    info: {
      headerImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/digest-header-placeholder.png',
      },
    },
  },
  'Внешние новости': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок новости',
        characters: 168,
      },
      externalLink: {
        content: 'Внешняя ссылка',
      },
    },
  },
  'Внутренние новости': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок новости',
        characters: 82,
      },
      text: {
        content: 'Текст новости',
        characters: 192,
      },
      desktopImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/d-placeholder-1.png',
      },
      mobileImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/live-mobile-placeholder.png',
      },
      portalLink: {
        content: 'Ссылка на портал',
      },
      appLink: {
        content: 'Ссылка на приложение',
      },
    },
  },
  'Достижения': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок новости',
        characters: 82,
      },
      text: {
        content: 'Текст новости',
        characters: 192,
      },
      desktopImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/live-mobile-placeholder.png',
      },
      portalLink: {
        content: 'Ссылка на портал',
      },
      appLink: {
        content: 'Ссылка на приложение',
      },
    },
  },
  'Спецматериал': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок новости',
        characters: 82,
      },
      text: {
        content: 'Текст новости',
        characters: 192,
      },
      desktopImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/live-mobile-placeholder.png',
      },
      portalLink: {
        content: 'Ссылка на портал',
      },
      appLink: {
        content: 'Ссылка на приложение',
      },
    },
  },
  'Разработки': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок новости',
        characters: 88,
      },
      text: {
        content: 'Текст новости',
        characters: 155,
      },
      desktopImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/services_desktop_placeholder.png',
      },
      mobileImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/live-mobile-placeholder.png',
      },
      portalLink: {
        content: 'Ссылка на портал',
      },
      appLink: {
        content: 'Ссылка на приложение',
      },
    },
    isReversed: false,
  },
  'Таланты': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок новости',
        characters: 88,
      },
      text: {
        content: 'Текст новости',
        characters: 155,
      },
      desktopImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/services_desktop_placeholder.png',
      },
      mobileImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/live-mobile-placeholder.png',
      },
      portalLink: {
        content: 'Ссылка на портал',
      },
      appLink: {
        content: 'Ссылка на приложение',
      },
    },
    isReversed: false,
  },
  'Новости комьюнити': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок новости',
        characters: 90,
      },
      text: {
        content: 'Текст новости',
        characters: 130,
      },
      chatTag: {
        content: 'Название чата',
      },
      externalLink: {
        content: 'Внешняя ссылка',
      },
    },
  },
  'Мероприятия': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок',
        characters: 158,
      },
      dateTag: {
        content: '31 февраля',
      },
      portalLink: {
        content: 'Ссылка на портал',
      },
      appLink: {
        content: 'Ссылка на приложение',
      },
    },
    persons: [{ id: nanoid(), name: 'ФИО', portalLink: 'Cсылка на портал' }],
  },
  'Новые продукты и назначения': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок новости',
        characters: 90,
      },
      text: {
        content: 'Текст новости',
        characters: 120,
      },
      desktopImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/naznachenia_placeholder%201.png',
      },
      portalLink: {
        content: 'Ссылка на портал',
      },
      appLink: {
        content: 'Ссылка на приложение',
      },
    },
  },
  'Городские мероприятия': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок',
        characters: 120,
      },
      dateTag: {
        content: '31 февраля',
      },
      formatTag: {
        content: 'Формат',
      },
      regTag: {
        content: 'Регистрация',
      },
      priceTag: {
        content: 'Стоимость',
      },
      externalLink: {
        content: 'Внешняя ссылка',
      },
    },
  },
  'Объявления': {
    id: nanoid(),
    info: {
      title: {
        content: 'Заголовок новости',
        characters: 99,
      },
      text: {
        content: 'Текст новости',
        characters: 196,
      },
      desktopImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/d-placeholder-1.png',
      },
      mobileImgLink: {
        content: 'https://pic.mos.ru/srv/images/Digest25/live-mobile-placeholder.png',
      },
      portalLink: {
        content: 'Ссылка на портал',
      },
      appLink: {
        content: 'Ссылка на приложение',
      },
    },
  },
  'Комьюнити Баннер': {
    id: nanoid(),
    info: {
      portalLink: {
        content: 'https://t.me/DITCommunityBot',
      },
      appLink: {
        content: 'https://t.me/DITCommunityBot',
      },
    },
  },
  'Вакансии Баннер': {
    id: nanoid(),
    info: {
      portalLink: {
        content: 'https://staff.mos.ru/mira/#&id=0&type=rootinternaljoblist',
      },
      appLink: {
        content: 'https://staff.mos.ru/mira/#&id=0&type=rootinternaljoblist',
      },
    },
  },
}
