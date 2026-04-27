import { motion } from 'motion/react';
import { Camera, MapPin, ArrowUpRight } from 'lucide-react';

const projects = [
  { 
    title: "The Mayfair Penthouse", 
    location: "Park Lane, Mayfair", 
    category: "Residential",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "HQ Global Tech", 
    location: "Silicon Way, Shoreditch", 
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Kensington Glass Villa", 
    location: "The Boltons, Kensington", 
    category: "Residential",
    img: "https://images.unsplash.com/photo-1600607687940-4e524cb35a3a?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Belgravia Restoration", 
    location: "Chester Square, Belgravia", 
    category: "Heritage",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-construction-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-construction-accent font-bold tracking-[0.3em] uppercase mb-4 text-sm">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">Landmark Projects</h3>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-construction-accent font-black text-sm uppercase tracking-[0.3em] border-b-2 border-white/10 hover:border-construction-accent pb-2 transition-all flex items-center gap-3"
          >
            VIEW ALL WORK <ArrowUpRight size={18} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden h-[500px] cursor-pointer"
            >
              {/* Image with zoom effect */}
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-construction-black via-construction-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
              
              {/* Hover Frame */}
              <div className="absolute inset-6 border border-white/0 group-hover:border-white/20 transition-all duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-10 left-10 p-2 overflow-hidden">
                <motion.div 
                  className="transition-transform duration-500 group-hover:-translate-y-2"
                >
                  <p className="text-construction-accent text-xs font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <MapPin size={14} /> {p.location}
                  </p>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">{p.title}</h4>
                  <div className="h-0.5 w-12 bg-construction-accent group-hover:w-full transition-all duration-700 mt-4"></div>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-3">
                    <span className="text-white/60 font-bold uppercase text-[10px] tracking-widest">{p.category}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-construction-accent"></div>
                    <span className="text-white/60 font-bold uppercase text-[10px] tracking-widest">Built by LDN</span>
                  </div>
                </motion.div>
              </div>

              {/* Icon Link */}
              <div className="absolute top-10 right-10 w-14 h-14 bg-construction-accent rounded-sm flex items-center justify-center -translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                <Camera className="text-construction-black" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
