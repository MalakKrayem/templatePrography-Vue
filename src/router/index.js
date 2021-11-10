import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import BlogInfo from '../views/BlogInfo.vue'
import SliderInfo from '../views/SliderInfo.vue'

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/sliderinfo/:id',
    name: 'sliderinfo',
    component: SliderInfo,
    props: true,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  { path: '/info', name: 'bloginfo', component: BlogInfo },
 /*  {
    path: '/:notFound(.*)',
    component: NotFound,
  }, */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})

export default router
