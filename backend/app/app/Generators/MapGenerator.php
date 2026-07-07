<?php

namespace App\Generators;

class MapGenerator {

    public function generateMap($folder,$width,$height):void {
        $nodes = [];

        $nodes[] = [
            "id" => 1,
            "x" => 0,
            "y" => 0,
            "type" => "start"
        ];

        $nodes[] = [
            "id" => 2,
            "x" => 120,
            "y" => 80,
            "type" => "enemy"
        ];

        $connections[] = [
            "from" => 1,
            "to" => 2
        ];

        file_put_contents(
            $folder."/map.json",
            json_encode($map, JSON_PRETTY_PRINT)
        );

    }


}