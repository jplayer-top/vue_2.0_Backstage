<template>
<div class="detial">
<el-row>
  <el-col :span="10"><div>
       <el-card class="card-left">
        <div id="myChart" class="chart-department">
        </div>
    </el-card>
      </div></el-col>
  <el-col :span="14"><div>
      <el-card class="card-center">
           <el-table
    :data="tableData"
    border
    style="width: 100%"
    height='400'
    max-height="800">
     <el-table-column
      type="selection"
      width="55">
     </el-table-column>
    <el-table-column
      fixed
       prop="did"
      label="工号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
     prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="spend"
      label="累计消费"
    show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template scope="scope">
        <router-link :to="{name:'Employee',params:{index:scope.$index}}">
        <el-button
          type="text"
          @click="handleClick(scope.$index,scope.row)"
          size="small">
          查看详情
        </el-button>
        </router-link>
        <el-button
          @click="upDateRow(scope.$index, tableData)"        
          type="text"
          size="small">
          编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button >删除选中条目</el-button>
    
    <el-button @click="addDialog">添加数据</el-button>
  </div>
      </el-card>
      </div></el-col>
      
</el-row>
   <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="职员姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="职员 ID" :label-width="formLabelWidth">
      <el-input v-model="form.did" type="number" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="累计消费" :label-width="formLabelWidth">
      <el-input v-model="form.spend" type="number" auto-complete="off"></el-input>      
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogForm(false)">取 消</el-button>
    <el-button type="primary" @click="dialogForm(false)">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
// 引入基本模板

let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
let newData = [
  {
    name: "王小虎",
    did: 200333,
    date: "2016-05-03",
    spend: "￥1"
  }
];
let nameArr = ["总费用", "小明", "小花", "小猫", "小狗", "小军"];
let myChart;
let curEditRow = -1;
export default {
  name: "detial",
  data() {
    return {
      dialogTitle: "添加消费人员",
      dialogFormVisible: false,
      form: {
        name: "",
        did: "",
        spend: ""
      },
      formLabelWidth: "120px",
      tableData: newData
    };
  },
  mounted() {
    this.delay();
  },
  methods: {
    addDialog() {
      curEditRow = -1;
      (this.dialogTitle = "添加消费人员"),
        (this.form.name = ""),
        (this.form.did = ""),
        (this.form.spend = "");
      this.dialogFormVisible = true;
    },
    upDateRow(index, rows) {
      curEditRow = index;
      (this.dialogTitle = "编辑消费人员"),
        (this.form.name = rows[index].name),
        (this.form.did = rows[index].did),
        (this.form.spend = rows[index].spend.slice(1)),
        (this.dialogFormVisible = true);
    },
    handleClick(index, row) {
      console.log(index);
    },

    dialogForm(isShow) {
      this.dialogFormVisible = isShow;
      let thisData = new Date().toLocaleDateString();
      let item = {
        name: this.form.name,
        did: this.form.did,
        date: thisData,
        spend: "￥" + this.form.spend
      };
      if (this.dialogTitle == "添加消费人员") {
        nameArr.push(this.form.name);
        this.refreshChart(nameArr);
        newData.push(item);
      } else {
        if (curEditRow != -1) {
          newData.splice(curEditRow, 1, item);
        }
      }
    },
    refreshChart(data) {
      if (!myChart) {
        return;
      }
      let option = myChart.getOption();
      option.xAxis[0]["data"] = data;
      option.series[0].data = [0, 1700, 1400, 1200, 300, 100, 0];
      option.series[1].data = [2900, 1200, 300, 200, 900, 200, 100];
      setTimeout(function() {
        myChart.setOption(option);
      }, 500);
    },
    click2AddRows() {},
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },

    handleClick(index, row) {
      console.log(row);
      // this.$router.push("/employee?index=" +row.did);
    },
    delay() {
      setTimeout(function() {
        let option = {
          title: {
            text: "运营部门花费组成（单位:元）",
            subtext: "By LMM",
            sublink: "http://www.skyrim.me"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
              var tar = params[1];
              return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
            }
          },
          grid: {
            left: "2%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            splitLine: { show: false },
            data: nameArr
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "辅助",
              type: "bar",
              stack: "总量",
              itemStyle: {
                normal: {
                  barBorderColor: "rgba(0,0,0,0)",
                  color: "rgba(0,0,0,0)"
                },
                emphasis: {
                  barBorderColor: "rgba(0,0,0,0)",
                  color: "rgba(0,0,0,0)"
                }
              },
              data: [0, 1700, 1400, 1200, 300, 0]
            },
            {
              name: "花费",
              type: "bar",
              stack: "总量",
              label: {
                normal: {
                  show: true,
                  position: "inside"
                }
              },
              data: [2900, 1200, 300, 200, 900, 300]
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.detial {
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
.chart-department {
  width: 400px;
  height: 457px;
}
</style>
