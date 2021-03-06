import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Question from '@/components/QuestionComps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: Question
    }
  ]
})
