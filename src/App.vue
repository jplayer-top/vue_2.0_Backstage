<template>

  <div id="app">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
           <div class="div-left-heard">
             <img class="logo" src="./assets/logo.png" alt="">
             <span class="p-text">管理系统</span>
           </div>
           <div class="div-right-heard">
             <span class="p-text">Oblivion</span>
              <span v-on:click="logout" class="p-text-size">退出</span> 
           </div>
        </div>
        </el-col>
    </el-row>
    <router-view ></router-view>
  </div>
</template>
<script>
let app;
import axios from 'axios'
export default {
  name: "app",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    app = this;
  },
  methods: {
    logout() {
      // this.$router.push("/login");
     axios.get('/public/public/send')
      .then(response=>{
         console.log(response);
      })
      .catch(error=>{
          console.log(error);
      })
    }
  }
};
</script>

<style>
.login_ui {
  position: absolute;
  top: 120px;
  bottom: 0;
  width: 100%;
}
.grid-content::selection {
  background: transparent;
}
#app {
  font-family: "PingFang SC";
  height: 100%;
}
.grid-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 120px;
  background: #324057;
  overflow: hidden;
}
.div-left-heard {
  display: flex;
  align-items: center;
}
.div-right-heard {
  margin-right: 30px;
}
.p-text {
  text-align: center;
  color: white;
  margin-left: 15px;
  font-size: 20px;
}
.p-text-size {
  text-align: center;
  color: white;
  margin-left: 15px;
  font-size: 15px;
  cursor: pointer;
}
.p-text-size:hover {
  color: #eee;
  font-size: 17px;
}
.logo {
  width: 80px;
  height: 80px;
  margin-left: 30px;
}
</style>
