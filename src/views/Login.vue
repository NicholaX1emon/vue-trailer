<template>
  <div>
    <div v-if="loginMode" class="login">
      <div class="header">分享周围新鲜事</div>
      <div class="form">
        <label>用户名</label>
        <input type="text" v-model="username">
      </div>
      <div class="form">
        <label>密码</label>
        <input type="password" v-model="password">
      </div>
      <div class="button">
        <button @click="login">登录</button>
        <button @click="changeLoginMode">注册账号</button>
    </div>
  </div>
    <div v-else class="register">
      <div class="header">请输入账号信息</div>
      <div class="form">
        <label>用户名</label>
        <input type="text" v-model="username">
      </div>
      <div class="form">
        <label>密码</label>
        <input type="password" v-model="password">
      </div>
      <div class="form">
        <label>确认密码</label>
        <input type="password" v-model="confirmedPassword">
      </div>
      <div class="button">
        <button @click="register" class="first">注册</button>
        <button @click="cancel" class='second'>返回登录页面</button>
      </div>
    </div>
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
  mounted () {
    store.commit('getLocalUsers') // 挂载后从localStorage获取user列表 并添加到store.state.users
  },
  computed: {
    users () {
      return store.state.users
    },
    currentUser () {
      return this.users.find(user => this.username === user.username && this.password === user.password)
    }
  },
  methods: {
    login () {
      if (!this.username || !this.password) {
        alert('用户名和密码不能为空！')
      } else if (this.currentUser) {
        sessionStorage.setItem('currentUser', this.currentUser.username)
        this.username = ''
        this.password = ''
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
      } else if (this.currentUser) {
        alert('该用户已存在！')
      } else if (this.password !== this.confirmedPassword) {
        alert('两次输入密码不一致！')
      } else {
        store.commit('addUser', {
          username: this.username,
          password: this.password
        })
        localStorage.setItem('users', JSON.stringify(store.state.users)) // 注册后添加至store.state.users并更新localStorage
        this.password = ''
        this.confirmedPassword = ''
        this.loginMode = true
        alert('注册成功')
      }
    },
    cancel () {
      this.loginMode = true
    }
  }
}
</script>

<style scoped>
.login {
  background: #71d8aa;
  transition: background 0.5s;
}
.register {
  background: #44db5d;
  transition: background 0.5s;
}
.header {
  margin: 20px;
  margin-left: 50px;
  padding: 10px;
  font-weight: bold;
  color:firebrick
}
.form {
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  margin-right: 20px;

}
.form label {
  margin-right: 35px;
  height: 30px;
  line-height: 30px;
}
.form input {
  width: 50%;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  border: 1px solid rgb(147, 212, 193);
  padding: 0 10px;
  box-sizing: border-box;
}
.button{
  display: flex;
  justify-content: flex-end;
  margin: 30px 20px;
}
button {
  width: 10%;
  margin: 10px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  border: 2px solid rgb(182, 207, 192);
  cursor: pointer;
}
button .first {
  color: #fff;
  background: #42b983
}
button .second {
  color: #fff
}
</style>
