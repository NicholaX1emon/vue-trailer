<template>
  <div>
    <p>标题：</p>
      <input type="text" v-model="title"/>
    <p>正文</p>
      <input type="text" v-model="content"/>
    <p><button @click="addClick">添加</button></p>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'

export default {
  name: 'add_blog',
  store,
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    addClick () {
      if(!this.title || !this.content) return 
      store.commit('addBlog', {
        title: this.title,
        content: this.content
      })
      console.log('title --->', this.title)
      this.title = ''
      this.content= ''
      this.$router.push('/home/bloglist')
      console.log('store --->', store.state)
    }
  }
}
</script>

<style scoped>

</style>