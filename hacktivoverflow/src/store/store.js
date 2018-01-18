import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
const api = axios.create({
  baseURL: 'http://35.187.250.71:3010'
})
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userDetail: null,
    questions: [],
    answers: [],
    username: ''
  },
  actions: {
    login ({ commit }, payload) {
      console.log(payload)
      api.post('/users/login', {
        email: payload.email,
        password: payload.password
      })
        .then(result => {
          console.log(result)
          localStorage.setItem('token', result.data.token)
          commit('getUserDetail', result.data.token)
          router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    },
    register ({ commit }, payload) {
      console.log(payload)
      api.post('/users/register', {
        email: payload.email,
        password: payload.password
      })
        .then(result => {
          console.log(result)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllQuestions ({ commit }) {
      api.get('/questions')
        .then(result => {
          console.log(result)
          commit('getQuestions', result)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllAnswers ({ commit }) {
      api.get('/answers')
        .then(result => {
          commit('getAnswers', result)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postQuestion ({ commit }, payload) {
      api.post('/questions/add', {
        token: localStorage.getItem('token'),
        question: payload.question
      })
        .then(result => {
          commit('addQuestion', result)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {
    getUserDetail (state, payload) {
      state.userDetail = payload
    },
    getQuestions (state, payload) {
      state.questions = payload
    },
    getAnswers (state, payload) {
      state.answers = payload
    },
    addQuestion (state, payload) {
      console.log(payload)
      state.questions.push(payload)
    }
  }
})
