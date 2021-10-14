<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Console\Command;

class Create_product_command extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'product:create {--name=} {--price=} {--category=} {--description=} {--image=} ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'create new product ';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $category_id = $this->option('category');
        if ($category_id != null) {
            $category = Category::where('id', $this->option('category'))->first();
            if ($category == null) {
                return $this->info('category not found');
            }
        }

        Product::create([
            'name' => $this->option('name') ?? 'Random_name',
            'price' => $this->option('price') ?? 0.00,
            'category' => $this->option('category'),
            'description' => $this->option('description') ?? 'no description for this product',
            'image' => $this->option('image') ?? 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png',
        ]);
        $this->info('product created successfuly');
    }
}
