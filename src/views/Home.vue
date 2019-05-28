<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div> -->
  <div>
    <ul>
      <li><router-link :to="{name: 'blog_list'}">博客文章</router-link></li>
      <li><router-link :to="{name: 'user_hub'}">用户中心</router-link></li>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style scoped>
  ul {
    list-style: none;
  }
  ul li{
    display: inline-block;
    margin: 10px;
  }
  li a{
    text-decoration: none;
  } 
</style>
