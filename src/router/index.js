// import { createWebHistory, createRouter } from "vue-router";
import VueRouter from 'vue-router'
import PainelLista from '@/components/PainelLista'
import PainelExibir from '@/components/PainelExibir'
import PainelAdd from '@/components/PainelAdd'
import PainelEditar from '@/components/PainelEditar'

export default new VueRouter({

    routes: [{


        path: '/',
        name: 'PainelLista',
        component: PainelLista
    }, {
        path: '/painel-exibir/:id',
        name: 'PainelExibir',
        component: PainelExibir
    }, {
        path: '/painel-add',
        name: 'PainelAdd',
        component: PainelAdd
    }, {
        path: '/painel-editar/:id',
        name: 'PainelEditar',
        component: PainelEditar

    }]
})

//     const router = createRouter({
//         history: createWebHistory(),
//         routes,
//     })

// })

// const routes = [{


//     path: '/',
//     name: 'PainelLista',
//     component: PainelLista
// }, {
//     path: '/painel-exibir/:id',
//     name: 'PainelExibir',
//     component: PainelExibir
// }, {
//     path: '/painel-add',
//     name: 'PainelAdd',
//     component: PainelAdd
// }, {
//     path: '/painel-editar/:id',
//     name: 'PainelEditar',
//     component: PainelEditar

// }, ];

// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });

// export default router;