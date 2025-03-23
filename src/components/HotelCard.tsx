
import React from 'react';
import { Star, MapPin, Phone } from 'lucide-react';
import { Hotel } from '@/data/hotels';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-gray-200 animate-pulse">
          Chargement de l'image...
        </div>
        <img 
          src={hotel.image} 
          alt={hotel.nom}
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
            {hotel.prix} / nuit
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{hotel.nom}</CardTitle>
          <div className="flex">
            {Array.from({ length: hotel.etoiles }).map((_, i) => (
              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <CardDescription className="flex items-center">
          <span className="text-sm">À {hotel.distance} du stade</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow pb-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {hotel.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0 flex flex-col items-start gap-2">
        {hotel.adresse && (
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(hotel.adresse + ', ' + hotel.ville)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:text-caf-green transition-colors"
          >
            <MapPin size={16} className="text-caf-green mt-0.5 shrink-0" />
            <span className="text-sm">{hotel.adresse}</span>
          </a>
        )}
        
        {hotel.telephone && (
          <a 
            href={`tel:${hotel.telephone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 hover:text-caf-green transition-colors"
          >
            <Phone size={16} className="text-caf-green shrink-0" />
            <span className="text-sm font-medium">{hotel.telephone}</span>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
