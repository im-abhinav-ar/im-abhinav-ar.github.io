import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Check, Loader2 } from 'lucide-react';

export default function SkillsContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSending(true); 

    const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...formData }),
      });
      const result = await response.json();
      if (result.success) setIsSubmitted(true);
      else alert("Something went wrong. Please try again or email me directly.");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please check your internet connection.");
    } finally {
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    // FIXED: Added px-6 sm:px-8
    <section id="contact" className="min-h-screen py-20 md:py-24 px-6 sm:px-8 md:px-12 relative z-20 flex justify-center items-center bg-transparent">
      <div className="w-full max-w-[950px] mx-auto flex flex-col items-center">
        
        {/* === HEADER === */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-10 md:mb-16"
        >
          <span className="text-[#c084fc] text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-bold mb-3 md:mb-4 font-['Sofia_Pro','Jost',_sans-serif]">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight mb-3 md:mb-4 leading-[1.1] font-['Sofia_Pro','Jost',_sans-serif] antialiased">
            Let's Create Something <br className="hidden md:block" />
            Extraordinary
          </h2>
          <p className="text-gray-400 text-[10px] sm:text-xs md:text-base max-w-xl leading-relaxed">
            Have a project in mind or want to collaborate? Send a message and let's talk.
          </p>
        </motion.div>

        {/* === CONTACT CARDS WRAPPER === */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // SCALED DOWN PADDING: p-5 on mobile
            className="lg:col-span-2 bg-[#080808] border border-white/5 rounded-3xl p-5 md:p-8 shadow-2xl flex flex-col"
          >
            <h3 className="text-lg md:text-2xl font-bold text-white mb-6 md:mb-8 font-['Sofia_Pro','Jost',_sans-serif]">
              Contact Details
            </h3>

            <div className="flex flex-col gap-5 md:gap-6 flex-grow">
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#c084fc]/10 flex items-center justify-center border border-[#c084fc]/20 flex-shrink-0">
                  <Mail size={14} className="text-[#c084fc]" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-widest font-bold mb-0.5">Email</span>
                  <a href="mailto:abhinavrajan.ar@gmail.com" className="text-white hover:text-[#c084fc] transition-colors text-[11px] md:text-sm font-medium break-all">
                    abhinavrajan.ar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#c084fc]/10 flex items-center justify-center border border-[#c084fc]/20 flex-shrink-0">
                  <MapPin size={14} className="text-[#c084fc]" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-widest font-bold mb-0.5">Location</span>
                  <span className="text-white text-[11px] md:text-sm font-medium">Palakkad, Kerala, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 flex-shrink-0">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-widest font-bold mb-0.5">Availability</span>
                  <span className="text-emerald-400 text-[11px] md:text-sm font-bold">Open to opportunities</span>
                </div>
              </div>

            </div>

            <div className="w-full h-[1px] bg-white/5 my-5 md:my-6" />
            
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-widest font-bold">Connect</span>
              <div className="flex gap-2 md:gap-3">
                <a href="https://github.com/im-abhinav-ar" target="_blank" rel="noreferrer" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a5.25 5.25 0 0 0-1.5-3.8 4.33 4.33 0 0 0-.12-3.8s-1.2-.38-3.9 1.5a13.38 13.38 0 0 0-7 0C6.2 1.5 5 1.8 5 1.8a4.33 4.33 0 0 0-.12 3.8A5.25 5.25 0 0 0 3 8.97c0 5.6 3.35 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03V22"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/im-abhinav-ar/" target="_blank" rel="noreferrer" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 bg-[#080808] border border-white/5 rounded-3xl p-5 md:p-8 shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-4 md:gap-5 h-full"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-widest font-bold pl-1">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full bg-[#111111] border border-white/5 rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-[11px] md:text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c084fc]/50 transition-colors font-medium" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-widest font-bold pl-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="w-full bg-[#111111] border border-white/5 rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-[11px] md:text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c084fc]/50 transition-colors font-medium" />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-grow">
                    <label className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-widest font-bold pl-1">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project..." className="w-full h-full min-h-[90px] md:min-h-[120px] bg-[#111111] border border-white/5 rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-[11px] md:text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c084fc]/50 transition-colors font-medium resize-none" />
                  </div>
                  <button type="submit" disabled={isSending} className="group w-full bg-gradient-to-r from-purple-600 to-[#c084fc] text-white text-[11px] md:text-sm font-bold py-3 md:py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(192,132,252,0.3)] hover:shadow-[0_0_25px_rgba(192,132,252,0.5)] hover:scale-[1.02] active:scale-95 mt-1 disabled:opacity-70 disabled:hover:scale-100 cursor-pointer">
                    {isSending ? 'Sending...' : 'Send Message'}
                    {isSending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }} className="flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center mb-4 md:mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <Check strokeWidth={3} className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 font-['Sofia_Pro','Jost',_sans-serif]">Message Delivered!</h3>
                  <p className="text-gray-400 text-xs md:text-sm max-w-[280px] md:max-w-[300px] leading-relaxed mb-8 md:mb-10">
                    Thank you for reaching out. I have received your note and will get back to you shortly.
                  </p>
                  <button onClick={handleReset} className="px-6 py-2.5 md:px-8 md:py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase transition-all duration-300">
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}