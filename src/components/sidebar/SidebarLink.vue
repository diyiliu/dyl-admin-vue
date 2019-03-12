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
    },
    watch: {
      $route(route) {
        this.$nextTick(() => {
          const isActive = this.$children[0].$el.classList.contains('active')
          if (!isActive) {
            return
          }
          const linkGroup = this.$parent;
          if (linkGroup.$options.name !== 'sidebar-link-group') {
            return
          }
          linkGroup.expanded = true;
        })
      }
    }
  }
</script>

<style scoped>

</style>
