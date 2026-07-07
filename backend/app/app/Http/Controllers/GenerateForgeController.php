<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\GenerateForgeService;


class GenerateForgeController
{
    public function make(Request $request, GenerateForgeService $service) 
    {

        return $service->generate($request->all());

    }
}
