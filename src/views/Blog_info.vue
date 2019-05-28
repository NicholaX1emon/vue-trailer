<template>
  <div>
    <p>标题：</p>
      {{currentBlog.title}}
    <p>正文</p>
      {{currentBlog.content}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'blog_info'
}
</script>

<style scoped>

</style>