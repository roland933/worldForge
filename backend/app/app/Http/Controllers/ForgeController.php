<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ForgeService;
use Illuminate\Http\JsonResponse;

class ForgeController extends Controller
{
     public function __construct(
        private ForgeService $forgeService
    ) {
    }

    public function index(): JsonResponse
    {
        return response()->json(
            $this->forgeService->getForges()
        );
    }

    public function create(Request $request) 
    {

        return response()->json($this->forgeService->createForge($request->all()));

    }
    
}
