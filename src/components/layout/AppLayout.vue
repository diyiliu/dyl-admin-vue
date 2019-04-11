<template>
  <div>
    <!-- BEGIN HEADER -->
    <div class="page-header navbar navbar-fixed-top">
      <div class="page-header-inner">
        <div class="page-logo">
          <h4 style="color:#fff"><b>DYL 后台管理系统</b></h4>
          <div class="menu-toggler sidebar-toggler hide"></div>
        </div>

        <a href="javascript:void(0);" class="menu-toggler responsive-toggler" data-toggle="collapse"
           data-target=".navbar-collapse"></a>

        <top-navbar/>
      </div>
    </div>

    <div class="page-container">
      <div class="page-sidebar-wrapper">
        <div class="page-sidebar navbar-collapse collapse">
          <app-sidebar :sidebarLinks="sidebarLinks"></app-sidebar>
        </div>
      </div>
      <div class="page-content-wrapper">
        <router-view/>
      </div>
    </div>

    <app-footer/>
  </div>
</template>

<script>
  import AppSidebar from '@/components/sidebar/AppSidebar'
  import TopNavbar from '@/components/layout/TopNavbar'
  import AppFooter from '@/components/layout/AppFooter'

  export default {
    name: "default-layout",
    components: {
      AppSidebar,
      TopNavbar,
      AppFooter
    },
    data: function () {
      return {
        sidebarLinks: [
          {
            path: '/admin/home',
            name: '我的首页',
            icon: 'icon-home'
          },
          {
            path: '/admin/other',
            name: '我的应用',
            icon: 'icon-lock'
          },
          {
            name: '我的信息',
            icon: 'fa fa-user',
            children: [
              {
                path: '/admin/menu1',
                name: '基本信息',
                icon: 'fa fa-info-circle'
              },
              {
                path: '/admin/menu2',
                name: '我的文档',
                icon: 'icon-settings'
              }
            ]
          },
          {
            name: '系统管理',
            icon: 'fa fa-cogs',
            children: [
              {
                path: '/admin/menu3',
                name: '用户管理',
                icon: 'fa fa-user'
              }
            ]
          }
        ]
      }
    },
    mounted() {
      document.getElementsByTagName("body")[0].className = "page-header-fixed page-quick-sidebar-over-content";
      // initiate layout and plugins
      Metronic.init(); // init metronic core components
      QuickSidebar.init(); // init quick sidebar
      Demo.init(); // init demo features
      Layout.init(); // init current layout
    },
    watch: {
      $route(route) {
        // console.log(route);
      }
    }
  }
</script>

<style src="../../../static/admin/layout/css/layout.css"/>
<style src="../../../static/admin/layout/css/themes/darkblue.css"/>
<style scoped>

</style>
