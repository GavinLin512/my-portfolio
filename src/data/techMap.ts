export interface TechConfig {
  hex: string; // 品牌色碼
  iconClass: string; // FontAwesome class
}

const defineTech = (hex: string, iconClass: string): TechConfig => ({
  hex,
  iconClass
});

export const defaultTech: TechConfig = {
  hex: "#a1a1aa", // 預設灰色
  iconClass: "fa-solid fa-code"
};

export const techMap: Record<string, TechConfig> = {
  "php": defineTech("#777BB4", "fa-brands fa-php"),
  "laravel": defineTech("#FF2D20", "fa-brands fa-laravel"),
  "bootstrap": defineTech("#7952B3", "fa-brands fa-bootstrap"),
  "javascript": defineTech("#F7DF1E", "fa-brands fa-js"),
  "react": defineTech("#61DAFB", "fa-brands fa-react"),
  "vue": defineTech("#4FC08D", "fa-brands fa-vuejs"),
  "mysql": defineTech("#4479A1", "fa-solid fa-database"),
  "sql server": defineTech("#CC2927", "fa-solid fa-server"),
  "git": defineTech("#F05032", "fa-brands fa-git-alt"),
  "xml": defineTech("#F29D00", "fa-solid fa-file-code"),
  "restful api": defineTech("#009688", "fa-solid fa-plug"),
  "soap web service": defineTech("#D40000", "fa-solid fa-envelope"),
  "ftp": defineTech("#21759B", "fa-solid fa-network-wired"),
  "web accessibility": defineTech("#4A90E2", "fa-solid fa-universal-access"),
  "amchart": defineTech("#67B7DC", "fa-solid fa-chart-pie"),
  "tgos map": defineTech("#4CAF50", "fa-solid fa-map-location-dot"),
  "html5 & css3": defineTech("#E34F26", "fa-brands fa-html5")
};

export function getTechConfig(tagName: string): TechConfig {
  const key = tagName.toLowerCase();
  
  if (techMap[key]) return techMap[key];
  
  // 部分匹配
  if (key.includes("php")) return techMap["php"];
  if (key.includes("laravel")) return techMap["laravel"];
  if (key.includes("bootstrap")) return techMap["bootstrap"];
  if (key.includes("sql")) return techMap["sql server"];
  if (key.includes("mysql")) return techMap["mysql"];
  if (key.includes("react")) return techMap["react"];
  if (key.includes("vue")) return techMap["vue"];
  if (key.includes("javascript") || key.includes("js")) return techMap["javascript"];
  if (key.includes("git")) return techMap["git"];
  if (key.includes("api")) return techMap["restful api"];
  if (key.includes("map")) return techMap["tgos map"];
  if (key.includes("chart")) return techMap["amchart"];
  if (key.includes("html") || key.includes("css")) return techMap["html5 & css3"];
  if (key.includes("web") || key.includes("accessibility")) return techMap["web accessibility"];
  
  return defaultTech;
}
