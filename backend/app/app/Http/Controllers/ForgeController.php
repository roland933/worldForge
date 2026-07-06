<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ForgeService;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\CreateForgeRequest;

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

    public function store(CreateForgeRequest $request) 
    {

        $forge = $this->forgeService->createForge(
        $request->validated()
    );

    return response()->json($forge);

    }
    
}
