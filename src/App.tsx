/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Hammer, 
  Wrench, 
  Droplets, 
  Home, 
  ChevronRight, 
  ChevronLeft, 
  Menu, 
  X,
  Star,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img 
              src="input_file_0.png" 
              alt="Dillon & Sons Roofing Logo" 
              className={cn(
                "h-12 w-auto transition-all duration-300",
                isScrolled ? "brightness-0" : "brightness-100"
              )} 
              referrerPolicy="no-referrer" 
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-roof-red",
                isScrolled ? "text-roof-navy" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-roof-red text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-roof-red/90 transition-all shadow-lg shadow-roof-red/20"
          >
            Free Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden", isScrolled ? "text-roof-navy" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 md:hidden border-t border-gray-100"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-roof-navy text-lg font-medium hover:text-roof-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-roof-red text-white text-center py-3 rounded-xl font-bold mt-2"
              >
                Request a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const QuoteForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-roof-red" />
      <h3 className="text-2xl font-display font-bold text-roof-navy mb-6">Request a Free Quote</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Name *</label>
            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-roof-red/20 focus:border-roof-red transition-all" placeholder="John Doe" required />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address *</label>
            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-roof-red/20 focus:border-roof-red transition-all" placeholder="john@example.com" required />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
            <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-roof-red/20 focus:border-roof-red transition-all" placeholder="(204) 555-0123" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject *</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-roof-red/20 focus:border-roof-red transition-all" required>
              <option value="">Select a service</option>
              <option value="roofing">Roofing Installation</option>
              <option value="repair">Emergency Repair</option>
              <option value="siding">Siding & Exterior</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">How can we help you? *</label>
          <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-roof-red/20 focus:border-roof-red transition-all resize-none" placeholder="Tell us about your project..." required />
        </div>
        <button type="submit" className="w-full bg-roof-red text-white py-4 rounded-xl font-bold text-lg hover:bg-roof-red/90 transition-all shadow-xl shadow-roof-red/20 flex items-center justify-center gap-2 group">
          Submit Request
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </motion.div>
  );
};

const ServiceCard = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number, key?: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-roof-red mb-6 group-hover:bg-roof-red group-hover:text-white transition-colors duration-300">
        <Icon size={28} />
      </div>
      <h4 className="text-xl font-display font-bold text-roof-navy mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
};

const Carousel = ({ items, type }: { items: any[], type: 'gallery' | 'testimonials' }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div key={index} className={cn(
              "flex-[0_0_100%] min-w-0 pl-4",
              type === 'gallery' ? "sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]" : "md:flex-[0_0_50%]"
            )}>
              {type === 'gallery' ? (
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 italic mb-6 flex-grow">"{item.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                      <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h5 className="font-bold text-roof-navy">{item.name}</h5>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Verified Customer</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={scrollPrev} 
          disabled={!prevBtnEnabled}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-roof-navy hover:bg-roof-red hover:text-white hover:border-roof-red transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={scrollNext} 
          disabled={!nextBtnEnabled}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-roof-navy hover:bg-roof-red hover:text-white hover:border-roof-red transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Asphalt Shingle Roofing",
      description: "Durable, affordable, and built to last, asphalt roofing is a smart choice for Winnipeg homeowners. Trust Dillon & Sons Roofing for expert installation and long-lasting protection."
    },
    {
      icon: Clock,
      title: "Roof Maintenance",
      description: "Keep your roof in top shape with routine maintenance and professional inspections. Dillon & Sons Roofing helps extend your roof's life and catch small issues before they become big problems."
    },
    {
      icon: Hammer,
      title: "Emergency Roof Repairs",
      description: "When the unexpected hits, Dillon & Sons Roofing is ready. Our emergency roof repair services provide fast, reliable fixes to protect your property from further damage."
    },
    {
      icon: Home,
      title: "Siding Installation & Repair",
      description: "Boost curb appeal and protect your property with expert siding services from Dillon & Sons Roofing. From new installations to quick repairs, we ensure your exterior looks great and lasts longer."
    },
    {
      icon: Wrench,
      title: "Soffit & Fascia Installation",
      description: "Keep your roofline strong and your home well-ventilated with professional soffit and fascia services. Dillon & Sons Roofing delivers clean finishes and lasting protection for your home's exterior."
    },
    {
      icon: Droplets,
      title: "Eavestroughs / Gutters",
      description: "Proper drainage starts at the roofline. Dillon & Sons Roofing installs and repairs eavestroughs and gutters to keep water flowing away from your home — protecting your foundation, siding, and roof."
    }
  ];

  const galleryItems = [
    { src: "https://picsum.photos/seed/shingle-roof-1/800/600", alt: "New shingle roof installation" },
    { src: "https://picsum.photos/seed/residential-siding-1/800/600", alt: "Siding repair project" },
    { src: "https://picsum.photos/seed/roof-repair-1/800/600", alt: "Modern roofing finish" },
    { src: "https://picsum.photos/seed/house-exterior-1/800/600", alt: "Residential roofing project" },
    { src: "https://picsum.photos/seed/roof-installation-1/800/600", alt: "Residential exterior upgrade" },
  ];

  const testimonials = [
    {
      name: "Donald Hunter",
      text: "Dillon & Sons did an amazing job on our roof! Professional, fast, and the quality was top-notch. We couldn't be happier with the results.",
      avatar: "https://i.pravatar.cc/150?u=donald"
    },
    {
      name: "Mike Hughes",
      text: "From the first call to the final cleanup, the team at Dillon & Sons was fantastic. Honest, reliable, and truly skilled at what they do.",
      avatar: "https://i.pravatar.cc/150?u=mike"
    },
    {
      name: "Rachel Hudson",
      text: "We had an emergency leak and they showed up fast. The repair was solid and the service was exceptional. Highly recommend!",
      avatar: "https://i.pravatar.cc/150?u=rachel"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-roof-navy selection:bg-roof-red selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/residential-roof-hero/1920/1080?blur=2" 
            alt="Residential roofing background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-roof-navy/80 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-roof-red/20 text-roof-red px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-roof-red/30">
                <ShieldCheck size={16} />
                Residential Exterior Specialists
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] mb-8">
                Serving Our Clients For Over <span className="text-roof-red underline decoration-4 underline-offset-8">20 Years</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl mb-10">
                Protecting Winnipeg Homes & Businesses with Trusted Roofing & Exterior Solutions. Family-run, precision-focused, and dedicated to your home's integrity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-roof-red rounded-xl flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Emergency 24/7</p>
                    <p className="text-xl font-display font-bold text-white">431 668 1500</p>
                  </div>
                </div>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-roof-navy" alt="User" />
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-roof-navy bg-roof-red flex items-center justify-center text-white text-xs font-bold">
                    500+
                  </div>
                </div>
              </div>
            </motion.div>

            <div id="contact" className="scroll-mt-24">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/roofing-contractor-work/800/1000" 
                  alt="Residential roofing craftsmanship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-[240px] hidden sm:block border border-gray-100">
                <p className="text-4xl font-display font-black text-roof-red mb-1">20+</p>
                <p className="text-sm font-bold text-roof-navy uppercase tracking-widest">Years of Excellence in Winnipeg</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-roof-red font-bold uppercase tracking-[0.2em] text-sm mb-4">About Us</p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-roof-navy leading-tight mb-8">
                Craftsmanship You Can Count On – The Dillon & Sons Difference
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  At Dillon & Sons Roofing, we're more than just roofers — we're dedicated craftsmen who take pride in every nail, shingle, and seam. With decades of experience passed down through generations, our family-run team brings unmatched precision, care, and integrity to every project.
                </p>
                <p>
                  Whether you're replacing a roof, installing new siding, or upgrading your entire exterior, we treat your home or business like our own — because true craftsmanship is in the details.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="text-roof-red mt-1"><CheckCircle2 size={24} /></div>
                  <div>
                    <h5 className="font-bold text-roof-navy">Family Owned</h5>
                    <p className="text-sm text-gray-500">Personalized care on every job.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-roof-red mt-1"><CheckCircle2 size={24} /></div>
                  <div>
                    <h5 className="font-bold text-roof-navy">Fully Insured</h5>
                    <p className="text-sm text-gray-500">Peace of mind for your property.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-roof-navy text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-roof-red/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-roof-red/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-roof-red font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Available For 24/7 Emergency Services</h2>
            <p className="text-gray-400 text-lg">
              From minor repairs to complete exterior transformations, our team delivers high-performance solutions tailored to the Winnipeg climate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard 
                key={i} 
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={i} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <p className="text-roof-red font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Work</p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-roof-navy">Recent Projects</h2>
            </div>
            <p className="text-gray-500 max-w-sm">
              Take a look at some of our recent roofing and exterior transformations across Winnipeg.
            </p>
          </div>

          <Carousel items={galleryItems} type="gallery" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-roof-red font-bold uppercase tracking-[0.2em] text-sm mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-display font-black text-roof-navy mb-6">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it — hear what our satisfied customers have to say about their experience with Dillon & Sons.
            </p>
          </div>

          <Carousel items={testimonials} type="testimonials" />
          
          {/* Trust Badges */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-bold text-xl text-roof-navy">
              <Star className="text-yellow-400 fill-yellow-400" /> Google Reviews
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-roof-navy">
              <Star className="text-blue-600 fill-blue-600" /> Facebook
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-roof-navy">
              <Star className="text-red-600 fill-red-600" /> Yelp
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-roof-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
            Contact us today for a free, no-obligation quote and discover the Dillon & Sons difference.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#contact" className="bg-white text-roof-red px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl">
              Get My Free Quote
            </a>
            <a href="tel:4316681500" className="bg-roof-navy text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-roof-navy/90 transition-all shadow-2xl flex items-center gap-3">
              <Phone size={24} /> 431 668 1500
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-roof-navy text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center">
                <img 
                  src="input_file_0.png" 
                  alt="Dillon & Sons Roofing Logo" 
                  className="h-16 w-auto" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Dillon & Sons Roofing | Trusted Exterior Experts Serving Winnipeg 24/7. Family-Owned, Fully Insured. Quality You Can Count On.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-roof-red transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current opacity-50" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-roof-red">Quick Links</h5>
              <ul className="space-y-4 text-gray-400">
                {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronRight size={14} className="text-roof-red group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-roof-red">Contact Info</h5>
              <ul className="space-y-6 text-gray-400">
                <li className="flex items-start gap-4">
                  <Phone size={20} className="text-roof-red shrink-0" />
                  <span>431 668 1500</span>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={20} className="text-roof-red shrink-0" />
                  <span>sales@dillonandsons.ca</span>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-roof-red shrink-0" />
                  <span>Winnipeg, MB & Surrounding Areas</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-roof-red">24/7 Repairs</h5>
              <p className="text-gray-400 mb-6">
                We're here when you need us — 24/7, 365 days a year. Dillon & Sons Roofing is always ready to help.
              </p>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Emergency Line</p>
                <p className="text-2xl font-display font-bold text-white">431 668 1500</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
            <p>© 2026 Dillon & Sons Roofing. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
