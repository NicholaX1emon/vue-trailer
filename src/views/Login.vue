<template>
  <div v-if="loginMode" class="login"> 
    <p>用户名: <input type="text" v-model="username"/></p>
    <p>密码: <input type="password" v-model="password"/></p>
    <button @click="login">登录</button>
    <button @click="changeLoginMode">注册账号</button>
  </div>
  <div v-else class="register">
    <p>用户名: <input type="text" v-model="username"/></p>
    <p>密码: <input type="password" v-model="password"/></p>
    <p>确认密码: <input type="password" v-model="confirmedPassword"/></p>
    <button @click="register">注册</button>
    <button @click="cancel">返回登录页面</button>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'

export default {
  name: 'login',
  store,
  data () {
    return {
      loginMode: true,
      username: '',
      password: '',
      confirmedPassword: ''
    }
  },
  methods: {
    login () {
      if (!this.username || !this.password) {
        alert('用户名和密码不能为空！')
        return
      }
      if (this.username === localStorage.getItem('username') && this.password === localStorage.getItem('password')){
        this.$router.push('/home')
      } else {
        alert('用户名或密码有误 请重新输入')
      }
    },
    changeLoginMode (state) {
      this.loginMode = false
    },
    register () {
      if (!this.username || !this.password || !this.confirmedPassword) {
        alert('用户名和密码不能为空！')
        return
      }
      if (this.password !== this.confirmedPassword) alert('两次输入密码不一致！')
      localStorage.setItem('username', this.username)
      localStorage.setItem('password', this.password)
      this.password = ''
      this.confirmedPassword = ''
      alert('注册成功')
      this.loginMode = true
    },
    cancel () {
      this.loginMode = true
    }
  }
}
</script>

<style scoped>
  button {
    margin: 10px;
  }
  .login {
    background: blue;
    transition: background 0.3s;
  }
  .register {
    background: green;
    transition: background 0.3s;
  }
</style>