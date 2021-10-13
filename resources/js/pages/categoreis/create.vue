<template>
    <div class=" mx-3 my-5">
        <div class="my-3">
            <label for="category_name" class="font-medium">category name</label>
            <input id="category_name" type="text" v-model="CategoryName" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none">   
        </div>
        <div class="my-3">
            <label for="parent_category" class="">category parent</label>
            <select name="" @change="categorie_selected" v-model="selected_categorie" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none" id="parent_category">
                <option value="1" disabled selected>select parent category</option>
                <option value="2">option </option>
                <option value="3">option </option>
                <option value="4">option </option>
                <option value="5">option </option>
            </select>
        </div>
    
        <button class="px-4 w-full rounded-md bg-blue-200 border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none" >ADD CATEGORY</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected_categorie:'',
        }
    },
    methods:{
        categorie_selected(){
            this.$store.dispatch('category_store/new_category_parent_selected',this.selected_categorie)
        },
       
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
        }
    }
}
</script>