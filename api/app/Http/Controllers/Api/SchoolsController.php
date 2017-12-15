<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\School;
use App\Models\Category;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class SchoolsController extends Controller
{


    /**
     * Gets all shools and returns them.
     *
     * @return Resonse
     */
    public function getAll()
    {
        return response()->json(School::all(), 200);
    }
    public function getHome(){
         $schools = School::all();
         $categories = Category::all();
         $data = ['schools' => $schools, 'categories' => $categories];
         return response()->json($data, 200);
    }
}
