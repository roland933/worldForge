<?php
namespace App\Services;

use Illuminate\Support\Facades\File;
use App\Generators\MapGenerator;
use App\Generators\TemplateGenerator;
use App\Generators\ReadmeGenerator;
final class GenerateForgeService
{
    public function __construct(
        private MapGenerator $mapGenerator,
        private TemplateGenerator $templateGenerator,
        private ReadmeGenerator $readmeGenerator,
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
          
        
            $this->templateGenerator->generate( $data["template"], $folder);

            $this->readmeGenerator->generate($folder,$data['projectName']);

            $this->mapGenerator->generate($folder,$data["map"]);  
          

            return [
                "success" => true
            ];
            }


}