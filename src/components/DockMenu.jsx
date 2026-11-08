import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Native SVG Icons for crash-proof rendering
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a5.25 5.25 0 0 0-1.5-3.8 4.33 4.33 0 0 0-.12-3.8s-1.2-.38-3.9 1.5a13.38 13.38 0 0 0-7 0C6.2 1.5 5 1.8 5 1.8a4.33 4.33 0 0 0-.12 3.8A5.25 5.25 0 0 0 3 8.97c0 5.6 3.35 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

// --- THE PILL BUTTON COMPONENT ---
const PillButton = ({ children, onClick, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const labelVariants = {
    rest: { y: "0%" },
    hover: { y: "-150%" }
  };

  const hoverLabelVariants = {
    rest: { y: "150%" },
    hover: { y: "0%" }
  };

  const circleVariants = {
    rest: { scale: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
    hover: { scale: 3, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  const content = (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="relative overflow-hidden inline-flex items-center justify-center w-12 h-12 rounded-full text-white bg-[#111111] transition-transform active:scale-95 border border-white/10 hover:border-white/20"
    >
      <motion.span
        variants={circleVariants}
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#c084fc] rounded-full z-0 origin-bottom"
      />
      <span className="relative z-10 block w-5 h-5 overflow-hidden">
        <motion.span
          variants={labelVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center text-gray-300"
        >
          {children}
        </motion.span>
        
        <motion.span
          variants={hoverLabelVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center text-[#050505]"
        >
          {children}
        </motion.span>
      </span>
    </motion.button>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  ) : content;
};

export default function DockMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const scrollTo = (id) => {
    setIsOpen(false); 
    
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 600);
  };

  const navItems = [
    { id: "home", label: "Home", num: "01" },
    { id: "about", label: "About", num: "02" },
    { id: "projects", label: "Projects", num: "03" },
    { id: "experience", label: "Experience", num: "04" },
    { id: "contact", label: "Contact", num: "05" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/im-abhinav-ar" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/im-abhinav-ar/" }
  ];

  const menuEase = [0.16, 1, 0.3, 1]; 

  const preLayer1 = {
    closed: { x: "100%", transition: { duration: 0.5, ease: menuEase, delay: 0.1 } },
    open: { x: 0, transition: { duration: 0.7, ease: menuEase } }
  };

  const preLayer2 = {
    closed: { x: "100%", transition: { duration: 0.5, ease: menuEase, delay: 0.05 } },
    open: { x: 0, transition: { duration: 0.7, ease: menuEase, delay: 0.05 } }
  };

  const mainPanel = {
    closed: { x: "100%", transition: { duration: 0.5, ease: menuEase } },
    open: { x: 0, transition: { duration: 0.7, ease: menuEase, delay: 0.1 } }
  };

  const linkContainer = {
    closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } }
  };

  const linkItem = {
    closed: { y: "140%", rotate: 10, opacity: 0, transition: { duration: 0.4, ease: menuEase } },
    open: { y: "0%", rotate: 0, opacity: 1, transition: { duration: 0.8, ease: menuEase } }
  };

  const socialFade = {
    closed: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.8, ease: menuEase, delay: 0.6 } }
  };

  return (
    <>
      {/* === RESTORED SOLID COLORED BUTTON === */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        // FIXED: Changed bg back to #c084fc and icon color to white!
        className="fixed top-6 right-6 md:top-8 md:right-8 flex items-center justify-center h-12 w-12 rounded-full text-white bg-[#c084fc] hover:scale-105 transition-transform duration-200 outline-none shadow-[0_0_20px_rgba(192,132,252,0.5)] z-[60]"
        aria-label="Toggle Menu"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
            />

            <motion.div variants={preLayer1} initial="closed" animate="open" exit="closed" className="absolute top-0 right-0 w-full md:w-[450px] lg:w-[500px] h-full bg-[#111111] pointer-events-auto shadow-2xl" />
            <motion.div variants={preLayer2} initial="closed" animate="open" exit="closed" className="absolute top-0 right-0 w-full md:w-[450px] lg:w-[500px] h-full bg-[#c084fc] pointer-events-auto shadow-2xl" />

            <motion.div variants={mainPanel} initial="closed" animate="open" exit="closed" className="absolute top-0 right-0 w-full md:w-[450px] lg:w-[500px] h-full bg-[#050505] border-l border-white/10 flex flex-col pt-32 pb-12 px-10 md:px-16 overflow-y-auto pointer-events-auto shadow-2xl">
              
              <motion.ul variants={linkContainer} initial="closed" animate="open" exit="closed" className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <li key={item.id} className="overflow-hidden">
                    <motion.div variants={linkItem} className="flex items-start gap-4 group cursor-pointer" onClick={() => scrollTo(item.id)}>
                      <span className="text-[#c084fc] font-mono text-sm pt-2 md:pt-4">
                        {item.num}
                      </span>
                      <span className="text-4xl md:text-[3.5rem] font-black uppercase text-white group-hover:text-[#c084fc] transition-colors duration-300 leading-none tracking-tight">
                        {item.label}
                      </span>
                    </motion.div>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={socialFade} initial="closed" animate="open" exit="closed" className="mt-auto pt-16 flex flex-col gap-5">
                <h3 className="text-[#c084fc] text-xs tracking-[0.3em] font-bold uppercase">Connect</h3>
                
                <div className="flex gap-4">
                  <PillButton href="https://github.com/im-abhinav-ar">
                    <GithubIcon />
                  </PillButton>
                  <PillButton href="https://www.linkedin.com/in/im-abhinav-ar/">
                    <LinkedinIcon />
                  </PillButton>
                </div>

              </motion.div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}