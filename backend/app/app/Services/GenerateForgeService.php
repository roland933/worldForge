<?php
namespace App\Services;

use Illuminate\Support\Facades\File;
use App\Generators\MapGenerator;
use App\Generators\TemplateGenerator;

final class GenerateForgeService
{
    public function __construct(
        private MapGenerator $mapGenerator,
        private TemplateGenerator $templateGenerator
    ) {}

     public function generate(array $data)
        {   
             $workspace = "/forges";
             $folder = "/forges/{$data['projectName']}";

             if (!File::exists($workspace)) {
                 throw new \Exception("Workspace directory does not exist: {$workspace}");
            }

              if (!File::exists($folder)) {
                    File::makeDirectory($folder, 0755, true);
                }
          
          

            File::copyDirectory(
                resource_path("templates/react-ts"),
                $folder
            );

             $this->templateGenerator->generate(
                $data["template"],
                $folder
        );

            return [
                "success" => true
            ];
            }


}