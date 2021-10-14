<?php

namespace App\Console\Commands;

use App\Models\Category;
use Illuminate\Console\Command;

class Create_Category_Command extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'category:create {name} {parent_id?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'this command allow you to create new category ';

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
        $name = $this->argument('name');
        $parent_id= $this->argument('parent_id') ;

        if($parent_id != null){
            //check if parent category exist
            $parent_category=Category::find($parent_id);
            if($parent_category == null){
              return  $this->info('!!! the parent id doesent exist !!!!');
            }
        }
     
        Category::create([
            'name'=> $name,
            'parent_id'=> $parent_id,
        ]);
       return  $this->info('category '. $name . 'created successfuly');
    }
}
