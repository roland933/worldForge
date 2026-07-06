<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class CreateTaskRequest extends FormRequest
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

                'forgeId' => ['required', 'integer'],

                'description' => ['nullable', 'string'],


            ];
    }

    public function messages(): array
        {
            return [

                'name.required' => 'Please enter a forge name.',

                'forgeId.required' => 'Please select a forge.'

            ];
        }

}
