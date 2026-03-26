import React from 'react';
import { motion } from 'motion/react';
import { teamMembers } from '../data/vehicles';
import { ShieldCheck, Heart, Scale, Coffee, Wifi, Clock, Award, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#B22234] font-black uppercase tracking-widest text-sm mb-3">Our Story</h2>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Your Trusted Partner in the <span className="text-[#B22234]">Journey Ahead</span>
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop"
                alt="Our Showroom"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-400 p-2 rounded-lg">
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
      <section className="bg-gray-50 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#B22234] font-black uppercase tracking-widest text-sm mb-3">Our Core</h2>
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

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#B22234] font-black uppercase tracking-widest text-sm mb-3">The Experts</h2>
          <h3 className="text-4xl font-black text-gray-900">Meet Our Team</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-black text-gray-900 mb-1">{member.name}</h4>
                <p className="text-[#B22234] font-bold text-sm uppercase tracking-widest mb-4">{member.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showroom Amenities */}
      <section className="bg-[#1A1A1A] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#D4AF37] font-black uppercase tracking-widest text-sm mb-3">Visit Us</h2>
              <h3 className="text-4xl font-black mb-8">World-Class Facility</h3>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Our modern showroom in Surulere, Lagos is designed with your comfort in mind. While we handle the paperwork, enjoy our premium amenities.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <Amenity icon={Coffee} label="Free Coffee & Snacks" />
                <Amenity icon={Wifi} label="High-Speed Wi-Fi" />
                <Amenity icon={Clock} label="Fast Processing" />
                <Amenity icon={Star} label="Premium Lounge" />
              </div>
            </div>
            
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5">
              <img
                src="https://images.unsplash.com/photo-1562519819-016930ada31c?q=80&w=1000&auto=format&fit=crop"
                alt="Showroom Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-black text-gray-900 mb-1">{value}</p>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</p>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 text-center">
      <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <Icon className="w-8 h-8 text-[#B22234]" />
      </div>
      <h4 className="text-xl font-black text-gray-900 mb-4">{title}</h4>
      <p className="text-gray-500 leading-relaxed text-sm font-medium">{description}</p>
    </div>
  );
}

function Amenity({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
      <Icon className="w-6 h-6 text-[#D4AF37]" />
      <span className="font-bold text-sm">{label}</span>
    </div>
  );
}
