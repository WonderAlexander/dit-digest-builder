<script setup lang="ts">
import FileField from '@/components/File/Fields/UI/FileInput.vue'
import type { IPerson } from '@/types/news.ts'

const { persons } = defineProps<{
  persons: IPerson[]
}>()

const emit = defineEmits<{
  (event: 'add-person'): void
  (event: 'delete-person', person: IPerson): void
}>()
</script>

<template>
  <section class="persons">
    <div class="persons__header">
      <h6 class="persons__header-title">Персоны:</h6>
      <button class="persons__header-btn" @click="emit('add-person')">+</button>
    </div>
    <div class="person__item" v-for="person in persons" :key="person.id">
      <FileField title="ФИО" v-model="person.name" />
      <FileField title="Ссылка на портале" v-model="person.portalLink" />
      <button @click="emit('delete-person', person)">Delete</button>
    </div>
  </section>
</template>

<style scoped>
.persons__header {
  display: flex;
}
.person__item {
  display: flex;
}
</style>
