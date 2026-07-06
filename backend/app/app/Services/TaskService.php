<?php
namespace App\Services;

use App\Repositories\TaskRepository;


final class TaskService
{
    public function __construct(
        private TaskRepository $taskRepository
    ) {
    }

    public function getTasks()
    {
        return $this->taskRepository->all();
    }

    public function createTask(array $data) 
    {

         return $this->taskRepository->create($data);
    
    }

    public function getTask(int $id) 
    {

        return $this->taskRepository->find($id);
    }
}