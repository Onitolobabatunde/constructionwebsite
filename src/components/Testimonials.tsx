import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Alexander Vance",
    role: "CEO, Vance Properties",
    text: "LDN BUILD delivered our Shoreditch office three weeks ahead of schedule without a single compromise on quality. Their technical expertise is unrivaled in the London market.",
    rating: 5
  },
  {
    name: "Helena St. John",
    role: "Private Homeowner, Mayfair",
    text: "Restoring a Grade II listed property requires a delicate touch and deep respect for history. The team at LDN BUILD treated my home with incredible reverence.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Director, Thorne & Partners",
    text: "Precision is the word that comes to mind. From the initial quote to the final handover, the communication was clear and the execution was absolute perfection.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-construction-dark-gray px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-construction-accent font-bold tracking-[0.3em] uppercase mb-4 text-sm">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">Trusted by Industry Leaders</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-construction-black p-12 border border-white/5 relative group hover:border-construction-accent/30 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-16 h-16" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-construction-accent text-construction-accent" />
                ))}
              </div>
              
              <p className="text-gray-400 text-lg italic leading-relaxed mb-10 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="w-12 h-12 rounded-full bg-construction-accent/10 border border-construction-accent/20 flex items-center justify-center font-black text-construction-accent">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t.name}</h4>
                  <p className="text-gray-600 text-xs font-bold uppercase">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
