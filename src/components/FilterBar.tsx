import React from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: any) => void;
  onSortChange: (sort: string) => void;
}

export default function FilterBar({ onSearch, onFilterChange, onSortChange }: FilterBarProps) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Search Input */}
        <div className="lg:col-span-4 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by Make, Model, or Year..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#B22234] transition-all text-sm font-medium"
          />
        </div>

        {/* Filters Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <FilterSelect label="Make" options={['All Makes', 'Toyota', 'Honda', 'Ford', 'BMW', 'Tesla', 'Jeep', 'Mercedes-Benz', 'Hyundai', 'Chevrolet', 'Audi']} onChange={(v) => onFilterChange({ make: v })} />
          <FilterSelect label="Body Type" options={['All Types', 'SUV', 'Sedan', 'Truck', 'Coupe']} onChange={(v) => onFilterChange({ bodyType: v })} />
          <FilterSelect label="Price Range" options={['All Prices', 'Under ₦25M', '₦25M - ₦40M', '₦40M - ₦60M', 'Over ₦60M']} onChange={(v) => onFilterChange({ priceRange: v })} />
          <FilterSelect label="Year" options={['All Years', '2024', '2023', '2022', '2021', '2020']} onChange={(v) => onFilterChange({ year: v })} />
        </div>

        {/* Sort */}
        <div className="lg:col-span-2">
          <div className="relative">
            <select
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-4 bg-gray-900 text-white rounded-2xl text-sm font-bold cursor-pointer focus:ring-2 focus:ring-[#B22234] transition-all"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="mileage">Lowest Mileage</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSelect({ label, options, onChange }: { label: string, options: string[], onChange: (val: string) => void }) {
  return (
    <div className="relative">
      <select
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none pl-4 pr-10 py-4 bg-gray-50 text-gray-700 rounded-2xl text-xs font-bold uppercase tracking-wider cursor-pointer focus:ring-2 focus:ring-[#B22234] transition-all border-none"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt === `All ${label}s` || opt === `All ${label}` ? '' : opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
    </div>
  );
}
