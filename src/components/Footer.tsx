import { Facebook, Instagram, Linkedin, Twitter, Hammer, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="bg-construction-black border-t border-white/5 pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Hammer className="text-construction-accent w-8 h-8" />
              <span className="text-2xl font-bold tracking-tighter text-white">
                LDN<span className="text-construction-accent">BUILD</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Defining the London skyline through precision engineering and unparalleled craftsmanship since 1998.
            </p>
            <div className="flex gap-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <Icon key={i} className="text-gray-600 hover:text-construction-accent cursor-pointer transition-colors" size={20} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-sm">Navigation</h4>
            <ul className="space-y-5">
              {['About Us', 'Our Expertise', 'Portfolio', 'Process', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-construction-accent transition-colors font-bold text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-sm">Contact Details</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <Phone size={16} className="text-construction-accent" />
                <span className="text-gray-500 font-bold text-sm group-hover:text-white transition-colors">+44 20 7946 0000</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail size={16} className="text-construction-accent" />
                <span className="text-gray-500 font-bold text-sm group-hover:text-white transition-colors">hello@ldnbuild.com</span>
              </li>
              <li className="flex items-start gap-4 group">
                <MapPin size={16} className="text-construction-accent mt-1" />
                <span className="text-gray-500 font-bold text-sm group-hover:text-white transition-colors max-w-[150px]">
                  123 Excellence Way, London EC2A
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-sm">The Blueprint</h4>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Subscribe to our monthly journal on architecture and London developments.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Work Email" 
                className="w-full bg-construction-dark-gray border border-white/5 p-4 text-white outline-none focus:border-construction-accent transition-all font-bold text-sm" 
              />
              <button className="absolute right-2 top-2 bottom-2 bg-construction-accent hover:bg-yellow-600 text-construction-black px-4 font-black transition-all">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-700 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} LDN BUILD Construction Ltd. | Reg. 01234567 • VAT 987654321
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-gray-700">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
