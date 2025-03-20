
# CAN 2025 Laravel Backend

This is the Laravel backend for the CAN 2025 application. It provides the API endpoints for managing stades, hotels, matches, and equipes.

## Setup

1. Clone the repository
2. Navigate to the `backend` directory
3. Copy `.env.example` to `.env` and update database credentials
4. Run the Docker containers:
   ```
   docker-compose up -d
   ```
5. Install Laravel dependencies:
   ```
   docker-compose exec app composer install
   ```
6. Generate application key:
   ```
   docker-compose exec app php artisan key:generate
   ```
7. Run migrations and seeders:
   ```
   docker-compose exec app php artisan migrate --seed
   ```

## API Endpoints

### Hotels
- `GET /api/hotels` - Get all hotels
- `GET /api/hotels/{id}` - Get a specific hotel
- `GET /api/stades/{stadeId}/hotels` - Get hotels for a specific stade
- `POST /api/hotels` - Create a new hotel
- `PUT /api/hotels/{id}` - Update a hotel
- `DELETE /api/hotels/{id}` - Delete a hotel

### Stades
- `GET /api/stades` - Get all stades
- `GET /api/stades/{id}` - Get a specific stade
- `GET /api/stades/{id}/with-hotels` - Get a stade with its hotels
- `GET /api/stades/{id}/with-matches` - Get a stade with its matches

### Matches
- `GET /api/matches` - Get all matches
- `GET /api/matches/{id}` - Get a specific match
- `GET /api/stades/{stadeId}/matches` - Get matches for a specific stade

### Equipes
- `GET /api/equipes` - Get all equipes
- `GET /api/equipes/{id}` - Get a specific equipe
