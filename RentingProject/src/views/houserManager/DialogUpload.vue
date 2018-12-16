<template>
    <div>
        <el-dialog :center="true" class="user-add" :title="title" :visible.sync="uploadShow">
            <el-form :inline="true" :model="formInline" label-width="80px">
                <el-form-item label="考试年份">
                    <el-date-picker v-model="year" type="year" placeholder="选择年" style="width:105px"></el-date-picker>
                </el-form-item>
                <el-form-item label="考试名称">
                    <el-select v-model="formInline.ksjhId" placeholder="请选择" style="width:150px">
                      <el-option
                        v-for="item in formInline.examList"
                        :key="item.id"
                        :label="item.kslb"
                        :value="item.id">
                      </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="exportInfo">导出</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
// import { getExamPlan } from '@/api/examPlan'
import { Message } from 'element-ui'
export default {
  data() {
    return {
      uploadShow: false,
      title: '',
      formInline: {
        ksjhId: '',
        examList: []
      },
      year: new Date()
    }
  },
  mounted() {
  },
  watch: {
    uploadShow(newVal, oldVal) {
      if (newVal) {
        this.getExamList()
      }
    },
    year() {
      this.getExamList()
    }
  },
  methods: {
    show() {
      this.uploadShow = true
    },
    getExamList() { // 获取考试列表数据
      /* const exam = {
        pageNo: 1,
        pageSize: 100,
        ksnf: this.year.getFullYear(),
        kslb: '',
        areaNumber: this.$store.state.user.department.addressCode
      }
      getExamPlan(exam).then((result) => {
        this.formInline.ksjhId = ''
        this.formInline.examList = result.data.list
      }) */
    },
    exportInfo() { // 导出
      if (this.formInline.ksjhId === '') {
        Message({
          'message': '请选择考试计划',
          'type': 'warning'
        })
        return
      }
      window.open('/sjgzxt/statistics/exportYYRY?ksjhId=' + this.formInline.ksjhId + '&areaNumber=' + this.$store.state.user.department.addressCode)
    }
  }
}
</script>
