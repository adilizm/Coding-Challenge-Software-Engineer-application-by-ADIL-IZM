<?php

namespace App\Console\Commands;

use App\Models\Product;
use Illuminate\Console\Command;

class delete_product_command extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'product:delete {id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete product';

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
        $product_id=$this->argument('id');
        $product=Product::where('id',$product_id)->first();
        if($product == null){
            return $this->info('product not found');
        }else{
            $product->delete();
        }
        $this->info('product deleted successfuly');
    }
}
