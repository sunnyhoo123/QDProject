<template>
  <div class="table-operations">
    <template v-for="(item, index) in trueStatusOperations">
      <el-tooltip
        v-if="index < visibleSize && item.disabled"
        :content="item.disabledDescription"
        :key="index"
        placement="top"
      >
        <span
          v-if="index < visibleSize"
          class="table-operations-item table-operations-item-disabled"
          @click="handleTableOperationsClick(item.type)"
        >{{ item.text }}</span>
      </el-tooltip>
      <span
        v-if="index < visibleSize && !item.disabled"
        :key="index"
        class="table-operations-item"
        @click="handleTableOperationsClick(item.type)"
      >{{ item.text }}</span>
    </template>
    <rz-popover v-if="trueStatusOperations.length > visibleSize" popper-class="table-operations-more" placement="bottom">
      <div slot="reference" class="table-operations-item"><i class="rz-icon-more"></i></div>
      <template v-for="(item, index) in trueStatusOperations">
        <el-tooltip
          v-if="index >= visibleSize && item.disabled"
          :content="item.disabledDescription"
          :key="index"
          placement="top"
        >
          <span
            v-if="index >= visibleSize"
            :key="index"
            class="table-operations-more-item table-operations-more-item-disabled"
            @click="handleTableOperationsClick(item.type)"
          >{{ item.text }}</span>
        </el-tooltip>
        <span
          v-if="index >= visibleSize && !item.disabled"
          :key="index"
          class="table-operations-more-item"
          @click="handleTableOperationsClick(item.type)"
        >{{ item.text }}</span>
      </template>
    </rz-popover>
  </div>
</template>

<script>
export default {
  name: "TableOperations",
  props: {
    operations: {
      type: Array,
      default() {
        return [];
      }
    },
    row: {
      type: Object,
      require: true,
      default() {
        return {};
      }
    },
    visibleSize: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    trueStatusOperations() {
      return this.operations.filter(item => item.show);
    }
  },
  methods: {
    handleTableOperationsClick(operationType) {
      const isDisabled = this.operations.find(item => item.type === operationType).disabled;
      if (isDisabled) return;
      this.$emit("click", this.row, operationType)
    }
  }
}
</script>

<style lang="scss">
@import "style/var.scss";
.table-operations {
  &-item {
    display: inline-block;
    margin-right: 24px;
    cursor: pointer;
    color: #68CDFA;

    &-disabled {
      color: #919bb2;
      cursor: not-allowed;
    }
  }

  &-more {
    display: inline-block;
    width: 160px;
    padding: 8px 0;
  }

  &-more-item {
    display: block;
    line-height: 32px;
    padding: 0 16px;
    cursor: pointer;
    color: #68CDFA;
    
    &:hover {
      background: $--background-color-form;
    }

    &-disabled {
      color: #919bb2;
      cursor: not-allowed;
    }
  }
}
</style>