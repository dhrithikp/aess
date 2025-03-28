import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Akash J P",
      role: "Chairman",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      bio: "Ph.D. in Aerospace Engineering with over 15 years of experience in satellite systems.",
      linkedin: "https://www.linkedin.com/in/akash-jp-108aa6213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "sarah.johnson@ieee.org"
    },
    {
      id: 2,
      name: "Parjanya R ",
      role: "Vice Chairman",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      bio: "Professor of Electronic Engineering specializing in radar systems and signal processing.",
      linkedin: "https://linkedin.com",
      email: "michael.chen@ieee.org"
    },
    {
      id: 3,
      name: "Rohan J R",
      role: "Secretary",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      bio: "Researcher in avionics and flight control systems with multiple patents.",
      linkedin: "https://linkedin.com",
      email: "emily.rodriguez@ieee.org"
    },
    {
      id: 4,
      name: "Atmajit Pattnaik",
      role: "Treasurer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      bio: "Financial expert with a background in engineering management.",
      linkedin: "https://linkedin.com",
      email: "james.wilson@ieee.org"
    },
    {
      id: 5,
      name: "Gaurav I K",
      role: "Junior Secretary",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      bio: "Specialist in space communications and navigation systems.",
      linkedin: "https://linkedin.com",
      email: "aisha.patel@ieee.org"
    },
    {
      id: 6,
      name: "K Sai Chetan",
      role: "Head of Events",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      bio: "Dedicated to growing the AESS community and member engagement.",
      linkedin: "http://linkedin.com/in/sai-chetan-91abc",
      email: "1by22is068@bmsit.in"
    },
    {
      id: 7,
      name: "Shrikaa SP",
      role: "Head of Events",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      bio: "Editor with extensive experience in technical publications and journals.",
      linkedin: "https://linkedin.com",
      email: "lisa.thompson@ieee.org"
    },
    {
      id: 8,
      name: "Surya G",
      role: "Executive Design Head",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      bio: "Passionate about aerospace education and student development.",
      linkedin: "https://linkedin.com",
      email: "carlos.mendez@ieee.org"
    },
    {
      id: 9,
      name: "Sanjana Hanni",
      role: "Media Head",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
      bio: "Recognizing excellence in aerospace electronic systems research and applications.",
      linkedin: "https://linkedin.com",
      email: "olivia.wang@ieee.org"
    },
    {
      id: 10,
      name: "Saksham Agrawal",
      role: "R&D Head",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      bio: "Building bridges between academia and industry in aerospace technology.",
      linkedin: "https://linkedin.com",
      email: "david.okafor@ieee.org"
    },
    {
      id: 11,
      name: "Baljeet Kumar Patel",
      role: "R&D Co-Head",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
      bio: "Dedicated to supporting student chapters and young professionals.",
      linkedin: "https://linkedin.com",
      email: "jennifer.lee@ieee.org"
    },
    {
      id: 12,
      name: "K Sai Geethanjali",
      role: "Research Co-ordinator",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      bio: "Organizing international conferences and technical meetings.",
      linkedin: "https://linkedin.com",
      email: "thomas.schmidt@ieee.org"
    },
    {
      id: 13,
      name: "Dhrithi K P",
      role: "Web Master",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
      bio: "Leading efforts in standards development for aerospace systems.",
      linkedin: "https://linkedin.com",
      email: "maria.gonzalez@ieee.org"
    },
    {
      id: 14,
      name: "Abdul Aijaz",
      role: "Web Master",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      bio: "Supporting local AESS chapters worldwide and fostering community.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "john.nguyen@ieee.org"
    },
    {
      id: 15,
      name: "Hemanth S",
      role: "Technical Head",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      bio: "Expert in satellite communications sharing knowledge globally.",
      linkedin: "https://linkedin.com",
      email: "rachel.cohen@ieee.org"
    },
    {
      id: 16,
      name: "Harshini Mahesh",
      role: "Technical Co-Head",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
      bio: "Managing digital presence and technical infrastructure.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "samuel.park@ieee.org"
    },
    {
      id: 17,
      name: "Athmabhiram S J",
      role: "Tech Assist",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      bio: "Coordinating research initiatives and collaborative projects.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "fatima.alzahra@ieee.org"
    },
    {
      id: 18,
      name: "Balaram Pai H",
      role: "Projects Lead",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      bio: "Building our online community and digital engagement.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "daniel.martinez@ieee.org"
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated professionals who lead the IEEE AESS Society and drive our mission forward.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center"></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.slice(0).map((member) => (
              <div key={member.id} className="team-card">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-secondary mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                      <FaLinkedin size={20} />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-secondary transition-colors">
                      <FaEnvelope size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
  );
};

export default Team;
