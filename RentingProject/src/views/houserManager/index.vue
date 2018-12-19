<template>
    <content-layout ref="content" @pageChange="fetchData()" @limitChange="fetchData()">
      <form-box slot="formSearch" @add="addSubmit($event)" @del="delSubmit($event)" @search="search($event)" @printing="printing($event)" @exportInfo="exportInfo($event)"></form-box>
      <table-list ref="personTable" id="personTable" :loading="loading" :tableList="peopleTableList" :tableNameList="tableNameList" :btnList="btnList" @changeItem="changeInfo($event)" slot="tbCont"></table-list>
      <dialog-panel ref="dialogPanel" :formInfo="personItem" :current-op="currentOp" @complete="currentOp === 'add' ? fetchData(1) : fetchData()"/>
      <dialog-upload ref="dialogUpload" @upload="upload"/>
    </content-layout>
</template>
<script>
import TableList from '@/components/TableList/index'
import FormBox from './formBox'
import { ContentLayout } from '@/components/ContentLayout'
import DialogPanel from './DialogPanel'
import DialogUpload from './DialogUpload'
import { Message } from 'element-ui'
// import { deleteOnePeople, getPeople } from '@/api/examPlan'
// import html2canvas from 'html2canvas'

export default {
  data() {
    return {
      loading: false,
      peopleTableList: [
      ],
      tableNameList: [
        { id: 'name', name: '发布人' },
        { id: 'housename', housename: '房子名称' },
        { id: 'area', name: '面积' },
        { id: 'apartment', name: '户型' },
        { id: 'floor', name: '楼层' },
        { id: 'region', name: '区域' },
        { id: 'address', name: '地址' },
        { id: 'price', name: '价格' },
        { id: 'phonenumber', name: '联系电话' }
      ],
      currentOp: 'add',
      btnList: {
        edit: true
      },
      delIds: [], // 要删除的id
      xm: '',
      personItem: {}
    }
  },
  components: {
    TableList, FormBox, ContentLayout, DialogPanel, DialogUpload
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    addSubmit(msg) { // 添加
      this.currentOp = msg
      this.$refs.dialogPanel.show()
    },
    delSubmit(msg) { // 删除
      const info = this.$refs.personTable.handleSelectionChange() // 拿到选中的数据
      if (info) {
        const ids = []
        info.forEach(element => {
          ids.push(element.id)
        })
        /* const exam = {
          ids: ids.join(',')
        }
        deleteOnePeople(exam).then((result) => {
          Message({
            message: result.message,
            type: 'success'
          })
          this.fetchData()
        }).catch((err) => {
          console.log(err)
        }) */
      } else {
        Message({
          message: '请选择要删除的考试',
          type: 'warning'
        })
      }
    },
    changeInfo(msg) { // 修改
      this.currentOp = 'edit'
      this.$refs.dialogPanel.show(msg)
    },
    search(msg) { // 查询
      this.xm = msg.name
      this.fetchData(1)
    },
    fetchData(page) { // 获取数据
      if (page) {
        this.$refs.content.setPage(page)
      }
      /* this.loading = true
      const info = {
        pageNo: !page ? this.$refs.content.getPage() : page,
        pageSize: this.$refs.content.getLimit(),
        xm: this.xm,
        areaNumber: this.$store.state.user.department.addressCode
      }
      getPeople(info).then((result) => {
        this.peopleTableList = result.data.list
        this.$refs.content.setTotal(result.data.total)
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        this.loading = false
      }) */
    },
    printing(msg) { // 打印
      window.document.body.style.height = 'auto'
      document.querySelector('#personTable').className = document.querySelector('#personTable').className + ' btn-disabled'
      const table = document.getElementById('personTable')
      window.document.body.innerHTML = ''
      document.body.appendChild(table)
      /* html2canvas(document.querySelector('#personTable')).then(canvas => {
        window.document.body.innerHTML = ''
        document.body.appendChild(canvas)
        window.print()
        location.reload()
      }) */
    },
    exportInfo(msg) { // 导出
      this.$refs.dialogUpload.show()
    },
    upload() {
    }
  }
}
</script>
<style lang="scss">
.btn-disabled button {
  display: none;
}
.btn-disabled .el-table__body-wrapper{
  height: auto !important;
}
</style>
