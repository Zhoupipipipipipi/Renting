<template>
    <content-layout ref="content" @pageChange="fetchData()" @limitChange="fetchData()">
      <!-- <form-box slot="formSearch" @add="addSubmit($event)" @del="delSubmit($event)" @search="search($event)" @printing="printing($event)" @exportInfo="exportInfo($event)"></form-box> -->
      <table-list ref="personTable" id="personTable" :loading="loading" :tableList="peopleTableList" :tableNameList="tableNameList" :btnList="btnList" @changeItem="changeInfo($event)" slot="tbCont"></table-list>
    </content-layout>
</template>
<script>
import TableList from '@/components/TableList/index'
import FormBox from './formBox'
import { ContentLayout } from '@/components/ContentLayout'
import { getMessage } from '@/api/renting'
// import { deleteOnePeople, getPeople } from '@/api/examPlan'
// import html2canvas from 'html2canvas'

export default {
  data() {
    return {
      loading: false,
      peopleTableList: [],
      tableNameList: [
        { id: 'msg', name: '消息来电' }
      ],
      currentOp: 'add',
      btnList: {
      },
      delIds: [], // 要删除的id
      xm: '',
      personItem: {}
    }
  },
  components: {
    TableList, FormBox, ContentLayout
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    addSubmit(msg) { // 添加
      this.currentOp = msg
      this.$router.push({ name: 'editDetails' })
      // this.$refs.dialogPanel.show()
    },
    search(msg) { // 查询
      this.xm = msg.name
      this.fetchData(1)
    },
    fetchData(page) { // 获取数据
      if (page) {
        this.$refs.content.setPage(page)
      }
      const userId = JSON.parse(window.localStorage.getItem('userId')).id
      const info = {
        page: !page ? this.$refs.content.getPage() : page,
        pageSize: this.$refs.content.getLimit(),
        userId: userId
      }
      getMessage(info).then(result => {
        console.log(result)
        this.peopleTableList = result.list
        this.$refs.content.setTotal(result.total)
      })
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
