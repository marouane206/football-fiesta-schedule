
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    use HasFactory;
    
    protected $table = 'matches';

    protected $fillable = [
        'id',
        'equipe1',
        'equipe2',
        'date',
        'heure',
        'stade_id',
        'groupe'
    ];

    public function stade()
    {
        return $this->belongsTo(Stade::class);
    }
}
