<template>
    <el-table 
        :data="tableList" 
        v-loading="loading"
        element-loading-text="加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.1)"
        border
        stripe
        height="100%"
        style="width:100%;"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column v-for="item in tableNameList" :key="item.id" :prop="item.id"
          :show-overflow-tooltip="true"
          :label="item.name"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          :width="btnList.width?btnList.width:'100'">
          <template slot-scope="scope">
            <el-button size="small" v-if="btnList.edit" @click="changeInfo(scope)" type="primary" icon="el-icon-edit"></el-button>
            <el-button size="small" v-if="btnList.appointment" @click="sureOrder(scope)" type="primary">确认</el-button>
          </template>
        </el-table-column>        
    </el-table>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  props: {
    tableList: { type: Array },
    tableNameList: { type: Array },
    loading: { type: Boolean },
    btnList: { type: Object }
  },
  methods: {
    changeInfo(item) { // 编辑
      this.$emit('changeItem', item.row)
    },
    handleSelectionChange(val) { // 多选
      if (val) {
        this.chooseItem = val
      } else {
        return this.chooseItem
      }
    },
    toRoute(item) { // 查看行程
      this.$emit('toRoute', item.row)
    },
    dealStatusInfo(item) { // 处理任务
      this.$emit('dealStatusInfo', item.row)
    },
    checkPic(item) { // 查看试卷登记表图片
      this.$emit('checkPic', item.row)
    },
    sureOrder(item) { // 确认预约
      console.log(item)
      this.$emit('sureOrder', item.row)
    }
  }
}
</script>