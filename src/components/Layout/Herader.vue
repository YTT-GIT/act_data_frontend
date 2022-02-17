<template>
  <div class="header">
    <div class="header-left">
      <a>
        <img src="http://index.actquant.cc/static/media/logo.6765d26a.svg" alt>
        <span>Act-quant</span>
      </a>
    </div>
    <div class="header-right">
      <!-- 日夜切换 -->
      <el-button type="text" @click="ondarkModes" >
            <i v-if="darkMode" class="el-icon-moon"></i>
            <i v-else class="el-icon-sunny"></i>
      </el-button>
      <!-- 退出按钮 -->
      <el-button type="text" @click="logout"><i class="el-icon-close"></i></el-button>
    </div>
  </div>
</template>

<script>
// 导入白天黑夜
import { disable as disableDarkMode, enable as enableDarkMode } from 'darkreader'
import { getDarkMode, setDarkMode } from '@/utils/auth'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
   return{
    //  记录日夜
     darkMode: false

		}
  },
  computed: {
    // 获取当前登录用的信息
    ...mapGetters(['token', 'user'])
  },
  watch: {
  },
  created() {
    // 获取cookie中的夜间还是白天模式
    this.darkMode = getDarkMode()
    if (this.darkMode) {
      enableDarkMode({})
    } else {
      disableDarkMode()
    }
    
  },
  methods: {
    ondarkModes(){
      // 获取cookie中的夜间还是白天模式
      this.darkMode = getDarkMode()
      if (this.darkMode) {
        disableDarkMode()
        this.darkMode=false
        setDarkMode(false)
      } else {
        enableDarkMode({})
        this.darkMode=true
        setDarkMode(true)
      }
      
    },
    async logout() {
      this.$confirm('是否要退出登录？', '退出登录', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('user/logout').then(() => {
          this.$message.info('退出登录成功')
          setTimeout(() => {
            this.$router.push({ path: this.redirect || '/Login' })
            }, 500)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消!'
          });          
        });
    },
  }
}
</script>

<style scoped>
.header{
  width: 100%;
}
.header>.header-left{
  width: 204px;
  line-height: 80px;
  float:left;
  border-right: 1px solid rgba(0,0,0,.06);
}
.header>.header-left>a>img{
  width:36px;
  height:36px; 
  margin-top: 20px;
  margin-left: 5px;
}
.header>.header-left>a>span{
  float: right;
  margin-right: 10px;
  font-size: 30px;
  color: rgb(102, 102, 102);
  font-weight: bold;
}
.header>.header-right{
  width: 180px;
  height: 100%;
  float:right;
}
.el-button{
  height: 100%;
  margin-left: 50px; 
  line-height: 80px; 
  text-align: center;
  font-size: 32px;
  padding: 0 0;
  color: black;
}
i{
  line-height: 80px;  
  text-align: center;
  font-size: 32px;
}
</style>
