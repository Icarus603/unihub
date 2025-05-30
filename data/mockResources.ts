
import { Resource, ResourceCategory } from '../types';
import { AcademicCapIcon, BeakerIcon, BriefcaseIcon, TrophyIcon, UsersIcon, PuzzlePieceIcon, DocumentTextIcon } from '../constants'; // Ensure correct path

export const mockResources: Resource[] = [
  {
    id: '1',
    title: {
      'zh-CN': '计算机学院保研经验分享',
      'zh-TW': '計算機學院保研經驗分享',
      'en-US': 'CS Postgraduate Advancement Experience Sharing',
      'fr-FR': 'Partage d\'Expérience sur l\'Avancement Postuniversitaire en Informatique'
    },
    description: {
      'zh-CN': '包含多位学长学姐的保研历程、面试技巧和心态调整建议。',
      'zh-TW': '包含多位學長學姊的保研歷程、面試技巧和心態調整建議。',
      'en-US': 'Includes experiences, interview tips, and mindset advice from senior students.',
      'fr-FR': 'Comprend les expériences, les conseils d\'entretien et les conseils de mentalité des étudiants seniors.'
    },
    category: ResourceCategory.POSTGRADUATE_ADVANCEMENT,
    uploader: '张三',
    uploadDate: '2023-09-15',
    fileUrl: '#mock-file-link-1',
    tags: ['计算机科学', '保研', '经验分享'],
    icon: AcademicCapIcon(),
  },
  {
    id: '2',
    title: {
      'zh-CN': '高等数学历年考研真题汇总',
      'zh-TW': '高等數學歷年考研真題彙總',
      'en-US': 'Collection of Past Advanced Mathematics Entrance Exam Papers',
      'fr-FR': 'Collection d\'Anciens Sujets d\'Examen d\'Entrée en Mathématiques Avancées'
    },
    description: {
      'zh-CN': '整理了近十年高等数学考研真题及部分答案解析。',
      'zh-TW': '整理了近十年高等數學考研真題及部分答案解析。',
      'en-US': 'Past ten years of exam papers with some answer keys.',
      'fr-FR': 'Examens des dix dernières années avec quelques corrigés.'
    },
    category: ResourceCategory.POSTGRADUATE_EXAM,
    uploader: '李四',
    uploadDate: '2024-01-20',
    fileUrl: '#mock-file-link-2',
    tags: ['高等数学', '考研', '真题'],
    icon: AcademicCapIcon(),
  },
  {
    id: '3',
    title: {
      'zh-CN': '人工智能实验室科研助理招募',
      'zh-TW': '人工智能實驗室科研助理招募',
      'en-US': 'AI Lab Research Assistant Recruitment',
      'fr-FR': 'Recrutement d\'Assistant de Recherche au Laboratoire d\'IA'
    },
    description: {
      'zh-CN': '实验室招募对机器学习、自然语言处理方向感兴趣的本科生参与科研项目。',
      'zh-TW': '實驗室招募對機器學習、自然語言處理方向感興趣的本科生參與科研項目。',
      'en-US': 'Lab recruiting undergraduate students interested in ML/NLP for research projects.',
      'fr-FR': 'Le laboratoire recrute des étudiants de premier cycle intéressés par le ML/NLP pour des projets de recherche.'
    },
    category: ResourceCategory.RESEARCH,
    uploader: 'AI实验室',
    uploadDate: '2024-03-05',
    tags: ['科研', '人工智能', '机器学习'],
    icon: BeakerIcon(),
  },
  {
    id: '4',
    title: {
      'zh-CN': '“挑战杯”全国大学生课外学术科技作品竞赛指南',
      'zh-TW': '「挑戰杯」全國大學生課外學術科技作品競賽指南',
      'en-US': '"Challenge Cup" National Student Competition Guide',
      'fr-FR': 'Guide du Concours National Étudiant "Challenge Cup"'
    },
    description: {
      'zh-CN': '详细介绍“挑战杯”竞赛的规则、流程、往年优秀作品案例及备赛建议。',
      'zh-TW': '詳細介紹「挑戰杯」競賽的規則、流程、往年優秀作品案例及備賽建議。',
      'en-US': 'Detailed guide on rules, procedures, past examples, and preparation tips.',
      'fr-FR': 'Guide détaillé sur les règles, les procédures, les exemples passés et les conseils de préparation.'
    },
    category: ResourceCategory.COMPETITION,
    uploader: '校科协',
    uploadDate: '2024-02-10',
    fileUrl: '#mock-file-link-3',
    tags: ['挑战杯', '竞赛', '学术科技'],
    icon: TrophyIcon(),
  },
  {
    id: '5',
    title: {
      'zh-CN': '暑期软件开发实习岗位（某知名互联网公司）',
      'zh-TW': '暑期軟體開發實習崗位（某知名互聯網公司）',
      'en-US': 'Summer Software Development Internship (Tech Company)',
      'fr-FR': 'Stage d\'Été en Développement Logiciel (Entreprise Technologique)'
    },
    description: {
      'zh-CN': '面向大三学生，提供有竞争力的实习薪酬和转正机会。',
      'zh-TW': '面向大三學生，提供有競爭力的實習薪酬和轉正機會。',
      'en-US': 'For junior students, competitive pay and potential for full-time offer.',
      'fr-FR': 'Pour les étudiants de troisième année, salaire compétitif et possibilité d\'offre à temps plein.'
    },
    category: ResourceCategory.INTERNSHIP,
    uploader: '就业指导中心',
    uploadDate: '2024-04-01',
    tags: ['实习', '软件开发', '互联网'],
    icon: BriefcaseIcon(),
  },
  {
    id: '6',
    title: {
      'zh-CN': '学生会换届选举通知及章程',
      'zh-TW': '學生會換屆選舉通知及章程',
      'en-US': 'Student Union Election Notice & Charter',
      'fr-FR': 'Avis d\'Élection et Charte du Syndicat Étudiant'
    },
    description: {
      'zh-CN': '包含新一届学生会干部选举的详细流程、候选人要求及报名方式。',
      'zh-TW': '包含新一屆學生會幹部選舉的詳細流程、候選人要求及報名方式。',
      'en-US': 'Detailed process for new student union elections, candidate requirements, and application.',
      'fr-FR': 'Processus détaillé pour les élections du nouveau syndicat étudiant, exigences des candidats et candidature.'
    },
    category: ResourceCategory.STUDENT_WORK,
    uploader: '学生会',
    uploadDate: '2024-05-05',
    fileUrl: '#mock-file-link-4',
    tags: ['学生会', '选举', '学生工作'],
    icon: UsersIcon(),
  },
  {
    id: '7',
    title: {
      'zh-CN': '摄影社秋季招新与作品展',
      'zh-TW': '攝影社秋季招新與作品展',
      'en-US': 'Photography Club Autumn Recruitment & Exhibition',
      'fr-FR': 'Recrutement d\'Automne et Exposition du Club de Photographie'
    },
    description: {
      'zh-CN': '摄影社招募新成员，并举办年度作品展，欢迎摄影爱好者参加。',
      'zh-TW': '攝影社招募新成員，並舉辦年度作品展，歡迎攝影愛好者參加。',
      'en-US': 'Recruiting new members and hosting annual photo exhibition. Photography enthusiasts welcome.',
      'fr-FR': 'Recrutement de nouveaux membres et organisation de l\'exposition photo annuelle. Amateurs de photographie bienvenus.'
    },
    category: ResourceCategory.CLUB_ACTIVITY,
    uploader: '摄影社',
    uploadDate: '2023-09-01',
    tags: ['社团', '摄影', '招新'],
    icon: PuzzlePieceIcon(),
  },
  {
    id: '8',
    title: {
      'zh-CN': '《线性代数》期末复习笔记（学生回忆版）',
      'zh-TW': '《線性代數》期末複習筆記（學生回憶版）',
      'en-US': 'Linear Algebra Final Exam Review Notes (Student Recollection)',
      'fr-FR': 'Notes de Révision pour l\'Examen Final d\'Algèbre Linéaire (Souvenir d\'Étudiant)'
    },
    description: {
      'zh-CN': '某同学整理的线性代数期末考试重点知识点、例题和解题技巧。',
      'zh-TW': '某同學整理的線性代數期末考試重點知識點、例題和解題技巧。',
      'en-US': 'Key concepts, example problems, and solving techniques for Linear Algebra final exam, compiled by a student.',
      'fr-FR': 'Concepts clés, exemples de problèmes et techniques de résolution pour l\'examen final d\'algèbre linéaire, compilés par un étudiant.'
    },
    category: ResourceCategory.EXAM_MATERIAL,
    uploader: '匿名用户',
    uploadDate: '2023-12-10',
    fileUrl: '#mock-file-link-5',
    tags: ['线性代数', '期末考试', '复习资料'],
    icon: DocumentTextIcon(),
  }
];
    