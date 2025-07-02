// src/data/projects.ts
import type { Project, Experience, Education, Skill } from "./types";

// 導出一個符合 Project[] 型別的陣列
export const projects: Project[] = [
  {
    title: "藥檢申報資料管理平台（維護＆開發）",
    descriptions: [
      "提供藥品申報資料的查詢、編輯、刪除、匯出等功能",
      "7 個不同的版本權限、協助開發大型動態表單",
      "改寫 model 邏輯優化匯出效能，同樣的匯出條件下，匯出時間從 80 秒提升至 2 秒，顯著提升效能",
      "比對誤判資料筆數從20000多筆降至2000多筆，多數為舊有缺失資料，顯著提升資料比對正確率",
    ],
    images: [
      "/ERP_login.png",
      "/ERP_front.png",
      "/ERP_form_1.png",
      "/ERP_form_2.png",
      "/ERP_log_dashboard.png",
      "/ERP_log_detail.png",
    ],
    tags: ["PHP", "Laravel", "BootStrap 4", "Soap Web Service", "SQL Server"],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: "ERP system",
  },
  {
    title: "徵信報告下單平台（維護＆開發）",
    descriptions: [
      "提供徵信報告的下單、查詢、編輯、刪除、匯出等功能，並提供電匯與刷卡支付方式",
      "協助翻新專案前台版面架構，更符合現代化設計",
      "複雜的報告系統，根據不同情況串接國內外系統之api，從下單到產生pdf報告到會員手上",
      "因應資安規範，將含個資DB欄位進行加密",
    ],
    images: ["/CRM_login.png", "/CRM_front.png", "/CRM_back.png"],
    tags: [
      "PHP",
      "Laravel",
      "BootStrap 5",
      "MySql",
      "XML",
      "Restful API",
      "FTP",
    ],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: "e-commerce website & CRM system",
  },
  {
    title: "內容管理平台（維護＆開發）",
    descriptions: [
      "提供內容管理、文章管理、會員筆記、會員書籤等功能",
      "前台改版 + 無障礙等級 A",
      "串接 TGOS 地圖圖資",
      "運用 AmChart 進行圖表繪製",
      "使用者輸入資料同時串接 api 查詢，查詢結果代入另一個欄位",
    ],
    images: ["/CMS_front.png", "/CMS_back.png"],
    tags: [
      "PHP",
      "Laravel",
      "BootStrap 4",
      "Web Accessibility",
      "AmChart",
      "TGOS Map",
    ],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: "CMS",
  },
];

export const experience: Experience[] = [
  {
    role: "全端工程師",
    company: "豪銳科技有限公司",
    period: "Aug. 2021 - Apr. 2025",
    descriptions: [
      "維護＆開發類 ERP 系統、內容管理系統",
      "使用 JavaScript 實作複雜動態表單之CRUD",
      "使用 log-viewer 查看網站運作並協助處理 Bug",
      "網站畫面 RWD 排版，前端串接 API",
      "協助撰寫程式設計規格書及其他相關文件",
      "維護 Vue、AngularJS、React專案",
    ],
  },
  {
    role: "裝機工程師",
    company: "右棋科技有限公司",
    period: "July 2020 - Feb. 2021",
    descriptions: [
      "組裝、拆卸半導體蝕刻製程相關機台",
      "協助客戶處理機台相關事宜",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "光電工程學系",
    institution: "國立中山大學",
    period: "Sep 2018 - Jun 2020",
  },
];

export const skills: Skill[] = [
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Bootstrap",
  "PHP",
  "MySQL",
  "SQL Server",
  "Laravel",
  "Git & GitHub",
];
