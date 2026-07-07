<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ForgeController;
use App\Http\Controllers\GenerateForgeController;

Route::get('/forges', [ForgeController::class, 'index']);
Route::post('/forges', [ForgeController::class, 'store']);
Route::post('/generateForge', [GenerateForgeController::class, 'make']);