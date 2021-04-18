import VueRouter from 'vue-router'


const indexA = { template: '<div>AAA</div>' }
const indexB = { template: '<div>bb</div>' }
const indexC = { template: '<div>CCC</div>' }

const routes = [
    { path: '/indexA', component: indexA },
    { path: '/indexB', component: indexB },
    { path: '/indexC', component: indexC }
  ]

const router = new VueRouter({
    routes // short for `routes: routes`
})
export default router
