<script setup lang="ts">
import type { INews } from '@/types/types.ts'

const props = defineProps<{ news: INews }>()
</script>

<template>
  <!-- РУБРИКА ГОРОДСКИЕ МЕРОПРИЯТИЯ ======================================================================================================================================= -->
  <!-- Заголовок рубрики -->
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
            Городские мероприятия
          </h2>
        </th>
      </tr>
    </tbody>
  </table>
  <!-- Конец Заголовок рубрики -->

  <!-- Блок с новосятями -->
  <table
    align="center"
    class="container float-center"
    border="0"
    cellpadding="0"
    cellspacing="0"
    style="
      margin: 0 auto;
      background: #fefefe;
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
          <div v-for="(news, index) in props.news" :key="news.id">
            <!-- Новость 1 -->
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
                        border-collapse: collapse;
                        border-spacing: 0;
                        padding: 0;
                        text-align: left;
                        vertical-align: top;
                        width: 100%;
                      "
                    >
                      <!-- Теги новости -->
                      <tr style="padding: 0; text-align: left; vertical-align: middle">
                        <td
                          align="left"
                          valign="middle"
                          style="
                            padding: 0;
                            margin: 0;
                            vertical-align: middle;
                            color: #5d6570 !important;
                            padding-bottom: 8px;
                          "
                        >
                          <table
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            valign="top"
                            style="
                              vertical-align: top;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              mso-table-bspace: 0pt;
                              mso-table-tspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0;
                              width: 100%;
                            "
                          >
                            <tbody>
                              <tr>
                                <td class="pl16 pr16" valign="bottom">
                                  <!-- Продукт/Сервис Персоны /-->
                                  <table
                                    class="row"
                                    cellspacing="0"
                                    cellpadding="0"
                                    border="0"
                                    style="
                                      border-collapse: collapse;
                                      border-spacing: 0;
                                      padding: 0;
                                      text-align: left;
                                      vertical-align: bottom;
                                      width: 100%;
                                    "
                                  >
                                    <tbody>
                                      <tr style="padding: 0; text-align: left">
                                        <th
                                          style="
                                            margin: 0 auto;
                                            padding: 0;
                                            padding-bottom: 0px;
                                            text-align: left;
                                            vertical-align: bottom;
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
                                                vertical-align: bottom;
                                              "
                                            >
                                              <td
                                                align="left"
                                                valign="bottom"
                                                style="
                                                  word-wrap: normal;
                                                  word-break: keep-all;
                                                  line-break: strict;
                                                  -webkit-hyphens: none;
                                                  -ms-hyphens: none;
                                                  hyphens: none;
                                                "
                                              >
                                                <table
                                                  height="29"
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
                                                    display: inline-block !important;
                                                  "
                                                >
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      style="
                                                        word-wrap: normal;
                                                        word-break: keep-all;
                                                        line-break: strict;
                                                        -webkit-hyphens: none;
                                                        -ms-hyphens: none;
                                                        hyphens: none;
                                                        padding-right: 8px;
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
                                                              background: #ffffff;
                                                              vertical-align: middle;
                                                            "
                                                          >
                                                            <img
                                                              align="right"
                                                              src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/corners/gray/chips-gray-left.png"
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
                                                            class="mb__tags-text"
                                                            align="center"
                                                            style="
                                                              background: #f4f4f4;
                                                              color: #5d6570;
                                                              font-family: Arial, sans-serif;
                                                              font-size: 12px;
                                                              font-weight: 400;
                                                              font-style: normal;
                                                              line-height: 12px;
                                                              vertical-align: middle;
                                                            "
                                                          >
                                                            &nbsp;{{
                                                              news.info.dateTag.content
                                                            }}&nbsp;
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
                                                              background: #ffffff;
                                                              vertical-align: middle;
                                                            "
                                                          >
                                                            <img
                                                              align="left"
                                                              src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/corners/gray/chips-gray-right.png"
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
                                                    </td>
                                                  </tr>
                                                </table>

                                                <table
                                                  v-if="news.info.formatTag.content !== ''"
                                                  height="29"
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
                                                    display: inline-block !important;
                                                  "
                                                >
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      style="
                                                        word-wrap: normal;
                                                        word-break: keep-all;
                                                        line-break: strict;
                                                        -webkit-hyphens: none;
                                                        -ms-hyphens: none;
                                                        hyphens: none;
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
                                                              background: #ffffff;
                                                              vertical-align: middle;
                                                            "
                                                          >
                                                            <img
                                                              align="right"
                                                              src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/43_24/Chip-01(150dpi).png"
                                                              alt=""
                                                              width="12"
                                                              height="22"
                                                              style="
                                                                display: block;
                                                                border: 0;
                                                                width: 12px;
                                                                height: 22px;
                                                                outline: 0;
                                                                vertical-align: middle;
                                                              "
                                                            />
                                                          </td>
                                                          <td
                                                            valign="middle"
                                                            class="mb__tags-text"
                                                            align="center"
                                                            style="
                                                              background: #eef2ff;
                                                              color: #7d93ff;
                                                              font-family: Arial, sans-serif;
                                                              font-size: 12px;
                                                              font-weight: 400;
                                                              font-style: normal;
                                                              line-height: 12px;
                                                              vertical-align: middle;
                                                            "
                                                          >
                                                            &nbsp;{{
                                                              news.info.formatTag.content
                                                            }}&nbsp;
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
                                                              background: #ffffff;
                                                              vertical-align: middle;
                                                              padding-right: 8px;
                                                            "
                                                          >
                                                            <img
                                                              align="left"
                                                              src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/43_24/right.png"
                                                              alt=""
                                                              width="12"
                                                              height="22"
                                                              style="
                                                                display: block;
                                                                border: 0;
                                                                width: 12px;
                                                                height: 22px;
                                                                outline: 0;
                                                                vertical-align: middle;
                                                              "
                                                            />
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </table>

                                                <table
                                                  v-if="news.info.regTag.content !== ''"
                                                  height="29"
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
                                                    display: inline-block !important;
                                                  "
                                                >
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      style="
                                                        word-wrap: normal;
                                                        word-break: keep-all;
                                                        line-break: strict;
                                                        -webkit-hyphens: none;
                                                        -ms-hyphens: none;
                                                        hyphens: none;
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
                                                              background: #ffffff;
                                                              vertical-align: middle;
                                                            "
                                                          >
                                                            <img
                                                              align="right"
                                                              src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/chips/chips-blue-left.png"
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
                                                            class="mb__tags-text"
                                                            align="center"
                                                            style="
                                                              background: #e0f3ff;
                                                              color: #0086da;
                                                              font-family: Arial, sans-serif;
                                                              font-size: 12px;
                                                              font-weight: 400;
                                                              font-style: normal;
                                                              line-height: 12px;
                                                              vertical-align: middle;
                                                            "
                                                          >
                                                            &nbsp;{{
                                                              news.info.regTag.content
                                                            }}&nbsp;
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
                                                              background: #ffffff;
                                                              vertical-align: middle;
                                                              padding-right: 8px;
                                                            "
                                                          >
                                                            <img
                                                              align="left"
                                                              src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/chips/chips-blue-right.png"
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
                                                    </td>
                                                  </tr>
                                                </table>

                                                <table
                                                  v-if="news.info.priceTag.content !== ''"
                                                  height="29"
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
                                                    display: inline-block !important;
                                                  "
                                                >
                                                  <tr>
                                                    <td
                                                      align="left"
                                                      style="
                                                        word-wrap: normal;
                                                        word-break: keep-all;
                                                        line-break: strict;
                                                        -webkit-hyphens: none;
                                                        -ms-hyphens: none;
                                                        hyphens: none;
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
                                                              background: #ffffff;
                                                              vertical-align: middle;
                                                            "
                                                          >
                                                            <img
                                                              align="right"
                                                              src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/corners/green/chips-green-left.png"
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
                                                            class="mb__tags-text"
                                                            align="center"
                                                            style="
                                                              background: #e6f9f7;
                                                              color: #00899c;
                                                              font-family: Arial, sans-serif;
                                                              font-size: 12px;
                                                              font-weight: 400;
                                                              font-style: normal;
                                                              line-height: 12px;
                                                              vertical-align: middle;
                                                            "
                                                          >
                                                            &nbsp;{{ news.info.priceTag.content }}
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
                                                              background: #ffffff;
                                                              vertical-align: middle;
                                                              padding-right: 8px;
                                                            "
                                                          >
                                                            <img
                                                              align="left"
                                                              src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/newDigest/assets/corners/green/chips-green-right.png"
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
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </th>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>

                      <!-- Контент новости -->
                      <tr style="padding: 0; text-align: left; vertical-align: middle">
                        <!-- Текст -->
                        <th
                          style="
                            margin: 0;
                            color: #000;
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            text-align: left;
                            padding-bottom: 16px;
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
                              <td valign="top">
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
                                  {{ news.info.title.content }}
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
                                <td style="padding-right: 10px">
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
                                            background: #ffffff;
                                            color: #5d6570;
                                            font-family: Arial, sans-serif;
                                            font-size: 14px;
                                            font-weight: 400;
                                            font-style: normal;
                                            line-height: 20px;
                                            width: 84px;
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
                                              src="https://pic.mos.ru/srv/images/%D0%94%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82%20%D0%94%D0%98%D0%A2/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B4%D0%B0%D0%B9%D0%B4%D0%B6%D0%B5%D1%81%D1%82/%D0%98%D1%81%D1%85%D0%BE%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8/po-ssilke-new-new.png"
                                              alt="по ссылке"
                                              align="right"
                                              width="89"
                                              height="16"
                                              style="
                                                -ms-interpolation-mode: bicubic;
                                                margin: 0;
                                                clear: both;
                                                display: inline-block;
                                                float: none;
                                                margin: 0;
                                                outline: 0;
                                                text-align: right;
                                                text-decoration: none;
                                                width: 89px;
                                                height: 16px;
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
                      <tr>
                        <td style="font-size: 2px; line-height: 2px">&nbsp;</td>
                      </tr>
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
  <!-- КОНЕЦ РУБРИКА ГОРОДСКИЕ МЕРОПРИЯТИ -->

  <!--ОТСТУП МЕЖДУ РУБРИКАМИ-->
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
  <!--КОНЕЦ ОТСТУП МЕЖДУ РУБРИКАМИ-->
</template>
