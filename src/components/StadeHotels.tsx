
import React from 'react';
import { motion } from 'framer-motion';
import { Hotel } from '@/data/hotels';
import HotelCard from './HotelCard';
import { Bed } from 'lucide-react';
import { getHotels } from '@/pages/Dashboard';

interface StadeHotelsProps {
  hotels: Hotel[];
  stadeId: string;
}

const StadeHotels: React.FC<StadeHotelsProps> = ({ hotels, stadeId }) => {
  // Use the latest hotels list from the dashboard if available
  const allHotels = getHotels ? getHotels() : [];
  const stadeHotels = allHotels.length > 0 ? allHotels.filter(h => h.stadeId === stadeId) : hotels;
  
  if (stadeHotels.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <p className="text-gray-500">Aucun hôtel disponible pour ce stade.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <Bed className="mr-2 text-caf-red" />
        <h2 className="text-2xl font-bold">Hôtels à proximité</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stadeHotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </motion.div>
  );
};

export default StadeHotels;
