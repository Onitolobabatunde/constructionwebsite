import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-construction-dark-gray px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-construction-accent font-bold tracking-[0.3em] uppercase mb-4 text-sm">Inquiry</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">Let's Discuss <br /> Your Vision</h3>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-lg">
              Whether it's a luxury residential renovation or a large-scale commercial build, our team is ready to bring precision and excellence to your project.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-construction-accent/10 border border-construction-accent/20 flex items-center justify-center rounded-sm text-construction-accent group-hover:bg-construction-accent group-hover:text-construction-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="text-2xl font-bold text-white transition-colors group-hover:text-construction-accent">+44 20 7946 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-construction-accent/10 border border-construction-accent/20 flex items-center justify-center rounded-sm text-construction-accent group-hover:bg-construction-accent group-hover:text-construction-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Email Inquiries</p>
                  <p className="text-2xl font-bold text-white transition-colors group-hover:text-construction-accent">hello@ldnbuild.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-construction-accent/10 border border-construction-accent/20 flex items-center justify-center rounded-sm text-construction-accent group-hover:bg-construction-accent group-hover:text-construction-black transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Design Studio</p>
                  <p className="text-xl font-bold text-white max-w-xs transition-colors group-hover:text-construction-accent">
                    123 Building Excellence Way, Shoreditch, London EC2A
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-construction-black p-10 md:p-16 border border-white/5 relative shadow-2xl"
          >
            {/* Background design */}
            <div className="absolute top-0 right-0 p-8">
              <MessageSquare className="text-white/5 w-24 h-24" />
            </div>

            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-construction-dark-gray border border-white/10 p-4 text-white focus:border-construction-accent outline-none transition-all placeholder:text-gray-700 font-bold" 
                    placeholder="E.g. James Smith" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-construction-dark-gray border border-white/10 p-4 text-white focus:border-construction-accent outline-none transition-all placeholder:text-gray-700 font-bold" 
                    placeholder="E.g. james@london.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Project Type</label>
                  <select className="w-full bg-construction-dark-gray border border-white/10 p-4 text-white focus:border-construction-accent outline-none transition-all font-bold appearance-none">
                    <option className="bg-construction-black">Luxury Residential</option>
                    <option className="bg-construction-black">Commercial Fit-out</option>
                    <option className="bg-construction-black">Heritage Restoration</option>
                    <option className="bg-construction-black">Technical Consulting</option>
                  </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Project Details</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-construction-dark-gray border border-white/10 p-4 text-white focus:border-construction-accent outline-none transition-all placeholder:text-gray-700 font-bold resize-none" 
                  placeholder="Tell us about the scope and timeline..."
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-construction-accent hover:bg-yellow-600 text-construction-black font-black py-5 rounded-sm transition-all uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl shadow-construction-accent/10"
              >
                REQUEST PROPOSAL <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
