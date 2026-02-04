<script setup lang="ts">
import { computed } from 'vue'

const model = defineModel<string>()
const { title, characters } = defineProps<{
  title: string
  characters?: number
}>()

const autoGrow = (event: any) => {
  event.target.style.height = '5px'
  event.target.style.height = event.target.scrollHeight + 'px'
  if (event.target.value) {
    event.target.value = event.target.value.replace(/&nbsp;/g, '\u00A0') //
  }
}

const indicatorsColor = computed(() => {
  if (model && characters) {
    return model.length > characters ? '#ff0000' : '#000000'
  }
  return
})
</script>

<template>
  <div class="file__field">
    <label class="file__field-label" for="fileField">
      <span class="file__field-title">{{ title }}</span>
    </label>
    <textarea
      id="fileField"
      class="file__field-input customTextarea"
      v-model.trim="model"
      data-model="news.title"
      @input="autoGrow"
    />
    <div v-show="characters" class="news__field-indicators">
      <span class="indicators__chart" :style="{ color: indicatorsColor }"
        >{{ model?.length }} / {{ characters }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.file__field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.file__field-title {
  display: inline-block;
  font-size: 18px;
  margin-bottom: 10px;
}

.file__field-input {
  border: 1px solid rgba(0, 0, 0, 10%);
  border-radius: 4px;
  padding: 4px;
}

.file__field-input:focus {
  outline: none;
}

.file__field-input:focus-visible {
  outline: none;
}

.customTextarea {
  resize: none;
  overflow: hidden;
  height: 26px;
}
</style>
