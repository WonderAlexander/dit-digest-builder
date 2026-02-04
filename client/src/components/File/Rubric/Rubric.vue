<script setup lang="ts">
import Switcher from '@/components/File/Rubric/UI/Switcher.vue'
import { directive as vTippy } from 'vue-tippy'
import type { IRubrics } from '@/types/types.ts'
import NewsControlUI from '@/components/File/Rubric/UI/NewsControlUI.vue'
import { useDigestStore } from '@/stores/digest.ts'
import type { IPerson, TNews } from '@/types/news.ts'
import FileTest from '@/components/File/Fields/FileField.vue'

const digestStore = useDigestStore()

const { rubrics } = defineProps<{
  rubrics: IRubrics
}>()

const emit = defineEmits<{
  (event: 'set-theme', rubric: IRubrics): void
}>()

const handleAddNews = (selectedRubric: IRubrics) => {
  digestStore.addNews(selectedRubric)
}

function handleMoveNewsUp(rubricIndex: number, index: number) {
  digestStore.moveNews(rubricIndex, index - 1)
}

function handleMoveNewsDown(rubricIndex: number, index: number) {
  digestStore.moveNews(rubricIndex, index + 1)
}

function handleReverseNews(selectedNews: TNews) {
  digestStore.reverseNews(selectedNews)
}

function handleDeleteNews(selectedRubric: IRubrics, selectedNews: TNews) {
  digestStore.removeNews(selectedRubric, selectedNews)
}
</script>

<template>
  <div class="rubric" v-for="(rubric, rubricIndex) in rubrics" :key="rubric.name">
    <div class="rubric__header">
      <div class="rubric__header-title">
        <h3 class="rubric__title">{{ rubric.name }}</h3>
        <button
          v-if="rubric.name !== 'Шапка'"
          class="rubric__news-add"
          @click="handleAddNews(rubric)"
          v-tippy="'Добавить новость в рубрику'"
        >
          +
        </button>
      </div>
      <Switcher
        v-if="rubric.isTheme !== undefined && rubric.news.length >= 1"
        text="серый фон"
        :handleSwitchChange="() => emit('set-theme', rubric)"
      />
    </div>

    <div class="rubric__news-wrapper" v-for="(news, index) in rubric.news" :key="news.id">
      <div class="rubric__news">
        <FileTest
          :news="news"
          @add-person="digestStore.addPerson(news)"
          @delete-person="(person: IPerson) => digestStore.deletePerson(person.id, news)"
        />
      </div>

      <!-- Управление новостью-->
      <NewsControlUI
        v-if="rubric.name !== 'Шапка'"
        :rubricNews="rubric.news"
        :news="news"
        :newsIndex="index"
        @move-news-up="handleMoveNewsUp(rubricIndex, index)"
        @move-news-down="handleMoveNewsDown(rubricIndex, index)"
        @reverse-news="handleReverseNews(news)"
        @deleteNews="handleDeleteNews(rubric, news)"
      />
    </div>
  </div>
</template>

<style scoped>
.rubric__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rubric__title {
  color: rgb(93, 101, 112);
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  font-style: normal;
  text-align: left;
  overflow-wrap: normal;
  margin-right: 10px;
}

.rubric__news-add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  background-color: #e51740;
  color: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  font-weight: 100;
}

.rubric__news-wrapper {
  display: flex;
  align-items: center;
}

.rubric__news {
  width: 90%;
  padding: 20px;
  margin-bottom: 10px;
  border-width: 1px;
  border-radius: 20px;
  background-color: #ffffff;
  background-position: center center;
  border-color: #e7e9f2;
  border-style: solid;
  box-shadow: 3px 5px 16px 0 rgba(184, 197, 218, 0.5);
}

textarea {
  all: unset;
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  outline: 1px solid rgba(0, 0, 0, 10%);
  padding: 4px;
}

input {
  all: unset;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;
  appearance: none;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;
}

button::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.person__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.file {
  padding: 20px 30px;
  font-family: Arial, Helvetica, sans-serif;
}

.rubrics {
  display: flex;
  flex-direction: column;
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #222;
}

.rubric__news-wrapper {
  display: flex;
  align-items: center;
}

.rubric__news {
  width: 90%;
  padding: 20px;
  margin-bottom: 10px;
  border-width: 1px;
  border-radius: 20px;
  background-color: #ffffff;
  background-position: center center;
  border-color: #e7e9f2;
  border-style: solid;
  box-shadow: 3px 5px 16px 0 rgba(184, 197, 218, 0.5);
}

.rubric__news-control {
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.rubric__header-title {
  display: flex;
  align-items: center;
}

.control__arrows {
  display: flex;
  flex-direction: column;
}

.control__arrows-item {
  width: 32px;
  height: 32px;

  cursor: pointer;

  text-align: center;
}

.control__arrows-item img {
  width: 24px;
  height: 24px;
}

.control__can {
  cursor: pointer;
}

.control__can img {
  width: 24px;
  height: 24px;
}

.rubric__news input {
  width: 100%;
}

.news__field {
  margin-bottom: 20px;
}

.news__field-input {
  border: 1px solid rgba(0, 0, 0, 10%);
  border-radius: 4px;
  padding: 4px;
}

.news__field-title {
  display: inline-block;
  font-size: 18px;
  margin-bottom: 10px;
}

.news__field-indicators {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.indicators__chart {
  color: #5d6570;
  opacity: 0;
}

.visible {
  opacity: 0.4;
}

.news__fields-section {
  margin-bottom: 10px;
}

.news__fields-section h4 {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 8px;
}

.news__fields-section span {
  font-size: 14px;
}

.news__fields-columns {
  display: flex;
  justify-content: space-between;
}

.columns-2 {
  width: 45%;
}

.columns-3 {
  width: 100%;
  min-width: 30%;
  max-width: 45%;
}

.customTextarea {
  resize: none;
  overflow: hidden;
  height: 26px;
}

.file__separator {
  width: 100%;
  height: 1px;
  background-color: #0a0a0a;
  opacity: 0.1;
}

.download__btn {
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 10px auto;
  height: 50px;
  border-width: 0;
  background-color: #e51740;
  color: White;
  font-family: Arial, sans-serif;
  font-weight: normal;
  text-decoration: none;
  cursor: pointer;
  font-size: 100%;
  padding: 8px 12px;
  border-radius: 12px;
  width: 200px;
}
</style>
