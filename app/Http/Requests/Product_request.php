<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Product_request extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name"=>'required|min:6|max:40',
            "description"=>'required|min:6|max:1000',
            "price"=>'required|numeric',
            "image"=>'required|image|dimensions:min_width=100,min_height=200',
        ];
    }
}
