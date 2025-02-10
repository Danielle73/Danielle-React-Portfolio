//import React from 'react';
/* eslint-disable react/prop-types */

import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ 
    title = "Project Title", 
    description = "Project Description", 
    //imageUrl = "/api/placeholder/600/400", 
    repoUrl = "#" 
}) => {
  return (
    <>
<div className="max-w-sm mx-auto p-4">
    <div className="dark-theme-card bg-white rounded-lg shadow-lg overflow-hidden">
    {/* Project Image */}
    {/* <img
      src={imageUrl}
      alt={title}
      className="w-full h-auto object-cover rounded-t-lg"
    /> */}

{/* project title */}

<h3 className="text-2xl font-bold font-[Pacifico] text-[var(--primary-text)] text-center">   
  {title}
      </h3>

      {/* Project Description */}
      <p className="text-[var(--secondary-text)] text-sm text-center mt-2"> 
        {description}
      </p>

    
    {/* Button Below Image */}
    <div className="p-4 flex justify-center">
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="custom-button px-4 py-2 text-sm font-medium text-white bg-yellow-400 rounded-md shadow-md hover:bg-yellow-500 transition"
      >
        View Repository <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  </div>
</div>
    </>
  );
};

export default ProjectCard;