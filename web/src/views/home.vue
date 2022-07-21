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
          <a-menu-item key="1">拉新</a-menu-item>
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
      <h1>设置场景</h1>
<!--      <a-form-->
<!--          :model="formState"-->
<!--          name="validate_other"-->
<!--          v-bind="formItemLayout"-->
<!--          @finishFailed="onFinishFailed"-->
<!--          @finish="onFinish"-->
<!--      >-->
<!--        <a-form-item label="InputNumber">-->
<!--          <a-form-item name="input-number" no-style>-->
<!--            <a-input-number v-model:value="formState['input-number']" :min="1" :max="10" />-->
<!--          </a-form-item>-->
<!--          <span class="ant-form-text">machines</span>-->
<!--        </a-form-item>-->
<!--        <a-form-item name="slider" label="Slider">-->
<!--          <a-slider-->
<!--              v-model:value="formState.slider"-->
<!--              :marks="{-->
<!--          0: 'A',-->
<!--          20: 'B',-->
<!--          40: 'C',-->
<!--          60: 'D',-->
<!--          80: 'E',-->
<!--          100: 'F',-->
<!--        }"-->
<!--          />-->
<!--        </a-form-item>-->
<!--        <a-form-item name="slider" label="Slider">-->
<!--          <a-slider-->
<!--              v-model:value="formState.slider"-->
<!--              :marks="{-->
<!--          0: 'A',-->
<!--          20: 'B',-->
<!--          40: 'C',-->
<!--          60: 'D',-->
<!--          80: 'E',-->
<!--          100: 'F',-->
<!--        }"-->
<!--          />-->
<!--        </a-form-item>-->
<!--        <a-form-item name="slider" label="Slider">-->
<!--          <a-slider-->
<!--              v-model:value="formState.slider"-->
<!--              :marks="{-->
<!--          0: 'A',-->
<!--          20: 'B',-->
<!--          40: 'C',-->
<!--          60: 'D',-->
<!--          80: 'E',-->
<!--          100: 'F',-->
<!--        }"-->
<!--          />-->
<!--        </a-form-item>-->
<!--        <a-form-item-->
<!--            name="select"-->
<!--            label="Select"-->
<!--            has-feedback-->
<!--            :rules="[{ required: true, message: 'Please select your country!' }]"-->
<!--        >-->
<!--          <a-select v-model:value="formState.select" placeholder="Please select a country">-->
<!--            <a-select-option value="china">China</a-select-option>-->
<!--            <a-select-option value="usa">U.S.A</a-select-option>-->
<!--          </a-select>-->
<!--        </a-form-item>-->
<!--        <a-form-item-->
<!--            name="select"-->
<!--            label="Select"-->
<!--            has-feedback-->
<!--            :rules="[{ required: true, message: 'Please select your country!' }]"-->
<!--        >-->
<!--          <a-select v-model:value="formState.select" placeholder="Please select a country">-->
<!--            <a-select-option value="china">China</a-select-option>-->
<!--            <a-select-option value="usa">U.S.A</a-select-option>-->
<!--          </a-select>-->
<!--        </a-form-item>-->

<!--      </a-form>-->
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
