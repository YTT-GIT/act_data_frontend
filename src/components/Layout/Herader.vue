<template>
  <div class="header">
    <div class="header-left">
      <a>
        <img src="http://index.actquant.cc/static/media/logo.6765d26a.svg" alt>
        <span>Act-quant</span>
      </a>
    </div>
    <div class="header-right">
      <a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADNklEQVRYR+2WXWgcVRiG3+/sTOvSgqk3bUJ/ECmmCqWkhVyoeCNiCxVasN61+JNG8GpjM2c2pGWq7GbmrG6htJSs0JsW/EkFoQiC6IVCL6qhiL3wZ/xZoXdFzEU2sLs5bzmQQKjLbpKmCULOzVzMnO995v2+884I1njJGutjHeD/50C5XM42m83ngyD4ciXmZ0kOGGNeAXCe5Pta6w9WFcAYcxbAGSdqrd0bhuFPqwYQx/GAUqoyJ8hareZFUWRXBcAYsw/ATQD+nOB0EASbV0Lc1eg4A8aYLwAcAnAVgJuBjWmabqhUKo2VgGgLUCgU9vq+/yPJWiaT2WWtvQFgd7PZ3DMyMvLzQwdIkuS0iLxLsqK1HjTGfOpcsNaeDMPww4cOYIz5CsALIvLy8PDw9TiOjymlPiF5Q2v9zGoA3AbwNMlerfUvuVwu293d/QeAbSRf1Fo7wAdabWfAGPM3gB2e520fGhq645SMMW8DuADgT9/3+3K53L8PQtAJYBJA3+zsbF8+n7/lhMbHx/2pqanvAPQD+KZWqx2Ooqi2XIi2AKVS6TOSR0ke11pfmRcpFApbfd//3rlD8laj0TgyOjpaXQ5EW4AkSd4SkUsAJoIgOLZQoFgs9nqe52ZgO4AZkuMkz4Vh6Nr2nxXH8bNKqYE0Td9cmCGdWrANQJWkEpGngiD4bWHlcrn8WKPRKIvI8flQcydERFx2/ANgk1Jqp7X2gIi46+UwDN9YWGMxSVgCcMr1O03Tl1olYLFY7Pc87x2Sh0XkkVYOkKzPvcTvSwKI4/hRpZTr926SH3V1dZ0YHBxsGcPuX6Fer+8XkX6l1GZrbY+InHSCJM9qraP74To64DbM9dvF8BaS31prX8vn8y4PWq4oilQ2mz0hIhcBZElem5mZebXVF3RRAE4lSZInRcR9mJ4g2RSRj0XkWr1ev1mtVu/29PRkfd/f6XneQRF5HUCv22etPTc5OTk8MTEx24p20QBu89jY2JZMJvMegAEAG9odO5K/AtBa68/bPbckgPlCpVLpcQBHSD5Hcg+AXQCmROQvAD+IyNfT09PXoyhqdsqGZQF0KrqU++sA6w6suQP3ABeuUzCrJGMQAAAAAElFTkSuQmCC"></a>
      
      <!-- <b-navbar-item tag="a" @click="logout"> 
        <span>
          <img src="out.png">
        </span>
      </b-navbar-item> -->
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
   return{
		}
  },
  computed: {
    // 获取当前登录用的信息
    ...mapGetters(['token', 'user'])
  },
  watch: {
   
  },
  created() {
   
  },
  methods: {
    async logout() {
      this.$store.dispatch('user/logout').then(() => {
        this.$message.info('退出登录成功')
        setTimeout(() => {
          this.$router.push({ path: this.redirect || '/Login' })
        }, 500)
      })
    },
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  
}
.header>.header-left{
  width: 208px;
  line-height: 80px;
   float:left;
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
  width: 168px;
  float:right;
  line-height: 100px;
}
.header>.header-right>a{
  margin-left: 10px;
}
.header>.header-right>span{
  margin-left: 50px;
}
</style>
