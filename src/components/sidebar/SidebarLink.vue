<template>
  <component :is="tag" tag="li" v-bind="$attrs">
    <a>
      <slot></slot>
    </a>
  </component>
</template>

<script>
  export default {
    name: "sidebar-link",
    props: {
      tag: {
        type: String,
        default: 'router-link'
      }
    }
  }
</script>

<style scoped>

</style>
