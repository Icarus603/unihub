
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ResourceCategory, LocaleString } from '../types';
import { CATEGORY_DETAILS } from '../constants';

const UploadForm: React.FC = () => {
  const { language, t } = useLanguage();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<ResourceCategory>(ResourceCategory.POSTGRADUATE_ADVANCEMENT);
  const [tags, setTags] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock upload logic
    console.log({ title, description, category, file, tags: tags.split(',').map(tag => tag.trim()) });
    setMessage(t('uploadSuccess'));
    setTitle('');
    setDescription('');
    setCategory(ResourceCategory.POSTGRADUATE_ADVANCEMENT);
    setFile(null);
    setTags('');
    // Clear message after some time
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{t('uploadFormTitle')}</h2>
      {message && <div className="mb-4 p-3 rounded-md bg-green-100 text-green-700 text-center">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">{t('fieldTitle')}</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">{t('fieldDescription')}</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">{t('fieldCategory')}</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as ResourceCategory)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
          >
            {Object.values(ResourceCategory).map(catKey => (
              <option key={catKey} value={catKey}>
                {CATEGORY_DETAILS[catKey].name[language]}
              </option>
            ))}
          </select>
        </div>
         <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">{t('fieldTags')}</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder={t('fieldTags') as string}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">{t('fieldFile')}</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {t('buttonUpload')}
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
    