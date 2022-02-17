<template>
    <div class="TransactionData">
        <el-tabs v-loading="loading" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="合约基差" name="13" >
            <!-- 日期选择器 -->
            <el-date-picker  v-model="value5" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            <el-select @change="select1" v-model="value1" placeholder="请选择">
              <el-option  v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select @change="select2" v-model="value2" placeholder="请选择">
              <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select @change="select3" v-model="value3" placeholder="请选择">
              <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select @change="select4" v-model="value4" placeholder="请选择">
              <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            
            <div style="width: 100%; height: 100%">
              <div id="myChart" style="width: 1600px; height: 700px"></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="资金费率" name="23">资金费率</el-tab-pane>
        </el-tabs>
      </div>
</template>

<script>
import * as echarts from "echarts";
import { mapGetters } from 'vuex'
import {fetchTableId,getcontractbasisdataList} from "@/api/TransactionData/TransactionData"

export default {
  name: 'TransactionData',
  data() {
   return {
    activeName: '13',
    options1:[],
    value1: '',
    options2:[],
    value2: '',
    options3:[],
    value3: '',
    options4:[],
    value4: '',
    //  日期
    value5: '',
    loading: true
   }
  },
  computed: {
    ...mapGetters(['token', 'user'])
  
  },
  watch: {
   
  },
  created() {
   
  },
  async mounted() {
    await this.fetchTable(this.activeName)
    
  },
  methods: {
    async select1(selVal){
      console.log("选择框1");
      console.log(selVal);
      await this.getList(selVal,this.value2,this.value4,this.value3)
    },
    async select2(selVal){
      console.log("选择框2");
      console.log(selVal);
      await this.getList(this.value1,selVal,this.value4,this.value3)
    },
    async select3(selVal){
      console.log("选择框3");
      console.log(selVal);
      await this.getList(this.value1,this.value2,this.value4,selVal)
    },
    async select4(selVal){
      console.log("选择框4");
      console.log(selVal);
      
      await this.getList(this.value1,this.value2,selVal,this.value3)
    },

    // 获取数据
    async getList(currencyType,deliveryTime,kType,marginType){
      getcontractbasisdataList(currencyType,deliveryTime,kType,marginType).then(response =>{
        const { data } = response
        console.log("List数据：");
        console.log(data);
        // 时间
        var ts = [];
        // 现货指数
        var spotprice = [];
        // 合约价格
        var contractprice = [];
        // 基差
        var basis =[];
        // 基础率
        var basisrate = [];
        for(var i=0;i<data.length;i++){
          spotprice.push(data[i]['spotprice']);
          contractprice.push(data[i]['contractprice']);
          basis.push(data[i]['basis']);
          basisrate.push(data[i]['basisrate']);
          ts.push(data[i]['ts'])
        }
        this.echartsDisplay(ts,spotprice,contractprice,basis,basisrate);
      })
    },
    


  // 初始化
  async fetchTable(tableId) {
    console.log(tableId)
    fetchTableId(tableId).then(response => {
      const { data } = response
      // console.log("数据：");
      // console.log(data);
      // 初始化按钮
      var aaa = []
      for(let key  in data){
        var d = {};
        var da = [];
        for (var i = 0; i < data[key].length; i++) {
          var v1 = {};
          v1['value'] = data[key][i];
          v1['label'] = data[key][i];
          da.push(v1);
        }
        d[key] = da;
        aaa.push(d);
      }
      this.options1=aaa[0][Object.keys(aaa[0])[0]];
      this.value1 = aaa[0][Object.keys(aaa[0])[0]][0]['label'];
      this.options2=aaa[1][Object.keys(aaa[1])[0]];
      this.value2 = aaa[1][Object.keys(aaa[1])[0]][0]['label'];
      this.options3=aaa[2][Object.keys(aaa[2])[0]];
      this.value3 = aaa[2][Object.keys(aaa[2])[0]][0]['label'];
      this.options4=aaa[3][Object.keys(aaa[3])[0]];
      this.value4 = aaa[3][Object.keys(aaa[3])[0]][0]['label'];

      // 图表初始化
      this.getList(this.value1,this.value2,this.value4,this.value3)
      this.loading=false;
    })
    
  },


  
  async handleClick(tab, event) {
    console.log("点了啥：");
    console.log(this.activeName);
    if (this.activeName == 13){
      await this.fetchTable(this.activeName)
    }else{
      console.log('资金费率');
    }
  },
  // 获取数据，并渲染 echarts 图表：首次渲染使用
  echartsDisplay(ts,spotprice,contractprice,basis,basisrate) {
    // console.log(this.token);
    // 1）初始化--动态绑定DOM的id
    this.myChart = echarts.init(document.getElementById("myChart"));
    // 2）处理数据
    // 数据处理较为复杂，且无关乎本问题的逻辑，因此省略
    // 3）显示 echarts
    //配置图表
    this.myChart.setOption({
      grid: {
        bottom: 80
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          animation: false,
          label: {
            backgroundColor: '#505765'
          }
        }
      },
      legend: {
        data: ['现货指数', '合约价格', '基差', '基础率'],
        // left: 10
        left: 'center'
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 0,
          end: 100
        },
       
      ],
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: { onZero: false },
          // 时间
          data: ts
        }
      ],
      yAxis: [
        {
          name: '指数/价格',
          type: 'value'
        },
        {
          name: 'Rainfall(mm)',
          nameLocation: 'start',
          alignTicks: true,
          type: 'value',
          inverse: true
        }
      ],
      series: [
        {
          name: '现货指数',
          type: 'line',
          areaStyle: {},
          lineStyle: {
            width: 1
          },
          emphasis: {
            focus: 'series'
          },
          data: spotprice
        },
        {
          name: '合约价格',
          type: 'line',
          yAxisIndex: 1,
          areaStyle: {},
          lineStyle: {
            width: 1
          },
          emphasis: {
            focus: 'series'
          },
          data:contractprice
        },
        {
          name: '基差',
          type: 'line',
          yAxisIndex: 1,
          areaStyle: {},
          lineStyle: {
            width: 1
          },
          emphasis: {
            focus: 'series'
          },
          data:basis
        },
        {
          name: '基差率',
          type: 'line',
          yAxisIndex: 1,
          areaStyle: {},
          lineStyle: {
            width: 1
          },
          emphasis: {
            focus: 'series'
          },
          data:basisrate
        }
      ]
    });
  },


  }
}
</script>

<style scoped>
/* .TransactionData{
  width: 100%;
  height: 100%;
} */

/* .el-tabs{ */
  /* width: 100%;
  height: 100%; */
/* } */
/* .el-tab-pane{
  background-color: aqua;
  width: 100%;
  height: 100%;
} */
/* .myChart{
  width: 500px;
} */
.el-select{
  float: right;
  width: 100px;
  padding-left: 20px;
}
</style>
