## how to install

- 1: clone the project 
- 2: run this command | composer install
- 3: create .env file and setup the database 
- 4: migrate the tables by the commande php artisan migrate
- 5: run the commandes | npm install && npm run dev
- 6: run the commande | php artisan key:generate
- 7: run the commande | php artisan storage:link (to link storage to the public folder)
- 8: run the commande | php artisan serve 

## how to use CLI
- 1: create category
    To create category using CLI use the commande : php artisan category:create {name} {parent_id?}
    - name : the category name (requirde)
    - parent_id :it's the parent category id (optional)
    
- 2: delete category
    To delete category using CLI use the commande : php artisan category:delete {id}
    - id : category id to delete(requirde)

- 3: create product
    To create product using CLI use the commande : php artisan product:create {--name=} {--price=} {--category=} {--description=} {--image=}
    - name : product name 
    - price :product price
    - category :category id 
    - description : description 
    - image :product image (string) 

- 4: delete product
    To delete product using CLI use the commande : php artisan product:delete {id}
    - id : product id to delete (requirde)


