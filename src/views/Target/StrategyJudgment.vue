<template>
    <div class="StrategyJudgment">
        <el-tabs v-loading="loading" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="相关系数" name="26" >
            <!-- 日期选择器 -->
            <el-date-picker  v-model="value5" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
            <el-select @change="select1" v-model="value1" placeholder="请选择">
              <el-option  v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select @change="select2" v-model="value2" placeholder="请选择">
              <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <div style="width: 100%; height: 100%">
              <div id="myChart" style="width: 1600px; height: 700px"></div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="多空次仓人数" name="27">活跃钱包增长</el-tab-pane>
          <el-tab-pane label="算力vs价格" name="35">交易所上新</el-tab-pane>
          <el-tab-pane label="OTC报单" name="36">新增合约数量</el-tab-pane>
          <el-tab-pane label="普阿尔倍数图" name="42">链上筹码分布图</el-tab-pane>
          <el-tab-pane label="相对强弱指数" name="43">稳定币增发与销毁</el-tab-pane>
        </el-tabs>
    </div>
    
</template>

<script>

export default {
  name: 'StrategyJudgment',
  data() {
   return {
      activeName: '26',
   }
  },
  computed: {
  
  },
  watch: {
   
  },
  created() {
   
  },
  methods: {
   
  }
}
</script>

<style scoped>
</style>
