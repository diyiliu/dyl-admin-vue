<template>
  <div>
    <!-- BEGIN HEADER -->
    <div class="page-header navbar navbar-fixed-top">
      <!-- BEGIN HEADER INNER -->
      <div class="page-header-inner">
        <!-- BEGIN LOGO -->
        <div class="page-logo">
          <h4 style="color:#fff"><b>DYL 后台管理系统</b></h4>
          <div class="menu-toggler sidebar-toggler hide"></div>
        </div>
        <!-- END LOGO -->

        <!-- BEGIN RESPONSIVE MENU TOGGLER -->
        <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse"
           data-target=".navbar-collapse"></a>
        <!-- END RESPONSIVE MENU TOGGLER -->

        <!-- BEGIN TOP NAVIGATION MENU -->
        <div class="top-menu">
          <ul class="nav navbar-nav pull-right">
            <!-- BEGIN USER LOGIN DROPDOWN -->
            <li class="dropdown dropdown-user">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                 data-close-others="true">
                <img alt="#" class="img-circle"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="/>
                <span class="username username-hide-on-mobile">admin</span>
                <i class="fa fa-angle-down"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="javascript:void(0)">
                    <i class="icon-user"></i>我的信息
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" onclick="window.sign_out();">
                    <i class="icon-key"></i>注销 </a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
        <!-- END TOP NAVIGATION MENU -->
      </div>
      <!-- END HEADER INNER -->
    </div>
    <!-- END HEADER -->

    <!-- BEGIN CONTAINER -->
    <div class="page-container">
      <!-- BEGIN SIDEBAR -->
      <div class="page-sidebar-wrapper">
        <div class="page-sidebar navbar-collapse collapse">
          <!-- BEGIN SIDEBAR MENU -->
          <ul class="page-sidebar-menu" data-auto-scroll="true" data-slide-speed="200">
            <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
            <li class="sidebar-toggler-wrapper">
              <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
              <div class="sidebar-toggler"></div>
              <!-- END SIDEBAR TOGGLER BUTTON -->
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
              <router-link :to="{ name: 'home' }" tag="li">
                <a>
                <i class="icon-home"></i>
                <span class="title">我的首页</span>
                </a>
              </router-link>
              <router-link :to="{ name: 'hello' }" tag="li">
                <a>
                <i class="icon-settings"></i>
                <span class="title">API文档</span>
                </a>
              </router-link>
          </ul>
          <!-- END SIDEBAR MENU -->
        </div>
      </div>
      <!-- END SIDEBAR -->

      <!-- BEGIN CONTENT -->
      <div class="page-content-wrapper">
        <router-view/>
      </div>
      <!-- END CONTENT -->
    </div>
    <!-- END CONTAINER -->

    <!-- BEGIN FOOTER -->
    <div class="page-footer">
      <div class="page-footer-inner text-center">
        2019 &copy; 帝一流
      </div>
      <div class="page-footer-tools">
			<span class="go-top">
				<i class="fa fa-angle-up"></i>
			</span>
      </div>
    </div>
    <!-- END FOOTER -->
  </div>
</template>

<script>
  export default {
    name: "default-layout",
    mounted () {

    },
    watch: {
      $route (route) {

      }
    },
  }
</script>

<style scoped>

</style>
