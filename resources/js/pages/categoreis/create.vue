<template>
    <div class=" mx-3 my-5">
        <div class="my-3">
            <label for="category_name" class="font-medium">category name </label>
            <input id="category_name" type="text" v-model="CategoryName" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none">   
        </div>
        <div class="my-3">
            <label for="parent_category" class="">category parent</label>
            <select name="" @change="categorie_selected" v-model="parent_category" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none" id="parent_category">
                <option value="1" disabled selected>select parent category</option>
                <option v-for="category in  categoreis" :key="category.id" :value="category.id" >{{category.name}}</option>
            </select>
        </div>
        <button @click="Add_category" class="px-4 w-full rounded-md bg-blue-200 border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none" >ADD CATEGORY</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            parent_category:'',
        }
    },
    methods:{
        categorie_selected(){
            this.$store.dispatch('category_store/new_category_parent_selected',this.parent_category)
        },
        Add_category(){
            this.$store.dispatch('category_store/Add_new_category')
        }
    },
    computed:{
        CategoryName:{
            get(){
              return  this.$store.state.category_store.category_name
            },
            set(new_value){
                this.$store.dispatch('category_store/set_new_category_name',new_value)
                console.log('hello')
            }
        },
        categoreis:{
              get(){
              return  this.$store.state.category_store.categoreis
            },
        }
    },
    created() {
        this.$store.dispatch('category_store/get_categoreis')
    }
}
</script>