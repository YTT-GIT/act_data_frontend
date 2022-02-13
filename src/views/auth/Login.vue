<template>
  <div class="login">
    <div class="login_left">
      <img
        src="http://index.actquant.cc/static/media/image.e4ae8676.png"
        alt=""
      />
    </div>
    <div class="login_right">
      <h5>账户登录</h5>
      <el-form
        :model="ruleForm"
        :rules="rules"
        status-icon
        ref="ruleForm"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-page"
      >
        <el-form-item prop="username">
            <el-input 
                type="text"
                v-model="ruleForm.username"
                auto-complete="off"
                placeholder="用户名"
            ></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                type="password"
                v-model="ruleForm.password"
                auto-complete="off"
                placeholder="密码"
            ></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
            <el-button
                type="primary"
                style="width: 100%"
                @click="submitForm('ruleForm')"
                :loading="logining"
                >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",

  data() {
    return {
      redirect: undefined,
      loading: false,
      ruleForm: {
        username: "admin",
        password: "admin",
        rememberMe: true,
      },
      rules: {
        username: [
          { required: true, message: "请输入账号!", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码!", trigger: "blur" },
          {
            min: 4,
            max: 20,
            message: "长度在 4 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    submitForm(formName){
      // console.log(this.ruleForm);
      // 检验是否符合规则
      this.$refs[formName].validate((valid) => {
      if (valid) {
        this.loading = true;
        this.$store.dispatch("user/login", this.ruleForm)
          .then(() => {
            this.$message({
              message: "登录成功！",
              type: "success",
              duration: 2000,
            });
            setTimeout(() => {
              this.loading = false;
              this.$router.push({ path: this.redirect || "/Home" });
            }, 0.1 * 1000);
          })
          .catch(() => {
            this.loading = false;
          });
      } else {
        return false;
      }
    });
    }
  },
};
</script>

<style scoped>
.login {
  width: 1200px;
  height: 650px;
  box-shadow: 0 0 20px rgb(0 0 0 / 8%);
  margin: auto;
  margin-top: 5%;
}
.login > .login_left {
  width: 50%;
  height: 100%;
  background-color: #1890ff;
  float: left;
  /* 图片居中 */
  display: table-cell; 
  vertical-align: middle;
  text-align: center;
}
.login > .login_left > img {
  margin-top: 15%;
}
.login > .login_right {
  width: 50%;
  height: 100%;
  float: left;
  text-align: center;
}
.login > .login_right > h5 {
  margin-top: 10%;
}


.login-container {
    width: 100%;
    height: 100%;
}
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 20% auto;
    width: 80%;
}
label.el-checkbox.rememberme {
    text-align: left;
}
.el-form-item{
    height: 80px;
}
</style>
