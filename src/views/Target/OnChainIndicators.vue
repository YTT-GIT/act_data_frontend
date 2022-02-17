<template>
    <div class="OnChainIndicators">
        <el-tabs v-loading="loading" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="钱包增长" name="24" >
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
          <el-tab-pane label="活跃钱包增长" name="25">活跃钱包增长</el-tab-pane>
          <el-tab-pane label="交易所上新" name="37">交易所上新</el-tab-pane>
          <el-tab-pane label="新增合约数量" name="38">新增合约数量</el-tab-pane>
          <el-tab-pane label="链上筹码分布图" name="39">链上筹码分布图</el-tab-pane>
          <el-tab-pane label="MVRV Z-Score" name="40">MVRV Z-Score</el-tab-pane>
          <el-tab-pane label="稳定币增发与销毁" name="41">稳定币增发与销毁</el-tab-pane>
          <el-tab-pane label="Gas消耗对比图" name="44">Gas消耗对比图</el-tab-pane>
        </el-tabs>
    </div>
    
</template>

<script>

export default {
  name: 'OnChainIndicators',
  data() {
   return {
      activeName: '24',
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
