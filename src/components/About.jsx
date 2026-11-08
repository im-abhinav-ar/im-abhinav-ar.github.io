import { motion } from 'framer-motion';
import profilePic from '../assets/profile.png'; 
import ProfileCard from './ProfileCard';
import BorderGlow from './BorderGlow'; 

const BentoCard = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`w-full ${className}`}
  >
    <BorderGlow className="p-5 md:p-8 h-full">
      {children}
    </BorderGlow>
  </motion.div>
);

const SkillBar = ({ name, level, delay }) => (
  <div className="mb-4 md:mb-5 last:mb-0">
    <div className="flex justify-between text-[9px] md:text-xs font-bold uppercase tracking-widest mb-2 font-['Sofia_Pro','Jost',_sans-serif]">
      <span className="text-gray-300">{name}</span>
      <span className="text-[#c084fc]">{level}%</span>
    </div>
    <div className="h-[2px] md:h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: delay + 0.2 }}
        className="h-full bg-gradient-to-r from-purple-600 to-[#c084fc] rounded-full shadow-[0_0_10px_rgba(192,132,252,0.5)]"
      />
    </div>
  </div>
);

const EduItem = ({ year, degree }) => (
  <div className="relative pl-5 md:pl-6 pb-6 md:pb-8 border-l border-white/10 last:border-0 last:pb-0 text-left">
    <div className="absolute left-[-4px] md:left-[-5px] top-1 h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#c084fc] shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
    <div className="text-[#c084fc] text-[9px] md:text-[10px] tracking-[0.2em] font-bold uppercase mb-1.5 font-['Sofia_Pro','Jost',_sans-serif]">
      {year}
    </div>
    <h4 className="text-white text-[13px] md:text-lg font-bold leading-tight">{degree}</h4>
  </div>
);

export default function About() {
  const technicalSkills = [
    { name: 'Python', level: 95 },
    { name: 'NLP & RAG Systems', level: 88 },
    { name: 'TensorFlow & Scikit-learn', level: 85 },
    { name: 'Pandas & NumPy', level: 90 },
    { name: 'FastAPI & React Native', level: 75 },
    { name: 'Dataset Structuring', level: 85 },
  ];

  return (
    <section id="about" className="min-h-screen py-20 md:py-24 px-6 sm:px-8 md:px-12 relative z-20 bg-transparent flex justify-center">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col gap-8 md:gap-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-2 md:px-4 mb-2 flex flex-col items-center text-center md:items-start md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mb-4 md:mb-8 w-full">
            <div className="h-[2px] w-8 md:w-12 bg-[#c084fc] shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
            <span className="text-[#c084fc] text-[9px] md:text-sm tracking-[0.3em] font-bold uppercase font-['Sofia_Pro','Jost',_sans-serif]">
              About Me
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold tracking-tight mb-4 md:mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-[#c084fc]/80 pb-2">
            Hi, I'm Abhinav
          </h2>

          <p className="text-gray-400 text-[11px] sm:text-sm md:text-xl font-medium tracking-wide">
            Computer Science Engineer • AI & Cybersecurity • Web/App Developer
          </p>
        </motion.div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 w-full">
          
          {/* PROFILE CARD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 w-full h-[350px] md:h-[500px] lg:h-full min-h-[350px] md:min-h-[500px] rounded-[24px] mx-auto"
          >
            <ProfileCard avatarUrl={profilePic} />
          </motion.div>

          <div className="col-span-1 lg:col-span-2 flex flex-col gap-5 md:gap-6">
            <BentoCard delay={0.1} className="h-full">
              <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 text-center md:text-left">Career Objective</h3>
              <p className="text-gray-400 text-[11.5px] sm:text-sm md:text-lg leading-[1.7] md:leading-[1.8] text-center md:text-left font-['Sofia_Pro','Jost',_sans-serif]">
                A dedicated Computer Science Engineer aspiring to build a robust career in <span className="text-white font-medium">AI, Full-Stack Development, and Cybersecurity.</span> I bring hands-on experience in machine learning pipelines, LLM training workflows, and structured dataset preparation. My goal is to bridge the gap between high-level human intent and low-level machine execution while building secure, scalable, and intelligent applications.
              </p>
            </BentoCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <BentoCard delay={0.2} className="flex flex-col justify-center h-full text-center md:text-left">
                <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-5">Key Achievements</h3>
                <div className="flex flex-col gap-3 md:gap-4">
                  <p className="text-gray-400 text-[9.5px] sm:text-xs md:text-sm leading-relaxed">
                    Paper Publication: <br/>
                    <span className="text-[#c084fc] font-medium mt-1 md:mt-1.5 block italic">
                      "A Comprehensive Literature Survey on Large Language Model-Driven Operating Systems"
                    </span>
                  </p>
                  <div className="w-full h-[1px] bg-white/5 my-0.5 md:my-1"></div>
                  <p className="text-gray-400 text-[9.5px] sm:text-xs md:text-sm leading-relaxed">
                    International Conference (April 2026): <br/>
                    <span className="text-[#c084fc] font-medium mt-1 md:mt-1.5 block italic">
                      "Advances in Green, Net-Zero Innovation - Sustainability (AGNI-S)" at NIT Trichy
                    </span>
                  </p>
                </div>
              </BentoCard>

              <BentoCard delay={0.3} className="flex flex-col justify-center h-full text-center md:text-left">
                <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-4">Areas of Interest</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {["Artificial Intelligence", "Cybersecurity", "Full-Stack Dev", "Machine Learning", "NLP"].map((tag, i) => (
                    <span key={i} className="px-2 py-1 md:px-3 md:py-1.5 text-[7.5px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-300 bg-white/5 border border-white/10 rounded-md md:rounded-lg hover:bg-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <BentoCard delay={0.4} className="col-span-1 lg:col-span-2 h-full text-center md:text-left">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-5 md:mb-8">Technical Proficiency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1.5 md:gap-y-2 text-left">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} delay={0.5 + (index * 0.1)} />
              ))}
            </div>
          </BentoCard>

          {/* === FIXED: SEPARATED EDUCATION AND LANGUAGES CARDS === */}
          <div className="col-span-1 flex flex-col gap-5 md:gap-6 h-full">
            
            {/* Education Card (Uses flex-1 to stretch and match the height of Technical Proficiency!) */}
            <BentoCard delay={0.5} className="flex-1 text-center md:text-left h-full">
              <h3 className="text-base md:text-xl font-bold text-white mb-4 md:mb-6">Education</h3>
              <div className="flex flex-col text-left">
                <EduItem year="2022 - 2026" degree="B.Tech Computer Science" />
                <EduItem year="March 2022" degree="Higher Secondary (Class 12)" />
                <EduItem year="March 2020" degree="High School (Class 10)" />
              </div>
            </BentoCard>

            {/* Languages Card */}
            <BentoCard delay={0.6} className="h-auto text-center md:text-left">
              <h3 className="text-base md:text-xl font-bold text-white mb-4 md:mb-6">Languages</h3>
              <div className="flex flex-col gap-2 text-left">
                <SkillBar name="English" level={85} delay={0.8} />
                <SkillBar name="Malayalam" level={100} delay={0.9} />
              </div>
            </BentoCard>

          </div>

        </div>
      </div>
    </section>
  );
}