<template>
  <div id="nav">
    <Navbar />
    <div class="goUp" id="scrollUp" @click="scroll()">
      <i class="fa-solid fa-arrow-up"></i>
    </div>
  </div>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    scroll () {
      const element = document.getElementById('here')
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
