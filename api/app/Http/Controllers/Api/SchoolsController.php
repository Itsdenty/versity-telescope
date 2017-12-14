<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\School;
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
}
