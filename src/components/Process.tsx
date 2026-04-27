import { motion } from 'motion/react';
import { Target, PenTool, Hammer, Key } from 'lucide-react';

const steps = [
  {
    icon: <Target />,
    title: "Phase 01: Consultation",
    desc: "In-depth project analysis, feasibility studies, and precise estimation mapping."
  },
  {
    icon: <PenTool />,
    title: "Phase 02: Design & Planning",
    desc: "Detailed architectural blueprints and material selection in collaboration with design partners."
  },
  {
    icon: <Hammer />,
    title: "Phase 03: Construction",
    desc: "Rigorous onsite execution with continuous quality monitoring and safety oversight."
  },
  {
    icon: <Key />,
    title: "Phase 04: Handover",
    desc: "Final inspections, snagging, and the ceremonial key exchange for your new masterpiece."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-construction-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-construction-accent font-bold tracking-[0.3em] uppercase mb-4 text-sm">Our Approach</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">The LDN Method</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-[2px] bg-white/5 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 text-center group"
            >
              <div className="w-20 h-20 bg-construction-black border-4 border-construction-dark-gray text-construction-accent flex items-center justify-center rounded-full mx-auto mb-8 group-hover:border-construction-accent transition-all duration-500 transform group-hover:rotate-12">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter transition-colors group-hover:text-construction-accent">
                {step.title}
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm max-w-[200px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
