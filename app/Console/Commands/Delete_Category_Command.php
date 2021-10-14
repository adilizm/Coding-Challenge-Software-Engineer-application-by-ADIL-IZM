<?php

namespace App\Console\Commands;

use App\Models\Category;
use Illuminate\Console\Command;

class Delete_Category_Command extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'category:delete {id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'this command allow to delete category by its id';

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
        $category_id=$this->argument('id');
        $category=Category::where('id',$category_id)->first();
        if($category == null){
            return $this->info('category not found');
        }else{
            $category->delete();
        }
        $this->info('category deleted successfuly');
    }
}
