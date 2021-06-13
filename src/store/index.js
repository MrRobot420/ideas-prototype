import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = "http://localhost:5000/api/ideas"

export default new Vuex.Store({
  state: {
    tokenId: null,
    userId: null,
    user: null,
    ideas: []
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
    }
  },
  actions: {  // asynchronus
    async setIdeas(state) {
      // TODO: use payload to get ideas of a single user
      const ideas = await axios.get(url)
      console.log(ideas)
      state.commit("setIdeas", ideas.data.ideas)
    }

  },
  modules: {
  },
  getters: {
    getIdeas: state => state.ideas
  }
})
