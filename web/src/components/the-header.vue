<template>
  <a-layout-header class="header">
    <h1 style="text-align: center; color: white">
      应用管理
    </h1>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'the-header',
});
</script>

<style scoped>
.ant-layout-header {
  /*padding: 0;*/
  background: #1890ff;
}

</style>

