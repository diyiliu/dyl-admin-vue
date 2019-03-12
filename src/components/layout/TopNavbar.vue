<template>
  <div class="top-menu">
    <ul class="nav navbar-nav pull-right">
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
</template>

<script>
    export default {
        name: "top-navbar"
    }
</script>

<style scoped>

</style>
