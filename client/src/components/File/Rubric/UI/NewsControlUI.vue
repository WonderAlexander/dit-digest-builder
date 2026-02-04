<script setup lang="ts">
import { directive as vTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import type { IRubrics } from '@/types/types.ts'
import type { TNews } from '@/types/news.ts'

const { rubricNews, news, newsIndex } = defineProps<{
  rubricNews: TNews[]
  news: any
  newsIndex: number
}>()

const emit = defineEmits<{
  (event: 'move-news-up'): void
  (event: 'move-news-down'): void
  (event: 'reverse-news'): void
  (event: 'delete-news'): void
}>()
</script>

<template>
  <div class="rubric__news-control">
    <div class="control__arrows">
      <button
        v-if="newsIndex !== 0"
        class="control__btn"
        @click="emit('move-news-up')"
        v-tippy="'Переместить новость выше'"
      >
        <img
          class="control__btn__icon"
          src="https://pic.mos.ru/srv/images/Digest25/ChevronUp.png"
          alt="Переместить новость выш"
        />
      </button>
      <button
        v-if="newsIndex !== rubricNews.length - 1"
        class="control__btn"
        @click="emit('move-news-down')"
        v-tippy="'Переместить новость ниже'"
      >
        <img
          class="control__btn__icon"
          src="https://pic.mos.ru/srv/images/Digest25/ChevronDown.png"
          alt="Переместить новость ниже"
        />
      </button>
    </div>
    <button
      v-if="news.isReversed !== undefined"
      class="control__btn"
      @click="emit('reverse-news')"
      v-tippy="'Изменить вид новости'"
    >
      <img
        class="control__btn__icon"
        src="https://pic.mos.ru/srv/images/newEmails/assets/exchange%20(1).png"
        alt="Изменитть вид новости"
      />
    </button>
    <button class="control__btn" @click="emit('delete-news')" v-tippy="'Удалить новость'">
      <img
        class="control__btn__icon"
        src="https://pic.mos.ru/srv/images/Digest25/TrashCan.png"
        alt="Удалить новость"
      />
    </button>
  </div>
</template>

<style scoped>
.rubric__news-control {
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.control__arrows {
  display: flex;
  flex-direction: column;
}

.control__btn {
  display: inline-block;
  width: 32px;
  height: 32px;

  cursor: pointer;
  text-align: center;

  background-color: transparent;
  outline: none;
  border: none;
}

.control__btn__icon {
  width: 24px;
  height: 24px;
}
</style>
