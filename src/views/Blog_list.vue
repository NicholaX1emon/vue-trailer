<template>
  <div>
    <ul>
      <li v-for="(blog, index) in blogs"
          @click="checkInfo(index)"
          :class="{blog: true}"
          :key="index">
        {{blog.title}} - {{blog.content.substr(0,10)}}
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
      let currentBlog = store.bloglist[index]
      store.commit('setCurrnetBlog', currentBlog)
    }
  }
}
</script>

<style scoped>
  .blog {
    list-style: none;
  }
</style>