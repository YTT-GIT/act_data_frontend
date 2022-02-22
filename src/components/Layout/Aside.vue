<template>
  <div class="aside">
     <el-tabs stretch='true'  :tab-position="tabPosition" style="">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-connection"></i> 指标</span>
           <el-link  :underline="false" @click="goTo('/Target/TransactionData')">交易数据</el-link><br>
           <el-link  :underline="false" @click="goTo('/Target/OnChainIndicators')">链上数据</el-link><br>
           <el-link  :underline="false" @click="goTo('/Target/StrategyJudgment')">策略判断</el-link><br>
          </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-s-check"></i> 授权</span>
          <el-link  :underline="false" @click="goTo('/Authorization/Okex')">欧易</el-link><br>
          <el-link  :underline="false" @click="goTo('/Authorization/Huobi')">火币</el-link><br>
          <el-link  :underline="false" @click="goTo('/Authorization/Binance')">币安</el-link><br>
          <el-link  :underline="false" @click="goTo('/Authorization/Ftx')">FTX</el-link><br>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-goods"></i> 资产</span>
          <el-link  :underline="false" @click="goTo('/Assets/Okex')">欧易OKEX</el-link><br>
          <el-link  :underline="false" @click="goTo('/Assets/Huobi')">火币</el-link><br>
          <el-link  :underline="false" @click="goTo('/Assets/Binance')">币安</el-link><br>
          <el-link  :underline="false" @click="goTo('/Assets/Ftx')">FTX</el-link><br>
          <el-link  :underline="false" @click="goTo('/Assets/TotalAssets')">总资产</el-link><br>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-setting"></i> 设置</span>
          <el-link  :underline="false" @click="goTo('/Setting/account')">账号管理</el-link><br>
          <el-link  :underline="false" @click="goTo('/Setting/user')">角色管理</el-link><br>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
       tabPosition: 'left'
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style scoped>
.aside{
  height: 100%;
}
.el-tabs{
  background-color: #fff;
  height: 855px;
  width: 204px;
  text-align: center;
}
.el-tab-pane{
  /* background-color: blue; */
  /* text-align: center; */
}
.el-link{
  height: 40px;
}
</style>
