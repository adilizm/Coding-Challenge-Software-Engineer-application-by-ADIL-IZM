const state={
    adil:"hello aba adil-----------------------"
};
const mutations={
    plsconsol(){
        console.log('hello adil from mutation');
    }
};
const actions={
    plsconsol(){
        console.log('hello adil from actions');
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