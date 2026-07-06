<?php

namespace App\Repositories;

use App\Models\Task;

final class TaskRepository
{
    public function all():array
    {
        return Task::all();
    }

    public function find(int $id): ?Task
    {
        return Task::find($id);
    }

    public function create(array $data): Task
    {
        return Task::create($data);
    }

    public function update(Task $task, array $data): Task
    {
        $task->update($data);

        return $task->refresh();
    }

    public function delete(Task $task): bool
    {
        return $task->delete();
    }
}