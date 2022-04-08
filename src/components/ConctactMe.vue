<template>
  <div class="contactArea container-fluid" id="contact-me">
  <div class="col-md-6 offset-md-3 col-sm-10 offset-sm-1 contactForm">
    <form ref="form" @submit.prevent="submit" @reset="onReset">
      <div class="part">
        <label>Your name:</label>
        <input v-model="name" name="name"/>
      </div>

      <div class="part">
        <label>Your email:</label>
        <input v-model="email" name="email"/>
      </div>

      <div class="part">
        <label>Your message:</label>
        <textarea v-model="message" name="message"></textarea>
      </div>
      <div class="buttons">
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
  name: 'ContactMe',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  computed: {
  },
  methods: {
    onReset () {
      this.name = ''
      this.email = ''
      this.message = ''
    },
    submit (e) {
      emailjs.sendForm('service_id', 'template_id', this.$refs.form, 'user_id')
      this.onReset()
    }
  }
}
</script>
