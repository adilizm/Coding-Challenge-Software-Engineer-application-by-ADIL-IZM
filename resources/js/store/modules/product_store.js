import axios from "axios";

const state={
    new_product:{
        name:"",
        description:"",
        price:0,
        category_id:null,
        image:null
    },
    products:Array(),
    links:Array()
    
};
const mutations={
    set_new_product_name(state,new_name){
       state.new_product.name = new_name
    },
    set_new_product_description(state,description){
       state.new_product.description = description
    },
    set_new_product_price(state,price){
       state.new_product.price = price
       console.log('new product price = ',state.new_product.price)
    },
    set_product_image(state,image){
        state.new_product.image=image
        console.log('From commit new product image = ',state.new_product.image)
    },
    set_new_product_category(state,category){
        state.new_product.category_id=category
    },
    add_new_product_to_products(state){
      /*   state.products.push({
            id:new_product.id,
            name:new_product.name,
            description:new_product.description,
            category_id:new_product.category_id,
            image:new_product.image,
        }) */
        console.log('new product added ')
    },
    get_products(state,data){
        state.products=data.products
        state.links=data.links
        console.log('in commit data.products = ',data.products)
        console.log('state.products = ',state.products)
        console.log('state.links = ',state.links)
    },
    get_index_products(state,data){
        state.products=data.products
        state.links=data.links
    },
    sort_product_Desc(state){
        state.products.sort((a,b) => b.price - a.price)
    },
    sort_product_Asc(state){
        state.products.sort((a,b) => a.price - b.price)
    },
    get_products_of_category(state,data){
        state.products=data.products
        state.links=data.links
    }
};
const actions={
    set_new_product_name({state,commit},new_name){
        commit('set_new_product_name',new_name)
    },
    set_new_product_description({state,commit},description){
        commit('set_new_product_description',description)
    },
    set_new_product_price({state,commit},price){
        commit('set_new_product_price',price)
    },
    set_new_product_category({state,commit},category){
        commit('set_new_product_category',category)
    },
    set_product_image({state,commit},image){
        commit('set_product_image',image)
    },
    add_product({state,commit}){
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };
        let data = new FormData();
        data.append("name", state.new_product.name);
        data.append("description", state.new_product.description);
        data.append("category_id", state.new_product.category_id);
        data.append("price", state.new_product.price);
        data.append("image", state.new_product.image);

       axios.post('/api/products',data,config)
       .then(res=>{
           commit('add_new_product_to_products')
       })
       .catch(err=>console.error(err))
    },
    get_products({state,commit}){
        axios.get('/api/products')
        .then(res=>{
            console.log('responce = ',res)
            let data={
                products:res.data.data,
                links:res.data.links
            }
          //  console.log('products ==== ===  = ',data.products)
           // console.log('links ==== ===  = ',data.links)
            commit('get_products',data)
        })
        .catch(err=>console.error(err))
    },
    get_index_products({state,commit},url){
        axios.get(url)
        .then(res=>{
           let data={
                products:res.data.data,
                links:res.data.links
            }
            commit('get_index_products',data)
        }).catch(err=>console.error(err))

    },
    sort_product_Desc({state,commit}){
        commit('sort_product_Desc')
    },
    sort_product_Asc({state,commit}){
        commit('sort_product_Asc')
    },
    get_products_of_category({state,commit},category_id){
        console.log('dispatch products of category fired')
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };

        let data = new FormData();
        data.append("category_id", category_id);

        axios.post('/api/get_products_of_category',data,config)
        .then(res=>{
            let data={
                products:res.data.data,
                links:res.data.links
            }
            commit('get_products_of_category',data)
        }).catch(err=>console.error(err))
    }
};
const getters={};

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
}