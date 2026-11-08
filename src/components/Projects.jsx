import { motion } from 'framer-motion';
import BorderGlow from './BorderGlow'; 

const projects = [
  {
    id: 1,
    num: "01",
    title: "Natural Language-Driven Personalized OS",
    description: "Developed foundational architecture for a context-aware OS bridging high-level human intent and low-level OS actions through natural language processing.",
    tech: ["LLMs", "NLU", "Contextual Engine", "Task Mapping"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop" 
  },
  {
    id: 2,
    num: "02",
    title: "NL Interfaces On Edge Devices",
    description: "Real-time natural language interface combining speaker diarization, verification, and speech recognition to facilitate secure, personalized, and robust voice-based interactions.",
    tech: ["PyAnnote", "Whisper", "React Native", "FastAPI", "SciPy"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
  }
];

export default function Projects() {
  return (
    // FIXED: Added px-6 sm:px-8 to give the cards a border and prevent them from touching the sides
    <section id="projects" className="min-h-screen py-20 md:py-32 px-6 sm:px-8 md:px-12 relative z-20 bg-transparent flex justify-center">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 md:mb-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-widest uppercase mb-4 md:mb-6 drop-shadow-lg">
            Selected Projects
          </h2>
          <p className="text-gray-400 text-[8px] sm:text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.3em] uppercase font-bold max-w-3xl leading-relaxed font-['Sofia_Pro','Jost',_sans-serif]">
            From foundational AI architectures to edge-device interfaces — <br className="hidden md:block" />
            <span className="text-[#c084fc]">Crafted with precision, purpose, and intelligence.</span>
          </p>
        </motion.div>

        {/* SCALED DOWN GAP: Reduced distance between cards on mobile */}
        <div className="flex flex-col gap-10 md:gap-32 w-full">
          {projects.map((proj, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={proj.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full mx-auto"
              >
                {/* Responsive Border Radius */}
                <BorderGlow borderRadius={isEven ? 32 : 32} className="w-full h-full">
                  {/* SCALED PADDING: Changed p-5 to p-4 on mobile so images fit better */}
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-5 md:gap-8 lg:gap-16 items-center p-4 sm:p-5 md:p-10 w-full group`}>
                    
                    <div className="w-full lg:w-1/2 flex-shrink-0">
                      <div className="relative rounded-[1rem] md:rounded-[1.5rem] overflow-hidden bg-[#111111] border border-white/10 shadow-2xl group-hover:shadow-[0_0_40px_rgba(192,132,252,0.15)] transition-shadow duration-500">
                        <div className="h-5 md:h-8 bg-[#1a1a1a] flex items-center px-3 md:px-4 gap-1.5 md:gap-2 border-b border-white/5">
                          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left justify-center px-2 md:px-0">
                      <div className="flex w-full justify-center lg:justify-end mb-3 md:mb-8">
                        <span className="text-gray-500 font-mono text-[10px] md:text-sm font-bold">
                          {proj.num} <span className="text-gray-700">/ 0{projects.length}</span>
                        </span>
                      </div>
                      <h3 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6 leading-tight group-hover:text-[#c084fc] transition-colors duration-300">
                        {proj.title}
                      </h3>
                      <p className="text-gray-400 text-[11px] sm:text-sm md:text-lg leading-[1.6] md:leading-[1.8] mb-5 md:mb-8 font-['Sofia_Pro','Jost',_sans-serif]">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 md:gap-3">
                        {proj.tech.map((t, i) => (
                          <span key={i} className="px-2.5 py-1.5 md:px-4 md:py-2 text-[7.5px] md:text-xs font-bold uppercase tracking-widest text-gray-300 bg-white/5 border border-white/5 rounded-md md:rounded-lg transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </BorderGlow>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}