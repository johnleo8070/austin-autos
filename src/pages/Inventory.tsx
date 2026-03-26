import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import FilterBar from '../components/FilterBar';
import { Vehicle } from '../types';
import { ChevronLeft, ChevronRight, CarFront } from 'lucide-react';

interface InventoryProps {
  onViewDetails: (vehicle: Vehicle) => void;
}

export default function Inventory({ onViewDetails }: InventoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<any>({});
  const [sort, setSort] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredVehicles = useMemo(() => {
    let result = [...vehicles];

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(v => 
        v.make.toLowerCase().includes(query) || 
        v.model.toLowerCase().includes(query) || 
        v.year.toString().includes(query)
      );
    }

    // Filters
    if (filters.make) result = result.filter(v => v.make === filters.make);
    if (filters.bodyType) result = result.filter(v => v.bodyType === filters.bodyType);
    if (filters.year) result = result.filter(v => v.year.toString() === filters.year);
    if (filters.priceRange) {
      if (filters.priceRange === 'Under ₦25M') result = result.filter(v => v.price < 25000000);
      if (filters.priceRange === '₦25M - ₦40M') result = result.filter(v => v.price >= 25000000 && v.price <= 40000000);
      if (filters.priceRange === '₦40M - ₦60M') result = result.filter(v => v.price > 40000000 && v.price <= 60000000);
      if (filters.priceRange === 'Over ₦60M') result = result.filter(v => v.price > 60000000);
    }

    // Sort
    if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sort === 'mileage') result.sort((a, b) => a.mileage - b.mileage);
    if (sort === 'newest') result.sort((a, b) => b.year - a.year);

    return result;
  }, [searchQuery, filters, sort]);

  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
  const paginatedVehicles = filteredVehicles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (newFilters: any) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Our <span className="text-[#B22234]">Inventory</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg">
            Showing {filteredVehicles.length} vehicles matching your criteria
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          onSearch={setSearchQuery}
          onFilterChange={handleFilterChange}
          onSortChange={setSort}
        />

        {/* Grid */}
        {paginatedVehicles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <AnimatePresence mode="popLayout">
                {paginatedVehicles.map((vehicle: Vehicle) => (
                  <div key={vehicle.id}>
                    <VehicleCard
                      vehicle={vehicle}
                      onViewDetails={onViewDetails}
                    />
                  </div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-3 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={cn(
                        "w-12 h-12 rounded-2xl font-bold text-sm transition-all",
                        currentPage === page
                          ? "bg-[#B22234] text-white shadow-lg shadow-red-100"
                          : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                      )}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-24 text-center">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <CarFront className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">No Vehicles Found</h3>
            <p className="text-gray-500 font-medium">Try adjusting your filters or search query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilters({});
                setSort('newest');
              }}
              className="mt-6 text-[#B22234] font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
