<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TaskService;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\CreateTaskRequest;


class TaskController extends Controller
{
    public function __construct(
        private TaskService $taskService
    ) {
    }

    public function index(): JsonResponse
    {
        return response()->json(
            $this->taskService->getTasks()
        );
    }

    public function store(CreateTaskRequest $request):JsonResponse 
    {

        $task = $this->taskService->createTask(
        $request->validated()
    );

    return response()->json($task);

    }
}
