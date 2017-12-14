<?php

use Illuminate\Database\Seeder;

class SchoolsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('schools')->insert([
          'name' => 'Federal University Of Thecnology, Akure',
          'school_head' => 'Professor T.J Adeoye',
          'year' => '1981',
          'school_type_id' => '1',
          'badge_url' => '',
          'created_at' => date('Y-m-d h:i:s'),
          'updated_at' => date('Y-m-d h:i:s'),
      ]);

      DB::table('schools')->insert([
          'name' => 'Federal University Of Thecnology, Oye Ekiti',
          'school_head' => 'Professor C.O Opata',
          'year' => '1981',
          'school_type_id' => '1',
          'badge_url' => '',
          'created_at' => date('Y-m-d h:i:s'),
          'updated_at' => date('Y-m-d h:i:s'),
      ]);


      DB::table('schools')->insert([
          'name' => 'Federal University Of Nigeria, Nsukka',
          'school_head' => 'Professor(Miss) S.E Eziebe',
          'year' => '1981',
          'school_type_id' => '1',
          'badge_url' => '',
          'created_at' => date('Y-m-d h:i:s'),
          'updated_at' => date('Y-m-d h:i:s'),
      ]);


      DB::table('schools')->insert([
          'name' => 'University Of Ibadan',
          'school_head' => 'Professor A.A Afeez',
          'year' => '1981',
          'school_type_id' => '1',
          'badge_url' => '',
          'created_at' => date('Y-m-d h:i:s'),
          'updated_at' => date('Y-m-d h:i:s'),
      ]);

    }
}
