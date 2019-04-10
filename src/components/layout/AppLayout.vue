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
  // css
  import '@/assets/plugin/bootstrap-3.3.7/css/bootstrap.css'
  import '@/assets/plugin/font-awesome-4.7.0/css/font-awesome.css'
  import '@/assets/plugin/simple-line-icons/css/simple-line-icons.min.css'
  import '@/assets/plugin/uniform/css/uniform.default.css'

  import '@/assets/css/component.css'
  import '@/assets/css/plugin.css'
  import '@/assets/admin/layout/css/layout.css'
  import '@/assets/admin/layout/css/themes/darkblue.css'

  // js
  import '@/assets/js/jquery-1.11.0.min.js'
  import '@/assets/plugin/bootstrap-3.3.7/js/bootstrap.js'
  import '@/assets/plugin/uniform/jquery.uniform.min.js'
  import '@/assets/plugin/jquery-slimscroll/jquery.slimscroll.min.js'

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
      // initiate layout and plugins
      Metronic.init(); // init metronic core components
      Layout.init(); // init current layout
      QuickSidebar.init(); // init quick sidebar
      Demo.init(); // init demo features
    },
    watch: {
      $route(route) {
        // console.log(route);
      }
    },
  }
</script>

<style scoped>

</style>
