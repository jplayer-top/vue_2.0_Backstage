<template>
 <div class="login">
        <div class="message">管理系统-登录</div>
        <div id="darkbannerwrap"></div>

        <form method="get">
            <input name="action" value="login" type="hidden">
            <input name="username" placeholder="用户名" required="" type="text">
            <hr class="hr15">
            <input name="password" placeholder="密码" required="" type="password">
            <hr class="hr15">
            <input value="登录" style="width:100%;" type="submit">
            <hr class="hr20"> <a href="http://www.baidu.com">忘记密码</a>
        </form>


    </div>
</template>
<style scoped>
@import "../css/login.css";
.login_parent {
  width: 100%;
  height: 100%;
  background: url(../assets/web_login_bg.jpg);
}

</style>

