import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/content'
import Detial from '@/components/detial'
import Employee from '@/components/employee'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Content',
            component: Content
        }, {
            path: '/xx',
            name: 'Detial',
            component: Detial
        }, , {
            path: '/employee',
            name: 'Employee',
            component: Employee
        },

    ]
})