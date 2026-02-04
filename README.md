# DigestBuilder — конструктор Email рассылки еженедельного дайджеста


## Краткое описание
Веб‑приложение для создания верстки рассылки еженедельного дайджеста новостей. Приложение решает задачу автоматизации процесса верстки HTML рассылки для команды внутренних коммуникаций.

## Функционал
* Добавление/удаление фиксированных рубрик
* Добавление/удаление новостей в рубриках
* Редактирование контента новостей


## Ограничения
* Тёмная тема не поддерживается
* Изображения редактируются заменой ссылок на внутренний ресурс (нет доступного API)
* Верстка новостей фиксирована и не предполагает изменение в приложении
* Фиксированный список рубрик

## Архитектура
**Стек:**
* Vue 3 (Composition API)
* TypeScript/JavaScript
* Pinia <br>
* Node js (express)
* WebSocket

## Запуск локально
```sh
git clone https://github.com/WonderAlexander/dit-digest-builder
cd dit-digest-builder
cd dit-digest-builder server
npm i
npm node server
cd dit-digest-builder client
npm i
npm npm run dev
```
## Контакты
Александр Болдин — Разработчик и верстальщик
* [GitHub](https://github.com/WonderAlexander)
* [Telegram](https://t.me/wonderalexandrr)
* [Gmail](mailto:zyzya97@gmail.com)
