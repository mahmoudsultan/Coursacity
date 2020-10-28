import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackPrefetch: true */ '@/views/Home.vue');
const Courses = () => import(/* webpackPrefetch: true */ '@/views/Courses');
const NewCourse = () => import(/* webpackPrefetch: true */ '@/views/NewCourse');
const Search = () => import(/* webpackPrefetch: true */ '@/views/Search');
const CourseDetails = () => import(/* webpackPrefetch: true */ '@/views/CourseDetails');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/courses/new',
    name: 'NewCourse',
    component: NewCourse
  },
  {
    path: '/courses/:id',
    name: 'CourseDetails',
    component: CourseDetails
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    props: route => ({ query: route.query.q })
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
