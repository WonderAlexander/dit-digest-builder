// Функция для скачивания файла HTML
export const useEmailHTML = (emailInner: any): void => {
  const content = emailInner.innerHTML.replace(/</g, '\n<') // добавляем переносы строк перед каждым тегом
  const digestHTML = `
    <!DOCTYPE html>
  <!-- saved from url=(0140)https://internal.dit.mos.ru/digest_ib/2023/1_23.html?muid=4ee2ac25-5a8f-4c75-b218-6a7f401621b3&category=4bd2ab6d-286b-4cec-84c4-89728dedb630 -->
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en" xml:lang="en" style="background:#EAEAEA!important">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <style>
  
        // Базовые стили
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
  
  
        .container__mb-full {
            width: 95%;
        }
  
  
        .btn__mb {
            display: none !important;
        }
  
        .desktop_hide {
            display: none !important;
        }
        h2 span {font-size:14px; font-weight:400; color:#000}
        th.autor {display:inline-block!important;}
        .last {width:100%}
        @media only screen and (max-width:596px) {
            .mb__height {
              height: auto !important; 
            }
            .btn__row {
                display: inline-block !important;
                width: 100% !important;
            }
  
            .icons__row {
                display: inline-block !important;
            }
            table.body img{width:auto;height:auto}
            table.body center{min-width:0!important}
            table.body .container{width:95%!important}
            .columns.columnsarrows_new{height:auto!important;-moz-box-sizing:border-box; -webkit-box-sizing:border-box;box-sizing:border-box;padding-left:5px!important;padding-right:5px!important}            .columns{height:auto!important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:16px!important;padding-right:16px!important}
            table.body .columnsarrows{height:auto!important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}
            .sepparator {width:5px !important}
            table.body .collapse .columns{padding-left:0!important;padding-right:0!important}
            table.body .collapse .pd__mob {padding-left:16px !important;padding-right:16px !important}
            th.mob_pb {padding-bottom: 20px !important;}
            th.small-3{display:inline-block!important;width:30%!important;}
            th.small-33{display:inline-block!important;width:33%!important;}
            th.small-33 p {padding-top:1px!important;}
            th.small-4{display:inline-block!important;width:45%!important;}
            th.small-40 {display:inline-block!important;width:40%!important;}
            th.small-6{display:inline-block!important;width:50%!important;}
            th.small-7{display:inline-block!important;width:20%!important;}
            th.small-13{display:inline-block!important;width:18%!important;margin-left:5px!important;}
            th.small-12{display:inline-block!important;width:100%!important; min-height: auto !important;}
            th.small-12 center {min-height: auto !important;}
            th.small-14{display:inline-block!important;width:70%!important}
            .strech {display:table!important;width:100%!important;}
            .show_mobile {width:100%!important; height:auto!important; opacity:1!important; display: block;}
            .hide_mobile {width:1px!important; height:1px!important; opacity:0!important; min-height: 0 !important; display: none;}
            .news_text {font-size:16px!important; line-height:18px!important;margin-bottom:12px!important;}
  
            table.flexible {width:100% !important;margin-right:0;margin-left:0;float:none;}
  
            .section__devider {
                height: 32px !important;
            }
  
            .pd__mob {
                padding-left: 16px !important;
                padding-right: 16px !important;
            }
  
            .btn__mb {
                display: block !important;
            }
  
            .btn__desktop {
                display: none !important;
            }
  
            .news__btn {
                width: 30% !important;
            }
  
            .btn__mb-text {
                font-size: 14px !important;
                line-height: 16px !important;
                margin-bottom: 8px !important;
            }
  
            .tag__mb-text {
                font-size: 12px !important;
                line-height: 12px !important;
                margin-bottom: 12px !important;
                color: #5D6570;
            }
  
            .news_header {
                margin-top: 8px !important;
            }
  
            td.pl16.pr16.news_top_1.pt16 {
                padding-bottom: 0 !important;
            }
  
            .spacer {
                width: 92% !important;
                margin: 0 auto;
            }
  
            .height__mob {
                min-height: 0;
            }
  
            .mb__pd-12 {
                padding-top: 12px !important;
            }
  
            .mb__pd-8 {
                padding-bottom: 8px !important;
            }
  
            .mb__pdt-0 {
                padding-top: 0 !important;
            }
  
            .mob__mb-8 {
                margin-bottom: 8px !important;
            }
  
            .mob__mb-20 {
                margin-bottom: 20px !important;
            }
  
            .mob_mb-16 {
                margin-bottom: 16px !important;
            }
  
            .mob__mt-0 {
                margin-top: 0px !important;
            }
  
            .mob__person {
                width: 70px !important;
                height: 70px !important;
                min-height: 70px !important;
            }
  
            .person__img-wrapper {
                min-width: 70px !important;
                min-height: 70px !important;
                width: 70px !important;
                height: 70px !important;
                padding-right: 16px !important;
            }
  
            .mob_pd-0 {
                padding: 0 !important;
            }
  
            .md_new_line {
                width: 100%;
                height: 30px;
            }
  
            .mobile__row {
                display: block !important;
            }
  
            .mobile__row:first-child {
                padding-bottom: 12px;
            }
  
            .container__mb-full {
                width: 100% !important;
            }
  
            .footer__links {
                display: block !important;
                width: 100% !important;
                padding: 0 !important;
            }
  
            .footer__links img {
                width: 100% !important;
                max-width: 100% !important;
            }
  
            .footer__links:first-child {
                padding-bottom: 16px !important;
            }
  
            .footer {
                min-width: 300px !important;
            }
  
            .footer img {
                width: 100% !important;
                max-width: 100% !important;
            }
  
            .inform__height {
                height: 16px !important;
            }
  
            .mb__tags-text {
                font-size: 10px !important;
            }
  
            .services__pd {
                padding-top: 12px !important;
            }
  
            .footer__width {
                width: 95% !important;
            }
  
  
        }
  
  
  
    </style>
  </head>
  <body bgcolor="#EAEAEA" style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#EAEAEA!important;box-sizing:border-box;color:#0D0802;font-family:Arial, sans-serif;font-size:12px;font-weight:400;line-height:1.5;margin:0;min-width:100%;padding:0;text-align:center;width:100%!important">
  
  <!-- Прехедер -->
  <span class="preheader" style="color: #f2f2f2; display: none !important; font-size: 1px; line-height: 0; max-width: 0; mso-hide:all; opacity: 0; overflow: hidden; visibility: hidden;">Значимые события ДИТ за прошедшую неделю</span>
  <!-- Конец Прехедер-->
  
    ${content}
  
  <!-- prevent Gmail on iOS font size manipulation -->
  <div style="display:none;white-space:nowrap;font:15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
  
  </body>
  </html>
  `
  const blob: Blob = new Blob([digestHTML], { type: 'text/html' })
  const url: string = URL.createObjectURL(blob)
  const a: HTMLAnchorElement = document.createElement('a')
  a.href = url
  a.download = 'Дайджест.html'
  a.click()
  URL.revokeObjectURL(url)
}
