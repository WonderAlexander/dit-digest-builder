<script setup lang="ts">
const props = defineProps(['news'])
</script>

<template>
  <!-- ШАПКА ==================================================================================================================================================================================-->
  <table
    v-for="(news, index) in props.news"
    :key="news.id"
    border="0"
    cellspacing="0"
    cellpadding="0"
    align="center"
    class="container"
    style="
      margin: 0 auto;
      background-color: #fefefe;
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
            font-size: 12px;
            font-weight: 400;
            hyphens: none;
            line-height: 1.5;
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
              border-collapse: collapse;
              border-spacing: 0;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              mso-table-bspace: 0pt;
              mso-table-tspace: 0pt;
              display: table;
              padding: 0;
              position: relative;
              text-align: left;
              vertical-align: top;
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
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 1.5;
                    margin: 0 auto;
                    padding: 0;
                    padding-left: 0;
                    padding-right: 0;
                    text-align: left;
                    width: 600px;
                  "
                >
                  <table
                    class="row collapse"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="
                      border-collapse: collapse;
                      border-spacing: 0;
                      padding: 0;
                      text-align: left;
                      vertical-align: top;
                      width: 100%;
                      background: #eaeaea;
                    "
                  >
                    <tbody>
                      <tr style="padding: 0; text-align: left; vertical-align: top">
                        <th style="margin: 0; padding: 0">
                          <!--Картинка-->
                          <center data-parsed="" style="min-width: 532px; width: 100%">
                            <img
                              :src="news.info.headerImgLink.content"
                              alt=""
                              align="center"
                              width="600"
                              class="float-center"
                              style="
                                -ms-interpolation-mode: bicubic;
                                margin: 0 auto;
                                clear: both;
                                display: block;
                                float: none;
                                margin: 0 auto;
                                max-width: 600px;
                                outline: 0;
                                border: 0;
                                outline: 0;
                                text-align: center;
                                text-decoration: none;
                                width: 100%;
                                height: auto;
                              "
                            />
                          </center>
                        </th>
                        <th
                          class="expander"
                          style="
                            margin: 0;
                            color: #0d0802;
                            font-family: Arial, sans-serif;
                            font-size: 12px;
                            font-weight: 400;
                            line-height: 1.5;
                            margin: 0;
                            padding: 0 !important;
                            text-align: left;
                            visibility: hidden;
                            width: 0;
                          "
                        ></th>
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
  <!-- КОНЕЦ ШАПКА =====================================================================================================================================================-->

  <!-- СОЦ СЕТИ ========================================================================================================================================================-->
  <table
    class="container float-center"
    cellpadding="0"
    cellspacing="0"
    border="0"
    bgcolor="#FFFFFF"
    style="border-collapse: collapse; border-spacing: 0; background-color: #ffffff; width: 600px"
  >
    <tr>
      <td
        bgcolor="#ffffff"
        style="
          padding: 0;
          padding-top: 21px;
          padding-left: 16px;
          padding-right: 16px;
          margin: 0;
          background-color: #ffffff;
        "
      >
        <table
          bgcolor="#ffffff"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            border-collapse: collapse;
            border-spacing: 0;
            padding: 0;
            text-align: left;
            vertical-align: top;
            width: 100%;
            background-color: #ffffff;
          "
        >
          <tr>
            <!-- Текст соц сетей-->
            <td class="social__text" valign="middle" style="vertical-align: middle; width: 400px">
              <p
                class="news_text"
                style="
                  color: #000;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  font-weight: 700;
                  font-style: normal;
                  line-height: 20px;
                  margin: 0 !important;
                  padding: 0;
                  text-align: left;
                "
              >
                Следите за&nbsp;новостями в&nbsp;социальных сетях ДИТ:
              </p>
            </td>

            <!--Иконки соц сетей-->
            <td
              class="social__icons"
              valign="middle"
              style="vertical-align: middle; text-align: left"
            >
              <table
                bgcolor="#ffffff"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="border-collapse: collapse; border-spacing: 0; background-color: #ffffff"
              >
                <tr>
                  <td
                    width="30"
                    bgcolor="#ffffff"
                    align="right"
                    style="
                      margin: 0;
                      font-family: Arial, sans-serif;
                      margin: 0;
                      padding: 0;
                      padding-right: 8px;
                      text-align: right;
                      max-width: 30px;
                      background-color: #ffffff;
                    "
                  >
                    <a
                      href="https://vk.com/ditmos"
                      target="_blank"
                      style="border: 0; outline: 0; max-width: 30px; background-color: #ffffff"
                      ><img
                        src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/Vkontakte%20(VK).png"
                        alt="Подробнее"
                        align="right"
                        width="30"
                        style="
                          -ms-interpolation-mode: bicubic;
                          margin: 0;
                          clear: both;
                          display: block;
                          float: none;
                          margin: 0;
                          width: 30px;
                          outline: 0;
                          text-align: right;
                          text-decoration: none;
                          height: auto;
                        "
                    /></a>
                  </td>
                  <td
                    width="30"
                    bgcolor="#ffffff"
                    align="right"
                    style="
                      margin: 0;
                      font-family: Arial, sans-serif;
                      margin: 0;
                      padding: 0;
                      padding-right: 8px;
                      text-align: right;
                      max-width: 30px;
                      background-color: #ffffff;
                    "
                  >
                    <a
                      href="https://t.me/dit_moscow"
                      target="_blank"
                      style="border: 0; outline: 0; background-color: #ffffff"
                      ><img
                        src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/Telrgram.png"
                        alt="Подробнее"
                        align="right"
                        width="30"
                        style="
                          -ms-interpolation-mode: bicubic;
                          margin: 0;
                          clear: both;
                          display: block;
                          float: none;
                          margin: 0;
                          width: 30px;
                          outline: 0;
                          text-align: right;
                          text-decoration: none;
                          height: auto;
                        "
                    /></a>
                  </td>
                  <td
                    width="30"
                    bgcolor="#ffffff"
                    align="right"
                    style="
                      margin: 0;
                      font-family: Arial, sans-serif;
                      margin: 0;
                      padding: 0;
                      text-align: right;
                      max-width: 30px;
                      background-color: #ffffff;
                    "
                  >
                    <a
                      href="https://ok.ru/ditmos"
                      target="_blank"
                      style="border: 0; outline: 0; background-color: #ffffff"
                      ><img
                        src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/Odnoklassniki.png"
                        alt="Подробнее"
                        align="right"
                        width="30"
                        style="
                          -ms-interpolation-mode: bicubic;
                          margin: 0;
                          clear: both;
                          display: block;
                          float: none;
                          margin: 0;
                          width: 30px;
                          outline: 0;
                          text-align: right;
                          text-decoration: none;
                          height: auto;
                        "
                    /></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <!-- КОНЕЦ СОЦ СЕТИ ==================================================================================================================================================-->

  <!--ОТСТУП МЕЖДУ РУБРИКАМИ-->
  <table
    class="container float-center"
    align="center"
    border="0"
    cellspacing="0"
    cellpadding="0"
    style="text-align: left; vertical-align: top; width: 600px; background-color: #ffffff"
  >
    <tbody>
      <tr>
        <!-- Вертикальный отступ -->
        <td class="section__devider" height="40"></td>
      </tr>
    </tbody>
  </table>
  <!--КОНЕЦ ОТСТУП МЕЖДУ РУБРИКАМИ-->
</template>
