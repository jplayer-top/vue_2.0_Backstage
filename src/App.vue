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
              <span class="p-text-size">退出</span> 
           </div>
        </div>
        </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  
}
</script>

<style>
.grid-content::selection {background: transparent}
#app {
  font-family: "PingFang SC";
  height: 100%
}
.grid-content {
    display:flex;
   justify-content:space-between;
   align-items: center;
    min-height: 120px;
    background: #324057;
    overflow: hidden;    
}
.div-left-heard{
    display: flex;
    align-items:center
}
.div-right-heard{
  margin-right: 30px
}
.p-text{
  text-align: center;
  color: white;
  margin-left: 15px;
  font-size: 20px
}
.p-text-size{
   text-align: center;
  color: white;
  margin-left: 15px;
  font-size: 15px;
  cursor: pointer;
}
.p-text-size:hover{
  color: #eee;
  font-size: 17px
}
.logo{
  width: 80px;
  height: 80px;
  margin-left:30px;
}
 
</style>
