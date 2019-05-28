<template>
  <div>
    <p>标题：</p>
      {{$store.state.currentBlog.title}}
    <p>正文</p>
      {{$store.state.currentBlog.content}}
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'

export default {
  name: 'blog_info',
  store
}
</script>

<style scoped>

</style>