<template>
  <div>
    <!-- BEGIN LOGO -->
    <div class="logo">
      <h2 style="color:#fff">后台管理系统</h2>
    </div>

    <!-- END LOGO -->
    <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
    <div class="menu-toggler sidebar-toggler"></div>
    <!-- END SIDEBAR TOGGLER BUTTON -->
    <!-- BEGIN LOGIN -->
    <div class="content">
      <!-- BEGIN LOGIN FORM -->
      <router-view/>
      <!-- END REGISTRATION FORM -->
    </div>
    <!-- END LOGIN -->
    <!-- BEGIN COPYRIGHT -->
    <div class="copyright">
      2019 &copy; 帝一流
    </div>
  </div>
</template>

<script>
  export default {
    name: "auth-layout",
    mounted() {
      document.getElementsByTagName("body")[0].className = "login";
      Metronic.init(); // init metronic core components
    }
  }
</script>

<style src="../../../static/admin/pages/css/login.css"/>
<style scoped>

</style>
