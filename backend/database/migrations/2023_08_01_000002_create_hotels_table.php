
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('nom');
            $table->text('description');
            $table->integer('etoiles');
            $table->string('image');
            $table->string('prix');
            $table->string('ville');
            $table->string('distance');
            $table->string('stade_id');
            $table->timestamps();
            
            $table->foreign('stade_id')->references('id')->on('stades')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('hotels');
    }
};
