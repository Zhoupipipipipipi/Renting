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
              this.roleShow = false
            }
          })
        })
      },
      getFirst(that, result) { // 第一次进去获取ID
        that.id = result.data[0].id
      },
      addAddress(that, result) { // 第一次获取相关地址
        const options = result.data
        const department = this.$store.state.user.department
        const dpType = department.dpType
        switch (dpType) {
          case '1':
            this.city.options = options
            break
          case '2':
            this.city.options = [
              { addressCode: department.addressCode, addressName: department.addressName, id: this.id }
            ]
            this.city.value = ''
            this.area.options = options
            break
          case '3':
            this.city.show = false
            this.area.options = [
              { addressCode: department.addressCode, addressName: department.addressName, id: this.id }
            ]
            this.area.value = ''
            break
        }
      },
      async getAboutCity(id, callback) { // 获取相关地区的下拉列表action
        /* const that = this
        const info = {
          id: id
        } */
        /* await getCity(info).then(result => {
          callback(that, result)
        }).catch(err => {
          console.log(err)
        }) */
      },
      changeCity(val) { // 选择城市
        const info = {
          id: val.id,
          type: '2'
        }
        this.dpType = info.type
        this.id = info.id
        this.getAboutCity(this.id, this.changeAddress)
      },
      changeArea(val) { // 选择区
        const info = {
          id: val.id,
          type: '3'
        }
        this.dpType = info.type
        this.id = info.id
        this.getAboutCity(this.id, this.changeAddress)
      },
      changeAddress(that, result) { // 修改获取相关下拉列表
        const options = result.data
        switch (this.dpType) {
          case '1':
            this.city.value = ''
            this.city.options = options
            break
          case '2':
            this.area.value = ''
            this.area.options = options
            this.personItem.adminArea = this.city.value.addressName
            this.personItem.areaNumber = this.city.value.addressCode
            break
          case '3':
            this.personItem.adminArea = this.city.value.addressName ? this.city.value.addressName + '-' + this.area.value.addressName : this.area.value.addressName
            this.personItem.areaNumber = this.area.value.addressCode
            break
        }
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
