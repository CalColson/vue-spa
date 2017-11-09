<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Bulma: a modern CSS    framework based on Flexbox" width="112" height="28">
        </a>
        <router-link class="navbar-item is-tab" to="/category/front-end">
          Front-end
        </router-link>
        <router-link class="navbar-item is-tab" to="/category/mobile">
          Mobile
        </router-link>
        <router-link class="navbar-item is-tab" to="/about">
          About
        </router-link>
        <router-link class="navbar-item is-tab" to="/contact">
          Contact
        </router-link>
        <router-link class="navbar-item is-tab" to="/login">
          <span v-if="isAuthenticated">Logout</span>
          <span v-else>Login</span>
        </router-link>
      </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

