
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hotel } from '@/data/hotels';
import HotelCard from './HotelCard';
import { Bed } from 'lucide-react';
import axios from 'axios';

interface StadeHotelsProps {
  hotels: Hotel[];
  stadeId: string;
}

const StadeHotels: React.FC<StadeHotelsProps> = ({ hotels, stadeId }) => {
  const [stadeHotels, setStadeHotels] = useState<Hotel[]>(hotels);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchHotels = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Use the Laravel API endpoint to get hotels by stade
        const response = await axios.get(`http://localhost:8000/api/stades/${stadeId}/hotels`);
        setStadeHotels(response.data);
      } catch (err) {
        console.error('Error fetching hotels:', err);
        setError('Unable to load hotels data. Using local data instead.');
        // Fallback to local data
        setStadeHotels(hotels);
      } finally {
        setIsLoading(false);
      }
    };
    
    // Only fetch if we have a stadeId
    if (stadeId) {
      fetchHotels();
    } else {
      setStadeHotels(hotels);
    }
  }, [stadeId, hotels]);
  
  if (isLoading) {
    return (
      <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <p className="text-gray-500">Chargement des hôtels...</p>
      </div>
    );
  }
  
  if (error) {
    console.warn(error);
  }
  
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
