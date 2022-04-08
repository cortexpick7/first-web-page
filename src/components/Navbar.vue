<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" :class="{navbarHeight: navbarHeight}">
  <div class="container-fluid">
    <a class="navbar-brand  animate__animated animate__backInLeft" href="#">Navbar</a>
    <button class="navbar-toggler navbar-dark"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="isNavBarOpen()"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="{toggleOn: !togglerOn}" class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mb-3 mb-lg-0  justify-content-center">
        <li class="nav-item animate__animated animate__fadeInDown">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item animate__animated animate__fadeInDown">
          <a class="nav-link" @click="scrollToSkills()">Skills</a>
        </li>
        <li class="nav-item animate__animated animate__fadeInDown">
          <a class="nav-link" @click="scrollToContact()">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="blackedout" v-if="navbarHeight"></div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      togglerOn: false,
      navbarHeight: false
    }
  },
  methods: {
    isTogglerOn () {
      var viewportWidth = window.outerWidth
      if (viewportWidth < 1000) {
        this.togglerOn = !this.togglerOn
      }
    },
    resizeHandler () {
      this.isTogglerOn()
    },
    isNavBarOpen () {
      this.navbarHeight = !this.navbarHeight
    },
    scrollToContact () {
      const element = document.getElementById('contact-me')
      element.scrollIntoView({ behavior: 'smooth' })
    },
    scrollToSkills () {
      const element = document.getElementById('skills')
      element.scrollIntoView({ behavior: 'smooth' })
    }
  },
  created () {
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeMount () {
    this.isTogglerOn()
  }
}
</script>
