import { ChevronRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070" 
          alt="London Construction Site" 
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-linear-to-r from-construction-black via-construction-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-construction-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-construction-accent/10 border border-construction-accent/20 text-construction-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 rounded-full">
              Established 1998 | Central London
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              PRECISION <br /> 
              <span className="text-construction-accent">ENGINEERING.</span><br />
              LONDON PRIDE.
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed">
              Premium residential and commercial construction services across the capital. From historical restorations to avant-garde new builds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-construction-accent hover:bg-yellow-600 text-construction-black px-10 py-5 rounded-sm font-black text-lg transition-all group shadow-xl shadow-construction-accent/10"
              >
                VIEW PORTFOLIO
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white text-white px-10 py-5 rounded-sm font-black text-lg transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                   <Play size={14} fill="currentColor" />
                </div>
                FREE CONSULTATION
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative side text */}
      <div className="hidden lg:block absolute right-12 bottom-12 z-10 origin-right -rotate-90">
        <p className="text-white/20 font-black tracking-[1em] uppercase text-sm">
          LDN • BUILD • CONSTRUCTION • GROUP
        </p>
      </div>
    </section>
  );
};

export default Hero;
