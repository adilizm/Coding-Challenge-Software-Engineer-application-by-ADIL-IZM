<template>
    <div>
      <div class="flex justify-end my-2">
        <div class="flex my-2">
            <label for="product_category" class="font-medium">sort by category</label>
            <select id="product_category"  v-model="product_category" @change="sort_by_category"  class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none">
              <option disabled selected>select category</option>
              <option v-for="category in  categoreis" :key="category.id" :value="category.id" >{{category.name}}</option>
              <option >show all products</option>
            </select>
          </div>
          <button class="p-2 m-1 bg-green-400 rounded font-medium"  @click="sort_products_DESC">sort by price desc</button>
          <button class="p-2 m-1 bg-green-400 rounded font-medium" @click="sort_products_ASC" >sort by price asc</button>
            <router-link :to="{name:'create_product'}"  class="p-2 m-1 bg-green-400 rounded font-medium">ADD NEW PRODUCT</router-link>
        </div>

        <div class="flex justify-center">
            <table>
                <thead>
                    <th>id</th>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th>category</th>
                    <th>desription</th>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                        <td v-if="product.category[0] != null">{{product.category[0].name}}</td>
                        <td v-else> -- </td>
                        <td> <img :src=" '/storage/' + product.image" width="60" height="60" :alt="product.name" > </td>
                        <td>{{product.description}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div>
            <div class="flex justify-center">
                <p class="my-2 hover:bg-green-200 "  v-for="(link,index) in links" :key="index" @click="get_index_products(link)"  > <a href="javascript:void(0);" v-if="link != null" class="mx-2 text-blue-600 font-bold hover:text-green-600 rounded" >{{index}} </a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product_category:'',
        };
    },
    created(){
        this.$store.dispatch('product_store/get_products')
        this.$store.dispatch('category_store/get_categoreis')
    },
   computed:{
          products:{
              get(){
              return  this.$store.state.product_store.products
            },
        },
          links:{
              get(){
              return  this.$store.state.product_store.links
            },
        },
        categoreis: {
            get() {
                return this.$store.state.category_store.categoreis;
            },
        },
    }, methods:{
        get_index_products(url){
            console.log('url == ',url)
             this.$store.dispatch('product_store/get_index_products',url)
        },
        sort_by_category(){
            console.log('sort by category_id =',this.product_category)
        },
        sort_products_DESC(){
            this.$store.dispatch('product_store/sort_product_Desc')
        },sort_products_ASC(){
            this.$store.dispatch('product_store/sort_product_Asc')

        }
    }
}
</script>
<style>
table, th, td {
  border: 1px solid black;
}

</style>