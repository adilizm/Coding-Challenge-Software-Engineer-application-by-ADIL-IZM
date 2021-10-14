<template>
    <div>
        <div class="flex justify-end">
            <router-link :to="{name:'create_category'}"  class="p-2 bg-green-400 rounded font-medium">ADD NEW CATEGORY</router-link>
        </div>
        <div>
            <table>
                <thead>
                <th>category id</th>
                <th>category name</th>
                <th>options</th>
                </thead>
               <tbody>
                   <tr v-for="category in categoreis" :key="category.id">
                       <td>{{category.id}}</td>
                       <td>{{category.name}}</td>
                       <td>delete button</td>
                   </tr>
               </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
          categoreis:{
              get(){
              return  this.$store.state.category_store.categoreis
            },
        }
    }
    
}
</script>