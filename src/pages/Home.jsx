import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaSatellite, FaMicrochip, FaUsers, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            IEEE Aerospace & Electronic Systems Society
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advancing technology and innovation in aerospace electronic systems through research, education, and collaboration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="btn-primary">
              Learn More
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:border-secondary text-white hover:text-secondary font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">What We Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-dark/80 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-block p-4 bg-secondary/20 rounded-full mb-4">
                <FaRocket className="text-secondary text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Aerospace Innovation</h3>
              <p className="text-gray-300">Pioneering advancements in aerospace technology and electronic systems.</p>
            </div>
            
            <div className="bg-dark/80 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-block p-4 bg-secondary/20 rounded-full mb-4">
                <FaSatellite className="text-secondary text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Satellite Systems</h3>
              <p className="text-gray-300">Developing and improving satellite communication and navigation systems.</p>
            </div>
            
            <div className="bg-dark/80 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-block p-4 bg-secondary/20 rounded-full mb-4">
                <FaMicrochip className="text-secondary text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Electronic Systems</h3>
              <p className="text-gray-300">Creating cutting-edge electronic systems for aerospace applications.</p>
            </div>
            
            <div className="bg-dark/80 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-block p-4 bg-secondary/20 rounded-full mb-4">
                <FaUsers className="text-secondary text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Building</h3>
              <p className="text-gray-300">Fostering a community of professionals and students in aerospace engineering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <Link to="/projects" className="text-secondary hover:text-white flex items-center transition-colors">
              View All Projects <FaArrowRight className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Project 1 */}
            <div className="project-card">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516849677043-ef67c9557e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Satellite Communication System" 
                  className="project-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Satellite Communication System</h3>
                <p className="text-gray-300 mb-4">A next-generation satellite communication system designed for high-speed data transfer in remote areas.</p>
                <Link to="/projects" className="text-secondary hover:text-white flex items-center transition-colors text-sm">
                  Learn More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Featured Project 2 */}
            <div className="project-card">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Drone Navigation System" 
                  className="project-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Drone Navigation System</h3>
                <p className="text-gray-300 mb-4">An autonomous navigation system for drones using computer vision and machine learning algorithms.</p>
                <Link to="/projects" className="text-secondary hover:text-white flex items-center transition-colors text-sm">
                  Learn More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Featured Project 3 */}
            <div className="project-card">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Space Weather Monitoring" 
                  className="project-image"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Space Weather Monitoring</h3>
                <p className="text-gray-300 mb-4">A system for monitoring and predicting space weather conditions to protect satellite infrastructure.</p>
                <Link to="/projects" className="text-secondary hover:text-white flex items-center transition-colors text-sm">
                  Learn More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/70">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a global network of professionals, researchers, and students passionate about aerospace and electronic systems.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;