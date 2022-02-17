<template>
    <el-container>
      <el-header height="80px"><Header></Header></el-header>
      <el-container class="elcontainer">
        <el-aside   width="208px" ><Aside></Aside></el-aside>
        <el-container>
          <el-main>
            <router-view :key="this.$route.fullPath"></router-view>
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
import Header from "@/components/Layout/Herader.vue";
import Footer from "@/components/Layout/Footer.vue";
import Aside from "@/components/Layout/Aside.vue";

export default {
  name: "Home",
  components: { Header, Footer,Aside },
};
</script>

<style scoped>
.el-header{
  /* 阴影 */
  box-shadow:0 3px 6px rgb(0 0 0 / 10%);
  border-bottom:1px solid #E9EEF3; 
}
.el-header, .el-footer {
  background-color:#fff;
  color: #333;
  padding: 0 0 ;
  margin: 0 0;
}
.el-aside {
  color: #333;
  height: 850px;
  /* height: 100%; */
  background-color: #e9eef2;
}
.el-main {
  /* margin: 10px; */
  padding: 20px;
  color: #333;
  border-left:23px solid #e9eef2;
  border-right:23px solid #e9eef2;
  border-top:23px solid #e9eef2;
}
</style>
