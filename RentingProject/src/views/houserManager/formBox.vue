<template>
    <el-form :inline="true" :model="formInline" label-width="80px">
        <el-form-item label="用户姓名">
            <el-input v-model="formInline.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="search(1)">查询</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="addSubmit">新增</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="delSubmit">删除</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="exportInfo">批量导出</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="printing">打印</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        name: ''
      }
    }
  },
  methods: {
    addSubmit() { // 添加
      this.$emit('add', 'add')
    },
    delSubmit() { // 删除
      this.$emit('del', 'del')
    },
    search(page) { // 查询
      this.$emit('search', this.formInline)
    },
    printing() { // 打印
      this.$emit('printing', true)
    },
    exportInfo() { // 导出
      this.$emit('exportInfo', true)
    }
  }
}
</script>
