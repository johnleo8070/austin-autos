import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Scale, Coffee, Wifi, Clock, Award, Star, Search, CarFront, CreditCard, Key } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Advanced Scrubbing for Value Cards
    const valueCards = gsap.utils.toArray('.value-card');
    valueCards.forEach((card: any) => {
      gsap.fromTo(card,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            end: 'center center',
            scrub: 1, // Smooth trailing scrub effect
          }
        }
      );
    });

    // Parallax Hero Image Scrub
    gsap.to('.hero-image', {
      y: 60,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Parallax Showroom Scale Scrub
    gsap.fromTo('.showroom-image',
      { scale: 1, y: -30 },
      {
        scale: 1.15,
        y: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.showroom-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5, // Viscous 1.5s trailing scrub
        }
      }
    );

    // Stats animation WAYPOINTS (Bidirectional)
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top 60%',
        toggleActions: 'play reverse play reverse'
      },
      opacity: 0,
      scale: 0.5,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    });
  }, { scope: container });

  return (
    <div ref={container} className="pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 hero-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h2 className="text-[#475C7A] font-black uppercase tracking-widest text-sm mb-3">Our Story</h2>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Your Trusted Partner in the <span className="text-[#475C7A]">Journey Ahead</span>
            </h1>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
              <p>
                Founded with a mission to make car buying transparent and hassle-free, Austin Autos has been serving the Lagos community for over a decade. We believe that every customer deserves a premium experience, regardless of their budget.
              </p>
              <p>
                Our commitment to quality, honesty, and customer satisfaction is what sets us apart. We don't just sell cars; we build relationships that last long after you drive off our lot.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <StatItem label="Years Experience" value="12+" />
              <StatItem label="Happy Clients" value="5k+" />
              <StatItem label="Rating" value="3.5/5" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, scale: 1.1, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a "premium" deceleration
              x: { type: "spring", stiffness: 50, damping: 20 }
            }}
            viewport={{ once: false, amount: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop"
                alt="Our Showroom"
                className="hero-image w-full h-[115%] -mt-[5%] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#D0D6E0] p-2 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-black text-gray-900">BBB Accredited</h4>
              </div>
              <p className="text-gray-500 text-sm font-bold">Nigeria's Trusted Dealer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-24 mb-24 mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#475C7A] font-black uppercase tracking-widest text-sm mb-3">Our Core</h2>
            <h3 className="text-4xl font-black text-gray-900">Mission & Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={Scale}
              title="Integrity"
              description="No hidden fees, honest pricing, and transparent history reports for every vehicle."
            />
            <ValueCard
              icon={ShieldCheck}
              title="Quality"
              description="Every vehicle is rigorously inspected and reconditioned to meet our high standards."
            />
            <ValueCard
              icon={Heart}
              title="Customer First"
              description="We're with you every step of the way, from browsing to driving off the lot and beyond."
            />
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h2 className="text-[#475C7A] font-black uppercase tracking-widest text-sm mb-3">Simple & Fast</h2>
            <h3 className="text-4xl font-black text-gray-900">How It Works</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#475C7A]/20 to-transparent z-0" />

          {[
            {
              step: '1',
              title: 'Browse Inventory',
              description: 'Explore our wide selection of certified premium vehicles online or in person.',
              icon: Search
            },
            {
              step: '2',
              title: 'Test Drive',
              description: 'Schedule a visit to experience your vehicle of choice on the road.',
              icon: CarFront
            },
            {
              step: '3',
              title: 'Secure Payment',
              description: 'Complete your purchase smoothly with our transparent, no-hidden-fees payment process.',
              icon: CreditCard
            },
            {
              step: '4',
              title: 'Drive Off',
              description: 'Sign the paperwork and drive away with confidence and peace of mind.',
              icon: Key
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative z-10"
            >
              <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-[#1C252E] group-hover:bg-[#475C7A] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transition-colors duration-300 relative">
                  <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#D0D6E0] rounded-full flex items-center justify-center text-white font-black text-sm border-2 border-white shadow-sm">
                    {item.step}
                  </div>
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#475C7A] transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showroom Amenities */}
      <section className="bg-[#1C252E] py-32 text-white relative overflow-hidden showroom-section">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#475C7A]/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#D0D6E0] font-black uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#D0D6E0]"></span>
                Visit Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">World-Class <span className="text-[#475C7A]">Facility</span></h3>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed font-medium">
                Our modern showroom in Surulere, Lagos is designed with your comfort in mind. While we handle the paperwork, enjoy our premium amenities tailored just for you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Coffee, label: "Free Coffee & Snacks", desc: "Freshly brewed coffee." },
                  { icon: Wifi, label: "High-Speed Wi-Fi", desc: "Stay connected always." },
                  { icon: Clock, label: "Fast Processing", desc: "No more long wait times." },
                  { icon: Star, label: "Premium Lounge", desc: "Relax in our plush seating." }
                ].map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="group flex gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="bg-[#1C252E] p-3 rounded-xl group-hover:bg-[#475C7A] transition-colors duration-300 shadow-lg h-auto align-middle my-auto">
                      <amenity.icon className="w-6 h-6 text-[#D0D6E0] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col flex-1 my-auto">
                      <span className="font-bold text-sm text-gray-200 group-hover:text-[#D0D6E0] transition-colors">{amenity.label}</span>
                      <span className="text-xs text-gray-500">{amenity.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 relative z-10 group aspect-[4/3]">
                <div className="absolute inset-0 bg-[#475C7A]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src="/showroom-lounge.png"
                  alt="Showroom Interior"
                  className="showroom-image w-full h-[115%] -mt-[5%] object-cover transform group-hover:scale-125 transition-transform duration-700 origin-center"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#D0D6E0] rounded-full mix-blend-screen filter blur-[40px] opacity-20 animate-pulse" />
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#475C7A] rounded-full mix-blend-screen filter blur-[40px] opacity-20 animate-pulse [animation-delay:700ms]" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="text-center stat-item">
      <p className="text-3xl font-black text-gray-900 mb-1">{value}</p>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</p>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="value-card bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 text-center">
      <div className="bg-[#475C7A]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <Icon className="w-8 h-8 text-[#475C7A]" />
      </div>
      <h4 className="text-xl font-black text-gray-900 mb-4">{title}</h4>
      <p className="text-gray-500 leading-relaxed text-sm font-medium">{description}</p>
    </div>
  );
}


