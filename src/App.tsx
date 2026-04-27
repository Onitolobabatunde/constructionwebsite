/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-construction-accent selection:text-construction-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
