import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Fuel, Gauge, Settings, ShieldCheck, Zap, Info, Calendar, DollarSign, Phone, FileText } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export default function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
  if (!vehicle) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full text-gray-900 shadow-lg transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left: Image Gallery (Simplified) */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100">
            <img
              src={vehicle.image}
              alt={vehicle.model}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 flex gap-2">
              {vehicle.isCertified && (
                <div className="bg-[#003366] text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold uppercase tracking-wider shadow-xl">
                  <ShieldCheck className="w-4 h-4" />
                  Certified Pre-Owned
                </div>
              )}
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto custom-scrollbar">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-[#475C7A] font-bold text-sm uppercase tracking-widest mb-2">
                <Car className="w-4 h-4" />
                <span>{vehicle.year} {vehicle.make}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                {vehicle.model} <span className="text-gray-400 font-light">{vehicle.trim}</span>
              </h2>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-[#475C7A]">
                  ₦{vehicle.price.toLocaleString()}
                </span>
                <span className="text-gray-400 text-sm font-medium">
                  + Taxes & Fees
                </span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <SpecItem icon={Gauge} label="Mileage" value={vehicle.mileage.toLocaleString()} />
              <SpecItem icon={Settings} label="Transmission" value={vehicle.transmission} />
              <SpecItem icon={Fuel} label="Fuel Type" value={vehicle.fuelType} />
              <SpecItem icon={Zap} label="Engine" value={vehicle.engine} />
            </div>

            {/* Detailed Specs */}
            <div className="space-y-6 mb-10">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b pb-2">
                <Info className="w-5 h-5 text-[#475C7A]" />
                Vehicle Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                <DetailRow label="VIN" value={vehicle.vin} />
                <DetailRow label="Drivetrain" value={vehicle.drivetrain} />
                <DetailRow label="Fuel Economy" value={vehicle.fuelEconomy} />
                <DetailRow label="Exterior Color" value={vehicle.color} />
                <DetailRow label="Body Style" value={vehicle.bodyType} />
                <DetailRow label="Inventory ID" value={`#AE-${vehicle.id.padStart(4, '0')}`} />
              </div>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b pb-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#475C7A]" />
                Key Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {vehicle.features.map((feature, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 gap-4">
              <button className="bg-[#475C7A] text-white font-bold py-4 rounded-2xl hover:bg-[#5C7495] transition-all shadow-lg shadow-red-100 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Test Drive
              </button>
              <button className="border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Salesperson
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function SpecItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex flex-col items-center p-3 bg-gray-50 rounded-2xl border border-gray-100">
      <Icon className="w-5 h-5 text-gray-400 mb-2" />
      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{label}</span>
      <span className="text-xs font-black text-gray-900 text-center">{value}</span>
    </div>
  );
}

function DetailRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className="text-gray-900 font-bold">{value}</span>
    </div>
  );
}

function Car(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
