<?php

namespace App\Http\Resources;

use App\Models\Category;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $category=Category::where('id',$this->category_id)->get();
        
        return [
            "id" => $this->id,
            "name" => $this->name,
            "description" => $this->description,
            "image" => $this->image,
            "price" => $this->price,
            "category" => CategoryResource::collection($category) 
        ];
    }
}
