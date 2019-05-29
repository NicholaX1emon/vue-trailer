<template>
  <div>
    <div class="main">
      <p>标题</p>
      <input class="title" type="text" v-model="title">
      <p>内容</p>
      <textarea class="content" v-model="content"></textarea>
    </div>
    <div class="button">
      <button @click="add()">完成</button>
      <button @click="cancel()">取消</button>
    </div>
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
    add () {
      if(!this.title || !this.content) {
        alert('标题和内容不能为空！')
        return
      }
      let newTime = new Date()
      let year = newTime.getFullYear()
      let month = ('0' + (newTime.getMonth() + 1)).slice(-2)
      let day = ('0' + newTime.getDate()).slice(-2)
      let hours = ('0' + newTime.getHours()).slice(-2)
      let minutes = ('0' + newTime.getMinutes()).slice(-2)
      let createTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
      store.commit('addBlog', {
        title: this.title,
        content: this.content,
        time: createTime,
        user: sessionStorage.getItem('currentUser')
      })
      localStorage.setItem('bloglists', JSON.stringify(store.state.lists))
      this.title = ''
      this.content= ''
      this.$router.push('/home/bloglist')
      alert('快去看看你刚写了啥吧~')
    },
    cancel () {
      this.$router.push('/home/userhub')
    }
  }
}
</script>

<style scoped>
.main {
  margin: 10px;
}
p {
  margin-bottom: 5px;
}
input, textarea {
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
}
.title {
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
}
.content {
  height: 400px;
  line-height: 25px;
  padding: 10px 10px;
}
.button {
display: flex;
margin: 45px 20px;
}
button {
  flex: 1;
  margin: 5px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  border: 1px solid #42b983;
  cursor: pointer;
}
button:nth-child(1) {
  background: #42b983;
  color: #fff;
}
button:nth-child(2) {
  color: #42b983;
}
</style>
