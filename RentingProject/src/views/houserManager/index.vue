<template>
    <content-layout ref="content" @pageChange="fetchData()" @limitChange="fetchData()">
      <form-box slot="formSearch" @add="addSubmit($event)" @del="delSubmit($event)" @search="search($event)" @printing="printing($event)" @exportInfo="exportInfo($event)"></form-box>
      <table-list ref="personTable" id="personTable" :loading="loading" :tableList="peopleTableList" :tableNameList="tableNameList" :btnList="btnList" @changeItem="changeInfo($event)" @sureOrder="sureOrder($event)" slot="tbCont"></table-list>
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
import { getHouseList, delHouse, sureOrder } from '@/api/renting'
// import html2canvas from 'html2canvas'

export default {
  data() {
    return {
      loading: false,
      peopleTableList: [
      ],
      tableNameList: [
        { id: 'name', name: '房子名称' },
        { id: 'area', name: '面积' },
        { id: 'apartment', name: '户型' },
        { id: 'floor', name: '楼层' },
        { id: 'region', name: '区域' },
        { id: 'address', name: '地址' },
        { id: 'price', name: '价格' }
      ],
      currentOp: 'add',
      btnList: {
        edit: true,
        appointment: true,
        width: 150
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
      this.$router.push({ name: 'addDetails' })
      // this.$refs.dialogPanel.show()
    },
    delSubmit(msg) { // 删除
      const info = this.$refs.personTable.handleSelectionChange() // 拿到选中的数据
      if (info) {
        info.forEach(element => {
          delHouse({ id: element.id }).then(result => {
            if (result === 'ok') {
              Message({
                message: '删除成功',
                type: 'success'
              })
              this.fetchData()
            }
          })
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
      console.log(msg)
      this.$router.push({ name: 'editDetails', params: { id: msg.id }})
      // this.$refs.dialogPanel.show(msg)
    },
    search(msg) { // 查询
      this.xm = msg.name
      this.fetchData(1)
    },
    fetchData(page) { // 获取数据
      if (page) {
        this.$refs.content.setPage(page)
      }
      this.loading = true
      const userId = JSON.parse(window.localStorage.getItem('userId')).id
      console.log(userId)
      const info = {
        page: !page ? this.$refs.content.getPage() : page,
        pageSize: this.$refs.content.getLimit(),
        userId: userId,
        area: ''
      }
      getHouseList(info).then((result) => {
        this.peopleTableList = result.list
        this.$refs.content.setTotal(result.total)
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        this.loading = false
      })
    },
    sureOrder(msg) { // 确认出租
      const info = {
        id: msg.id
      }
      sureOrder(info).then(result => {
        if (result === 'ok') {
          this.$message({
            message: '成功出租',
            type: 'success'
          })
          this.fetchData()
        }
      })
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
