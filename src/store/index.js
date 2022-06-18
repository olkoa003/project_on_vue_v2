import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {

  setPaymentsListData(state, payload) {
    state.paymentList = payload
  },

  addDataToPaymentsList(state, payload) {
    state.paymentList.push(payload)
  },

  editDataToPaymentList(state, payload) {
    state.paymentList.forEach((el) => {
      if (el.id === payload.id) {
        el.value = payload.value
        el.category = payload.category
        el.date = payload.date
      }
    })
  },

  deleteElementFromPaymentList(state, payload) {
    const paymentList = [...state.paymentList];
    const i = paymentList.map(item => item.id).indexOf(payload);
    paymentList.splice(i, 1);
    state.paymentList = [...paymentList];
  },
  setCategories(state, payload) {
    state.categoryList = payload
  },
}

const getters = {
  getPaymentsList: state => state.paymentList,
  getFullPaymentValue: state => {
    return state.paymentList.reduce((res, cur) => res + cur.value, 0)
  },
  getCategoryList: state => state.categoryList
}

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: []
  },
  mutations,
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i <= 50; i++) {
            items.push({
              date: "2022-01-19",
              category: "Sport",
              value: i,
              id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now()) + i)
            })
          } resolve(items)
        }, 2000)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    },
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment', 'Sport'])
        }, 1000)
      }).then(res => { commit('setCategories', res) })
    }
  },
  getters
})