<template>
  <div>
    <p class="title">标题：<input type="text" v-model="title"/></p>
    <div class="content">
      <p>正文: </p>
      <textarea rows="5" cols="30" v-model="content"/>  
    </div>  
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
      this.title = ''
      this.content= ''
      this.$router.push('/home/bloglist')
    }
  }
}
</script>

<style scoped>
  .title {
    width: 75%;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }
  .content {
    width: 75%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  p button {
    margin: 0 auto;
  }
</style>
