<template>
  <li>
    <a>
      <slot name="title"></slot>
      <span class="arrow"></span>
    </a>
    <ul class="sub-menu">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
  export default {
    name: "sidebar-link-group",
    props: {

    }
  }
</script>

<style scoped>

</style>
