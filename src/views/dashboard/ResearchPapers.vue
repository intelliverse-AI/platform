<template>
  <div>
    <nav-bar></nav-bar>
    <div class="container mx-auto px-5 lg:px-24">
        <div class="w-full shadow-lg rounded-lg">

        </div>
    
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavBar from '@/components/utils/NavBar.vue'
import FooterComponent from '@/components/utils/FooterComponent.vue'
export default {
  components: { NavBar, FooterComponent },

}
</script>

<style>

</style>