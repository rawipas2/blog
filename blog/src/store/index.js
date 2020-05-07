import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let mongo_api = 'http://localhost:5000/api/blog/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blog: []
  },


  mutations: {
    addBlog( state, { payload }){
      state.blog.push( payload )
    },
    deleteBlog(state, {index}) {
      state.blog.splice(index, 1)
    },
    editBlog(state, { payload }){
        state.blog[payload.index].name = payload.name
        state.blog[payload.index].price = payload.price
      
    },
    set_post ( state, blog){
      state.blog = blog
    }

  },
  

  actions: {

    async addBlog({ commit }, payload) {
      await Axios.post(mongo_api, payload)
        .then(() => commit('addBlog', { payload }))
        .catch(err => alert(err));
    },

    async editBlog({ commit }, payload){
      await Axios.put(mongo_api + payload._id, payload)
        .then(() => commit("editBlog", { payload }))
        .catch(err => alert(err));
    },

    async deleteBlog({ commit }, payload) {
      alert(payload._id);
      await Axios.delete(mongo_api + payload._id)
        .then(() => commit('deleteBlog', { payload }))
        .catch(err => alert(err));
    },

    async loadBlog({ commit }){
        Axios.get(mongo_api)
        .then( data => {
          console.log('Data: ',data.data)
          let blog = data.data
          commit('set_post', blog)
        })
        .catch( error => {
          console.log('Error: ',error)
        }) 
    }
  },


  getters: {
    blog: state => state.blog
  }
})
