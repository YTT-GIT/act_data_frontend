<template>
    <div class="TransactionData">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="合约基差" name="first">合约基差</el-tab-pane>
          <el-tab-pane label="资金费率" name="second">资金费率</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

export default {
  name: 'TransactionData',
  data() {
   return {
   }
  },
  computed: {
  
  },
  watch: {
   
  },
  created() {
   
  },
  methods: {
   handleClick(tab, event) {
    console.log(tab, event);
  }
  }
}
</script>

<style scoped>
</style>
