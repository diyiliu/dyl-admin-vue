<template>
  <form action="#" class="login-form">
    <h3 class="form-title">登录您的账户</h3>

    <div class="form-group">
      <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
      <label class="control-label visible-ie8 visible-ie9">邮箱</label>
      <div class="input-icon">
        <i class="fa fa-user"></i>
        <input class="form-control placeholder-no-fix" type="text" autocomplete="off" id="username"
               placeholder="邮箱" name="Name"/>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label visible-ie8 visible-ie9">登录密码</label>
      <div class="input-icon">
        <i class="fa fa-lock"></i>
        <input class="form-control placeholder-no-fix" type="password" autocomplete="off" id="password"
               placeholder="登录密码" name="password"/>
      </div>
    </div>

    <div class="form-actions">
      <label class="checkbox" title="记住我">
        <input type="checkbox" name="RememberMe" value="true" id="rememberMe"/>记住我
      </label>
      <button type="button" onclick="window.view.submit()" class="btn green btn-block">登录
        <i class="m-icon-swapright m-icon-white"></i>
      </button>
    </div>

    <div class="form-group text-center">
      <a href="forget.html">忘记密码? </a> or
      <a href="sign-up.html">注册一个新账号</a>
    </div>
  </form>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped>

</style>
