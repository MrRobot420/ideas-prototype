import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const url = "http://localhost:5000/api/ideas"
const url = "https://154bd0dfc4d1.ngrok.io/api/ideas"

export default new Vuex.Store({
  state: {
    tokenId: null,
    userId: null,
    user: null,
    ideas: [],
    selectedIdeas: [],
    isMobile: false
  },
  mutations: {  // synchronus
    setIsMobile(state, payload) {
      state.isMobile = payload
    },
    setIdeas(state, payload) {
      state.ideas = payload
    },
    setSelectedIdeas(state, payload) {
      state.selectedIdeas = payload
    },
    addIdea(state, payload) {
      state.ideas.push(payload)
    },
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
    },
    async setIdeasForCategory(state, ideaPayload) {
      const ideas = await axios.get(url)
      const ideasForCategory = ideas.data.ideas.filter(idea => idea.category === ideaPayload)
      state.commit("setSelectedIdeas", ideasForCategory)
    },
  },
  modules: {
  },
  getters: {
    getIdeas: state => state.ideas,
    getIsMobile: state => state.isMobile,
    getSelectedIdeas: state => state.selectedIdeas
  }
})
