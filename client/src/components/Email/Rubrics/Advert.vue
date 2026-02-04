<script setup lang="ts">
const props = defineProps(['news'])
</script>

<template>
  <!-- РУБРИКА ОБЪЯВЛЕНИЯ ======================================================================================================================================= -->
  <!-- Верхняя граница -->
  <table
    class="container float-center news_hide_top_line"
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

  <!-- Вертикальный отступ в рубрике - серый-->
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
  <!-- Конец Вертикальный отступ в рубрике - серый-->

  <!-- Заголовок рубрики -->
  <table
    bgcolor="f4f4f4"
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
      background-color: #f4f4f4;
    "
  >
    <tbody>
      <tr>
        <th
          style="
            margin: 0;
            color: #0d0802;
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
            Объявления
          </h2>
        </th>
      </tr>
    </tbody>
  </table>
  <!-- Конец Заголовок рубрики -->

  <!--Блок с объявлениями-->
  <table
    bgcolor="f4f4f4"
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
      width: 568px;
      background-color: #f4f4f4;
    "
  >
    <tbody>
      <tr>
        <th
          class="small-12 large-12 columns first last"
          style="
            margin: 0;
            color: #0d0802;
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
          <div v-for="(news, index) in props.news" :key="news.id">
            <!-- Объявление 1 -->
            <!-- Верхняя граница -->
            <table
              class="float-center container__mb-full"
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
                width: 568px;
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
                      background: #ffffff;
                    "
                  >
                    <img
                      src="https://pic.mos.ru/srv/images/3cad2d8195eab4eee41e9b57b44a1950.png"
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
                  <td bgcolor="#ffffff" style="background: #ffffff"></td>
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
                      background: #ffffff;
                    "
                  >
                    <img
                      src="https://pic.mos.ru/srv/images/276ccb4e07c78b71337ebcda0a1694b9.png"
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
            <!-- Конец верхняя граница -->

            <!-- Контент новости -->
            <table
              align="center"
              class="float-center container__mb-full"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                mso-table-bspace: 0pt;
                mso-table-tspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0 auto;
                background: #fefefe;
                border-collapse: collapse;
                border-spacing: 0;
                float: none;
                margin: 0 auto;
                padding: 0;
                text-align: center;
                vertical-align: top;
                width: 568px;
              "
            >
              <tbody>
                <!-- Шапка новости -->
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
                    <!-- Контент шапки -->
                    <table
                      class="row"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
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
                        background-color: #ffffff;
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
                                <!-- Иконка -->
                                <th
                                  v-if="index == 0"
                                  width="40"
                                  align="left"
                                  class="mobile__row"
                                  style="
                                    margin: 0;
                                    color: #0d0802;
                                    font-family: Arial, sans-serif;
                                    margin: 0;
                                    paddin: 0;
                                    text-align: left;
                                    min-width: 40px;
                                  "
                                >
                                  <img
                                    src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/obyavlenia/Frame%201321316212-2.png"
                                    alt=""
                                    align="left"
                                    width="32"
                                    style="
                                      -ms-interpolation-mode: bicubic;
                                      margin: 0 auto;
                                      clear: both;
                                      display: block;
                                      float: none;
                                      margin: 0;
                                      vertical-align: middle;
                                      max-width: 32px;
                                      outline: 0;
                                      text-align: left;
                                      text-decoration: none;
                                      width: 100%;
                                      height: auto;
                                    "
                                  />
                                </th>

                                <!-- Иконка -->
                                <th
                                  v-if="index == 1"
                                  width="40"
                                  align="left"
                                  class="mobile__row"
                                  style="
                                    margin: 0;
                                    color: #0d0802;
                                    font-family: Arial, sans-serif;
                                    margin: 0;
                                    paddin: 0;
                                    text-align: left;
                                    min-width: 40px;
                                  "
                                >
                                  <img
                                    src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/obyavlenia/Frame%201321316212.png"
                                    alt=""
                                    align="left"
                                    width="32"
                                    style="
                                      -ms-interpolation-mode: bicubic;
                                      margin: 0 auto;
                                      clear: both;
                                      display: block;
                                      float: none;
                                      margin: 0;
                                      vertical-align: middle;
                                      max-width: 32px;
                                      outline: 0;
                                      text-align: left;
                                      text-decoration: none;
                                      width: 100%;
                                      height: auto;
                                    "
                                  />
                                </th>

                                <!-- Текст -->
                                <th
                                  class="mobile__row"
                                  style="
                                    margin: 0;
                                    color: #0d0802;
                                    font-family: Arial, sans-serif;
                                    margin: 0;
                                    padding: 0;
                                    text-align: left;
                                    margin-bottom: 0;
                                  "
                                >
                                  <table
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
                                    "
                                  >
                                    <tr>
                                      <td
                                        valign="top"
                                        :style="{
                                          paddingTop:
                                            news.info.title.content.length <= 55 ? '8px' : '0',
                                        }"
                                        style="padding-bottom: 8px"
                                      >
                                        <h3
                                          class="news_text"
                                          style="
                                            color: #0d0802;
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
                                          {{ news.info.title.content }}
                                        </h3>
                                      </td>
                                    </tr>
                                    <!-- Текст новости -->
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
                                        <!-- Контент новости -->
                                        <table
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
                                            background-color: #ffffff;
                                          "
                                        >
                                          <tbody>
                                            <tr
                                              style="
                                                padding: 0;
                                                text-align: left;
                                                vertical-align: top;
                                              "
                                            >
                                              <th
                                                style="
                                                  margin: 0 auto;
                                                  color: #0d0802;
                                                  font-family: Arial, sans-serif;
                                                  font-size: 12px;
                                                  font-weight: 400;
                                                  line-height: 1.5;
                                                  margin: 0 auto;
                                                  padding: 0;
                                                  padding-bottom: 16px;
                                                  text-align: left;
                                                  width: 564px;
                                                "
                                              >
                                                <table
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
                                                  "
                                                >
                                                  <tr
                                                    style="
                                                      padding: 0;
                                                      text-align: left;
                                                      vertical-align: top;
                                                    "
                                                  >
                                                    <!-- Текст -->
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
                                                          border-collapse: collapse;
                                                          border-spacing: 0;
                                                          padding: 0;
                                                          text-align: left;
                                                          vertical-align: top;
                                                          width: 100%;
                                                        "
                                                      >
                                                        <tr>
                                                          <td valign="top">
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
                                                                margin-bottom: 0 !important;
                                                              "
                                                            >
                                                              {{ news.info.text.content }}
                                                            </p>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </th>
                                                  </tr>
                                                </table>
                                              </th>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!-- Конец Новость 1 -->
                                      </td>
                                    </tr>

                                    <!--Кнопки-->
                                    <tr
                                      style="padding: 0; text-align: left; vertical-align: middle"
                                    >
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
                                            display: table;
                                            padding: 0;
                                            position: relative;
                                            vertical-align: middle;
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
                                                valign="middle"
                                                style="
                                                  padding: 0;
                                                  margin: 0;
                                                  vertical-align: middle;
                                                  color: #5d6570 !important;
                                                  mso-font-width: 0%;
                                                  mso-style-textfill-type: none;
                                                  font-size: 1px;
                                                "
                                              >
                                                <table
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
                                                  "
                                                >
                                                  <tr>
                                                    <!--Кнопка Читать подробнее-->
                                                    <th
                                                      class="btn__row"
                                                      valign="middle"
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        vertical-align: middle;
                                                        color: #5d6570 !important;
                                                        padding-right: 12px;
                                                        vertical-align: middle;
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
                                                                font-size: 12px;
                                                                font-weight: 400;
                                                                font-style: normal;
                                                                line-height: 16px;
                                                                vertical-align: middle;
                                                              "
                                                            >
                                                              <p
                                                                class="mos__mb-btn"
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
                                                    </th>

                                                    <th
                                                      class="btn__row"
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
                                                              class="news__btn"
                                                              style="padding-right: 8px"
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
                                                                      bgcolor="#FFFFFF"
                                                                      style="
                                                                        background: #ffffff;
                                                                        color: #5d6570;
                                                                        font-family:
                                                                          Arial, sans-serif;
                                                                        font-size: 14px;
                                                                        font-weight: 400;
                                                                        font-style: normal;
                                                                        line-height: 20px;
                                                                        width: 96px;
                                                                        vertical-align: bottom;
                                                                      "
                                                                    >
                                                                      <a
                                                                        :href="
                                                                          news.info.portalLink
                                                                            .content
                                                                        "
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
                                                                          src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B4%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82/%D0%98%D1%81%D1%85%D0%BE%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8/na-poratale-new-new.png"
                                                                          alt="Подробнее"
                                                                          align="right"
                                                                          width="94"
                                                                          height="16"
                                                                          style="
                                                                            -ms-interpolation-mode: bicubic;
                                                                            margin: 0;
                                                                            clear: both;
                                                                            display: inline-block;
                                                                            float: none;
                                                                            margin: 0;
                                                                            width: 94px;
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
                                                                      valign="middle"
                                                                      bgcolor="#FFFFFF"
                                                                      style="
                                                                        background: #ffffff;
                                                                        color: #5d6570;
                                                                        font-family:
                                                                          Arial, sans-serif;
                                                                        font-size: 14px;
                                                                        font-weight: 400;
                                                                        font-style: normal;
                                                                        line-height: 20px;
                                                                        vertical-align: middle;
                                                                        width: 112px;
                                                                      "
                                                                    >
                                                                      <a
                                                                        :href="
                                                                          news.info.appLink.content
                                                                        "
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
                                                                          src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B4%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82/%D0%98%D1%81%D1%85%D0%BE%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8/v-prilozenii-new-new.png"
                                                                          alt="Подробнее"
                                                                          align="right"
                                                                          width="112"
                                                                          height="16"
                                                                          style="
                                                                            -ms-interpolation-mode: bicubic;
                                                                            margin: 0;
                                                                            clear: both;
                                                                            display: inline-block;
                                                                            float: none;
                                                                            margin: 0;
                                                                            width: 112px;
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
                                                    </th>
                                                  </tr>
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
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                    <!-- Конец Новость 1 -->
                  </td>
                </tr>
                <!--Конец кнопки-->
              </tbody>
            </table>
            <!-- Конец контент новости -->

            <!-- Нижняя граница -->
            <table
              class="float-center container__mb-full"
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
                width: 568px;
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
                      background: #ffffff;
                    "
                  >
                    <img
                      src="https://pic.mos.ru/srv/images/c8521499c0181af3f9ad4cbffc852ef2.png"
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
                  <td bgcolor="white" style="background: #ffffff"></td>
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
                      background: #ffffff;
                    "
                  >
                    <img
                      src="https://pic.mos.ru/srv/images/614314c79505d9e5b9731e048a1749b8.png"
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
            <!-- Конец Нижняя граница -->
            <!-- Конец Объявление 1 -->

            <!-- Отступ между блоками -->
            <table
              v-if="index !== props.news.length - 1"
              bgcolor="#f4f4f4"
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
                width: 568px;
                background-color: #f4f4f4;
              "
            >
              <tbody>
                <tr>
                  <!-- Вертикальный отступ -->
                  <td class="inform__height" height="8"></td>
                </tr>
              </tbody>
            </table>
            <!-- Конец Отступ между блоками -->
          </div>
        </th>
      </tr>
    </tbody>
  </table>

  <!-- Вертикальный отступ в рубрике - серый-->
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
  <!-- Конец Вертикальный отступ в рубрике - серый-->

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
