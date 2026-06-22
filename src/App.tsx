import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Terminal, ShieldAlert, Cpu, Lock, ChevronRight, Github, Twitter, Mail } from "lucide-react";

const CyberPortfolio = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "> whoami\nroot\n> ./execute_payload.sh\nAccess Granted...";

  // Terminal Typing Effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.25, visualDuration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F8FAFC] font-['Syne',sans-serif] selection:bg-[#00F5FF] selection:text-[#0D0D0D] relative overflow-hidden">
      {/* Background Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(transparent_50%,#000_50%)] bg-[length:100%_4px] z-50"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00F5FF] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#7C3AED] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <nav className="fixed w-full border-b border-white/10 bg-[#0D0D0D]/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold text-xl tracking-tighter"
          >
            <ShieldAlert className="text-[#00F5FF]" size={24} />
            <span>0xSECURE</span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            <a href="#about" className="hover:text-[#00F5FF] transition-colors duration-200 cursor-pointer">/about</a>
            <a href="#skills" className="hover:text-[#00F5FF] transition-colors duration-200 cursor-pointer">/skills</a>
            <a href="#cves" className="hover:text-[#00F5FF] transition-colors duration-200 cursor-pointer">/cves</a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#00F5FF] text-[#00F5FF] px-6 py-2.5 rounded-sm hover:bg-[#00F5FF] hover:text-[#0D0D0D] transition-all duration-300 font-medium text-sm cursor-pointer"
          >
            INITIATE_CONTACT
          </motion.button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30 rounded-full text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></span>
              Offensive Security Specialist
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
              Exploiting the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#7C3AED]">Vulnerabilities</span><br/>
              of Tomorrow.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-white/60 max-w-lg leading-relaxed">
              Red Teamer, Reverse Engineer, and Security Researcher. Specialized in identifying critical zero-days before malicious actors exploit them.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00F5FF] text-[#0D0D0D] px-8 py-4 rounded-sm font-bold flex items-center gap-2 cursor-pointer transition-colors duration-300 hover:bg-[#00F5FF]/90"
              >
                View Disclosures <ChevronRight size={18} />
              </motion.button>
              <div className="flex gap-4 items-center pl-4">
                <a href="#" className="text-white/50 hover:text-[#00F5FF] transition-colors cursor-pointer"><Github size={24} /></a>
                <a href="#" className="text-white/50 hover:text-[#00F5FF] transition-colors cursor-pointer"><Twitter size={24} /></a>
              </div>
            </motion.div>
          </motion.div>

          {/* Terminal Window Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.2, duration: 1 }}
            className="relative rounded-lg overflow-hidden border border-white/10 bg-[#050505] shadow-[0_0_50px_rgba(0,245,255,0.1)]"
          >
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#111]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-xs text-white/40 font-mono flex items-center gap-2">
                <Lock size={12} /> terminal@root:~
              </div>
            </div>
            <div className="p-6 font-mono text-sm text-[#00F5FF] whitespace-pre-wrap h-[300px] overflow-hidden">
              {typedText}
              <span className="animate-pulse ml-1 inline-block w-2 h-4 bg-[#00F5FF] align-middle"></span>
            </div>
          </motion.div>
        </div>

        {/* Tactical Skills Section */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-32 space-y-12"
          id="skills"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Tactical Arsenal</h2>
            <p className="text-white/50 max-w-xl mx-auto">Weaponized knowledge and specialized toolsets utilized in authorized penetration tests and security audits.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Red Teaming", icon: <ShieldAlert className="text-[#FF2D55]" size={32} />, desc: "Full-scope adversary simulation and physical/digital breach execution." },
              { title: "Reverse Engineering", icon: <Cpu className="text-[#00F5FF]" size={32} />, desc: "Decompiling malware and analyzing proprietary binaries for zero-day vulnerabilities." },
              { title: "Exploit Development", icon: <Terminal className="text-[#7C3AED]" size={32} />, desc: "Crafting custom payloads and C2 infrastructure to bypass modern EDR/XDR systems." }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#00F5FF]/30 transition-colors duration-300 group"
              >
                <div className="mb-6 p-4 inline-block rounded-lg bg-[#0D0D0D] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-white/50">
            <ShieldAlert size={20} />
            <span>0xSECURE © 2026</span>
          </div>
          <div className="text-sm text-white/40 font-mono">
            Encrypted Comms Only: <a href="mailto:contact@0xsecure.dev" className="text-[#00F5FF] hover:underline cursor-pointer">PGP Public Key</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberPortfolio;
            
