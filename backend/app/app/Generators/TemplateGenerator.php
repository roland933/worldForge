<?php

namespace App\Generators;

use Illuminate\Support\Facades\File;

final class TemplateGenerator
{
    public function generate(
        string $template,
        string $destination
    ): void {

        $source = resource_path("templates/".$template);

        File::copyDirectory(
            $source,
            $destination
        );
    }
}