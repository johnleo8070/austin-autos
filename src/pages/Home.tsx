import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, FileText, RefreshCw, Star, ShieldCheck, Award, TrendingUp, Car } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import { Vehicle } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  onViewDetails: (vehicle: Vehicle) => void;
}

export default function Home({ onViewDetails }: HomeProps) {
  const container = useRef<HTMLDivElement>(null);
  const featuredVehicles = vehicles.filter(v => v.isFeatured).slice(0, 4);

  useGSAP(() => {
    // Zoom out effect for Hero BG
    gsap.fromTo('.hero-bg-image',
      { scale: 1.4 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      }
    );

    // Sell Your Car Section Animations
    gsap.from('.sell-content > *', {
      scrollTrigger: {
        trigger: '.sell-section',
        start: 'top 70%',
        toggleActions: 'play reverse play reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.sell-image', {
      scrollTrigger: {
        trigger: '.sell-section',
        start: 'top 70%',
        toggleActions: 'play reverse play reverse'
      },
      scale: 0.8,
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Why Choose Us Section Animations
    gsap.from('.feature-header > *', {
      scrollTrigger: {
        trigger: '.feature-section',
        start: 'top 80%',
        toggleActions: 'play reverse play reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });

    gsap.from('.feature-card-item', {
      scrollTrigger: {
        trigger: '.feature-section',
        start: 'top 70%',
        toggleActions: 'play reverse play reverse'
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    });
  }, { scope: container });

  return (
    <div ref={container} className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Car Showroom"
            className="hero-bg-image w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#475C7A]/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl border border-white/10">
              <Star className="w-4 h-4 fill-white" />
              <span>Nigeria's Top Rated Dealership (3.5/5)</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Drive Your Dream <br />
              <span className="text-[#D0D6E0]">Today</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed font-medium">
              Quality Pre-Owned & New Vehicles at Unbeatable Prices. Experience transparency and excellence in every mile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/inventory"
                className="bg-[#475C7A] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#5C7495] transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-red-900/40"
              >
                Browse Inventory
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-12 hidden xl:flex gap-8">
          <StatBox icon={TrendingUp} label="Cars Sold" value="2,500+" />
          <StatBox icon={Award} label="Awards" value="15+" />
          <StatBox icon={ShieldCheck} label="Rating" value="3.5/5" />
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-[#475C7A] font-black uppercase tracking-widest text-sm mb-3">Premium Selection</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900">Featured Vehicles</h3>
            </div>
            <Link to="/inventory" className="text-[#475C7A] font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              View All Inventory
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredVehicles.map((vehicle: Vehicle) => (
              <div key={vehicle.id}>
                <VehicleCard vehicle={vehicle} onViewDetails={onViewDetails} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Your Car Banner */}
      <section className="py-20 bg-[#1C252E] text-white overflow-hidden relative sell-section">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Car className="w-full h-full rotate-12 translate-x-1/4" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="sell-content">
              <h2 className="text-[#D0D6E0] font-black uppercase tracking-widest text-sm mb-3">Instant Appraisal</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Looking to Sell Your <span className="text-[#475C7A]">Current Vehicle?</span>
              </h3>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                We buy cars of all makes and models. Get a fair, market-based offer in minutes. No hassle, no obligation, just a straightforward transaction.
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="bg-[#475C7A] p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold">Best Market Price</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#475C7A] p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold">Instant Cash Offer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#475C7A] p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold">Zero Paperwork Stress</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-2xl font-black hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative sell-image">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
                  alt="Car Appraisal"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#475C7A] p-8 rounded-3xl shadow-2xl hidden md:block">
                <p className="text-3xl font-black mb-1">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 feature-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 feature-header">
            <h2 className="text-[#475C7A] font-black uppercase tracking-widest text-sm mb-3">Our Commitment</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Choose Austin Autos?</h3>
            <p className="text-gray-500 font-medium">We've built our reputation on four core pillars that ensure you get the best vehicle and the best experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card-item">
              <FeatureCard
                icon={CheckCircle}
                title="Quality Assurance"
                description="Every vehicle undergoes a rigorous 150-point inspection and professional reconditioning."
              />
            </div>
            <div className="feature-card-item">
              <FeatureCard
                icon={Users}
                title="Expert Guidance"
                description="Our team of experts will guide you through the entire process of finding your perfect vehicle."
              />
            </div>
            <div className="feature-card-item">
              <FeatureCard
                icon={FileText}
                title="Free History Reports"
                description="Transparency is key. Get a detailed CARFAX or AutoCheck report for every vehicle in stock."
              />
            </div>
            <div className="feature-card-item">
              <FeatureCard
                icon={RefreshCw}
                title="Trade-In Accepted"
                description="Get the maximum value for your current vehicle. Instant appraisal and hassle-free exchange."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatBox({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl saturate-150 p-6 rounded-3xl border border-white/20 flex items-center gap-4 text-white shadow-2xl">
      <div className="bg-[#475C7A] p-3 rounded-2xl">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-2xl font-black leading-none mb-1">{value}</p>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-300">{label}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:border-[#475C7A] transition-all group">
      <div className="bg-[#475C7A]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#475C7A] transition-colors">
        <Icon className="w-8 h-8 text-[#475C7A] group-hover:text-white transition-colors" />
      </div>
      <h4 className="text-xl font-black text-gray-900 mb-4">{title}</h4>
      <p className="text-gray-500 leading-relaxed text-sm font-medium">{description}</p>
    </div>
  );
}
