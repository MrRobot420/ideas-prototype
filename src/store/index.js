import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const url = "http://localhost:5000/api/ideas"
const url = "https://67abb0424b58.ngrok.io/api/ideas"

export default new Vuex.Store({
  state: {
    tokenId: null,
    userId: null,
    user: null,
    ideas: [],
    isMobile: false
  },
  mutations: {  // synchronus
    setIdeas(state, payload) {
      state.ideas = payload
    },
    addIdea(state, payload) {
      state.ideas.push(payload)
    },
    getIdeasForTag(state, payload) {
      return state.ideas.filter(idea => idea.tag === payload)
    },
    setIsMobile(state, payload) {
      state.isMobile = payload
    }
  },
  actions: {  // asynchronus
    async setIdeas(state) {
      // TODO: use payload to get ideas of a single user
      const ideas = await axios.get(url)
      console.log(ideas)
      state.commit("setIdeas", ideas.data.ideas)
    },
    async setMobileState(state) {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        state.commit("setIsMobile", true)
      } else {
        state.commit("setIsMobile", false)
      }
    }

  },
  modules: {
  },
  getters: {
    getIdeas: state => state.ideas,
    getIsMobile: state => state.isMobile
  }
})
