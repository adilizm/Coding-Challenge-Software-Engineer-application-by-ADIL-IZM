<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded=['id'];

     public function Category(){
        return $this->belongsTo(Category::class);
     }
     public function set_Category(){
         $this->attributes['category_id'] =$this->belongsTo(Category::class)->id;
        $this->attributes['category_name'] =$this->belongsTo(Category::class)->name;
    }
}
