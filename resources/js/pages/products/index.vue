<template>
    <div>
      <div class="flex justify-end">
            <router-link :to="{name:'create_product'}"  class="p-2 bg-green-400 rounded font-medium">ADD NEW PRODUCT</router-link>
        </div>
        <div class="flex justify-center">
            <table>
                <thead>
                    <th>id</th>
                    <th>image</th>
                    <th>name</th>
                    <th>category</th>
                    <th>desription</th>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.category}}</td>
                        <td> <img :src=" '/storage/' + product.image" width="60" height="60" :alt="product.name" > </td>
                        <td>{{product.description}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div>
            <div class="flex justify-center">
                <p class="my-2 hover:bg-green-200 "  v-for="link in links" :key="link.label" @click="get_index_products(link.url)"  > <a href="javascript:void(0);" v-if="link.url != null" class="mx-2 text-blue-600 font-bold hover:text-green-600 rounded" >{{link.label}}</a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        this.$store.dispatch('product_store/get_products')
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
    }, methods:{
        get_index_products(url){
            console.log('url == ',url)
             this.$store.dispatch('product_store/get_index_products',url)
        }
    }
}
</script>
<style>
table, th, td {
  border: 1px solid black;
}

</style>