
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
                'distance' => '2.5 km',
                'stade_id' => 'complexe-mohamed-v'
            ],
            // ... more hotels from your data file
        ];

        foreach ($hotels as $hotel) {
            Hotel::create($hotel);
        }
    }
}
