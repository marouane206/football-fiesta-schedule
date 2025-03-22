
import React from 'react';
import { Star, Utensils } from 'lucide-react';
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
            {restaurant.prix}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{restaurant.nom}</CardTitle>
          <div className="flex">
            {restaurant.noteClient && (
              <Badge variant="outline" className="flex items-center gap-1">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span>{restaurant.noteClient}</span>
              </Badge>
            )}
          </div>
        </div>
        <CardDescription className="flex items-center">
          <Badge variant="secondary" className="mr-2">{restaurant.cuisine}</Badge>
          <span className="text-sm">À {restaurant.distance} du stade</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow pb-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {restaurant.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <a 
          href="#" 
          className="text-sm font-medium text-caf-green hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          Voir le menu
        </a>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
