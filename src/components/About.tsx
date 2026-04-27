import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-construction-black px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Planning" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-construction-accent p-10 z-20 shadow-2xl hidden md:block">
              <span className="block text-6xl font-black text-construction-black mb-1">25+</span>
              <span className="block text-sm font-bold text-construction-black uppercase tracking-widest leading-tight">
                Years of <br /> Excellence
              </span>
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-construction-accent/5 rounded-full blur-3xl z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-construction-accent font-bold tracking-[0.3em] uppercase mb-4 text-sm">About LDN BUILD</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Building London's <br /> Legacy Since 1998
            </h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Founded in the heart of London, <span className="text-white font-bold">LDN BUILD</span> has grown from a specialized restoration firm into one of the city's most respected full-service construction partners.
              </p>
              <p>
                We believe that every structure should be a masterpiece of engineering and design. Our team of master craftsmen, engineers, and project managers work in symphony to deliver projects that transcend expectations.
              </p>
              <p>
                From Mayfair's historic townhouses to modern commercial developments in the City, we bring the same level of obsession to detail, safety, and sustainable practices.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-white font-black text-3xl mb-2">450+</span>
                <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Projects Completed</span>
              </div>
              <div>
                <span className="block text-white font-black text-3xl mb-2">12</span>
                <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Design Awards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
