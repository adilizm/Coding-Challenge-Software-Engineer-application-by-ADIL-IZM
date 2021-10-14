<template>
  <div class="mx-3 my-5">
    <div class="my-3">
      <label for="category_name" class="font-medium">product name</label>
      <input
        id="category_name"
        v-model="product_name"
        type="text"
        class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none"
      />
    </div>
    <div class="my-3">
      <label for="description" class="font-medium">product description </label>
      <textarea
        id="description"
        v-model="product_description"
        rows="3"
        type="text"
        class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary appearance-none focus:outline-none"
      ></textarea>
    </div>
    <div class="my-3">
      <label for="product_price" class="font-medium">product price</label>
      <input
        id="product_price"
        v-model="product_price"
        type="number"
        step="0.5"
        value="1.00"
        class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none"
      />
    </div>
    <div class="my-3">
      <label for="product_category" class="font-medium">product category</label>
      <select id="product_category" @change="select_product_category" v-model="product_category"  class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none">
        <option disabled selected>select category</option>
        <option v-for="category in  categoreis" :key="category.id" :value="category.id" >{{category.name}}</option>
      </select>
    </div>
    <div class="my-3">
      <label for="product_image" class="font-medium">product image</label>
      <input
        id="product_image"
         v-on:change="set_image" 
        type="file"
        accept="image/png, image/gif, image/jpeg"
        class="px-4 w-full rounded-md border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none"
      />
    </div>
    <button
      @click="add_product"
      class="px-4 w-full rounded-md bg-blue-200 border border-border-base rounded focus:border-custom-primary h-10 appearance-none focus:outline-none"
    >
      ADD PRODUCT
    </button>
  </div>
</template>

<script>
export default {
  created() {
    console.log("store.state = ", this.$store.state);
    console.log("store = ", this.$store._actions);
  },
  data() {
    return {
        product_category:'',
    };
  },
  methods: {
      select_product_category(){
        this.$store.dispatch("product_store/set_new_product_category",this.product_category);
        console.log('selected category = ',this.product_category)
      },
    add_product() {
      this.$store.dispatch("product_store/add_product");
    },
    set_image(event){
        this.$store.dispatch("product_store/set_product_image",event.target.files[0]);
    }
  },
  computed: {
    categoreis: {
      get() {
        return this.$store.state.category_store.categoreis;
      },
    },
    product_name: {
      get() {
        return this.$store.state.product_store.new_product.name;
      },
      set(name) {
        this.$store.dispatch("product_store/set_new_product_name",name);
      },
    },
    product_description: {
      get() {
        return this.$store.state.product_store.new_product.description;
      },
      set(description) {
        this.$store.dispatch("product_store/set_new_product_description",description);
      },
    },
    product_price: {
      get() {
        return this.$store.state.product_store.new_product.price;
      },
      set(price) {
        this.$store.dispatch("product_store/set_new_product_price",price);
      },
    }
  },
    created() {
        this.$store.dispatch('category_store/get_categoreis')
    }
};
</script>
