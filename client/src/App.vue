<script setup lang="ts">
import File from './components/File/File.vue'
import Email from './components/Email/Email.vue'
import Resizer from './components/Utils/Resizer.vue'
import { ref } from 'vue'

const emailWidth = ref(10)
const fileWidth = ref(90)

const onMouseMove = (event: MouseEvent) => {
  const newWidth = (event.clientX / window.innerWidth) * 100
  if (newWidth < 10) {
    emailWidth.value = 10
    fileWidth.value = 90
  } else if (newWidth > 90) {
    emailWidth.value = 90
    fileWidth.value = 10
  } else {
    emailWidth.value = newWidth
    fileWidth.value = 100 - newWidth
  }
}

const onMouseUp = () => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
  document.body.style.overflow = 'auto'
}

const onMouseDown = () => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
  document.body.style.overflow = 'hidden' // Отключаем скроллинг
}

const restoreWidth = (componentName: string) => {
  if (componentName === 'email') {
    emailWidth.value = 50
    fileWidth.value = 50
  } else if (componentName === 'file') {
    emailWidth.value = 50
    fileWidth.value = 50
  }
}
</script>

<template>
  <div class="app__wrapper">
    <Email v-if="emailWidth > 10" class="app__email" :style="{ width: `${emailWidth}%` }" />
    <div class="placeholder placeholder__email" v-else @click="restoreWidth('email')">
      <span>Верстка</span>
    </div>
    <Resizer @mousedown="onMouseDown" style="cursor: ew-resize" />
    <File v-if="fileWidth > 10" class="app__file" :style="{ width: `${fileWidth}%` }" />
    <div class="placeholder placeholder__file" v-else @click="restoreWidth('file')">
      <span>Файл</span>
    </div>
  </div>
</template>

<style>
.placeholder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  text-align: center;
  border-radius: 12px;
}

.placeholder__email {
  background-color: #eaeaea;
}

.placeholder__file {
  background-color: #ffffff;
}

.app__wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
}
.app__email {
  background-color: #eaeaea;
  overflow: auto;
}
.app__file {
  background-color: #ffffff;
  overflow: auto;
}
</style>
