<template>
  <div>
    <el-dialog :center="true" class="user-add" :title="title" :visible.sync="roleShow">
      <div class="form-body">
        <el-form :model="personItem" ref="personItem" :rules="rules" label-width="135px"
                 label-position="right">
          <div class="item">
            <el-col :span="12">
              <el-form-item label="发布人" prop="name">
                <el-input v-model="personItem.name" placeholder="发布人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="房子名称" prop="housename">
                <el-input v-model="personItem.housename" placeholder="房子名称"></el-input>
              </el-form-item>
            </el-col>
          </div>
          <div class="item">
            <el-col :span="12">
              <el-form-item label="面积" prop="area">
                <el-input v-model="personItem.area" placeholder="面积"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="户型" prop="apartment">
                <el-input v-model="personItem.apartment" placeholder="户型"></el-input>
              </el-form-item>
            </el-col>
          </div>
          <div class="item">
            <el-col :span="12">
              <el-form-item label="楼层" prop="floor">
                <el-input v-model="personItem.floor" placeholder="户型"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="价格" prop="price">
                <el-input v-model="personItem.price" placeholder="价格"></el-input>
              </el-form-item>
            </el-col>
          </div>
          <div class="item">
            <el-col :span="12">
              <el-form-item label="联系电话" prop="phonenumber">
                <el-input v-model="personItem.phonenumber" placeholder="联系电话"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="区域" prop="region">
                <el-select v-model="city.value" v-if="city.show" placeholder="请选择市" class="item-search" @change="changeCity" value-key="id" style="width:100px">
                    <el-option
                    v-for="item in city.options"
                    :key="item.id"
                    :label="item.addressName"
                    :value="{id:item.id, addressCode:item.addressCode, addressName:item.addressName}">
                    </el-option>
                </el-select>
                <el-select v-model="area.value" v-if="area.show" placeholder="请选择区" class="item-search" @change="changeArea" value-key="id" style="width:100px">
                    <el-option
                    v-for="item in area.options"
                    :key="item.id"
                    :label="item.addressName"
                    :value="{id:item.id, addressCode:item.addressCode,addressName:item.addressName}">
                    </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </div>
          <div class="item">

            <el-col :span="12">
              <el-form-item label="地址" prop="address">
                <el-input v-model="personItem.address" placeholder="地址"></el-input>
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
  export default {
    name: 'DialogPanel',
    data() {
      return {
        title: '',
        roleShow: false,
        ssdqFormShow: false, // 是否显示地区选择
        rules: {
          // xm: [
          //   { required: true, message: '必填', trigger: 'blur' }
          // ],
          // xb: [
          //   { required: true, message: '必填', trigger: 'blur' }
          // ],
          // sfzjlx: [
          //   { required: true, message: '必填', trigger: 'blur' }
          // ],
          // sfzjhm: [
          //   { required: true, validator: idCardPass, trigger: 'blur' }
          // ],
          // lxdh: [
          //   { required: true, validator: checkPhone, trigger: 'blur' }
          // ],
          // adminArea: [
          //   { required: true, message: '必填', trigger: 'blur' }
          // ],
          // mm: [
          //   { required: true, validator: validatePass, trigger: 'blur' }
          // ],
          // newmm: [
          //   { required: true, validator: validatePass2, trigger: 'blur' }
          // ]
        },
        personItem: {
          id: '',
          xm: '',
          xb: '',
          sfzjlx: '',
          sfzjhm: '',
          lxdh: '',
          adminArea: '',
          mm: ''
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
      currentOp: String
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
    async mounted() {
      await this.getAboutCity('', this.getFirst)
      await this.getAboutCity(this.id, this.addAddress)
    },
    methods: {
      show(item) { // 弹出框显示
        if (item) {
          console.log(item)
          this.personItem = {
            id: item.id,
            xm: item.xm,
            xb: item.xb,
            sfzjlx: item.sfzjlx,
            sfzjhm: item.sfzjhm,
            lxdh: item.lxdh,
            adminArea: item.adminArea,
            areaNumber: item.areaNumber,
            mm: item.mm,
            newmm: item.mm
          }
          const adminAreaArr = this.personItem.adminArea.split('-')
          adminAreaArr.forEach(element => {
            if (element.indexOf('市') >= 0) {
              this.city.value = element
            } else if (element.indexOf('区') >= 0) {
              this.area.value = element
            }
          })
        } else {
          this.personItem = {
            id: '',
            xm: '',
            xb: '',
            sfzjlx: '',
            sfzjhm: '',
            lxdh: '',
            adminArea: '',
            areaNumber: '',
            mm: 'yy123456',
            newmm: 'yy123456'
          }
        }
        this.roleShow = true
      },
      submitAddForm() { // 提交表单
        this.$refs.personItem.validate(result => {
          if (result) {
            if (this.currentOp === 'add') {
              console.log(this.personItem)
              /* addOnePerson(this.personItem).then(result => { // 添加
                this.showSuccessInfo(result.message)
                this.roleShow = false
                this.$emit('complete')
              }) */
            } else {
              /* updateOnePerson(this.personItem).then(result => { // 修改
                this.showSuccessInfo(result.message)
                this.roleShow = false
                this.$emit('complete')
              }) */
            }
          }
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
