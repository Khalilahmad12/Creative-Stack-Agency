import { useState } from 'react';
import { motion } from 'motion/react';
import { DynamicIcon } from '../../common/DynamicIcon';
import { ScrollAnimate, StaggerContainer, StaggerItem } from '../../common/ScrollAnimate';

const teamData = [
  {
    id: 'member-1',
    name: 'M. Aftab Akram',
    role: 'FOUNDER OF CSA & MERN STACK INTEGRATION LEAD',
    position: 'Full Stack Developer · Owner / Founder of CSA',
    description: "Aftab manages Creative Stack Agency's repositories and media previews, ensuring smooth MERN-stack integration and deployment.",
    iconName: 'Shield',
    imageUrl: 'https://creative-stack-agency.vercel.app/assets/owner_pic_new-jOY5acQn.jpg',
    specialties: [
      'React.js',
      'Node.js',
      'Express',
      'MongoDB',
      'Integration & Deployment',
      'Git & GitHub'
    ],
    education: 'Lead System Architect & Founder',
    contact: {
      email: 'aftab@creativestack.agency'
    },
    badge: 'Founder'
  },
  {
    id: 'member-2',
    name: 'Maryam Nawaz',
    role: 'PARTNER/CO-FOUNDER & MERN DEVELOPER',
    position: 'Partner & Co-Founder · Full Stack Developer',
    description: 'Maryam Nawaz specializes in building responsive frontend architectures and structuring high-performance full-stack MERN databases.',
    iconName: 'Shield',
    imageUrl: 'https://creative-stack-agency.vercel.app/assets/maryam_new_pic-CNu16tHJ.jpg',
    specialties: [
      'Full Stack Dev',
      'Frontend Curation',
      'UI/UX Layouts',
      'MongoDB Schema Design',
      'RESTful Interfaces'
    ],
    education: 'Co-Founder & Key Expert',
    linkText: "View Co-Founder's Experience",
    badge: 'Co-Founder'
  },
  {
    id: 'member-3',
    name: 'M. Sami Ullah',
    role: 'TEAM LEAD & CLIENT MANAGER',
    position: 'Full Stack Developer · Team Lead & Client Manager',
    description: 'Sami leads development, structures scalable system architectures, manages deployments, and coordinates client relations.',
    iconName: 'Users',
    imageUrl: 'https://creative-stack-agency.vercel.app/assets/sami_new_pic-9d6R421_.png',
    education: 'BS Software Engineering (4th Semester)',
    contact: {
      email: 'sami@team4stack.com'
    },
    specialties: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'MERN Stack',
      'Responsive UI/UX'
    ]
  },
  {
    id: 'member-4',
    name: 'M. Hasnain',
    role: 'FRONTEND ARCHITECT & MERN DEV',
    position: 'Full Stack Developer · Frontend Lead',
    description: 'Hasnain designs highly responsive modern user interfaces, custom dashboards, and secure frontend architectures.',
    iconName: 'Palette',
    imageUrl: 'https://creative-stack-agency.vercel.app/assets/hasnain_new_pic-Dw5T4QFG.png',
    education: 'BS Software Engineering (3rd Semester)',
    contact: {
      email: 'hasnainwasli17@gmail.com',
      phone: '+92 312 6430166'
    },
    specialties: [
      'React',
      'Node.js',
      'MongoDB',
      'JavaScript',
      'Express'
    ]
  },
  {
    id: 'member-5',
    name: 'Shumaila Zulfqar',
    role: 'WORDPRESS DEVELOPER & UI DESIGNER',
    position: 'WordPress Developer & UI Designer',
    description: 'Shumaila specializes in speed-optimized WordPress platforms, WooCommerce setups, and English-content strategy.',
    iconName: 'Globe',
    imageUrl: 'https://creative-stack-agency.vercel.app/assets/shumaila_new_pic-D5gkaRxn.jpg',
    education: 'BS English (Aspire College Okara)',
    specialties: [
      'WordPress Development',
      'WooCommerce',
      'Elementor Pro',
      'SEO & Copywriting'
    ]
  },
  {
    id: 'member-6',
    name: 'Ume Tehreem',
    role: 'GRAPHIC DESIGNER & BRAND CURATOR',
    position: 'Intermediate Graphic Designer',
    description: 'Tehreem crafts stunning brand visual aesthetics, custom logo layouts, vector designs, and social media creatives.',
    iconName: 'Paintbrush',
    imageUrl: 'https://creative-stack-agency.vercel.app/assets/tehreem_new_pic-CGxOy1eZ.jpg',
    education: 'FSc (Aspire College Okara)',
    contact: {
      phone: '03035855167'
    },
    specialties: [
      'UI Design',
      'Adobe Illustrator',
      'Canva & Photoshop',
      'Logo Design'
    ]
  },
  {
    id: 'member-7',
    name: 'M. Noman',
    role: 'FRONTEND DEVELOPER & UI SPECIALIST',
    position: 'Frontend Developer (React.js)',
    description: 'Noman focuses on pixel-perfect, highly interactive React and TypeScript user interfaces with blazing-fast speeds.',
    iconName: 'LaptopCode',
    imageUrl: 'https://creative-stack-agency.vercel.app/assets/noman_new_pic-R8Q_bHoN.jpg',
    education: 'BS Artificial Intelligence (IUB, 5th Semester)',
    contact: {
      email: 'muhammadnomansaeed62@gmail.com',
      phone: '03261619179'
    },
    specialties: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript (ES6+)'
    ]
  },
  {
    id: 'member-8',
    name: 'M. Fiaz Ahmed',
    role: 'BACKEND ENGINEER & CS SPECIALIST',
    position: 'Full Stack Developer · Backend, QA & Finance Manager',
    description: 'Fiaz designs secure backend APIs, manages MongoDB databases, performs QA audits, and coordinates project finances.',
    iconName: 'Database',
    imageUrl: 'https://creative-stack-agency.vercel.app/assets/fiaz_new_pic-D8krJlpI.png',
    education: 'Bachelor of Software Engineering (BSSE)',
    contact: {
      email: 'fiazdeveloper@gmail.com'
    },
    specialties: [
      'Backend Development',
      'API Security',
      'Database Systems',
      'Software QA/Testing'
    ]
  },
  {
    id: 'member-9',
    name: 'Ayesha Aslam',
    role: 'EXPERT WEB DEVELOPER',
    position: 'Expert Web Developer',
    description: 'Ayesha builds modern, responsive, and SEO-friendly web systems to optimize digital growth and visibility.',
    iconName: 'LaptopCode',
    imageUrl: 'https://creative-stack-agency.vercel.app/assets/ayesha_new_pic-hSVAQ3Hh.jpg',
    education: 'BS Computer Science (KIPS College Okara)',
    contact: {
      email: 'ayeshaweb16@gmail.com',
      phone: '+92 3298102474'
    },
    specialties: [
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
      'React.js'
    ]
  },
  {
    id: 'member-10',
    name: 'Khalil Ahmad',
    role: 'BUSINESS WEBSITE EXPERT',
    position: 'Business Website Expert',
    description: 'Khalil specializes in building high-converting corporate sites that strengthen branding and capture valuable business leads.',
    iconName: 'User',
    imageUrl: 'https://scontent.flyp14-1.fna.fbcdn.net/v/t39.30808-6/624561929_897432583038730_6933164698734141497_n.jpg?stp=dst-jpg_tt6&cstp=mx675x687&ctp=s675x687&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFOfnXBSspRtC4kHSVVGmnVkJ02XuwLxEeQnTZe7AvERyvgR5oR7BFzpr7ZOLbe5RoSUz5xCxGVe58ow-qasFHB&_nc_ohc=Cpw_RY6eQq4Q7kNvwH5ybOK&_nc_oc=AdoCB7hjBalLwW3CuuxPGAqlt3woujlo71kWVmSWsKuP-RNoK8wFXRzVwP4IV8uwwP4&_nc_zt=23&_nc_ht=scontent.flyp14-1.fna&_nc_gid=5gJyZcXT_QG5U0s3Y-JoMQ&_nc_ss=7b2a8&oh=00_Af9g2jMr7rgL9XmBF6cbhGwuwjr0BPpBK7nXABYmgGD2IA&oe=6A45DCC0',
    specialties: [
      'Business Website Expert',
      'Conversion Optimization',
      'Lead Generation',
      'Client Consultation'
    ]
  }
];

export function TeamSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="team" className="py-12 md:py-24 bg-white border-t border-neutral-100 relative overflow-hidden scroll-mt-20">
      {/* Absolute background accent lines for minimalist depth */}
      <div className="absolute inset-0 bg-radial-[circle_at_30%_80%,rgba(220,38,38,0.01)_0%,transparent_50%] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title Header */}
        <ScrollAnimate direction="up" delay={0.1} className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Our Pioneers</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 mt-2 tracking-tight">
            Meet Our Expert Team
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
          <p className="text-neutral-600 mt-5 text-base sm:text-lg">
            A collective of highly skilled software engineers, innovative designers, and tactical marketers dedicated to building your digital success.
          </p>
        </ScrollAnimate>

        {/* 10-Card Grid (4 cards per row on desktop) */}
        <StaggerContainer
          staggerChildren={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {teamData.map((member) => (
            <StaggerItem key={member.id} direction="up" duration={0.6}>
              <div
                className="group relative flex flex-col h-full bg-white rounded-2xl border border-neutral-200/60 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Premium Top Image Container */}
                <div className="relative h-60 overflow-hidden bg-neutral-100">
                  {/* Visual Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/45 via-neutral-950/10 to-transparent z-10 opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
                  
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ objectPosition: member.objectPosition || 'center 15%' }}
                  />

                  {/* Floating Role Badge */}
                  {member.badge && (
                    <div className="absolute top-3 left-3 bg-red-600/90 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md backdrop-blur-xs z-20 border border-red-500/30">
                      {member.badge}
                    </div>
                  )}

                  {/* Bottom-right service role badge icon */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-md text-neutral-800 rounded-full shadow-md border border-neutral-100/50 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 group-hover:scale-110 transition-all duration-300 z-20">
                    <DynamicIcon name={member.iconName} className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Text Info */}
                <div className="p-4 flex-grow flex flex-col bg-white">
                  <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 group-hover:text-red-600 transition-colors duration-200">
                    {member.name}
                  </h3>

                  <span className="text-[10px] font-extrabold text-red-600 uppercase tracking-widest block mt-1 mb-1.5 leading-snug">
                    {member.role}
                  </span>

                  <p className="text-neutral-600 text-xs leading-relaxed mt-1 font-normal line-clamp-3">
                    {member.description}
                  </p>

                  {/* Unified Footer Action / Contact Icons row */}
                  <div className="mt-auto pt-4 border-t border-neutral-100 flex justify-center items-center text-neutral-400">
                    {/* Dynamic contact and social action icons centered */}
                    <div className="flex items-center gap-1.5 justify-center">
                      {member.contact?.email && (
                        <a
                          href={`mailto:${member.contact.email}`}
                          className="w-7 h-7 bg-neutral-50 hover:bg-red-50 hover:text-red-600 rounded-full border border-neutral-200/50 flex items-center justify-center transition-all"
                          title={`Email ${member.name}`}
                        >
                          <DynamicIcon name="Mail" className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.contact?.phone && (
                        <a
                          href={`tel:${member.contact.phone}`}
                          className="w-7 h-7 bg-neutral-50 hover:bg-red-50 hover:text-red-600 rounded-full border border-neutral-200/50 flex items-center justify-center transition-all"
                          title={`Call ${member.name}`}
                        >
                          <DynamicIcon name="Phone" className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href="#contact"
                        className="w-7 h-7 bg-neutral-50 hover:bg-red-50 hover:text-red-600 rounded-full border border-neutral-200/50 flex items-center justify-center transition-all"
                        aria-label={`Connect with ${member.name} on Facebook`}
                      >
                        <DynamicIcon name="Facebook" className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="#contact"
                        className="w-7 h-7 bg-neutral-50 hover:bg-red-50 hover:text-red-600 rounded-full border border-neutral-200/50 flex items-center justify-center transition-all"
                        aria-label={`Connect with ${member.name} on GitHub`}
                      >
                        <DynamicIcon name="Github" className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="#contact"
                        className="w-7 h-7 bg-neutral-50 hover:bg-red-50 hover:text-red-600 rounded-full border border-neutral-200/50 flex items-center justify-center transition-all"
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                      >
                        <DynamicIcon name="Linkedin" className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
