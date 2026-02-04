<script setup lang="ts">
const props = defineProps(['news'])
</script>

<template>
  <div v-for="newsItem in news" :key="newsItem.id">
    <!-- Комьюнити баннер =================================================================================================================================================================================================-->
    <table
      bgcolor="#FFFFFF"
      class="footer__width"
      border="0"
      cellspacing="0"
      cellpadding="0"
      align="center"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        mso-table-bspace: 0pt;
        mso-table-tspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 0;
        margin: 0;
        border-collapse: collapse;
        border-spacing: 0;
        mso-table-rspace: 0pt;
        mso-table-bspace: 0pt;
        mso-table-lspace: 0pt;
        float: none;
        text-align: center;
        vertical-align: top;
        border: 0;
        outline: 0;
        width: 600px;
      "
    >
      <tbody>
        <tr style="padding: 0; vertical-align: top; text-align: left">
          <td
            style="
              -moz-hyphens: none;
              -webkit-hyphens: none;
              margin: 0;
              border-collapse: collapse !important;
              color: #0a0a0a;
              font-family: Arial, sans-serif;
              hyphens: none;
              margin: 0;
              padding: 0;
              text-align: left;
              vertical-align: top;
              word-wrap: break-word;
            "
          >
            <table
              border="0"
              cellspacing="0"
              cellpadding="0"
              class="row collapse"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                mso-table-bspace: 0pt;
                mso-table-tspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                mso-table-bspace: 0pt;
                mso-table-tspace: 0pt;
                display: block;
                padding: 0;
                position: relative;
                width: 100%;
                border: 0;
                outline: 0;
              "
            >
              <tbody>
                <tr style="padding: 0; text-align: left; vertical-align: top">
                  <th
                    class="small-12 large-12 columns first last"
                    style="
                      margin: 0 auto;
                      color: #0d0802;
                      font-family: Arial, sans-serif;
                      margin: 0 auto;
                      padding: 0;
                      padding-left: 0;
                      padding-right: 0;
                      text-align: left;
                      width: 600px;
                    "
                  >
                    <table
                      bgcolor="#FFFFFF"
                      class="row collapse"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        mso-table-bspace: 0pt;
                        mso-table-tspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0;
                        padding: 0;
                        text-align: left;
                        vertical-align: top;
                        width: 100%;
                        background: #ffffff;
                      "
                    >
                      <tbody>
                        <tr style="padding: 0; text-align: left; vertical-align: top">
                          <th
                            class="bg_body small-12 large-12 first height__mob"
                            style="
                              margin: 0;
                              color: #0d0802;
                              font-family: Arial, sans-serif;
                              margin: 0;
                              padding: 0;
                              text-align: left;
                              display: block;
                            "
                          >
                            <center data-parsed="" style="width: 100%; display: block">
                              <!--Картинка моб-->
                              <a
                                :href="newsItem.info.appLink.content"
                                align="left"
                                width="1"
                                class="show_mobile"
                                alt=""
                                style="
                                  margin: 0 auto;
                                  clear: both;
                                  display: block;
                                  float: none;
                                  margin: 0;
                                  outline: 0;
                                  width: 1px;
                                  height: 1px;
                                  opacity: 0;
                                "
                                ><img
                                  src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/buttons/community-banner-mob-new.png"
                                  align="left"
                                  width="1"
                                  class="show_mobile"
                                  alt=""
                                  style="
                                    margin: 0 auto;
                                    clear: both;
                                    display: block;
                                    float: none;
                                    margin: 0;
                                    outline: 0;
                                    width: 1px;
                                    height: 1px;
                                    opacity: 0;
                                  "
                              /></a>
                              <!--Картинка десктоп-->
                              <a
                                :href="newsItem.info.portalLink.content"
                                target="_blank"
                                style="color: #0d0802; border: 0; outline: 0; display: block"
                                ><img
                                  src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/buttons/community-banner-new.png"
                                  align="left"
                                  width="600"
                                  height="88"
                                  class="float-center hide_mobile"
                                  alt=""
                                  style="
                                    -ms-interpolation-mode: bicubic;
                                    margin: 0 auto;
                                    clear: both;
                                    display: block;
                                    float: none;
                                    margin: 0 auto;
                                    outline: 0;
                                    text-align: center;
                                    text-decoration: none;
                                    width: 100%;
                                    height: 88px;
                                  "
                              /></a>
                            </center>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </th>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- КОНЕЦ РУБРИКА НОВОСТИ КОМЬЮНИТИ ======================================================================================================================================= -->
  </div>
  <!-- ОТСТУП МЕЖДУ РУБРИКАМИ -->
  <table
    bgcolor="#ffffff"
    class="container float-center"
    align="center"
    border="0"
    cellspacing="0"
    cellpadding="0"
    style="
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      mso-table-bspace: 0pt;
      mso-table-tspace: 0pt;
      border-collapse: collapse;
      border-spacing: 0;
      text-align: left;
      vertical-align: top;
      width: 600px;
      background-color: #ffffff;
    "
  >
    <tbody>
      <tr>
        <!-- Вертикальный отступ -->
        <td class="section__devider" height="40"></td>
      </tr>
    </tbody>
  </table>
  <!-- КОНЕЦ ОТСТУП МЕЖДУ РУБРИКАМИ -->
</template>

<style scoped></style>
