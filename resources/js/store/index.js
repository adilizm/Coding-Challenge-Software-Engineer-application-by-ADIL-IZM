import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import product_store from './modules/product_store';
import category_store from './modules/category_store';

export default new Vuex.Store ({
    state:{
    },
    mutations:{
    },
    modules:{
        product_store,
        category_store
    }
})