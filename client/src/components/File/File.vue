<script setup lang="ts">
import { useDigestStore } from '@/stores/digest.ts'
import Rubric from '@/components/File/Rubric/Rubric.vue'
import type { IRubrics } from '@/types/types.ts'

const digest = useDigestStore()

const handleResetRubrics = () => digest.resetRubrics()
</script>

<template>
  <div class="file">
    <section class="rubrics">
      <h2>Рубрики</h2>
      <Rubric
        :rubrics="digest.rubrics"
        @set-theme="(rubric: IRubrics) => digest.setRubricTheme(rubric)"
      />
      <button class="download__btn" @click="handleResetRubrics">Сбросить верстку</button>
    </section>
  </div>
</template>

<style scoped>
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

.control__arrows-item img {
  width: 24px;
  height: 24px;
}

.control__can img {
  width: 24px;
  height: 24px;
}

.rubric__news input {
  width: 100%;
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
