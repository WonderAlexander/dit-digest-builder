<script setup lang="ts">
const props = defineProps(['news', 'isTheme'])
</script>

<template>
  <!-- РУБРИКА НОВЫЕ НАЗНАЧЕНИЯ ======================================================================================================================================= -->
  <!-- Верхняя граница -->
  <table
    v-if="isTheme"
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
    :bgcolor="isTheme ? '#f4f4f4' : '#ffffff'"
    class="container float-center"
    align="center"
    border="0"
    cellspacing="0"
    cellpadding="0"
    :style="[
      'text-align:left;vertical-align:top;width:600px;mso-table-lspace:0pt; mso-table-rspace:0pt;mso-table-bspace:0pt;mso-table-tspace:0pt; border-collapse:collapse; border-spacing: 0;',
      { backgroundColor: isTheme ? '#f4f4f4' : '#ffffff' },
    ]"
  >
    <tbody>
      <tr v-if="isTheme">
        <!-- Вертикальный отступ -->
        <td height="24"></td>
      </tr>
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
            Новые продукты и назначения
          </h2>
        </th>
      </tr>
    </tbody>
  </table>
  <!-- Конец Заголовок рубрики -->

  <!-- Блок с новостями -->
  <table
    :bgcolor="isTheme ? '#f4f4f4' : '#ffffff'"
    align="center"
    class="container float-center"
    border="0"
    cellspacing="0"
    cellpadding="0"
    :style="[
      'Margin:0 auto;mso-table-lspace:0pt; mso-table-rspace:0pt;mso-table-bspace:0pt;mso-table-tspace:0pt; border-collapse:collapse; border-spacing: 0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px',
      { backgroundColor: isTheme ? '#f4f4f4' : '#ffffff' },
    ]"
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
          <div v-for="(news, index) in props.news" :key="news.id">
            <!--Новость 1 -->
            <table
              class="row collapse"
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
              "
            >
              <tbody>
                <tr style="padding: 0; text-align: left; vertical-align: top">
                  <th
                    class="small-12 large-12 columns first last pd__mob"
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
                        <!-- Картинрки новости -->
                        <th
                          class="bg_body first person__img-wrapper"
                          style="
                            margin: 0;
                            color: #0d0802;
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            padding-right: 32px;
                            text-align: left;
                            min-width: 113px;
                            min-height: 194px;
                          "
                        >
                          <center
                            data-parsed=""
                            style="min-width: 116px; width: 100%; min-height: 116px"
                          >
                            <img
                              class="mob__person"
                              :src="news.info.desktopImgLink.content"
                              width="116"
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
                                height: auto;
                                min-height: 116px;
                              "
                            />
                          </center>
                        </th>

                        <!-- Контент новости -->
                        <th
                          valign="top"
                          class="small-12 large-12 last"
                          style="
                            margin: 0;
                            color: #0d0802;
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
                            <!-- Заголовок + текст -->
                            <tr>
                              <td
                                class="pl16 pr16 news_top_1 pt16"
                                valign="top"
                                style="padding-bottom: 16px"
                              >
                                <h3
                                  class="news_header mob__mt-0"
                                  style="
                                    margin: 0;
                                    margin-bottom: 8px;
                                    color: #0d0802;
                                    font-family: Arial, sans-serif;
                                    font-size: 16px;
                                    font-weight: 700;
                                    line-height: 20px;
                                    margin: 0;
                                    margin-bottom: 8px;
                                    padding: 0;
                                    text-align: left;
                                    word-wrap: normal;
                                  "
                                >
                                  <a
                                    :href="news.info.portalLink.content"
                                    target="_blank"
                                    style="color: #0d0802; text-decoration: none"
                                    ><span style="color: #0d0802; text-decoration: none">{{
                                      news.info.title.content
                                    }}</span></a
                                  >
                                </h3>
                                <p
                                  class="news_text"
                                  style="
                                    color: #0d0802;
                                    font-family: Arial, sans-serif;
                                    font-size: 16px;
                                    font-weight: 400;
                                    font-style: normal;
                                    line-height: 20px;
                                    margin: 0;
                                    margin-bottom: 0px;
                                    padding: 0;
                                    text-align: left;
                                  "
                                >
                                  {{ news.info.text.content }}
                                </p>
                              </td>
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
                                    <!--Кнопка моютльной версии-->
                                    <tr class="btn__mb">
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
                                            mso-font-width: 0%;
                                            mso-style-textfill-type: none;
                                            font-size: 1px;
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
                                                  font-weight: 400;
                                                  font-style: normal;
                                                  vertical-align: middle;
                                                  mso-font-width: 0%;
                                                  mso-style-textfill-type: none;
                                                  font-size: 1px;
                                                "
                                              >
                                                <p
                                                  class="btn__mb-text"
                                                  style="
                                                    color: #6a7995;
                                                    font-family: Arial, sans-serif;
                                                    font-weight: 400;
                                                    font-style: normal;
                                                    margin: 0 !important;
                                                    padding: 0;
                                                    text-align: left;
                                                    mso-font-width: 0%;
                                                    mso-style-textfill-type: none;
                                                    font-size: 1px;
                                                    margin-bottom: 8px !important;
                                                  "
                                                >
                                                  Читать&nbsp;подбронее:
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td>
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
                                            <!--Кнопка десктоп версии-->
                                            <td
                                              class="btn__desktop"
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

                                            <td class="news__btn" style="padding-right: 8px">
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
                                                      :bgcolor="{
                                                        backgroundColor: isTheme
                                                          ? '#f4f4f4'
                                                          : '#ffffff',
                                                      }"
                                                      :style="[
                                                        'color:#5D6570; font-family:Arial, sans-serif;font-size:14px;font-weight:400;font-style:normal;line-height:20px; width: 96px; vertical-align: bottom;',
                                                        {
                                                          backgroundColor: isTheme
                                                            ? '#f4f4f4'
                                                            : '#ffffff',
                                                        },
                                                      ]"
                                                    >
                                                      <a
                                                        :href="news.portalLink"
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
                                                      :bgcolor="{
                                                        backgroundColor: isTheme
                                                          ? '#f4f4f4'
                                                          : '#ffffff',
                                                      }"
                                                      :style="[
                                                        'color:#5D6570; font-family:Arial, sans-serif;font-size:14px;font-weight:400;font-style:normal;line-height:20px; width: 112px;',
                                                        {
                                                          backgroundColor: isTheme
                                                            ? '#f4f4f4'
                                                            : '#ffffff',
                                                        },
                                                      ]"
                                                    >
                                                      <a
                                                        :href="news.appLink"
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
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <!--Конец кнопки-->
                            <tr>
                              <td style="font-size: 2px; line-height: 2px">&nbsp;</td>
                            </tr>
                          </table>
                        </th>
                      </tr>
                    </table>
                  </th>
                </tr>
              </tbody>
            </table>
            <!-- Конец новость 1 -->
            <table
              v-if="index !== props.news.length - 1"
              :bgcolor="isTheme ? '#f4f4f4' : '#ffffff'"
              class="spacer"
              border="0"
              cellspacing="0"
              cellpadding="0"
              :style="[
                'mso-table-lspace:0pt; mso-table-rspace:0pt;mso-table-bspace:0pt;mso-table-tspace:0pt; border-collapse:collapse; border-spacing: 0;padding:0;text-align:left;vertical-align:top;width:100%;',
                { backgroundColor: isTheme ? '#f4f4f4' : '#ffffff' },
              ]"
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
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Вертикальный отступ в рубрике - серый-->
  <table
    v-if="isTheme"
    class="container float-center"
    bgcolor="#F4F4F4"
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
    </tbody>
  </table>
  <!-- Конец Вертикальный отступ в рубрике - серый-->

  <!-- Нижняя граница -->
  <table
    v-if="isTheme"
    class="container float-center"
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
