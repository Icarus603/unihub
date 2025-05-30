
import React from 'react';
import { Resource, ResourceCategory } from '../types';
import ResourceCard from './ResourceCard';

interface ResourceListProps {
  resources: Resource[];
  selectedCategory: ResourceCategory | null;
}

const ResourceList: React.FC<ResourceListProps> = ({ resources, selectedCategory }) => {
  const filteredResources = selectedCategory
    ? resources.filter(resource => resource.category === selectedCategory)
    : resources;

  if (filteredResources.length === 0) {
    return <p className="text-gray-600 text-center py-10">No resources found in this category.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {filteredResources.map(resource => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default ResourceList;
    