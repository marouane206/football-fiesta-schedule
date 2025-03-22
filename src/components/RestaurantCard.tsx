
import React from 'react';
import { Star, MapPin, Clock, Phone, Utensils } from 'lucide-react';
import { Restaurant } from '@/data/restaurants';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-gray-200 animate-pulse">
          Chargement de l'image...
        </div>
        <img 
          src={restaurant.image} 
          alt={restaurant.nom}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          onLoad={(e) => {
            e.currentTarget.classList.remove('opacity-0');
            e.currentTarget.classList.add('opacity-100');
            const loadingDiv = e.currentTarget.previousElementSibling;
            if (loadingDiv) loadingDiv.classList.add('hidden');
          }}
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-white text-black dark:bg-black dark:text-white">
            {restaurant.prixMoyen}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{restaurant.nom}</CardTitle>
          <div className="flex items-center">
            <Star size={14} className="fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{restaurant.note.toFixed(1)}</span>
          </div>
        </div>
        <CardDescription className="flex items-center gap-1">
          <Utensils size={14} className="text-gray-500" />
          <span className="text-sm">{restaurant.cuisine}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow pb-2">
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-3">
          {restaurant.description}
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin size={14} className="mr-2 text-caf-red shrink-0" />
            <span className="line-clamp-1">{restaurant.adresse}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock size={14} className="mr-2 text-caf-green shrink-0" />
            <span className="line-clamp-1">{restaurant.horaires}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex justify-between items-center w-full">
          <span className="text-sm font-medium text-caf-red">
            À {restaurant.distance}
          </span>
          <a 
            href={`tel:${restaurant.telephone}`} 
            className="flex items-center text-sm font-medium text-caf-green hover:underline"
          >
            <Phone size={14} className="mr-1" />
            Appeler
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
