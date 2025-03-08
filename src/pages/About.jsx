import React from 'react';
import { FaRocket, FaHistory, FaLightbulb, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About IEEE AESS Society</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The IEEE Aerospace and Electronic Systems Society is dedicated to advancing the science and technology of aerospace electronic systems.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-dark/80 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <FaRocket className="text-secondary mr-3" /> Our Mission
            </h2>
            <p className="text-gray-300">
              Our mission is to advance the theory and practice of aerospace electronic systems and to promote professional development among our members. We strive to foster innovation, education, and collaboration in the field of aerospace electronic systems.
            </p>
          </div>
          <div className="bg-dark/80 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <FaLightbulb className="text-secondary mr-3" /> Our Vision
            </h2>
            <p className="text-gray-300">
              We envision a world where aerospace electronic systems continue to evolve and improve, enhancing safety, efficiency, and capabilities in air and space travel. We aim to be the premier global organization for professionals in this field.
            </p>
          </div>
        </div>

        {/* History */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FaHistory className="text-secondary text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-white">Our History</h2>
          </div>
          <div className="bg-dark/80 p-8 rounded-lg">
            <p className="text-gray-300 mb-4">
              The IEEE Aerospace and Electronic Systems Society (AESS) has a rich history dating back to the early days of aerospace technology. Founded as part of the IEEE, the society has grown to become a leading organization in the field.
            </p>
            <p className="text-gray-300 mb-4">
              Over the decades, AESS has been at the forefront of technological advancements in radar, navigation, avionics, space systems, and other aerospace-related electronic systems. Our members have contributed significantly to the development of technologies that have revolutionized air and space travel.
            </p>
            <p className="text-gray-300">
              Today, the AESS continues to evolve, embracing new technologies and addressing emerging challenges in the aerospace industry. We remain committed to our founding principles of advancing knowledge and fostering collaboration among professionals in the field.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FaGlobe className="text-secondary text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-white">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-dark/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Research & Development</h3>
              <p className="text-gray-300">
                We promote research and development in aerospace electronic systems through publications, conferences, and collaborative projects.
              </p>
            </div>
            <div className="bg-dark/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Education & Training</h3>
              <p className="text-gray-300">
                We provide educational resources, workshops, and training programs to help members stay current with the latest technologies and practices.
              </p>
            </div>
            <div className="bg-dark/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Networking & Collaboration</h3>
              <p className="text-gray-300">
                We facilitate networking and collaboration among professionals, researchers, and students in the field of aerospace electronic systems.
              </p>
            </div>
            <div className="bg-dark/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Standards Development</h3>
              <p className="text-gray-300">
                We contribute to the development of standards and best practices for aerospace electronic systems.
              </p>
            </div>
            <div className="bg-dark/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Publications</h3>
              <p className="text-gray-300">
                We publish journals, magazines, and other technical publications to disseminate knowledge and research findings.
              </p>
            </div>
            <div className="bg-dark/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Conferences & Events</h3>
              <p className="text-gray-300">
                We organize conferences, workshops, and other events to bring together professionals and researchers in the field.
              </p>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Join Our Society</h2>
          <p className="text-white mb-6 max-w-3xl mx-auto">
            Become a member of the IEEE AESS Society and gain access to a wealth of resources, networking opportunities, and professional development programs.
          </p>
          <a 
            href="https://www.ieee.org/membership/join/index.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-block"
          >
            Become a Member
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;