import { Home, Building2, Paintbrush, Ruler, ShieldCheck, HardHat, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  { 
    icon: <Home />, 
    title: 'Luxury Residential', 
    desc: 'Bespoke high-end homes and luxury apartment fit-outs in London’s most prestigious postcodes.',
    link: '#contact'
  },
  { 
    icon: <Building2 />, 
    title: 'Commercial Build', 
    desc: 'State-of-the-art office spaces, retail environments, and mixed-use developments.',
    link: '#contact'
  },
  { 
    icon: <Paintbrush />, 
    title: 'Heritage Renovation', 
    desc: 'Expert restoration of Grade I and II listed buildings, merging history with modern luxury.',
    link: '#contact'
  },
  { 
    icon: <Ruler />, 
    title: 'Architectural Design', 
    desc: 'Full-scale design and build services, from initial sketches to final structural engineering.',
    link: '#contact'
  },
  { 
    icon: <ShieldCheck />, 
    title: 'Project Management', 
    desc: 'Comprehensive oversight ensuring zero compromises on safety, budget, and timelines.',
    link: '#contact'
  },
  { 
    icon: <HardHat />, 
    title: 'Sustainable New Builds', 
    desc: 'Eco-conscious construction using the latest green technology and materials.',
    link: '#contact'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-construction-dark-gray px-4 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-construction-accent font-bold tracking-[0.3em] uppercase mb-4 text-sm">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white max-w-2xl">
              Specialized Services for <br />
              <span className="text-construction-accent">Uncompromising Clients</span>
            </h3>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 shadow-2xl">
          {services.map((s, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 bg-construction-dark-gray hover:bg-construction-black transition-all group relative overflow-hidden"
            >
              {/* Hover highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-construction-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

              <div className="text-construction-accent mb-8 w-16 h-16 bg-construction-accent/5 rounded-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-construction-accent group-hover:text-construction-black transition-all duration-500">
                {s.icon}
              </div>
              <h4 className="text-2xl font-black text-white mb-6 group-hover:text-construction-accent transition-colors">{s.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">{s.desc}</p>
              
              <a href={s.link} className="inline-flex items-center gap-2 text-white/40 font-bold text-xs uppercase tracking-[0.2em] group-hover:text-construction-accent group-hover:translate-x-2 transition-all">
                Learn More <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
