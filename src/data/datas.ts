// 專案資料
import type { Project, Experience, Education, Skill } from "./types";

// 匯出符合 Project[] 型別的陣列 
export const projects: Project[] = [
  {
    title: "藥檢申報資料管理平台（維護＆開發）",
    descriptions: [
      {
        title: "效能優化 (Performance Tuning)",
        content: "重構資料匯出邏輯，透過優化 SQL 查詢與記憶體管理，將大量數據匯出時間<span class=\"text-primary\">由 80 秒縮短至 2 秒（提升 40 倍效能）</span>，大幅改善使用者體驗。"
      },
      {
        title: "資料演算法精準化",
        content: "改良舊有資料比對演算法，將系統誤判筆數<span class=\"text-primary\">由 20,000+ 筆大幅降低至 2,000+ 筆</span>，有效解決歷史資料缺失問題，提升資料正確率與稽核效率。"
      },
      {
        title: "複雜權限與動態表單",
        content: "設計<span class=\"text-primary\">支援 7 種層級的 RBAC 權限架構</span>，並開發<span class=\"text-primary\">大型動態表單引擎</span>，滿足不同角色在申報流程中的多樣化需求。"
      },
      {
        title: "全端功能實作",
        content: "負責從資料庫設計到前端互動的完整 CRUD 開發，確保申報資料的完整生命週期管理"
      }
    ],
    images: [
      "/ERP_login.png",
      "/ERP_front.png",
      "/ERP_form_1.png",
      "/ERP_form_2.png",
      "/ERP_log_dashboard.png",
      "/ERP_log_detail.png",
    ],
    tags: ["PHP", "Laravel", "BootStrap 5", "Soap Web Service", "SQL Server"],
    liveUrl: "#",
    githubUrl: "#",
    aiHint: "ERP system",
  },
  {
    title: "徵信報告下單平台（維護＆開發）",
    descriptions: [
      {
        title: "第三方系統整合 (System Integration)",
        content: "設計跨系統整合架構，根據動態業務邏輯串接多個國內外外部 API，實現從下單觸發到<span class=\"text-primary\">自動化生成 PDF 徵信報告</span>的完整工作流。"
      },
      {
        title: "金流支付串接",
        content: "實作完整的電商交易流程，<span class=\"text-primary\">整合第三方金流服務（支援電匯與信用卡支付）</span>，確保交易狀態的即時性與準確性。"
      },
      {
        title: "資安合規實作 (Data Security)",
        content: "因應個資法與資安規範，針對敏感資料（PII）實作<span class=\"text-primary\">資料庫欄位級別加密 (Column-level Encryption)</span>，確保使用者隱私安全。"
      },
      {
        title: "現代化前端架構",
        content: "主導前台介面翻新工程，優化 UI/UX 設計與切版架構，提升網站的現代感與響應式體驗。"
      }
    ],
    images: ["/CRM_login.png", "/CRM_front.png", "/CRM_back.png"],
    tags: [
      "PHP",
      "Laravel",
      "React",
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
      {
        title: "地圖與資料視覺化",
        content: "整合<span class=\"text-primary\"> TGOS 地圖圖資</span>與<span class=\"text-primary\"> AmChart 圖表庫</span>，將複雜的地理與統計數據轉化為直觀的互動式圖表，提升數據可讀性。"
      },
      {
        title: "無障礙網頁開發 (Web Accessibility)",
        content: "遵循 WCAG 規範進行前台改版，成功通過<span class=\"text-primary\"> 無障礙標章 A 等級 </span>認證，確保網站對所有族群的友善度。"
      },
      {
        title: "優化使用者互動體驗",
        content: "實作即時查詢建議功能 (Typeahead/Autocomplete)，在使用者輸入同時非同步串接 API 撈取資料並自動代入欄位，減少輸入錯誤並提升填寫效率。"
      },
      {
        title: "CMS 功能開發",
        content: "建構完整的內容管理系統，包含文章發布、會員筆記與書籤管理功能。"
      }
    ],
    images: ["/CMS_front.png", "/CMS_back.png"],
    tags: [
      "PHP",
      "Laravel",
      "Vue",
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
      "使用 Vue、AngularJS、React 進行開發＆維護",
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
  "React",
  "Vue",
  "PHP",
  "MySQL",
  "SQL Server",
  "Laravel",
  "Git & GitHub",
  "Web Accessibility",
];
