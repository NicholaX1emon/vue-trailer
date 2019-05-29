<template>
  <div>
    <div class="img">
      <img src="../assets/logo.png">
    </div>
    <div class="user">{{username}}</div>
    <div class="welcome">欢迎回来</div>
    <div class="add">
      <router-link :to="{ name: 'add_blog'}">写一条博客吧~</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'user_hub',
  data () {
    return {
      username: sessionStorage.getItem('currentUser')
    }
  }
}
</script>

<style scoped>
.img {
  text-align: center;
}
.user {
  font-weight: bold;
}
.user, .welcome {
  text-align: center;
  margin: 5px;
}
.add {
  text-align: center;
  margin: 20px;
  margin-top: 40px;
  height: 35px;
  line-height: 35px;
  background-color: #42b983;
  border: 1px solid #42b983;
  border-radius: 5px;
}
a{
  text-decoration: none;
  color: #fff;
  display: block;
}
</style>
