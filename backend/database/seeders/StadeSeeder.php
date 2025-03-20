
<?php

namespace Database\Seeders;

use App\Models\Stade;
use Illuminate\Database\Seeder;

class StadeSeeder extends Seeder
{
    public function run()
    {
        $stades = [
            [
                'id' => 'complexe-mohamed-v',
                'nom' => 'Complexe Sportif Mohammed V',
                'description' => 'Le Complexe Sportif Mohammed V est le stade principal de Casablanca et l\'un des plus importants du Maroc. Rénové pour la CAN 2025, il accueillera plusieurs matches importants.',
                'ville' => 'Casablanca',
                'capacite' => 45000,
                'annee_construction' => 1955,
                'image' => 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2030&auto=format&fit=crop'
            ],
            [
                'id' => 'stade-moulay-abdellah',
                'nom' => 'Stade Moulay Abdellah',
                'description' => 'Situé dans la capitale Rabat, le Stade Moulay Abdellah est un stade polyvalent qui a été rénové pour accueillir des matches de la CAN 2025. Il est connu pour son architecture moderne.',
                'ville' => 'Rabat',
                'capacite' => 52000,
                'annee_construction' => 1983,
                'image' => 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=2070&auto=format&fit=crop'
            ],
            [
                'id' => 'stade-ibn-batouta',
                'nom' => 'Stade Ibn Batouta',
                'description' => 'Le Stade Ibn Batouta de Tanger est l\'un des stades les plus modernes du Maroc. Nommé d\'après le célèbre explorateur Ibn Batouta, il offre une vue imprenable sur le détroit de Gibraltar.',
                'ville' => 'Tanger',
                'capacite' => 65000,
                'annee_construction' => 2011,
                'image' => 'https://images.unsplash.com/photo-1590552515252-3a5a1bce7bed?q=80&w=2031&auto=format&fit=crop'
            ],
            [
                'id' => 'stade-adrar',
                'nom' => 'Stade d\'Adrar',
                'description' => 'Situé à Agadir, le Stade d\'Adrar est un stade moderne avec une architecture inspirée par la culture amazighe. Il offre un cadre spectaculaire avec l\'océan Atlantique à proximité.',
                'ville' => 'Agadir',
                'capacite' => 45000,
                'annee_construction' => 2013,
                'image' => 'https://images.unsplash.com/photo-1584295236661-b204e942b721?q=80&w=1887&auto=format&fit=crop'
            ],
            [
                'id' => 'stade-marrakech',
                'nom' => 'Stade de Marrakech',
                'description' => 'Le Stade de Marrakech est un stade ultra-moderne situé dans la ville ocre. Avec les montagnes de l\'Atlas en arrière-plan, il offre un cadre unique pour les matches de la CAN 2025.',
                'ville' => 'Marrakech',
                'capacite' => 45240,
                'annee_construction' => 2011,
                'image' => 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1994&auto=format&fit=crop'
            ],
            [
                'id' => 'stade-fes',
                'nom' => 'Complexe Sportif de Fès',
                'description' => 'Le Complexe Sportif de Fès est l\'un des stades les plus récents du Maroc. Situé dans la plus ancienne ville impériale du pays, il allie modernité et tradition.',
                'ville' => 'Fès',
                'capacite' => 45000,
                'annee_construction' => 2007,
                'image' => 'https://images.unsplash.com/photo-1508181688534-e7d05c4c1eef?q=80&w=2070&auto=format&fit=crop'
            ],
            [
                'id' => 'stade-larache',
                'nom' => 'Stade Municipal de Larache',
                'description' => 'Le Stade Municipal de Larache est un stade historique situé dans cette ville côtière du nord du Maroc. Rénové pour la CAN 2025, il accueillera plusieurs matches de la phase de groupes.',
                'ville' => 'Larache',
                'capacite' => 15000,
                'annee_construction' => 1966,
                'image' => 'https://images.unsplash.com/photo-1493799817216-ba00498a4c77?q=80&w=2070&auto=format&fit=crop'
            ]
        ];

        foreach ($stades as $stade) {
            Stade::create($stade);
        }
    }
}
