
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('equipe1');
            $table->string('equipe2');
            $table->date('date');
            $table->string('heure');
            $table->string('stade_id');
            $table->string('groupe')->nullable();
            $table->timestamps();
            
            $table->foreign('stade_id')->references('id')->on('stades')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('matches');
    }
};
