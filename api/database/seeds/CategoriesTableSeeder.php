<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('categories')->insert([
          'name' => 'ICT',
          'created_at' => date('Y-m-d h:i:s'),
          'updated_at' => date('Y-m-d h:i:s'),
      ]);
      DB::table('categories')->insert([
          'name' => 'Extra curriculum',
          'created_at' => date('Y-m-d h:i:s'),
          'updated_at' => date('Y-m-d h:i:s'),
      ]);
      DB::table('categories')->insert([
          'name' => 'Operational',
          'created_at' => date('Y-m-d h:i:s'),
          'updated_at' => date('Y-m-d h:i:s'),
      ]);
      DB::table('categories')->insert([
          'name' => 'Structural',
          'created_at' => date('Y-m-d h:i:s'),
          'updated_at' => date('Y-m-d h:i:s'),
      ]);
      DB::table('categories')->insert([
          'name' => 'Academic',
          'created_at' => date('Y-m-d h:i:s'),
          'updated_at' => date('Y-m-d h:i:s'),
      ]);
    }
}
