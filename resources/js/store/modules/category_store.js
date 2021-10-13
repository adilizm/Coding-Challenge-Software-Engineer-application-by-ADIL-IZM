import axios from "axios";

const state={
    category_name:"",
    category_parent:null
};
const mutations={
    set_new_category_name(state,category_name){
        state.category_name= category_name
        console.log('category name in store == ',state.category_name)
        console.log('category name in store == ',category_name)

     },
     new_category_parent_selected(stats,selected_categorie){
       // state.category_parent= category_parent
       //console.log('category parent selected == ',selected_categorie)
       state.category_parent=selected_categorie;
       console.log('category parent in store = == ',state.category_parent)

     },
};
const actions={
    set_new_category_name({commit},category_name){
        commit('set_new_category_name',category_name)
        console.log('category name in action == ',category_name)

    },
    new_category_parent_selected({state,commit},selected_categorie){
        commit('new_category_parent_selected',selected_categorie)
    },
};
const getters={};

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
}