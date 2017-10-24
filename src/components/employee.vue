<template>
<div class="employee">
 <el-row>
  <el-col :span="10"><div>
       <el-card class="card-left">
        <div id="myChart" class="chart-employee">
        </div>
    </el-card>
      </div></el-col>
  <el-col :span="14">
    <el-card class="card-center"></el-card>
  </el-col>
 </el-row>

</div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
let myChart;
export default {
  name: "Employee",
  data() {
    return {};
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      setTimeout(function() {
        let option = {
          title: {
            text: "XXX花费组成（单位:元）",
            subtext: "By LMM",
            sublink: "http://www.skyrim.me"
          },
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              name: "当日花费",
              type: "bar",
              barWidth: "60%",
              data: [10, 52, 200, 334, 1660, 330, 220]
            }
          ]
        };
        myChart = echarts.init(document.getElementById("myChart"));
        myChart.setOption(option);
      }, 500);
    }
  }
};
</script>
<style>
.chart-employee {
  width: 400px;
  height: 400px;
}
.employee {
  width: 100%;
  height: auto;
}
.card-left {
  overflow: hidden;
  margin: 5px;
}
.card-center {
  margin: 5px;
}
</style>

