
<?php

namespace Database\Seeders;

use App\Models\Hotel;
use Illuminate\Database\Seeder;

class HotelSeeder extends Seeder
{
    public function run()
    {
        $hotels = [
            [
                'id' => 'movenpick-casablanca',
                'nom' => 'Mövenpick Hotel Casablanca',
                'description' => 'Hôtel 5 étoiles avec vue panoramique sur la ville, terrasse sur le toit et piscine extérieure. Offre un accès facile au stade et au centre-ville.',
                'etoiles' => 5,
                'image' => 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
                'prix' => '1500 DH',
                'ville' => 'Casablanca',
                'distance' => '2.5 km',
                'stade_id' => 'complexe-mohamed-v'
            ],
            [
                'id' => 'kenzi-tower-hotel',
                'nom' => 'Kenzi Tower Hotel',
                'description' => 'Situé dans le quartier d\'affaires de la ville, cet hôtel luxueux offre une vue panoramique, trois restaurants, un spa et un centre de bien-être.',
                'etoiles' => 5,
                'image' => 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop',
                'prix' => '1800 DH',
                'ville' => 'Casablanca',
                'distance' => '3 km',
                'stade_id' => 'complexe-mohamed-v'
            ],
            [
                'id' => 'hotel-sofitel-rabat',
                'nom' => 'Sofitel Rabat Jardin des Roses',
                'description' => 'Niché au cœur d\'un jardin andalou, cet hôtel 5 étoiles offre élégance et raffinement avec ses chambres luxueuses, restaurants gastronomiques et spa.',
                'etoiles' => 5,
                'image' => 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
                'prix' => '2200 DH',
                'ville' => 'Rabat',
                'distance' => '4 km',
                'stade_id' => 'complexe-sportif-moulay-abdallah'
            ],
            // Add more hotels as needed
        ];

        foreach ($hotels as $hotel) {
            Hotel::create($hotel);
        }
    }
}
