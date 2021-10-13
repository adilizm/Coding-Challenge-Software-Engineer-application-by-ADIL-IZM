<template>
    <div class=" mx-3 my-5">
        <div class="my-3">
            <label for="category_name" class="font-medium">product name {{$store.state.product_store.adil}}</label>
            <input id="category_name" type="text" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none">   
        </div>
        <div class="my-3">
            <label for="description" class="font-medium">product description </label>
            <textarea id="description" rows="3" type="text" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary appearance-none focus:outline-none"></textarea>   
        </div>
       <div class="my-3">
            <label for="product_price" class="font-medium">product price</label>
            <input id="product_price" type="number" step="0.5" value="1.00" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none">   
        </div>
       <div class="my-3">
            <label for="product_category" class="font-medium">product price</label>
            <select id="product_category" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none">
                    <option value="1">category1</option>
                    <option value="2">category2</option>
                    <option value="3">category3</option>
                    <option value="4">category4</option>
            </select>
        </div>
       <div class="my-3">
            <label for="product_image" class="font-medium">product image</label>
            <input id="product_image" type="file" accept="image/png, image/gif, image/jpeg" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none">   
        </div>
        <button @click="add_product" class="px-4 w-full rounded-md bg-blue-200 border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none" >ADD PRODUCT</button>
    </div>
</template>

<script>
export default {
    created(){
        console.log('store.state = ',this.$store.state);
        console.log('store = ',this.$store._actions);
        this.$store.dispatch('product_store/plsconsol');
    },
    data(){
        return{

        }
    },
    methods:{
            add_product(){
                this.$store.dispatch('product_store/plsconsol');
            }
    }
}
</script>