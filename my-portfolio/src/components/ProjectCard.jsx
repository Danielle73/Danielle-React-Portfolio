//import React from 'react';
/* eslint-disable react/prop-types */

import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ 
    title = "Project Title", 
    description = "Project Description", 
    imageUrl = "/api/placeholder/600/400", 
    repoUrl = "#" 
}) => {
  return (
    <>
    
    <div className="max-w-6xl mx-auto p-4">
      <div className="dark-theme-card bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-row">
          <div className="w-1/2 min-h-[300px]">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-600 mb-6">
                {description}
              </p>
            </div>
            
            <div className="mt-auto">
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-button inline-flex items-center gap-2"
              >
                View Repository
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;