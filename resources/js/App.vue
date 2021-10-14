<template>
    <div class="my-5">
        <div class="felx my-2 justify-center text-center">
            <router-link to="/products" class="mx-2 bg-green-300 rounded p-2 font-medium "> products </router-link>
            <router-link to="/categoreis" class="mx-2 bg-green-300 rounded p-2 font-medium" > categoreis </router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
export default {
    
}
</script>