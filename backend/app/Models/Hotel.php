
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nom',
        'description',
        'etoiles',
        'image',
        'prix',
        'ville',
        'distance',
        'stade_id',
        'adresse',
        'telephone'
    ];

    public function stade()
    {
        return $this->belongsTo(Stade::class);
    }
}
