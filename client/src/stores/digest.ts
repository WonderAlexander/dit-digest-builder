import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { newsTemplates } from '@/templates/newsTemplates.ts'
import { nanoid } from 'nanoid'
import { io } from 'socket.io-client'
import type { IRubrics } from '@/types/types.ts'
import type { IEvents, ILST, TNewsItems } from '@/types/news.ts'

export const useDigestStore = defineStore('digest', () => {
  const rubrics = ref<IRubrics[]>([])
  const socket = io('http://localhost:3000')

  let isSyncing: boolean = false

  socket.on('connect', () => {
    console.log('Подключено к Socket.IO серверу')
  })

  socket.on('rubricsUpdate', (data) => {
    const updatedRubrics = JSON.parse(data)
    if (JSON.stringify(updatedRubrics) !== JSON.stringify(rubrics.value)) {
      rubrics.value = updatedRubrics
    }
  })

  // function addNews(rubric: IRubrics) {
  //   const newsTemplate = newsTemplates[rubric.name]
  //
  //   if (!newsTemplate) {
  //     console.error('Неизвестная рубрика')
  //     return
  //   }
  //
  //   const newNews = { ...newsTemplate, id: nanoid() }
  //   rubric.news.push(newNews)
  // }
  function addNews(rubric: IRubrics) {
    const newsTemplate = newsTemplates[rubric.name]

    if (!newsTemplate) {
      console.error('Неизвестная рубрика')
      return
    }

    // Создаем полную независимую копию всех вложенных объектов
    const newNews = { ...structuredClone(newsTemplate), id: nanoid() }

    rubric.news.push(newNews)
  }

  function moveNews(rubricIndex: number, itemIndex: number) {
    const newsArray = rubrics.value[rubricIndex].news

    if (itemIndex > 0) {
      const itemToMove = newsArray[itemIndex]
      newsArray.splice(itemIndex, 1)
      newsArray.splice(itemIndex - 1, 0, itemToMove)
    } else if (itemIndex < newsArray.length - 1) {
      const itemToMove = newsArray[itemIndex]
      newsArray.splice(itemIndex, 1)
      newsArray.splice(itemIndex + 1, 0, itemToMove)
    } else {
      console.error('Индекс находится вне допустимого диапазона')
    }
  }

  function removeNews(rubric: IRubrics, news: TNewsItems) {
    rubric.news = rubric.news.filter((item) => item.id !== news.id)
  }

  function setRubricTheme(rubric: IRubrics) {
    rubric.isTheme = !rubric.isTheme
  }

  function reverseNews(news: ILST) {
    news.isReversed = !news.isReversed
  }

  function addPerson(news: IEvents) {
    const newPerson = {
      id: nanoid(),
      name: 'ФИО',
      portalLink: 'Ссылка на портал',
    }
    news.persons.push(newPerson)
  }

  function deletePerson(id: string, news: IEvents) {
    news.persons = news.persons.filter((item) => item.id !== id)
  }

  function resetRubrics() {
    rubrics.value = []
    const dataToSend = JSON.stringify(rubrics.value)
    socket.emit('rubricsUpdate', dataToSend)
  }

  const syncWithServer = () => {
    if (!isSyncing) {
      isSyncing = true

      const dataToSend = JSON.stringify(rubrics.value)
      socket.emit('rubricsUpdate', dataToSend)

      setTimeout(() => {
        isSyncing = false
      }, 100)
    }
  }

  watch(rubrics, syncWithServer, { deep: true })

  return {
    rubrics,
    addNews,
    moveNews,
    removeNews,
    setRubricTheme,
    reverseNews,
    addPerson,
    deletePerson,
    resetRubrics,
  }
})
