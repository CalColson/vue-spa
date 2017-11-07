<template>
  <div class="content">
    <div v-if="isAuthenticated">
      <h1>Hello you're checked in... and I'm checking you out ;)</h1>
      <p>Name: {{profile.firstName}}</p>
      <p>Favorite Sandwich: {{profile.favoriteSandwich}}</p>
      <button @click="logout" class="button is-primary">Run Away!!!</button>
    </div>
    <div v-else>
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input v-model="username" type="text" class="input" placeholder="Your username">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input v-model="password" type="password" placeholder="Your password" class="input">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button @click="login" class="button is-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appService from '../app.service.js'
export default {
  data () {
    return {
      username: '',
      password: '',
      profile: {},
      isAuthenticated: false
    }
  },
  watch: {
    isAuthenticated: function (val) {
      if (val) {
        appService.getProfile()
          .then(profile => {
            this.profile = profile
          })
      } else {
        this.profile = {}
      }
    }
  },
  methods: {
    login () {
      appService.login({username: this.username, password: this.password})
        .then((data) => {
          window.localStorage.setItem('token', data.token)
          window.localStorage.setItem('tokenExpiration', data.expiration)
          this.isAuthenticated = true
          this.username = ''
          this.password = ''
        })
        .catch(() => window.alert('Your puny login attempt failed... hmmph'))
    },
    logout () {
      window.localStorage.setItem('token', null)
      window.localStorage.setItem('tokenExpiration', null)
      this.isAuthenticated = false
    }
  },
  created () {
    let expiration = window.localStorage.getItem('tokenExpiration')
    var unixTimeStamp = new Date().getTime() / 1000
    if (expiration !== null && parseInt(expiration) - unixTimeStamp > 0) {
      this.isAuthenticated = true
    }
  }
}
</script>

