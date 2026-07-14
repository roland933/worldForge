<?php

namespace App\Generators;
use Illuminate\Support\Facades\File;
class MapGenerator {

    public function generate($folder,array $map) {

       File::put(
            $folder . "/src/game/map.json",
            json_encode($map, JSON_PRETTY_PRINT)
        );

    }


}