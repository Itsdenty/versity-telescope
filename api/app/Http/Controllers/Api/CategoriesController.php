<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class CategoriesController extends Controller
{


    /**
     * Gets all categories and returns them.
     *
     * @return Resonse
     */
    public function getAll()
    {
        return response()->json(Category::all(), 200);
    }
}
