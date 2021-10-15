<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product_request;
use App\Http\Resources\ProductsResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products= Product::with('Category')->paginate(3);
        return  ProductsResource::collection($products);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Product_request $request)
    {
    
        $fileName = time() . '_' . Str::slug($request->name, '_') .  '.' . $request['image']->guessExtension();
        $image_path = $request->file('image')->storeAs('products_images', $fileName, 'public');

        $product= Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'image' => $image_path,
            'category_id' => $request->category_id !='null'  ? $request->category_id : null,
        ]);
        return $product;

    }   
    public function get_products_of_category(Request $request){
        $products= Product::where('category_id',$request['category_id'])->with('Category')->paginate(3);
        return  ProductsResource::collection($products);
    }
}
