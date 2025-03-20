
<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Hotel;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class HotelController extends Controller
{
    public function index()
    {
        return Hotel::all();
    }

    public function show($id)
    {
        return Hotel::findOrFail($id);
    }

    public function getByStade($stadeId)
    {
        return Hotel::where('stade_id', $stadeId)->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string',
            'description' => 'required|string',
            'etoiles' => 'required|integer|min:1|max:5',
            'image' => 'required|url',
            'prix' => 'required|string',
            'ville' => 'required|string',
            'distance' => 'required|string',
            'stade_id' => 'required|exists:stades,id',
        ]);

        $id = Str::slug($request->nom);
        
        $hotel = Hotel::create([
            'id' => $id,
            'nom' => $request->nom,
            'description' => $request->description,
            'etoiles' => $request->etoiles,
            'image' => $request->image,
            'prix' => $request->prix,
            'ville' => $request->ville,
            'distance' => $request->distance,
            'stade_id' => $request->stade_id,
        ]);

        return response()->json($hotel, 201);
    }

    public function update(Request $request, $id)
    {
        $hotel = Hotel::findOrFail($id);
        
        $request->validate([
            'nom' => 'string',
            'description' => 'string',
            'etoiles' => 'integer|min:1|max:5',
            'image' => 'url',
            'prix' => 'string',
            'ville' => 'string',
            'distance' => 'string',
            'stade_id' => 'exists:stades,id',
        ]);
        
        $hotel->update($request->all());
        
        return response()->json($hotel);
    }

    public function destroy($id)
    {
        $hotel = Hotel::findOrFail($id);
        $hotel->delete();
        
        return response()->json(null, 204);
    }
}
