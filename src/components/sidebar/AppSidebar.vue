<template>
  <ul class="page-sidebar-menu" data-auto-scroll="true" data-slide-speed="200">
    <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
    <li class="sidebar-toggler-wrapper">
      <div class="sidebar-toggler"></div>
    </li>

    <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
    <li class="sidebar-search-wrapper">
      <form class="sidebar-search sidebar-search-bordered sidebar-search-solid" action="#" method="POST">
        <a href="javascript:;" class="remove">
          <i class="icon-close"></i>
        </a>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <a href="javascript:;" class="btn submit">
                <i class="icon-magnifier"></i>
            </a>
          </span>
        </div>
      </form>
      <!-- END RESPONSIVE QUICK SEARCH FORM -->
    </li>

    <template v-for="(link,index) in sidebarLinks">
      <sidebar-link-group v-if="link.children">
        <template slot="title">
          <i :class="link.icon"></i>
          <span class="title">{{link.name}}</span>
        </template>

        <sidebar-link v-for="(child,index) in link.children"
                      :key="child.name + index"
                      :to="child.path">

          <i :class="child.icon"></i>
          <span class="title">{{child.name}}</span>
        </sidebar-link>
      </sidebar-link-group>

      <sidebar-link v-else :key="link.name + index"
                    :to="link.path">

        <i :class="link.icon"></i>
        <span class="title">{{link.name}}</span>

      </sidebar-link>
    </template>
  </ul>
</template>

<script>
  import SidebarLink from '@/components/sidebar/SidebarLink'
  import SidebarLinkGroup from '@/components/sidebar/SidebarLinkGroup'

  export default {
    name: "app-sidebar",
    components: {
      SidebarLink,
      SidebarLinkGroup
    },
    props: {
      sidebarLinks: {
        type: Array,
        default: () => []
      }
    }

  }
</script>

<style scoped>

</style>
