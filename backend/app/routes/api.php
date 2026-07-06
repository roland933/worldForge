<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ForgeController;

Route::get('/forges', [ForgeController::class, 'index']);
Route::post('/forges', [ForgeController::class, 'store']);