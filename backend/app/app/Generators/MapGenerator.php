<?php

namespace App\Generators;
use Illuminate\Support\Facades\File;
class MapGenerator {

    public function generate($folder) {
        $nodes = [];

        $nodes[] = [
            "id" => 1,
            "x" => 150,
            "y" => 100,
            "type" => "start"
        ];

        $nodes[] = [
            "id" => 2,
            "x" => 350,
            "y" => 180,
            "type" => "enemy"
        ];

           $nodes[] = [
            "id" => 3,
            "x" => 550,
            "y" => 300,
            "type" => "boss"
        ];

        $connections[] = [
            "from" => 1,
            "to" => 2
        ];
        $connections[] = [
            "from" => 2,
            "to" => 3
        ];

        $map = [
            "nodes" => $nodes,
            "connections" => $connections,
        ]; 
       
          

       File::put(
            $folder . "/src/game/map.json",
            json_encode($map, JSON_PRETTY_PRINT)
        );

    }


}