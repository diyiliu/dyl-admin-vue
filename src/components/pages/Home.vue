<template>
  <div class="page-content">
    我是首页
  </div>
</template>

<script>
  export default {
    name: "home",
    mounted () {
      Layout.initFixedSidebar();// init current layout
    }
  }
</script>

<style scoped>

</style>
