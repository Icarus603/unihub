
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ResourceCategory } from '../types';
import { CATEGORY_DETAILS, ALL_CATEGORIES_INFO } from '../constants';

interface CategorySidebarProps {
  selectedCategory: ResourceCategory | null;
  onSelectCategory: (category: ResourceCategory | null) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ selectedCategory, onSelectCategory }) => {
  const { language, t } = useLanguage();

  return (
    <div className="w-64 bg-white p-6 shadow-md rounded-lg h-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('fieldCategory')}</h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onSelectCategory(null)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-150 ease-in-out
              ${selectedCategory === null ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
          >
            {t('allCategories')}
          </button>
        </li>
        {ALL_CATEGORIES_INFO.map((catInfo) => (
          <li key={catInfo.key}>
            <button
              onClick={() => onSelectCategory(catInfo.key)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-150 ease-in-out
                ${selectedCategory === catInfo.key ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
            >
              <span className="mr-2">{catInfo.icon}</span>
              {CATEGORY_DETAILS[catInfo.key].name[language]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
    