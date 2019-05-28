<template>
  <div>
    <button @click="addBlog">添加个人博客</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'user_hub',
  methods: {
    addBlog () {
      this.$router.push('/addblog')
    }
  }
}
</script>

<style scoped>

</style>

