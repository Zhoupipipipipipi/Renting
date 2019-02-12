<template>
  <div>
    <el-dialog :center="true" class="user-add" :title="title" :visible.sync="roleShow">
      <div class="form-body">
        <el-form :model="personItem" ref="personItem" :rules="rules" label-width="135px"
                 label-position="right">
          <div class="item">            
            <el-col :span="12">
              <el-form-item label="昵称" prop="nickName">
                <el-input v-model="personItem.nickName" placeholder="昵称"></el-input>
              </el-form-item>
            </el-col>
          </div>
          <div class="item">
            <el-col :span="12">
              <el-form-item label="密码" prop="password">
                <el-input v-model="personItem.password" placeholder="密码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="确认密码" prop="surePass">
                <el-input v-model="personItem.surePass" placeholder="确认密码"></el-input>
              </el-form-item>
            </el-col>
          </div>
          <div class="item">
            <el-col :span="12">
              <el-form-item label="手机号码" prop="phone">
                <el-input v-model="personItem.phone" placeholder="手机号码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="性别" prop="sex">
                <el-radio v-model="personItem.sex" label="0">男</el-radio>
                <el-radio v-model="personItem.sex" label="1">女</el-radio>
              </el-form-item>
            </el-col>
          </div>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitAddForm">确 定</el-button>
        <el-button @click="roleShow = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  // import { addOnePerson, updateOnePerson } from '@/api/examPlan'
  // import { getCity } from '@/api/escorting'
  import { modifyUserInfo } from '@/api/renting'
import { setStroage } from '@/utils/auth'

  export default {
    name: 'DialogPanel',
    data() {
      return {
        title: '',
        roleShow: false,
        ssdqFormShow: false, // 是否显示地区选择
        rules: {
        },
        personItem: {
        },
        qxShow: false,
        origin: null,
        sfzjlx: [ // 身份证类型
          '居民身份证', '护照', '香港特区护照/身份证明', '澳门特区护照/身份证明', '台湾居民来往大陆通行证'
        ],
        city: {
          value: '',
          show: true,
          options: []
        },
        area: { // 所属区域
          value: '',
          show: true,
          options: []
        }
      }
    },
    props: {
    },
    watch: {
      currentOp(newVal, oldVal) {
        if (newVal === 'edit') {
          this.title = '角色信息编辑'
        } else {
          this.title = '角色信息新增'
        }
      },
      roleShow(newVal, oldVal) {
        if (newVal) {
          this.origin = JSON.stringify(this.personItem)
        } else {
          this.personItem = JSON.parse(this.origin)
          this.area = {
            value: '',
            show: true,
            options: []
          }
        }
        this.$nextTick(function() {
          this.$refs.personItem.clearValidate()
        })
      }
    },
    mounted() {
      console.log('11111')
      this.personItem = JSON.parse(window.localStorage.getItem('userId'))
      console.log(this.personItem)
    },
    methods: {
      show(item) { // 弹出框显示
        this.roleShow = true
        this.personItem = this.$store.state.user.user
        this.personItem.sex = this.personItem.sex.toString()
        console.log(this.personItem)
      },
      submitAddForm() { // 提交表单
        this.$refs.personItem.validate(result => {
          modifyUserInfo(this.personItem).then(result => {
            if (result === 'ok') {
              this.$message({
                message: '修改成功'
              })
              setStroage('userId', JSON.stringify(this.personItem))
              this.roleShow = false
              location.reload()
            }
          })
        })
      }
    }
  }
</script>
<style scoped>
.item{
  overflow: hidden;
}
.pass-tip{
  font-size: 12px;
  position: absolute;
  top: 25px;
  color: crimson;
}
</style>
