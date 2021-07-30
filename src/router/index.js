/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 7/30/21
 * Time: 3:43 PM
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.BASE_URL),
    routes: [
        {path: '/', component: () => import('@/views/home.vue')},
        {path: '/echarts', component: () => import('@/views/echarts.vue')},
        {path: '/axios', component: () => import('@/views/axios.vue')},
    ]
})


export default router