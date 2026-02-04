<script setup lang="ts">
const props = defineProps(['news'])
</script>

<template>
  <!-- РУБРИКА НОВОСТИ КОМЬЮНИТИ ======================================================================================================================================= -->
  <!-- Верхняя граница -->
  <table
    class="container float-center news_hide_top_line"
    align="center"
    border="0"
    cellspacing="0"
    cellpadding="0"
    style="
      text-align: left;
      vertical-align: top;
      width: 600px;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      mso-table-bspace: 0pt;
      mso-table-tspace: 0pt;
      border-collapse: collapse;
      border-spacing: 0;
    "
  >
    <tbody>
      <tr>
        <td
          class="td_hide"
          width="16"
          height="16"
          align="left"
          valign="top"
          style="
            -moz-hyphens: none;
            -webkit-hyphens: none;
            margin: 0;
            border-collapse: collapse !important;
            line-height: 16px;
            width: 16px;
            border: 0;
            outline: 0;
            background: #f4f4f4;
          "
        >
          <img
            src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/corners/white/white-top-left.png"
            alt=""
            align="left"
            width="16"
            style="
              -ms-interpolation-mode: bicubic;
              margin: 0 auto;
              clear: both;
              display: block;
              float: none;
              margin: 0 auto;
              max-width: 16px;
              outline: 0;
              text-align: left;
              text-decoration: none;
              width: 100%;
              height: auto;
            "
          />
        </td>
        <td class="td_hide" bgcolor="#F4F4F4" style="background: #f4f4f4"></td>
        <td
          class="td_hide"
          width="16"
          height="16"
          align="right"
          valign="top"
          style="
            -moz-hyphens: none;
            -webkit-hyphens: none;
            margin: 0;
            border-collapse: collapse !important;
            line-height: 16px;
            width: 16px;
            border: 0;
            outline: 0;
            background: #f4f4f4;
          "
        >
          <img
            src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/corners/white/white-top-right.png"
            alt=""
            align="center"
            width="16"
            style="
              -ms-interpolation-mode: bicubic;
              margin: 0 auto;
              clear: both;
              display: block;
              float: none;
              margin: 0 auto;
              max-width: 16px;
              outline: 0;
              text-align: center;
              text-decoration: none;
              width: 100%;
              height: auto;
            "
          />
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Конец верхняя граница -->

  <!-- Заголовок рубрики -->
  <table
    bgcolor="#f4f4f4"
    class="container float-center"
    align="center"
    border="0"
    cellspacing="0"
    cellpadding="0"
    style="
      text-align: left;
      vertical-align: top;
      width: 600px;
      background-color: #f4f4f4;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      mso-table-bspace: 0pt;
      mso-table-tspace: 0pt;
      border-collapse: collapse;
      border-spacing: 0;
    "
  >
    <tbody>
      <tr>
        <!-- Вертикальный отступ -->
        <td height="24"></td>
      </tr>
      <tr>
        <th
          style="
            margin: 0;
            color: #5d6570;
            font-family: Arial, sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            margin: 0;
            padding: 0;
            padding-left: 16px;
            padding-right: 16px;
            text-align: left;
          "
        >
          <!-- Текст заголовка -->
          <h2
            style="
              color: #5d6570;
              font-family: Arial, sans-serif;
              font-size: 16px;
              font-weight: 400;
              line-height: 16px;
              font-style: normal;
              margin: 0;
              margin-bottom: 32px;
              padding: 0;
              text-align: left;
              word-wrap: normal;
            "
          >
            Новости Комьюнити
          </h2>
        </th>
      </tr>
    </tbody>
  </table>
  <!-- Конец Заголовок рубрики -->

  <!-- Блок с новосятями -->
  <table
    bgcolor="#f4f4f4"
    align="center"
    border="0"
    cellspacing="0"
    cellpadding="0"
    class="container float-center"
    style="
      margin: 0 auto;
      background: #f4f4f4;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      mso-table-bspace: 0pt;
      mso-table-tspace: 0pt;
      border-collapse: collapse;
      border-spacing: 0;
      float: none;
      margin: 0 auto;
      padding: 0;
      text-align: center;
      vertical-align: top;
      width: 600px;
    "
  >
    <tbody>
      <tr style="padding: 0; text-align: left; vertical-align: top">
        <td
          style="
            -moz-hyphens: none;
            -webkit-hyphens: none;
            margin: 0;
            border-collapse: collapse !important;
            color: #0d0802;
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
          <div v-for="(news, index) in props.news">
            <!-- Новость 1 -->
            <table
              :key="news.id"
              class="row"
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
                display: table;
                padding: 0;
                position: relative;
                text-align: left;
                vertical-align: top;
                width: 100%;
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
                      padding-left: 16px;
                      padding-right: 16px;
                      text-align: left;
                      width: 564px;
                    "
                  >
                    <table
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
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
                      "
                    >
                      <tr style="padding: 0; text-align: left; vertical-align: top">
                        <!-- Тег-->
                        <th
                          style="
                            margin: 0;
                            color: #000;
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            text-align: left;
                            padding-bottom: 12px;
                          "
                        >
                          <table
                            align="left"
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
                              display: inline-block !important;
                            "
                          >
                            <tr>
                              <td
                                align="right"
                                valign="middle"
                                width="12"
                                height="20"
                                style="
                                  width: 10px;
                                  border: 0;
                                  outline: 0;
                                  background: #f4f4f4;
                                  vertical-align: middle;
                                "
                              >
                                <img
                                  align="right"
                                  src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B4%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82/chips-white-left.png"
                                  alt=""
                                  width="12"
                                  style="
                                    display: block;
                                    border: 0;
                                    width: 12px;
                                    height: auto;
                                    outline: 0;
                                    vertical-align: middle;
                                  "
                                />
                              </td>
                              <td
                                valign="middle"
                                align="center"
                                style="
                                  background: #ffffff;
                                  color: #5d6570;
                                  font-family: Arial, sans-serif;
                                  font-size: 12px;
                                  font-weight: 400;
                                  font-style: normal;
                                  line-height: 12px;
                                  vertical-align: middle;
                                "
                              >
                                &nbsp;{{ news.info.chatTag.content }}&nbsp;
                              </td>
                              <td
                                align="left"
                                valign="middle"
                                width="12"
                                height="20"
                                style="
                                  width: 10px;
                                  border: 0;
                                  outline: 0;
                                  background: #f4f4f4;
                                  vertical-align: middle;
                                  padding-right: 8px;
                                "
                              >
                                <img
                                  align="left"
                                  src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B4%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82/chips-white-right.png"
                                  alt=""
                                  width="12"
                                  style="
                                    display: block;
                                    border: 0;
                                    width: 12px;
                                    height: auto;
                                    outline: 0;
                                    vertical-align: middle;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </th>
                      </tr>

                      <!-- Текст -->
                      <tr style="padding: 0; text-align: left; vertical-align: top">
                        <th
                          style="
                            margin: 0;
                            color: #000;
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            text-align: left;
                          "
                        >
                          <table
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
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
                            "
                          >
                            <tr>
                              <td valign="top" style="padding-bottom: 12px">
                                <h3
                                  class="news_header mob__mt-0"
                                  style="
                                    margin: 0;
                                    margin-bottom: 8px !important;
                                    color: #000000;
                                    font-family: Arial, sans-serif;
                                    font-size: 16px;
                                    font-weight: 700;
                                    line-height: 20px;
                                    margin: 0;
                                    padding: 0;
                                    text-align: left;
                                    word-wrap: normal;
                                  "
                                >
                                  {{ news.info.title.content }}
                                </h3>
                                <p
                                  class="news_text"
                                  style="
                                    color: #000000;
                                    font-family: Arial, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    font-style: normal;
                                    line-height: 20px;
                                    margin: 0;
                                    padding: 0;
                                    text-align: left;
                                    margin-bottom: 0;
                                  "
                                >
                                  {{ news.info.text.content }}
                                </p>
                              </td>
                            </tr>
                          </table>
                        </th>
                      </tr>

                      <!--Кнопки-->
                      <tr style="padding: 0; text-align: left; vertical-align: middle">
                        <td
                          align="left"
                          valign="middle"
                          style="
                            padding: 0;
                            margin: 0;
                            vertical-align: middle;
                            color: #5d6570 !important;
                            vertical-align: middle;
                          "
                        >
                          <table
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            valign="top"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              mso-table-bspace: 0pt;
                              mso-table-tspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0;
                              display: table;
                              padding: 0;
                              position: relative;
                              vertical-align: top;
                            "
                          >
                            <tbody>
                              <tr>
                                <td
                                  valign="middle"
                                  style="
                                    padding: 0;
                                    margin: 0;
                                    vertical-align: middle;
                                    color: #5d6570 !important;
                                    padding-right: 12px;
                                  "
                                >
                                  <table
                                    align="left"
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
                                      display: inline-block !important;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          valign="middle"
                                          align="center"
                                          style="
                                            color: #5d6570;
                                            font-family: Arial, sans-serif;
                                            font-size: 14px;
                                            font-weight: 400;
                                            font-style: normal;
                                            line-height: 16px;
                                            vertical-align: middle;
                                          "
                                        >
                                          <p
                                            style="
                                              color: #6a7995;
                                              font-family: Arial, sans-serif;
                                              font-size: 14px;
                                              font-weight: 400;
                                              font-style: normal;
                                              line-height: 16px;
                                              margin: 0 !important;
                                              padding: 0;
                                              text-align: left;
                                            "
                                          >
                                            Читать подробнее:
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td>
                                  <table
                                    align="left"
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
                                      display: inline-block !important;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          bgcolor="#F4F4F4"
                                          style="
                                            background: #f4f4f4;
                                            color: #5d6570;
                                            font-family: Arial, sans-serif;
                                            font-size: 14px;
                                            font-weight: 400;
                                            font-style: normal;
                                            line-height: 20px;
                                            width: 100px;
                                            vertical-align: bottom;
                                          "
                                        >
                                          <a
                                            :href="news.info.externalLink.content"
                                            target="_blank"
                                            style="
                                              border: 0;
                                              outline: 0;
                                              color: #e51740;
                                              font-size: 14px;
                                              line-height: 18px;
                                              vertical-align: middle;
                                              display: inline-block;
                                            "
                                            ><img
                                              src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B4%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82/%D0%98%D1%81%D1%85%D0%BE%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8/v-tg-new-new.png"
                                              alt="Подробнее"
                                              align="right"
                                              width="104"
                                              height="16"
                                              style="
                                                -ms-interpolation-mode: bicubic;
                                                margin: 0;
                                                clear: both;
                                                display: inline-block;
                                                float: none;
                                                margin: 0;
                                                width: 104px;
                                                height: 16px;
                                                outline: 0;
                                                text-align: right;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <!--Конец кнопки-->
                    </table>
                  </th>
                </tr>
              </tbody>
            </table>
            <!-- Конец Новость 1 -->

            <!-- Разделитель -->
            <table
              v-if="index !== props.news.length - 1"
              class="spacer"
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
              "
            >
              <tbody>
                <tr>
                  <td height="16" style="line-height: 16px; height: 16px"></td>
                </tr>
                <tr style="padding: 0; text-align: left; vertical-align: top">
                  <td class="sepparator" width="16"></td>
                  <td
                    height="15"
                    style="line-height: 15px; margin: 0; padding: 0; border-top: 1px solid #e8e8e8"
                  >
                    &nbsp;
                  </td>
                  <td class="sepparator" width="16"></td>
                </tr>
              </tbody>
            </table>
            <!-- Конец Разделитель -->
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Конец блок с новостями -->

  <table
    class="container float-center"
    bgcolor="#F4F4F4"
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
      background-color: #f4f4f4;
    "
  >
    <tbody>
      <tr>
        <!-- Вертикальный отступ -->
        <td height="24"></td>
      </tr>
    </tbody>
  </table>

  <!-- Нижняя граница -->
  <table
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
    "
  >
    <tbody>
      <tr>
        <td
          width="16"
          height="16"
          style="
            -moz-hyphens: none;
            -webkit-hyphens: none;
            margin: 0;
            border-collapse: collapse !important;
            line-height: 16px;
            width: 16px;
            border: 0;
            outline: 0;
            background: #f4f4f4;
          "
        >
          <img
            src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/corners/white/white-bottom-left.png"
            alt=""
            align="center"
            width="16"
            class="float-center"
            style="
              -ms-interpolation-mode: bicubic;
              margin: 0 auto;
              clear: both;
              display: block;
              float: none;
              margin: 0 auto;
              max-width: 16px;
              outline: 0;
              text-align: center;
              text-decoration: none;
              width: 100%;
              height: auto;
            "
          />
        </td>
        <td bgcolor="#f4f4f4" style="background: #f4f4f4"></td>
        <td
          width="16"
          height="16"
          style="
            -moz-hyphens: none;
            -webkit-hyphens: none;
            margin: 0;
            border-collapse: collapse !important;
            line-height: 16px;
            width: 16px;
            border: 0;
            outline: 0;
            background: #f4f4f4;
          "
        >
          <img
            src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/corners/white/white-bottom-right.png"
            alt=""
            align="center"
            width="16"
            class="float-center"
            style="
              -ms-interpolation-mode: bicubic;
              margin: 0 auto;
              clear: both;
              display: block;
              float: none;
              margin: 0 auto;
              max-width: 16px;
              outline: 0;
              text-align: center;
              text-decoration: none;
              width: 100%;
              height: auto;
            "
          />
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Конец нижняя граница -->
  <!-- КОНЕЦ Новости-->

  <!-- Вертикальный отступ в рубрике - серый-->
  <table
    class="container float-center"
    bgcolor="#FFFFFF"
    align="center"
    border="0"
    cellspacing="0"
    cellpadding="0"
    style="text-align: left; vertical-align: top; width: 600px; background-color: #ffffff"
  >
    <tbody>
      <tr>
        <!-- Вертикальный отступ -->
        <td class="section__devider" height="32"></td>
      </tr>
    </tbody>
  </table>
  <!-- Конец Вертикальный отступ в рубрике - серый-->
</template>
