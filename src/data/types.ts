// 定義 Project 資料結構型別
export interface Project {
  title: string;
  descriptions: {
    title: string;
    content: string;
  }[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  aiHint: string;
  images: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  descriptions: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export type Skill = string; 

export type Images = string;