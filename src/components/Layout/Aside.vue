<template>
  <div class="aside">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-connection"></i>
              <span>指标</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="goTo('/Target/TransactionData')"
                >交易数据</el-menu-item
              >
              <el-menu-item
                index="1-2"
                @click="goTo('/Target/OnChainIndicators')"
                >链上数据</el-menu-item
              >
              <el-menu-item
                index="1-3"
                @click="goTo('/Target/StrategyJudgment')"
                >策略判断</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-check"></i>
              <span>授权</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="goTo('/Authorization/Okex')"
                >欧易OKEX</el-menu-item
              >
              <el-menu-item index="2-2" @click="goTo('/Authorization/Huobi')"
                >火币</el-menu-item
              >
              <el-menu-item index="2-3" @click="goTo('/Authorization/Binance')"
                >币安</el-menu-item
              >
              <el-menu-item index="2-3" @click="goTo('/Authorization/Ftx')"
                >FTX</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>资产</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="goTo('/Assets/Okex')"
                >欧易OKEX</el-menu-item
              >
              <el-menu-item index="3-2" @click="goTo('/Assets/Huobi')"
                >火币</el-menu-item
              >
              <el-menu-item index="3-3" @click="goTo('/Assets/Binance')"
                >币安</el-menu-item
              >
              <el-menu-item index="3-3" @click="goTo('/Assets/Ftx')"
                >FTX</el-menu-item
              >
              <el-menu-item index="3-3" @click="goTo('/Assets/TotalAssets')"
                >总资产</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1" @click="goTo('/Setting/account')"
                >账号管理</el-menu-item
              >
              <el-menu-item index="4-2" @click="goTo('/Setting/user')"
                >角色管理</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {};
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
div {
  height: 100%;
}

.el-row {
  width: 100%;
}
.el-col {
  width: 100%;
}
.el-menu {
  width: 98%;
  height: 100%;
  /* background-color: aqua; */
}
</style>
