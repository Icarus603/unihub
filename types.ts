
export enum ResourceCategory {
  POSTGRADUATE_ADVANCEMENT = 'postgraduate_advancement', // 保研
  POSTGRADUATE_EXAM = 'postgraduate_exam', // 考研
  RESEARCH = 'research', // 科研
  COMPETITION = 'competition', // 竞赛
  INTERNSHIP = 'internship', // 实习
  STUDENT_WORK = 'student_work', // 学生工作
  CLUB_ACTIVITY = 'club_activity', // 社团活动
  EXAM_MATERIAL = 'exam_material' // 期末考试资料
}

export interface Resource {
  id: string;
  title: LocaleString;
  description: LocaleString;
  category: ResourceCategory;
  uploader: string; // Mock uploader name
  uploadDate: string; // e.g., "2024-07-29"
  fileUrl?: string; // Mock file URL
  tags: string[];
  icon?: React.ReactNode; // Optional: for category-specific icon
}

export type LanguageCode = 'zh-CN' | 'zh-TW' | 'en-US' | 'fr-FR';

export interface Language {
  code: LanguageCode;
  name: string;
}

export interface LocaleString {
  'zh-CN': string;
  'zh-TW': string;
  'en-US': string;
  'fr-FR': string;
}

export interface Translations {
  [key: string]: LocaleString;
}

export interface CategoryInfo {
  key: ResourceCategory;
  icon: React.ReactNode;
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web?: GroundingChunkWeb;
  retrieval?: unknown; // Define if needed for other types
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
  searchQueries?: string[];
}
    