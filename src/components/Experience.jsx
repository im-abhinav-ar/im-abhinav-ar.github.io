import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    date: "2025 — PRESENT", 
    tag: "INDEPENDENT", 
    role: "Full Stack & App Developer",
    description: "Building premium web and mobile experiences for clients worldwide. Specializing in interactive frontends, cross-platform mobile apps, scalable backends, and AI-powered integrations.",
    bullets: [
      "Delivered 20+ projects across diverse industries, spanning both responsive web and native mobile applications.",
      "Implemented CI/CD pipelines and robust cloud architectures for seamless, secure deployments.",
      "Created custom animation systems and fluid user interfaces using React Native, Framer Motion, and WebGL/Three.js."
    ]
  },
  {
    id: 2,
    date: "2025 — PRESENT", 
    tag: "OPEN SOURCE",
    role: "AI Developer & Maintainer",
    description: "Contributing to the artificial intelligence and web development ecosystem by building open-source LLM workflows, RAG systems, and developer tools.",
    bullets: [
      "Engineered and open-sourced foundational architectures for natural language-driven operating systems.",
      "Published optimized machine learning pipelines and RAG implementations utilizing FastAPI and Pinecone.",
      "Authored comprehensive technical documentation and academic literature surveys on LLM behaviors."
    ]
  },
  {
    id: 3,
    date: "2023 — 2026",
    tag: "SELF-DIRECTED LEARNING",
    role: "Creative Technologist",
    description: "Intensive self-education period exploring web technologies, creative coding, and modern development practices.",
    bullets: [
      "Completed 500+ hours of hands-on development.",
      "Mastered React, Node.js, and TypeScript ecosystem."
    ]
  }
];

export default function Experience() {
  return (
    // FIXED: Added px-6 sm:px-8
    <section id="experience" className="min-h-screen py-20 md:py-24 px-6 sm:px-8 md:px-12 relative z-20 bg-transparent flex justify-center">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col">
        
        {/* === HEADER === */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-3 md:mb-6 w-full">
            <div className="h-[2px] w-8 md:w-12 bg-[#c084fc] shadow-[0_0_8px_rgba(192,132,252,0.8)]"></div>
            <span className="text-[#c084fc] text-[9px] md:text-sm tracking-[0.3em] font-bold uppercase font-['Sofia_Pro','Jost',_sans-serif]">
              Experience
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight mb-3 md:mb-6">
            Where I've Been
          </h2>
          <p className="text-gray-400 text-[11px] sm:text-sm md:text-xl max-w-2xl leading-relaxed font-['Sofia_Pro','Jost',_sans-serif]">
            My professional journey through engineering, open-source contributions, and building intelligent systems.
          </p>
        </motion.div>

        {/* === TIMELINE === */}
        <div className="flex flex-col w-full">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              // SCALED DOWN: py-8 instead of py-12 on mobile
              className="flex flex-col md:flex-row gap-3 md:gap-16 py-8 md:py-16 border-t border-white/10 group items-center text-center md:items-start md:text-left"
            >
              
              <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-1 md:gap-2 shrink-0 pt-1">
                <span className="text-gray-400 font-semibold tracking-wide text-[11px] md:text-base group-hover:text-white transition-colors duration-300">
                  {exp.date}
                </span>
                {exp.tag && (
                  <span className="text-[#c084fc] text-[7.5px] md:text-[10px] font-bold uppercase tracking-[0.2em] font-['Sofia_Pro','Jost',_sans-serif]">
                    {exp.tag}
                  </span>
                )}
              </div>

              <div className="w-full md:w-3/4 flex flex-col items-center md:items-start mt-2 md:mt-0">
                <h3 className="text-[19px] md:text-4xl font-bold text-white mb-2 md:mb-4 group-hover:text-[#c084fc] transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-gray-300 text-[11.5px] sm:text-sm md:text-lg leading-[1.6] md:leading-[1.8] mb-4 md:mb-6 font-['Sofia_Pro','Jost',_sans-serif] px-2 md:px-0">
                  {exp.description}
                </p>
                <ul className="flex flex-col gap-2 md:gap-3 items-center md:items-start text-left w-full px-4 md:px-0">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 md:gap-3 w-full">
                      <span className="text-[#c084fc] text-[9px] md:text-sm mt-0.5 md:mt-1 opacity-80 shrink-0">▸</span>
                      <span className="text-gray-400 text-[10.5px] sm:text-xs md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300 font-['Sofia_Pro','Jost',_sans-serif]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}