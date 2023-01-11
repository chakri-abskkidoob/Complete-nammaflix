import VueRouter from 'vue-router'
import Vue from 'vue'
import App from '../components/Header.vue'
import HelloWorld from '../components/Registration.vue'
import AllUsers from '../components/AllUsers.vue'
import SingleUser from '../components/SingleUser.vue'
import LoginPage from '../components/Login.vue'
import Details from '../components/Details.vue'
import SingleMovie from '../components/SingleMovie.vue'
import Search from '../components/Search.vue'
import AllMovies from '../components/AllMovies.vue'
import UpdateMovie from '../components/UpdateMovie.vue'
import AddNewMovie from '../components/AddNewMovie.vue'
import PaginatedUsers from '../components/PaginatedUsers.vue'
import NormalPaginated from '../components/NormalPagination.vue'
import Accordion from '../components/Accordion.vue'
import AddNew from '../components/AddNew.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Header',
        component: App
    },
    {
        path: '/signin',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/allusers',
        name: 'AllUsers',
        component: AllUsers
    },
    {
        path: '/singleuser/:userId',
        name: 'SingleUser',
        component: SingleUser
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/detailsPage/:categoryId',
        name: 'DetailsPage',
        component: Details
    },
    {
        path: '/singlemovie/:contentId',
        name: 'SingleMovie',
        component: SingleMovie
    },
    {
        path: '/search/:value',
        name: 'SearchPage',
        component: Search
    },
    {
        path: '/allmovies',
        name: 'AllMovies',
        component: AllMovies
    },
    {
        path: '/updatemovie/:contentId',
        name: 'UpdateMovie',
        component: UpdateMovie
    },
    {
        path: '/addnewmovie',
        name: 'AddNewMovie',
        component: AddNewMovie
    },
    {
        path: '/backend/paginated/users',
        name: 'PaginatedUsers',
        component: PaginatedUsers
    },
    {
        path: '/normal/paginated/users',
        name: 'NormalPaginated',
        component: NormalPaginated
    },
    {
        path:'/accordion',
        name:'Accordion',
        component:Accordion
    },
    {
        path:'/addnew',
        name:'Add New',
        component:AddNew
    }

]
const router = new VueRouter({
    routes
})
export default router