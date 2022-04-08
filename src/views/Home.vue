<template>
  <div class="home">
    <Greetings/>
    <Skills />
    <ContactMe />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Greetings from '@/components/Greetings.vue'
import Skills from '@/components/Skills.vue'
import ContactMe from '@/components/ConctactMe.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Greetings,
    Skills,
    ContactMe,
    Footer
  }
}
</script>
