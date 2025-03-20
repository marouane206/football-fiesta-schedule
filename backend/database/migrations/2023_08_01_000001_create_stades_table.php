
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('stades', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nom');
            $table->text('description');
            $table->string('ville');
            $table->integer('capacite');
            $table->integer('annee_construction');
            $table->string('image');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('stades');
    }
};
