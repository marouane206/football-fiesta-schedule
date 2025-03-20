
<?php

use App\Http\Controllers\API\HotelController;
use App\Http\Controllers\API\StadeController;
use App\Http\Controllers\API\MatchController;
use App\Http\Controllers\API\EquipeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Hotel routes
Route::get('hotels', [HotelController::class, 'index']);
Route::get('hotels/{id}', [HotelController::class, 'show']);
Route::get('stades/{stadeId}/hotels', [HotelController::class, 'getByStade']);
Route::post('hotels', [HotelController::class, 'store']);
Route::put('hotels/{id}', [HotelController::class, 'update']);
Route::delete('hotels/{id}', [HotelController::class, 'destroy']);

// Stade routes
Route::get('stades', [StadeController::class, 'index']);
Route::get('stades/{id}', [StadeController::class, 'show']);
Route::get('stades/{id}/with-hotels', [StadeController::class, 'getWithHotels']);
Route::get('stades/{id}/with-matches', [StadeController::class, 'getWithMatches']);

// Match routes (add implementation)
Route::get('matches', [MatchController::class, 'index']);
Route::get('matches/{id}', [MatchController::class, 'show']);
Route::get('stades/{stadeId}/matches', [MatchController::class, 'getByStade']);

// Equipe routes (add implementation)
Route::get('equipes', [EquipeController::class, 'index']);
Route::get('equipes/{id}', [EquipeController::class, 'show']);
