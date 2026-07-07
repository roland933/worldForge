<?php

namespace App\Generators;
use Illuminate\Support\Facades\File;

class ReadmeGenerator {

    public function generate(string $folder, string $projectName): void
                {
                    $content = <<<MD
                        # {$projectName}

                        Generated with World Forge.

                        MD;

                    File::put(
                        $folder . "/README.md",
                        $content
                    );
                }
            


}