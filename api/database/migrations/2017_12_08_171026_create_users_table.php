<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('username', 100)->unique();
          $table->string('fullname', 100);
          $table->string('email', 100)->unique();
          $table->string('password', 100);
          $table->unsignedBigInteger('role_id');
          $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
          $table->rememberToken();
          $table->string('api_token', 100);
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
