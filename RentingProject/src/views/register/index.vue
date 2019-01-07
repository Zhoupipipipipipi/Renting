<template>
    <div class="mask hide" style="display: block;">
        <div class="sign-box clearfix">
            <div class="sign-right right">
                <p class="f18 c-333 tcenter mtb20">注册</p>
                <ul class="sign-ul reg">
                    <li class="clearfix">
                        <i class="icon phone-icon left"></i>
                        <p class="left"><input class="mobile" type="text" placeholder="请输入手机号码" v-model="person.phone">
                        </p>
                    </li>
                    <li class="clearfix">
                        <i class="icon aut-code-icon left"></i>
                        <p class="left"><input class="sms-code" type="text" placeholder="请输入用户名" v-model="person.loginName"></p>
                    </li>
                    <li class="clearfix">
                        <i class="icon password-icon left"></i>
                        <p class="left"><input class="pwd" type="password" placeholder="请输入密码" v-model="person.password"></p>
                    </li>
                    <li class="clearfix">
                        <i class="icon portrait-blue-icon left"></i>
                        <span class="ml20 left edit-line lh-36 middle">
                            <span class="radio-box"><input type="radio" id="gender-female" name="sign-gender" value="1" v-model="person.role">
                                <label for="gender-female"></label>
                            </span>
                            <label for="gender-female" class="f14 c-333 ml8">商户</label>
                            <span class="radio-box ml8"><input type="radio" id="gender-male" name="sign-gender" value="0" checked="checked" v-model="person.role">
                                <label for="gender-male"></label>
                            </span>
                            <label for="gender-male" class="f14 c-333 ml8">租客</label>
                        </span>
                    </li>
                </ul>
                <button class="sub register-btn" @click="register">注册</button>
                <router-link to="/userLogin" class="have-acc f14 tcenter c-3fabfa cursor-pointer mb10" style="display: block;">已有账号，立即登录</router-link>
            </div>
            <i class="icon cancel-white-icon cancel-sign" @click="close()"></i>
        </div>
        <input type="hidden" name="ref_url" id="ref_url" value="https://zuke.com/">
    </div>
</template>
<script>
import { register } from '@/api/login'
import { Message } from 'element-ui'
export default {
  data() {
    return {
      person: {
        'loginName': '',
        'password': '',
        'phone': '',
        'role': 0,
        'university': 0
      }
    }
  },
  methods: {
    close() {
      this.$emit('closeRegister', true)
    },
    register() {
      register(this.person).then(result => {
        Message({
          message: '注册成功',
          type: 'success'
        })
        this.$emit('closeRegister', true)
      }).catch(err => {
        console.log(err)
        Message({
          message: '用户已存在',
          type: 'success'
        })
      })
    }
  }
}
</script>

<style>
/*遮罩*/
.mask { position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(51,51,51,.5); z-index: 999; }
/*获取验证码*/
.get-code { background-color: #fff; color: #3fabfa; font-size: 12px; border: none; cursor: pointer; }
/*登录注册弹框*/
.sign-box { z-index: 10; position: fixed; left: 50%; top: 50%; width: 600px; height: auto; min-height: 379px; background: #fff url(../../assets/img/sign-bg.png) left top / 230px 100% no-repeat; transform: translate(-50%, -50%); }
.sign-box .cancel-white-icon { position: absolute; right: -18px; top: -18px; width: 36px; height: 36px; cursor: pointer; }
.sign-box .sign-right { width: 370px; height: 100%; padding: 0 50px; }
.sign-box .sign-right .tabs { margin: 60px auto 40px; text-align: center; }
.sign-box .sign-right .tabs .tab { margin: 0 20px; font-size: 18px; color: #333; cursor: pointer; }
.sign-box .sign-right .tabs .tab.active { color: #3fabfa; }
.sign-box .sign-ul { overflow: hidden; height: auto; }
.sign-box .sign-ul li { width: 100%; height: 36px; margin-bottom: 30px; }
.sign-box .sign-ul.reg li { margin-bottom: 20px; }
.sign-box .sign-ul li .icon { width: 16px; height: 100%; margin-right: 10px; background-repeat: no-repeat; background-position: center center; background-size: 100% auto; }
.sign-box .sign-ul li p { height: 100%; width: 228px; border: 1px solid #e8e8e8; }
.sign-box .sign-ul li p input { width: 160px; height: 100%; padding: 0 8px; border: none; }
.sign-box .sub { display: table; width: 228px; height: 36px; margin: 0 auto 20px; font-size: 16px; background-color: #3fabfa; color: #fff; border: none; cursor: pointer; }
.sign-box .sign-ul li .surname-p { width: 58px; }
.sign-box .sign-ul li .surname-p input.surname { width: 100%; font-weight: bold; }
.sign-box .register-btn,
.sign-box .confirm-new-pwd { margin-bottom: 10px; margin-top: 10px; }
.phone-icon { background-image: url(../../assets/img/phone-icon.png); }
.aut-code-icon { background-image: url(../../assets/img/aut-code-icon.png); }
.password-icon { background-image: url(../../assets/img/password-icon.png); }
.portrait-blue-icon { background-image: url(../../assets/img/portrait-blue-icon.png); }
.tuijian-num-icon { background-image: url(../../assets/img/tuijian-num-icon.png); }
.cancel-white-icon { background: url(../../assets/img/cancel-white-icon.png) center center / 100% no-repeat; }
</style>
