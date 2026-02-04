<script setup lang="ts">
import FileField from '@/components/File/Fields/UI/FileInput.vue'
import FilePersons from '@/components/File/Fields/UI/FilePersons.vue'

const { news } = defineProps<{
  news: {
    info: Record<string, any>
    persons: IPerson[]
  }
}>()

const emit = defineEmits<{
  (event: 'add-person'): void
  (event: 'delete-person', person: IPerson): void
}>()

enum FieldsTitle {
  title = 'Заголовок новости',
  externalLink = 'Внешняя ссылка',
  text = 'Текст новости',
  desktopImgSrc = 'Ссылка на картинку (десктоп)',
  mobileImgSrc = 'Ссылка на картинку (телефон)',
  headerImgSrc = 'Ссылка на картинку шапки',
  portalLink = 'Ссылка на портале',
  appLink = 'Ссылка в приложении',
  dateTag = 'Дата мероприятия',
  formatTag = 'Формат',
  priceTag = 'Стоимость',
  regTag = 'Регистрация',
  chatTag = 'Название чата',
  headerImgLink = 'Ссылка на картинку шапки'
}

const getFieldTitle = (key: string | number): string => {
  const stringKey = String(key)
  return FieldsTitle[stringKey as keyof typeof FieldsTitle] || stringKey
}
</script>

<template>
  <div v-for="(value, key) in news.info" :key="key">
    <FileField
      :title="getFieldTitle(key)"
      v-model="value.content"
      :characters="value.characters || ''"
    />
  </div>
  <FilePersons
    v-if="news.persons"
    :persons="news.persons"
    @add-person="emit('add-person')"
    @delete-person="(person: IPerson) => emit('delete-person', person)"
  />
</template>
