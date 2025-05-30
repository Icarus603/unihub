
import React from 'react';
import { Language, ResourceCategory, CategoryInfo, LocaleString, LanguageCode } from './types';

export const DEFAULT_LANGUAGE: LanguageCode = 'zh-CN';

export const LANGUAGES: Language[] = [
  { code: 'zh-CN', name: '简体中文' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'en-US', name: 'English' },
  { code: 'fr-FR', name: 'Français' },
];

export const GlobeAltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3.75h.008v.008H12v-.008zM12 15h.008v.008H12v-.008zm0 2.25h.008v.008H12v-.008zM3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5M5.625 1.5H5.625a1.125 1.125 0 011.125 1.125v17.25m0-17.25h10.5m0 0v17.25m0-17.25H18.375m0 0A1.125 1.125 0 0019.5 5.625v12.75A1.125 1.125 0 0018.375 21H5.625a1.125 1.125 0 00-1.125-1.125V5.625A1.125 1.125 0 005.625 4.5H18.375z" />
  </svg>
);


export const AcademicCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

export const BriefcaseIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-4.073M15.75 10.5h-7.5M15.75 10.5V3.75c0-.95-.82-1.75-1.75-1.75h-3.5c-.95 0-1.75.8-1.75 1.75v6.75M15.75 10.5L16.5 19.5m-7.5-9L5.25 19.5" />
  </svg>
);

export const BeakerIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

export const TrophyIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 9.75H11.25A3.375 3.375 0 007.5 13.125V18.75m9 0h1.5M4.5 18.75h1.5m0-13.5A2.25 2.25 0 017.5 3h9a2.25 2.25 0 012.25 2.25v9.75M4.5 18.75c0-1.036.84-1.875 1.875-1.875h11.25c1.035 0 1.875.84 1.875 1.875M12 12.75h.008v.008H12v-.008z" />
  </svg>
);

export const UsersIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.658M18 18.72A9.096 9.096 0 0112 21.75c-2.676 0-5.084-.984-7.072-2.647M12 9.75A3 3 0 0115 6.75v1.5a3 3 0 01-6 0v-1.5A3 3 0 0112 9.75z" />
  </svg>
);

export const PuzzlePieceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.083A11.952 11.952 0 0118.75 9.75M14.25 6.083c-.092-.381-.197-.753-.313-1.117A11.952 11.952 0 006 9.75M14.25 6.083 16.5 9.75M3.75 9.75h16.5M3.75 9.75c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5M3.75 9.75A2.25 2.25 0 006 12h12a2.25 2.25 0 002.25-2.25M16.5 9.75V6.083A2.25 2.25 0 0014.25 3.833H9.75A2.25 2.25 0 007.5 6.083V9.75m0 0H6A2.25 2.25 0 013.75 7.5V5.25A2.25 2.25 0 016 3h12a2.25 2.25 0 012.25 2.25v2.25A2.25 2.25 0 0118 7.5h-1.5" />
  </svg>
);

export const DocumentTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);


export const CATEGORY_DETAILS: Record<ResourceCategory, { name: LocaleString; icon: React.ReactNode }> = {
  [ResourceCategory.POSTGRADUATE_ADVANCEMENT]: { 
    name: { 
      'zh-CN': '保研信息', 'zh-TW': '保研資訊', 'en-US': 'Postgraduate Advancement', 'fr-FR': 'Avancement Postuniversitaire' 
    }, 
    icon: <AcademicCapIcon /> 
  },
  [ResourceCategory.POSTGRADUATE_EXAM]: { 
    name: { 
      'zh-CN': '考研资料', 'zh-TW': '考研資料', 'en-US': 'Postgraduate Entrance Exam', 'fr-FR': 'Examen d\'Entrée Postuniversitaire' 
    }, 
    icon: <AcademicCapIcon /> 
  },
  [ResourceCategory.RESEARCH]: { 
    name: { 
      'zh-CN': '科研机会', 'zh-TW': '科研機會', 'en-US': 'Research Opportunities', 'fr-FR': 'Opportunités de Recherche' 
    }, 
    icon: <BeakerIcon /> 
  },
  [ResourceCategory.COMPETITION]: { 
    name: { 
      'zh-CN': '竞赛信息', 'zh-TW': '競賽資訊', 'en-US': 'Competition Info', 'fr-FR': 'Informations sur les Compétitions' 
    }, 
    icon: <TrophyIcon /> 
  },
  [ResourceCategory.INTERNSHIP]: { 
    name: { 
      'zh-CN': '实习机会', 'zh-TW': '實習機會', 'en-US': 'Internship Opportunities', 'fr-FR': 'Opportunités de Stage' 
    }, 
    icon: <BriefcaseIcon /> 
  },
  [ResourceCategory.STUDENT_WORK]: { 
    name: { 
      'zh-CN': '学生工作', 'zh-TW': '學生工作', 'en-US': 'Student Work', 'fr-FR': 'Travail Étudiant' 
    }, 
    icon: <UsersIcon /> 
  },
  [ResourceCategory.CLUB_ACTIVITY]: { 
    name: { 
      'zh-CN': '社团活动', 'zh-TW': '社團活動', 'en-US': 'Club Activities', 'fr-FR': 'Activités des Clubs' 
    }, 
    icon: <PuzzlePieceIcon /> 
  },
  [ResourceCategory.EXAM_MATERIAL]: { 
    name: { 
      'zh-CN': '期末资料', 'zh-TW': '期末資料', 'en-US': 'Exam Materials', 'fr-FR': 'Matériel d\'Examen' 
    }, 
    icon: <DocumentTextIcon /> 
  },
};

export const ALL_CATEGORIES_INFO: CategoryInfo[] = Object.entries(CATEGORY_DETAILS).map(([key, value]) => ({
  key: key as ResourceCategory,
  icon: value.icon,
}));

export const GEMINI_MODEL_TEXT = 'gemini-2.5-flash-preview-04-17';
