import React from 'react';
import { motion } from 'motion/react';
import { Fuel, Gauge, Settings, ChevronRight } from 'lucide-react';
import { Vehicle } from '../types';
import { cn } from '../lib/utils';

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
}

export default function VehicleCard({ vehicle, onViewDetails }: VehicleCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {vehicle.isJustArrived && (
            <span className="bg-[#B22234] text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-lg">
              Just Arrived
            </span>
          )}
          {vehicle.isCertified && (
            <span className="bg-[#003366] text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-lg">
              Certified
            </span>
          )}
          {vehicle.isBestValue && (
            <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-lg">
              Best Value
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white font-bold text-xl">
            ₦{vehicle.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-gray-900 font-bold text-lg leading-tight group-hover:text-[#B22234] transition-colors">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-gray-500 text-sm font-medium">{vehicle.trim}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
            <Gauge className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-500 font-semibold uppercase">Mileage</span>
            <span className="text-xs font-bold text-gray-700">{vehicle.mileage.toLocaleString()}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
            <Settings className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-500 font-semibold uppercase">Trans</span>
            <span className="text-xs font-bold text-gray-700">{vehicle.transmission.charAt(0)}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
            <Fuel className="w-4 h-4 text-gray-400 mb-1" />
            <span className="text-[10px] text-gray-500 font-semibold uppercase">Fuel</span>
            <span className="text-xs font-bold text-gray-700">{vehicle.fuelType}</span>
          </div>
        </div>

        <div className="mt-auto flex gap-2">
          <button
            onClick={() => onViewDetails(vehicle)}
            className="flex-1 bg-gray-900 text-white text-sm font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            View Details
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="px-4 bg-gray-100 text-gray-900 text-sm font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
            Quote
          </button>
        </div>
      </div>
    </motion.div>
  );
}
