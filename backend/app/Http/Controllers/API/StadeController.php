
<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Stade;
use Illuminate\Http\Request;

class StadeController extends Controller
{
    public function index()
    {
        return Stade::all();
    }

    public function show($id)
    {
        return Stade::findOrFail($id);
    }

    public function getWithHotels($id)
    {
        return Stade::with('hotels')->findOrFail($id);
    }

    public function getWithMatches($id)
    {
        return Stade::with('matches')->findOrFail($id);
    }
}
