<template>
  <a-layout style="padding: 24px 0; background: #fff">
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          style="height: 100%;"
      >
        <a-sub-menu key="sub1">
          <template #title>
                <span>
                  <h3><home-outlined /> 目的</h3>
                </span>
          </template>
          <a-menu-item key="1"><router-link to="/invite-new">拉新</router-link></a-menu-item>
          <a-menu-item key="2">促活</a-menu-item>
          <a-menu-item key="3">留存</a-menu-item>
          <a-menu-item key="4">转化</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
                <span>
                  <h3><line-chart-outlined /> 数据分析</h3>
                </span>
          </template>
          <a-menu-item key="5">裂变数据分析</a-menu-item>
          <a-menu-item key="6">市场数据分析</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
      <router-view/>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style scoped>

/*/deep/ .ant-menu-item {*/
/*  text-align: center;*/
/*}*/
</style>
