<template>
  <div class="content-manager">
    <div class="form-search">
      <slot name="formSearch"></slot>
    </div>
    <div class="tbcont">
      <slot name="tbCont"></slot>
    </div>
    <div class="tbpageing" v-if="isPagination">
      <el-pagination
        @size-change="pagingSizeChange"
        @current-change="pagingCurrentChange"
        :current-page="pagination.page"
        :page-sizes="pagination.pageSizeItems"
        :page-size="pagination.limit"
        background
        layout="total, sizes, prev, pager, next"
        :total="pagination.total">
      </el-pagination>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ContentLayout',
    props: {
      isPagination: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        pagination: {
          pageSizeItems: [5, 10, 20, 30, 40],
          limit: 10,
          page: 1,
          total: 0
        }
      }
    },
    methods: {
      pagingCurrentChange(v) { // 当前页面
        this.pagination.page = v
        this.$emit('pageChange', v)
      },
      pagingSizeChange(v) { // 限制条数
        this.pagination.limit = v
        this.$emit('limitChange', v)
      },
      getPage() {
        return this.pagination.page
      },
      initPage() {
        this.setPage(1)
      },
      setPage(v) {
        this.pagination.page = v
      },
      getLimit() {
        return this.pagination.limit
      },
      setTotal(v) {
        this.pagination.total = v
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/styles/mixin.scss";
  @import "src/styles/extend.scss";

  .content-manager {
    @include aroundPadding;
    @extend .tableContent;
    /deep/ .form-search {
      @extend .formSearch;
    }
    .tbcont {
      flex: 1;
      overflow: hidden;
      border-radius: 5px;
      height: 450px;
    }
    .tbpageing {
      @extend .tablePaging;
    }
  }
</style>
