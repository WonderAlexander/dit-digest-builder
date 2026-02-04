<script setup lang="ts">
import { computed } from 'vue'

const model = defineModel<string | undefined>()

const { fieldName, fieldCharacters } = defineProps<{
  fieldName: string
  fieldCharacters?: number
}>()

const autoGrow = (event: any) => {
  event.target.style.height = '5px'
  event.target.style.height = event.target.scrollHeight + 'px'
  if (event.target.value) {
    event.target.value = event.target.value.replace(/&nbsp;/g, '\u00A0') //
  }
}

const indicatorsColor = computed(() => {
  if (model && fieldCharacters) {
    return model.length > fieldCharacters ? '#ff0000' : '#000000'
  }
  return
})
</script>

<template>
  <div class="news__field">
    <label>
      <span class="news__field-title">{{ fieldName }}</span>
    </label>
    <textarea
      class="news__field-input customTextarea"
      v-model.trim="model"
      data-model="news.title"
      @input="autoGrow"
    >
    </textarea>
    <div v-show="fieldCharacters" class="news__field-indicators">
      <span class="indicators__chart" :style="{ color: indicatorsColor }"
        >{{ model?.length }} / {{ fieldCharacters }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.news__field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.news__field-title {
  display: inline-block;
  font-size: 18px;
  margin-bottom: 10px;
}

.news__field-input {
  border: 1px solid rgba(0, 0, 0, 10%);
  border-radius: 4px;
  padding: 4px;
}

.news__field-input:focus {
  outline: none;
}

.news__field-input:focus-visible {
  outline: none;
}

.customTextarea {
  resize: none;
  overflow: hidden;
  height: 26px;
}

.indicators__chart {
  color: #5d6570;
  opacity: 0.4;
}
</style>
