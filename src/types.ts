export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  price: number;
  mileage: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  bodyType: 'SUV' | 'Sedan' | 'Truck' | 'Coupe' | 'Hatchback';
  color: string;
  image: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  isJustArrived?: boolean;
  isCertified?: boolean;
  isBestValue?: boolean;
  engine: string;
  drivetrain: string;
  fuelEconomy: string;
  vin: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}
