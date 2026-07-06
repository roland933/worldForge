<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class CreateForgeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
           return [

                'name' => ['required', 'string', 'max:255'],

               'world_id' => ['required', 'integer'],

                'description' => ['nullable', 'string'],

                'git_repository' => ['nullable', 'url']

            ];
    }

    public function messages(): array
        {
            return [

                'name.required' => 'Please enter a forge name.',

                'world_id.required' => 'Please select a world.'

            ];
        }

        public function attributes(): array
        {
            return [

                'world_id' => 'worlds'

            ];
        }
}
