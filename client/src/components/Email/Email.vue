<script setup lang="ts">
import { useDigestStore } from '@/stores/digest.ts'
import { ref } from 'vue'
import Footer from '@/components/Email/Rubrics/Footer.vue'
import { useEmailHTML } from '@/composables/useEmailHTML.ts'
import { useEmailComponent } from '@/composables/useEmailComponent.ts'

const digest = useDigestStore()
const emailWrapper = ref(null)

function handleDownloadHTML() {
  useEmailHTML(emailWrapper.value)
}
</script>

<template>
  <div class="email_wrapper">
    <div ref="emailWrapper">
      <table
        class="body"
        border="0"
        cellspacing="0"
        cellpadding="0"
        style="
          margin: 0;
          background: #eaeaea !important;
          border-collapse: collapse !important;
          color: #0d0802;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-weight: 400;
          hyphens: none;
          line-height: 1.5;
          margin: 0;
          padding: 0;
          text-align: center;
          vertical-align: top;
          width: 100%;
        "
      >
        <tbody>
          <tr>
            <td height="20" style="line-height: 20px"></td>
          </tr>
          <tr style="padding: 0; text-align: center; vertical-align: top">
            <td class="center" align="center" valign="top">
              <center data-parsed="" style="min-height: 600px; width: 100%">
                <div v-for="rubric in digest.rubrics">
                  <!--Функция useEmailComponent возвращает компонент email-верстки по названию рубрики-->
                  <Component
                    v-if="rubric.news.length !== 0"
                    :is="useEmailComponent(rubric.component)"
                    :news="rubric.news"
                    :isTheme="rubric.isTheme"
                  />
                </div>
                <Footer />
              </center>
            </td>
          </tr>
          <tr>
            <td height="20" style="line-height: 20px"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="download__btns">
      <button class="download__btn" @click="handleDownloadHTML">Скачать верстку</button>
    </div>
  </div>
</template>

<style scoped>
.email_wrapper {
  background-color: #eaeaea !important;
}

.button__group button {
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: #e51740;
  color: #ffffff;
  cursor: pointer;
}

.button__group button {
  background-color: #d51238;
}

.email_wrapper {
  text-align: center;
  overflow-y: scroll;
  position: relative;
}

.download__btns {
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-30%);
}

.download__btn {
  transform: translateX(-50%);
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 10px 0;
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
}
</style>
