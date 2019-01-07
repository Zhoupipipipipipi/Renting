<template>
    <div class="nav">
        <div class="main clearfix">
            <div class="nav-logo left"><a href="/" style="display:block;width:126px;height:40px;"></a></div>
            <el-cascader class="nav-city left" size="large" :options="options" v-model="selectedOptions"  @change="handleChange">
            </el-cascader>
            <div class="nav-right right">
                <div class="nav-top right">
                    <i class="icon phone-blue-icon phone"></i>
                    <span class="f22 c-fdc841">4006-222-222</span>
                </div>
                <div class="nav-bottom clearfix">
                    <ul class="clearfix left">
                        <li class="c-3fabfa">
                            <router-link to="/">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/houseList">租房</router-link>
                        </li>
                        <li>
                            <router-link to="/details">详情</router-link>
                        </li>
                        <li>
                            <router-link to="">个人中心</router-link>
                        </li>
                    </ul>
                        <span v-if="userName" class="left f16 c-333">
                            <span class="nav-log">
                                <router-link to="/my">{{userName}}</router-link>
                            </span>
                            <span> | </span><span class="nav-reg" @click="logout">退出</span>
                        </span>
                        <span class="left f16 c-333" v-else>
                            <span class="nav-log">
                                <router-link to="/userLogin">登录</router-link>
                            </span>
                            <span> | </span><span class="nav-reg" @click="showRegister=true">注册</span>
                        </span>
                    <span class="fabu-btn left">发布
                        <div class="fabu-btn-box hide" style="display: none;">
                            <span><a href="javascript:;" class="notlogin">发布租房信息</a></span>
                            <br>
                            <span><a href="javascript:;" class="notlogin">发布求租信息</a></span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
        <register v-if="showRegister" @closeRegister="closeRegister"></register>
    </div>
</template>
<script>
import Register from '../../register/index'
import { provinceAndCityData, CodeToText } from 'element-china-area-data'
// import { CityToSchool } from '@/api/index'
export default {
  data() {
    return {
      showRegister: false,
      options: provinceAndCityData,
      selectedOptions: ['440000', '441200'],
      CityName: '',
      CityList: [],
      userName: this.$store.state.user.name
    }
  },
  mounted() {
    console.log(this.$store.state.user.name)
  },
  components: {
    Register
  },
  methods: {
    closeRegister() {
      this.showRegister = false
    },
    handleChange(value) {
      console.log(value)
      if (CodeToText[value[1]] === '市辖区') {
        this.CityName = CodeToText[value[0]]
      } else {
        this.CityName = CodeToText[value[1]]
      }
      this.$router.push({ name: 'index', params: { CityName: this.CityName }})
    },
    logout() {
      this.$store.dispatch('LogOut')
    }
  }
}
</script>
<style>
/*顶部*/
.nav { width: 100%; height: 100px; border-bottom: 2px solid #3fabfa; background-color: #fff; }
.nav .main { height: 100px; }
.nav .main .nav-logo { display: inline-block; width: 126px; height: 40px; margin-top: 32px; background: url(../../../assets/img/logo.png) center center / 100% 100% no-repeat; }
/* .nav .main .nav-logo::after {background: url(../../assets/img/duigou-icon.png);} */
.nav .main .nav-city { margin: 30px 0 0 20px; cursor: pointer; }
.nav .main .nav-city > * { vertical-align: middle; }
.nav .main .nav-city i { width: 14px; height: 18px; }
.nav .main .nav-city span { font-size: 18px; color: #333; margin-left: 7px; }
.nav .main .nav-right { height: 100%; }
.nav .main .nav-right .nav-top { margin: 10px 0; }
.nav .main .nav-right .nav-top > * { vertical-align: middle; }
.nav .main .nav-right .phone { width: 16px; height: 16px; margin-right: 10px; }
.nav .main .nav-right .shouji { width: 11px; height: 17px; margin: 0 6px 0 30px; }
.nav .main .nav-right .bell { width: 16px; height: 20px; margin: 0 14px 0 36px; }
.nav .main .nav-right .msg-num { position: absolute; right: 0; top: 50%; margin-top: -8px; width: 16px; height: 16px; line-height: 16px; font-size: 12px; color: #fff; background-color: #ff5555; text-align: center; }
.nav .main .nav-right .nav-top .qr-code { position: relative; cursor: pointer; }
.nav .main .nav-right .nav-top .qr-code .qr-code-box { position: absolute; left: 50%; bottom: -130px; width: 196px; height: 120px; margin-left: -98px; padding: 20px 20px 10px; background-color: #fff; -webkit-box-shadow: 0 0 10px #ddd; -moz-box-shadow: 0 0 10px #ddd; -o-box-shadow: 0 0 10px #ddd; box-shadow: 0 0 10px #ddd; -webkit-border-radius: 10px; -moz-border-radius: 10px; -o-border-radius: 10px; border-radius: 10px; z-index: 1; }
.nav .main .nav-right .nav-top .qr-code .qr-code-box:after { content: ""; position: absolute; left: 50%; top: -18px; width: 0; height: 0; margin-left: -9px; border-style: solid; border-width: 9px; border-color:transparent transparent #fff transparent; }
.nav .main .nav-right .nav-top .qr-code .qr-code-box:before { content: ''; position: absolute; left: 50%; top: -9px; margin-left: -7px; border-left: 7px solid transparent; border-right: 7px solid transparent; border-bottom: 6px solid #aaa; filter: blur(2px); }
.nav .main .nav-right .nav-top .qr-code .qr-code-box img { width: 62px; height: 62px; }
.nav .main .nav-right .nav-bottom { height: 36px; line-height: 36px; }
.nav .main .nav-right .nav-bottom > ul { margin-right: 30px; }
.nav .main .nav-right .nav-bottom > ul li { float: left; margin-right: 30px; }
.nav .main .nav-right .nav-bottom > ul li:last-child { margin-right: 0; }
.nav .main .nav-right .nav-bottom > ul li a { font-size: 16px; color: #333; }
.nav .main .nav-right .nav-bottom > ul li a:hover { color: #3fabfa; }
.nav .main .nav-right .nav-bottom .nav-log, .nav-reg { cursor: pointer; }
.nav .main .nav-right .nav-bottom .user-name { max-width: 7em; overflow: hidden; text-overflow:ellipsis; white-space: nowrap; }
.nav .main .nav-right .nav-bottom .fabu-btn { position: relative; display: inline-block; width: 86px; height: 30px; line-height: 30px; margin: 3px 0 0 10px; background-color: #3fabfa; color: #fff; text-align: center; font-size: 16px; cursor: pointer; }
.nav .main .nav-right .nav-bottom .fabu-btn-box { position: absolute; left: 50%; bottom: -97px; width: 124px; height: 84px; margin-left: -62px; padding: 10px 0; background-color: #fff; -webkit-box-shadow: 0 0 10px #ddd; -moz-box-shadow: 0 0 10px #ddd; -o-box-shadow: 0 0 10px #ddd; box-shadow: 0 0 10px #ddd; -webkit-border-radius: 10px; -moz-border-radius: 10px; -o-border-radius: 10px; border-radius: 10px; z-index: 1; }
.nav .main .nav-right .nav-bottom .fabu-btn-box:after { content: ""; position: absolute; left: 50%; top: -18px; width: 0; height: 0; margin-left: -9px; border-style: solid; border-width: 9px; border-color:transparent transparent #fff transparent; }
.nav .main .nav-right .nav-bottom .fabu-btn-box:before { content: ''; position: absolute; left: 50%; top: -9px; margin-left: -7px; border-left: 7px solid transparent; border-right: 7px solid transparent; border-bottom: 6px solid #aaa; filter: blur(2px); }
.nav .main .nav-right .nav-bottom .fabu-btn-box span { margin-bottom: 18px; font-size: 14px; color: #333; text-align: center; }
.nav .main .nav-right .nav-bottom .fabu-btn-box span:hover { color: #3fabfa; }
.nav .main .nav-right .nav-bottom .fabu-btn-box span:last-child { margin-bottom: 0; }
.nav .main .nav-right .nav-bottom .user-info { position: relative; cursor: pointer; }
.nav .main .nav-right .nav-bottom .user-info-box { display: none; position: absolute; left: 50%; bottom: -165px; width: 124px; height: 152px; margin-left: -40px; padding: 4px 18px; background-color: #fff; -webkit-box-shadow: 0 0 10px #ddd; -moz-box-shadow: 0 0 10px #ddd; -o-box-shadow: 0 0 10px #ddd; box-shadow: 0 0 10px #ddd; -webkit-border-radius: 10px; -moz-border-radius: 10px; -o-border-radius: 10px; border-radius: 10px; z-index: 1; }
.nav .main .nav-right .nav-bottom .user-info-box:after { content: ""; position: absolute; left: 50%; top: -18px; width: 0; height: 0; margin-left: -9px; border-style: solid; border-width: 9px; border-color:transparent transparent #fff transparent; }
.nav .main .nav-right .nav-bottom .user-info-box:before { content: ''; position: absolute; left: 50%; top: -9px; margin-left: -7px; border-left: 7px solid transparent; border-right: 7px solid transparent; border-bottom: 6px solid #aaa; filter: blur(2px); }
.nav .main .nav-right .nav-bottom .user-info-box > ul > li > a { font-size: 14px; color: #333; }
.nav .main .nav-right .nav-bottom .user-info-box > ul > li > a:hover { color: #3fabfa; }
.nav .main .nav-right .nav-bottom .avatar { width: 36px; height: 36px; }
.nav .main .nav-right .nav-bottom .avatar img { width: 100%; height: 100%; }
.nav .nav-share-box { position: relative; }
.nav .nav-share-box:hover > .share-box { display: block; }
.nav .nav-share-box .share-box { display: none; position: absolute; left: -50px; top: 18px; width: 150px; height: 176px; padding: 16px 18px; border: 1px solid #eee; background-color: #fff; box-shadow: 0 0 12px #f2f2f2; z-index: 1; }
.nav .nav-share-box .share-box img { display: block; width: 110px; height: 120px; padding-bottom: 10px; }
</style>
