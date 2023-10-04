<template>
     <main>
          <div class="container mx-auto flex justify-center items-center flex-col md:flex-row auth py-2 md:py-10 px-5 md:px-10 md:gap-10">
            <img src="/images/login.png" alt="login image">
            <section class="login">
                <div class="login-contain container">
                    <div class="register-form">
                        <h1>Join Intelliverse</h1>
                        <p>Let's Shape the Future of Collaborative Artificial Intelligence Research and Innovation Across Africa</p>
                        <form @submit.prevent="handleSubmit">
                            <input type="text" placeholder="Name" v-model="name">
                            <input type="email" placeholder="Email" v-model="email">
                            <input type="text" placeholder="Linkedin Profile" v-model="linkedin">
                           
                            <button type="submit">Request Access</button>
                        </form>
                          <p>Would you like to be A research Partner? <a href="/requestPartnership">Request Access</a></p>
                        <p class="policy">By signing up you will gain access to the beta version of Intellivere AI Research Labs.</p>
                        <br>
                      
                    </div>
                </div>
            </section>
          </div>
        </main>
</template>

<script>
export default {
  data(){
    return{
      email:"",
      name:"",
      linkedin:""
    }
  },
  methods:{
    handleSubmit(){
      this.$store.dispatch("sendMail", {
          name: "Partner",
          email: "ochiengwarren10@gmail.com,info@intelliverseai.com",
          subject: "Partner Application Form",
          content: `${this.email},${this.name},${this.linkedin}`,
          link:`info@intelliverseai.com`
        })
    }
  }

}
</script>