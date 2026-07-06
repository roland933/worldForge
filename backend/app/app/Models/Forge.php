<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forge extends Model
{
    /** @use HasFactory<\Database\Factories\ForgeFactory> */
    use HasFactory;

    protected $guarded = [];
}
