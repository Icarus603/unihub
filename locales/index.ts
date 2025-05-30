
import { Translations, LanguageCode } from '../types';

export const translations: Translations = {
  appTitle: {
    'zh-CN': '校园资源中心',
    'zh-TW': '校園資源中心',
    'en-US': 'Campus Resource Hub',
    'fr-FR': 'Centre de Ressources du Campus',
  },
  navBrowse: {
    'zh-CN': '浏览资源',
    'zh-TW': '瀏覽資源',
    'en-US': 'Browse Resources',
    'fr-FR': 'Parcourir les Ressources',
  },
  navUpload: {
    'zh-CN': '上传资源',
    'zh-TW': '上傳資源',
    'en-US': 'Upload Resource',
    'fr-FR': 'Télécharger une Ressource',
  },
  navAiSearch: {
    'zh-CN': 'AI智能搜索',
    'zh-TW': 'AI智能搜尋',
    'en-US': 'AI Smart Search',
    'fr-FR': 'Recherche Intelligente IA',
  },
  allCategories: {
    'zh-CN': '所有分类',
    'zh-TW': '所有分類',
    'en-US': 'All Categories',
    'fr-FR': 'Toutes Catégories',
  },
  uploadFormTitle: {
    'zh-CN': '上传新资源',
    'zh-TW': '上傳新資源',
    'en-US': 'Upload New Resource',
    'fr-FR': 'Télécharger une Nouvelle Ressource',
  },
  fieldTitle: {
    'zh-CN': '标题',
    'zh-TW': '標題',
    'en-US': 'Title',
    'fr-FR': 'Titre',
  },
  fieldDescription: {
    'zh-CN': '描述',
    'zh-TW': '描述',
    'en-US': 'Description',
    'fr-FR': 'Description',
  },
  fieldCategory: {
    'zh-CN': '分类',
    'zh-TW': '分類',
    'en-US': 'Category',
    'fr-FR': 'Catégorie',
  },
  fieldFile: {
    'zh-CN': '文件',
    'zh-TW': '檔案',
    'en-US': 'File',
    'fr-FR': 'Fichier',
  },
  fieldTags: {
    'zh-CN': '标签 (逗号分隔)',
    'zh-TW': '標籤 (逗號分隔)',
    'en-US': 'Tags (comma-separated)',
    'fr-FR': 'Étiquettes (séparées par des virgules)',
  },
  buttonUpload: {
    'zh-CN': '上传',
    'zh-TW': '上傳',
    'en-US': 'Upload',
    'fr-FR': 'Télécharger',
  },
  uploadSuccess: {
    'zh-CN': '资源上传成功 (模拟)!',
    'zh-TW': '資源上傳成功 (模擬)!',
    'en-US': 'Resource uploaded successfully (mock)!',
    'fr-FR': 'Ressource téléchargée avec succès (simulation)!',
  },
  aiSearchTitle: {
    'zh-CN': 'AI 智能资源搜索',
    'zh-TW': 'AI 智能資源搜尋',
    'en-US': 'AI Smart Resource Search',
    'fr-FR': 'Recherche Intelligente de Ressources IA',
  },
  aiSearchPlaceholder: {
    'zh-CN': '例如: "计算机专业的实习机会" 或 "微积分期末复习资料"',
    'zh-TW': '例如: "電腦專業的實習機會" 或 "微積分期末複習資料"',
    'en-US': 'e.g., "internships for computer science students" or "calculus final exam notes"',
    'fr-FR': 'ex: "stages pour étudiants en informatique" ou "notes d\'examen final de calcul"',
  },
  buttonSearch: {
    'zh-CN': '搜索',
    'zh-TW': '搜尋',
    'en-US': 'Search',
    'fr-FR': 'Rechercher',
  },
  aiSearching: {
    'zh-CN': 'AI 正在思考中...',
    'zh-TW': 'AI 正在思考中...',
    'en-US': 'AI is thinking...',
    'fr-FR': 'L\'IA réfléchit...',
  },
  aiError: {
    'zh-CN': 'AI搜索出错，请稍后再试。',
    'zh-TW': 'AI搜尋出錯，請稍後再試。',
    'en-US': 'AI search error. Please try again later.',
    'fr-FR': 'Erreur de recherche IA. Veuillez réessayer plus tard.',
  },
  aiNoResults: {
    'zh-CN': 'AI未能找到相关结果。',
    'zh-TW': 'AI未能找到相關結果。',
    'en-US': 'AI could not find relevant results.',
    'fr-FR': 'L\'IA n\'a pas trouvé de résultats pertinents.',
  },
  uploaderLabel: {
    'zh-CN': '上传者',
    'zh-TW': '上傳者',
    'en-US': 'Uploader',
    'fr-FR': 'Téléchargeur',
  },
  dateLabel: {
    'zh-CN': '日期',
    'zh-TW': '日期',
    'en-US': 'Date',
    'fr-FR': 'Date',
  },
  tagsLabel: {
    'zh-CN': '标签',
    'zh-TW': '標籤',
    'en-US': 'Tags',
    'fr-FR': 'Étiquettes',
  },
  viewFile: {
    'zh-CN': '查看文件',
    'zh-TW': '查看檔案',
    'en-US': 'View File',
    'fr-FR': 'Voir le Fichier',
  },
  searchGroundingSources: {
    'zh-CN': '信息来源 (Google 搜索):',
    'zh-TW': '資訊來源 (Google 搜尋):',
    'en-US': 'Information Sources (Google Search):',
    'fr-FR': 'Sources d\'Information (Recherche Google):',
  },
  footerText: {
    'zh-CN': '© 2024 校园资源中心. 保留所有权利.',
    'zh-TW': '© 2024 校園資源中心. 保留所有權利.',
    'en-US': '© 2024 Campus Resource Hub. All rights reserved.',
    'fr-FR': '© 2024 Centre de Ressources du Campus. Tous droits réservés.',
  }
};

export function getTranslation(key: string, lang: LanguageCode): string {
  return translations[key]?.[lang] || key;
}
    