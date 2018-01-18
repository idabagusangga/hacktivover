<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h4>{{regisData}}</h4>
    <div class="container">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
      </div>
      <button type="button" class="btn btn-info"@click='login({email: email, password: password})'>Login</button>
      <button type="button" class="btn btn-warning"@click='registration({email: email, password: password})'>Register</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to HacktivOverflow PWA',
      regisData: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login',
      'register'
    ]),
    registration (data) {
      this.register(data)
      this.email = ''
      this.password = ''
      this.regisData = 'User Created! Please Log In'
    }
  },
  computed: {
    ...mapState([
      'userDetail'
    ]),
    usersData () {
      return this.$store.state.userDetail
    },
    questionData () {
      return this.$store.state.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
