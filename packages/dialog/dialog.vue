<template>
  <div>
    <el-dialog
      title="el dialog"
      :visible="dialogVisible"
      :show-close="true"
      :close-on-click-modal="true"
      width="30%"
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="close" type="primary">
          {{ text }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Dialog } from "element-ui";

Vue.use(Button);
Vue.use(Dialog);

export default {
  name: "my-dialog",
  props: {
    text: {
      type: String,
      default: "default text"
    },
    flag: {
      type: Boolean
    }
  },
  watch: {
    flag(n, o) {
      if (n === !o) {
        this.dialogVisible = true;
      }
    }
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    close() {
      this.dialogVisible = false;
    }
  }
};
</script>
<style scoped>
</style>
