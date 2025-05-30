
import React from 'react';
import { Resource, LanguageCode } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { CATEGORY_DETAILS } from '../constants';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-indigo-500 mr-2">{CATEGORY_DETAILS[resource.category].icon}</span>
          <h2 className="text-xl font-semibold text-gray-800 truncate" title={resource.title[language]}>
            {resource.title[language]}
          </h2>
        </div>
        <p className="text-gray-600 text-sm mb-4 h-20 overflow-y-auto custom-scrollbar">
          {resource.description[language]}
        </p>
        
        <div className="text-xs text-gray-500 mb-1">
          <span className="font-medium">{t('fieldCategory')}:</span> {CATEGORY_DETAILS[resource.category].name[language]}
        </div>
        <div className="text-xs text-gray-500 mb-1">
          <span className="font-medium">{t('uploaderLabel')}:</span> {resource.uploader}
        </div>
        <div className="text-xs text-gray-500 mb-3">
          <span className="font-medium">{t('dateLabel')}:</span> {resource.uploadDate}
        </div>

        {resource.tags && resource.tags.length > 0 && (
          <div className="mb-4">
            <span className="text-xs font-medium text-gray-500">{t('tagsLabel')}: </span>
            {resource.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {resource.fileUrl && (
          <a
            href={resource.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-150 ease-in-out"
          >
            {t('viewFile')}
          </a>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
    