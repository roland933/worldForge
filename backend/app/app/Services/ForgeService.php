<?php
namespace App\Services;

use App\Repositories\ForgeRepository;


final class ForgeService
{
    public function __construct(
        private ForgeRepository $forgeRepository
    ) {
    }

    public function getForges()
    {
        return $this->forgeRepository->all();
    }

    public function createForge(array $data) 
    {

         return $this->forgeRepository->create($data);
    
    }

    public function getForge(int $id) {

        return $this->forgeRepository->find($id);
    }
}