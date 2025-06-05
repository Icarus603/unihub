
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import CategorySidebar from './components/CategorySidebar';
import ResourceList from './components/ResourceList';
import UploadForm from './components/UploadForm';
import AISearch from './components/AISearch';
import Footer from './components/Footer';
import { mockResources } from './data/mockResources';
import { ResourceCategory, Resource } from './types';
import { fetchResources, BackendResource } from './services/apiService';

type AppSection = 'browse' | 'upload' | 'ai-search';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>('browse');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | null>(null);
  const [resources, setResources] = useState<Resource[]>(mockResources);

  useEffect(() => {
    fetchResources()
      .then((data: BackendResource[]) => {
        const mapped: Resource[] = data.map((r) => ({
          id: String(r.id),
          title: {
            'zh-CN': r.title,
            'zh-TW': r.title,
            'en-US': r.title,
            'fr-FR': r.title,
          },
          description: {
            'zh-CN': r.description,
            'zh-TW': r.description,
            'en-US': r.description,
            'fr-FR': r.description,
          },
          category: ResourceCategory.POSTGRADUATE_ADVANCEMENT,
          uploader: String(r.uploader ?? ''),
          uploadDate: r.upload_date,
          tags: [],
        }));
        setResources(mapped);
      })
      .catch((err) => {
        console.error('Failed to fetch resources', err);
      });
  }, []);

  const renderMainContent = () => {
    switch (currentSection) {
      case 'browse':
        return (
          <div className="flex flex-1 overflow-hidden">
            <CategorySidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
            <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
              <ResourceList resources={resources} selectedCategory={selectedCategory} />
            </main>
          </div>
        );
      case 'upload':
        return (
          <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <UploadForm />
          </main>
        );
      case 'ai-search':
        return (
          <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <AISearch />
          </main>
        );
      default:
        return null;
    }
  };

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar onNavigate={setCurrentSection} currentSection={currentSection} />
        {renderMainContent()}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
    