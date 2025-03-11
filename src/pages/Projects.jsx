import React, { useState } from 'react';
import { FaRocket, FaSatellite, FaMicrochip, FaSearch, FaLink, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample projects data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Satellite Communication System",
      description: "A next-generation satellite communication system designed for high-speed data transfer in remote areas.",
      image: "https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "satellite",
      tags: ["Satellite", "Communication", "RF Engineering"],
      link: "https://example.com/project1",
      github: "https://github.com/ieee-aess/project1",
      team: ["Dr. Sarah Johnson", "Prof. Michael Chen"]
    },
    {
      id: 2,
      title: "Drone Navigation System",
      description: "An autonomous navigation system for drones using computer vision and machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "navigation",
      tags: ["Drones", "Navigation", "Computer Vision", "AI"],
      link: "https://example.com/project2",
      github: "https://github.com/ieee-aess/project2",
      team: ["Dr. Emily Rodriguez", "James Wilson"]
    },
    {
      id: 3,
      title: "Space Weather Monitoring",
      description: "A system for monitoring and predicting space weather conditions to protect satellite infrastructure.",
      image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "space",
      tags: ["Space Weather", "Monitoring", "Data Analysis"],
      link: "https://example.com/project3",
      github: "https://github.com/ieee-aess/project3",
      team: ["Dr. Aisha Patel", "Robert Kim"]
    },
    {
      id: 4,
      title: "Aircraft Radar Enhancement",
      description: "Advanced radar technology for improved aircraft detection and tracking in adverse weather conditions.",
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "radar",
      tags: ["Radar", "Aircraft", "Weather"],
      link: "https://example.com/project4",
      github: "https://github.com/ieee-aess/project4",
      team: ["Dr. Lisa Thompson", "Carlos Mendez"]
    },
    {
      id: 5,
      title: "Aerospace Materials Research",
      description: "Research on new lightweight materials for aerospace applications with improved durability and heat resistance.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "materials",
      tags: ["Materials", "Research", "Aerospace"],
      link: "https://example.com/project5",
      github: "https://github.com/ieee-aess/project5",
      team: ["Dr. Olivia Wang", "David Okafor"]
    },
    {
      id: 6,
      title: "Spacecraft Propulsion System",
      description: "Next-generation propulsion system for spacecraft using renewable energy sources.",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "space",
      tags: ["Propulsion", "Spacecraft", "Energy"],
      link: "https://example.com/project6",
      github: "https://github.com/ieee-aess/project6",
      team: ["Jennifer Lee", "Thomas Schmidt"]
    }
  ];

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the innovative projects developed by the IEEE AESS Society members.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => setFilter('all')} 
                className={`px-4 py-2 rounded-full transition-all ${filter === 'all' ? 'bg-secondary text-white' : 'bg-dark/50 text-gray-300 hover:bg-dark/80'}`}
              >
                All Projects
              </button>
              <button 
                onClick={() => setFilter('satellite')} 
                className={`px-4 py-2 rounded-full transition-all ${filter === 'satellite' ? 'bg-secondary text-white' : 'bg-dark/50 text-gray-300 hover:bg-dark/80'}`}
              >
                <FaSatellite className="inline mr-2" />
                Satellite
              </button>
              <button 
                onClick={() => setFilter('navigation')} 
                className={`px-4 py-2 rounded-full transition-all ${filter === 'navigation' ? 'bg-secondary text-white' : 'bg-dark/50 text-gray-300 hover:bg-dark/80'}`}
              >
                Navigation
              </button>
              <button 
                onClick={() => setFilter('space')} 
                className={`px-4 py-2 rounded-full transition-all ${filter === 'space' ? 'bg-secondary text-white' : 'bg-dark/50 text-gray-300 hover:bg-dark/80'}`}
              >
                <FaRocket className="inline mr-2" />
                Space
              </button>
              <button 
                onClick={() => setFilter('radar')} 
                className={`px-4 py-2 rounded-full transition-all ${filter === 'radar' ? 'bg-secondary text-white' : 'bg-dark/50 text-gray-300 hover:bg-dark/80'}`}
              >
                Radar
              </button>
              <button 
                onClick={() => setFilter('materials')} 
                className={`px-4 py-2 rounded-full transition-all ${filter === 'materials' ? 'bg-secondary text-white' : 'bg-dark/50 text-gray-300 hover:bg-dark/80'}`}
              >
                <FaMicrochip className="inline mr-2" />
                Materials
              </button>
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark/50 border border-gray-700 rounded-md pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-secondary/90 hover:bg-secondary p-2 rounded-full text-white transition-colors"
                        title="Visit Project"
                      >
                        <FaLink />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-dark/90 hover:bg-dark p-2 rounded-full text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Team: {project.team.join(", ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-dark/50 rounded-lg">
            <p className="text-xl text-gray-300">No projects found matching your criteria.</p>
            <button 
              onClick={() => {setFilter('all'); setSearchTerm('');}} 
              className="mt-4 bg-secondary hover:bg-secondary/80 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Add Project CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have a Project Idea?</h2>
          <p className="text-white mb-6 max-w-3xl mx-auto">
            We're always looking for new innovative projects in aerospace and electronic systems. 
            Share your ideas with us and join our research community.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-block"
          >
            Submit Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;