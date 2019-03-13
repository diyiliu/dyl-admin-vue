<template>
  <li :class="liCls">
    <a>
      <slot name="title"></slot>
      <span :class="arrowCls"></span>
    </a>
    <ul class="sub-menu" ref="linkGroupWrapper" v-show="this.expanded">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
  export default {
    name: "sidebar-link-group",
    props: {},
    data() {
      return {
        expanded: this.expanded
      }
    },
    mounted() {
      let linkGroup = this.$refs.linkGroupWrapper;
      if (linkGroup.querySelector('.active') !== null) {
        this.expanded = true
      }
    },
    watch: {
      $route(route) {
        this.expanded = false;
      }
    },
    computed: {
      liCls: function () {
        return {
          'open': this.expanded,
          'active': this.expanded
        }
      },
      arrowCls: function () {
        return {
          'arrow': true,
          'open': this.expanded
        }
      }
    }
  }
</script>

<style scoped>

</style>
