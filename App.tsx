
import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import CategorySidebar from './components/CategorySidebar';
import ResourceList from './components/ResourceList';
import UploadForm from './components/UploadForm';
import AISearch from './components/AISearch';
import Footer from './components/Footer';
import { mockResources } from './data/mockResources';
import { ResourceCategory } from './types';

type AppSection = 'browse' | 'upload' | 'ai-search';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>('browse');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | null>(null);

  const renderMainContent = () => {
    switch (currentSection) {
      case 'browse':
        return (
          <div className="flex flex-1 overflow-hidden">
            <CategorySidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
            <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
              <ResourceList resources={mockResources} selectedCategory={selectedCategory} />
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
    