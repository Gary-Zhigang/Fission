<template>
  <a-layout style="height: 840px; padding: 24px 0; background: #fff">
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
          mode="inline"
          style="height: 100%;"
          @click="handleClick"
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
          <a-menu-item key="5"><router-link to="/fission-da">裂变数据分析</router-link></a-menu-item>
          <a-menu-item key="6">市场数据分析</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
      <div class="welcome" v-show="isShowWelcome">
        <h1>欢迎使用应用管理系统！</h1>
      </div>
      <router-view/>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const isShowWelcome = ref(true);

    const handleClick = (value: any) => {
      console.log("menu click", value)
      isShowWelcome.value = value.key === 'welcome';
    };

    return {
      isShowWelcome,
      handleClick
    };
  }
});
</script>

<style scoped>

/*/deep/ .ant-menu-item {*/
/*  text-align: center;*/
/*}*/
</style>
