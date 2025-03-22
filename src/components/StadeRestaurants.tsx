
import React from 'react';
import { motion } from 'framer-motion';
import { Restaurant } from '@/data/restaurants';
import RestaurantCard from './RestaurantCard';
import { Utensils } from 'lucide-react';

interface StadeRestaurantsProps {
  restaurants: Restaurant[];
  stadeId: string;
}

const StadeRestaurants: React.FC<StadeRestaurantsProps> = ({ restaurants, stadeId }) => {
  const stadeRestaurants = restaurants.filter(restaurant => restaurant.stadeId === stadeId);
  
  if (stadeRestaurants.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <p className="text-gray-500">Aucun restaurant disponible pour ce stade.</p>
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
        <Utensils className="mr-2 text-caf-red" />
        <h2 className="text-2xl font-bold">Restaurants à proximité</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stadeRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </motion.div>
  );
};

export default StadeRestaurants;
