<template>
    <div class=" mx-3 my-5">
        <div class="my-3">
            <label for="category_name" class="font-medium">category name</label>
            <input id="category_name" type="text" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none">   
        </div>
        <div class="my-3">
            <label for="parent_category" class="">category parent</label>
            <select name="" class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none" id="parent_category">
                <option value="1" disabled selected>select parent category</option>
                <option value="1">option </option>
                <option value="1">option </option>
                <option value="1">option </option>
                <option value="1">option </option>
            </select>
        </div>
        <button class="px-4 w-full rounded-md bg-blue-200 border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none" >ADD CATEGORY</button>
    </div>
</template>
<script>
export default {
    
}
</script>