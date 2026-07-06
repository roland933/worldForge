<?php

namespace App\Repositories;

use App\Models\Forge;

final class ForgeRepository
{
    public function all()
    {
        return Forge::all();
    }

    public function find(int $id): ?Forge
    {
        return Forge::find($id);
    }

    public function create(array $data): Forge
    {
        return Forge::create($data);
    }

    public function update(Forge $forge, array $data): Forge
    {
        $forge->update($data);

        return $forge->refresh();
    }

    public function delete(Forge $forge): bool
    {
        return $forge->delete();
    }
}