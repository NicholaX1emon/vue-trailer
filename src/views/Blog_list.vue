<template>
  <div>
    <ul>
      <li v-for="(blog, index) in blogs"
          @click="checkInfo(index)"
          :class="{blog: true}"
          :key="index">
        {{blog.title}} - {{blog.content.substr(0,10)}}
        <p><router-link :to="{name: 'blog_info'}" :class="{blog_info: true}"> >>>查看详情 </router-link></p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'

export default {
  name: 'blog_list',
  store,
  computed: {
    blogs () {
      return store.state.bloglist
    }
  },
  methods : {
    checkInfo (index) {
      console.log('index--->', index)
      let currentBlog = store.state.bloglist[index]
      store.commit('setCurrnetBlog', currentBlog)
    }
  }
}
</script>

<style scoped>
  .blog {
    list-style: none;
  }
  .blog_info {
    text-decoration: none;
    font-size: 5px;
    color: black;
  }
</style>