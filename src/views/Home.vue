<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div> -->
  <div>
    <router-view></router-view>
    <ul class="footer"> 
      <li class="footer_nav"><router-link :to="{name: 'blog_list'}" >博客文章</router-link></li>
      <li class="footer_nav"><router-link :to="{name: 'user_hub'}" >用户中心</router-link></li>
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
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .footer_nav {
    font-size: 16px;
    text-align: center;
    border-top: 2px solid #42b983;
    flex: 1;
  }
  .footer_nav > a {
    text-decoration: none;
    display: block;
    color: #42b983;
  } 
  .footer_nav > a.active {
    color: #fff;
    background: #42b983;
    transition: background 0.2s;
  }

  
</style>
