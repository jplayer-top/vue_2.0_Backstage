<template>
  <div class="content">
    <el-row>
      <el-col :span="8">
        <el-card class="box-card-company">
          <div class="company">
            <div id="myChart" class="div-card-company"></div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card-company">
          <div class="div-title-department">
            <span class="span-titel-department">公司部门消费</span>
            <el-button icon="edit"></el-button>
          </div>
          <div class="div-card-department">
            <el-carousel class="item-carousel" :interval="3000" type="card" height="300px" arrow='never' @change="change">
              <el-carousel-item v-for="(item,index) in items" :key="item">
                <el-card class="card-carousel-item" :style="{background:color[index]}">
                  <span  > {{item}}</span>
                  <p>
                    <span>当前人数：8</span>
                  </p>
                  <p>
                    <span>当月花费：￥100.3</span>
                  </p>
                  <p>
                    <span>累计花费：10000</span>
                  </p>
                  <el-button style="margin-top: 12px;" @click="click"><span  class="span-click">查看详情</span></el-button>
                </el-card>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import store from "@/vuex/store.js";
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
var vv = store.state.value;
export default {
  data() {
    return {
      company: "蓝鲸创想科技有限公司",
      items: ["人事", "财务", "技术", "行政", "运营"],
      color: ["#aff", "#faf", "#aaf", "#afa", "#faa"]
    };
  },
  mounted() {
    this.delay();
  },
  methods: {
    click() {
      this.$router.push("/xx");
    },
    change(newI, oldI) {
      console.log(oldI + "---" + newI);
    },
    delay() {
      console.log(this);
      let company = this.company;
      let option = {
        title: {
          text: company,
          subtext: "收支饼图",
          x: "left"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["人事", "财务", "技术", "行政", "运营"]
        },
        series: [
          {
            name: "收支",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "人事" },
              { value: 310, name: "财务" },
              { value: 234, name: "技术" },
              { value: 135, name: "行政" },
              { value: 600, name: "运营" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      setTimeout(function() {
        let myChart = echarts.init(document.getElementById("myChart"));
        myChart.setOption(option);
      }, 500);
    }
  }
};
</script>
<style scoped>
.span-titel-department {
  font-size: 16px;
  font-family: "Microsoft YaHei";
  font-weight: 900;
  color: #000;
  margin-right: 30px;
}

.div-title-department {
  display: flex;
  margin: 0px;
  align-items: center;
  justify-content: space-between;
}
.span-click {
  color: #999;
}
span {
  color: white;
}

.item-carousel {
  width: 100%;
}

.card-carousel-item {
  height: 90%;
}

.el-carousel__item h3 {
  color: white;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.div-card-company {
  width: 350px;
  height: 488px;
}

.div-card-department {
  display: flex;
  height: 450px;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.content {
  overflow: hidden;
  background: #efefef;
  height: 100%;
}

.company {
  display: flex;
  justify-content: center;
}

.box-card-company {
  margin: 20px;
}
</style>
