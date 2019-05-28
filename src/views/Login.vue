<template>
  <div>
    <p>用户名: <input type="text" v-model="username"/></p>
    <p>密码: <input type="text" v-model="password"/></p>
    <button @click="login">登录</button>
    <button @click="register">注册</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$router.push('/')
    },
    register () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  button {
    margin: 10px;
  }
</style>