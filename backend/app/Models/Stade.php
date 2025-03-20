
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stade extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nom',
        'description',
        'ville',
        'capacite',
        'annee_construction',
        'image'
    ];

    public function hotels()
    {
        return $this->hasMany(Hotel::class);
    }

    public function matches()
    {
        return $this->hasMany(Match::class);
    }
}
