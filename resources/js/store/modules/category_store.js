import axios from "axios";

const state={
    category_name:"",
    category_parent:null,
    categoreis:Array()
};
const mutations={
    set_new_category_name(state,category_name){
        state.category_name= category_name
     },
     new_category_parent_selected(stats,selected_categorie){
       state.category_parent=selected_categorie;
     },
};
const actions={
    set_new_category_name({commit},category_name){
        commit('set_new_category_name',category_name)
    },
    new_category_parent_selected({state,commit},selected_categorie){
        commit('new_category_parent_selected',selected_categorie)
    },
    Add_new_category({state}){
        let new_category={
                name:state.category_name,
                parent_id:state.category_parent
            }
            axios.post('/api/categoreis',new_category)
            .then(res=>{
                console.log('responce = ',res);
                state.categoreis.push(new_category);
            })
            .catch(err=>{
                console.error('error :',err);
            })
    },
    get_categoreis({state}){
            axios.get('/api/categoreis')
            .then(res=>{
                //category was added
                state.categoreis=res.data.categoreis
                console.log('responce = ',res)
            })
            .catch(err=>{
                console.error('error :',err);
            })
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