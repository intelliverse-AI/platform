import Vue from 'vue'
import Vuex from 'vuex'
const axios = require("axios").default;
import swal from 'sweetalert';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false
  },
  getters: {
   
  },
  mutations: {
    setLoading(state,val){
      state.loading=val
    }
  },
  actions: {
    async sendMail({ commit }, values) {
      commit('setLoading',true)
      await axios.post(
        "https://us-central1-scanpal-f74da.cloudfunctions.net/barizi/mail/eshra",
        {
          name: values.name,
          email: values.email,
          subject: values.subject,

          
          content: values.content,
          link:values.link
        }
      ).then((res) => {
        console.log(res)
        swal(
         {
          title: "Thank You",
          text: "Your request has been submitted successfully",
          icon: "success",
         }
        )
        commit('setLoading',false)
      })
    },
  },
  modules: {
  }
})
