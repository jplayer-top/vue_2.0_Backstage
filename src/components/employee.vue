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
    <el-card class="card-center">
        <el-table
    :data="tableData4"
    border
    style="width: 100%"
    height="400"
    max-height="400">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="spend"
      label="该项累计"
      width="120">
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="120">
    </el-table-column>
    <el-table-column
      prop="goods"
      label="事项记录"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-card>
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
    return {
      tableData4: [
        {
          date: "2016-05-03",
          name: "王小虎",
          price: "￥33.3",
          spend: "￥100",
          num: "x3",
          goods: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
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

