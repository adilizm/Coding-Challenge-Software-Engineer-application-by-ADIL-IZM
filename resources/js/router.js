import VueRouter from 'vue-router'
import categoreis from './pages/categoreis/index'
import products from './pages/products/index'

const router = new VueRouter({
    routes:[ {
        path: '/products',
        name: 'products',
        component: products
      },{
        path: '/categoreis',
        name: 'categoreis',
        component: categoreis
      }]
})

export default { router}
