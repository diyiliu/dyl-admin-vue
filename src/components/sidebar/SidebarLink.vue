<template>
  <component :is="tag" tag="li" :to="to">
    <a>
      <slot>
        <!--
        <i v-if="link.icon" :class="link.icon"></i>
        <span class="title">{{link.name}}</span>
        -->
      </slot>
    </a>
  </component>
</template>

<script>
  export default {
    name: "sidebar-link",
    props: {
      to: {
        type: Object,
        required: true,
      },
      tag: {
        type: String,
        default: 'router-link'
      },
      link: {
        type: [String, Object],
        default: () => {
          return {
            name: '',
            path: '',
            icon: ''
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
