<template>
  <h2>设置场景</h2>
  <a-form
      :model="scenario"
      name="validate_other"
      v-bind="formItemLayout"
  >
    <a-form-item
        name="select"
        label="机制"
        v-bind="validateInfos.helpMode"
        has-feedback
    >
      <a-select v-model:value="scenario.helpMode" placeholder="请选择助力机制">
        <a-select-option value="3help">拉3人助力</a-select-option>
        <a-select-option value="5help">拉5人助力</a-select-option>
        <a-select-option value="7help">拉7人助力</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item
        name="select"
        label="奖励"
        v-bind="validateInfos.rewardMode"
        has-feedback
    >
      <a-select v-model:value="scenario.rewardMode" placeholder="请选择奖励">
        <a-select-option value="3yuan">3元红包</a-select-option>
        <a-select-option value="5yuan">5元红包</a-select-option>
        <a-select-option value="7yuan">7元红包</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item label="种子用户">
      <a-form-item name="input-number" no-style>
        <a-input-number v-model:value="scenario.seedUsers" :min="0" :max="90000" />
      </a-form-item>
      <span class="ant-form-text">人</span>
    </a-form-item>

    <a-form-item name="slider" label="曝光率">
      <a-slider
          v-model:value="scenario.exposureRate"
          :marks="{
          0: '0%',
          20: '20%',
          40: '40%',
          60: '60%',
          80: '80%',
          100: '100%',
        }"
      />
    </a-form-item>

    <a-form-item name="slider" label="种子用户传播率">
      <a-slider
          v-model:value="scenario.propagationRate"
          :marks="{
          0: '0%',
          20: '20%',
          40: '40%',
          60: '60%',
          80: '80%',
          100: '100%',
        }"
      />
    </a-form-item>

    <a-form-item name="slider" label="种子用户预计点击率">
      <a-slider
          v-model:value="scenario.clickRate"
          :marks="{
          0: '0%',
          20: '20%',
          40: '40%',
          60: '60%',
          80: '80%',
          100: '100%',
        }"
      />
    </a-form-item>
    <br>
    <a-form-item :wrapper-col="{ span: 12, offset: 6 }" style="text-align: center">
      <a-button type="primary" @click.prevent="onSubmit">提交</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">重置</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import {defineComponent, reactive, toRaw} from 'vue';
import { Form } from 'ant-design-vue';

const useForm = Form.useForm;

export default defineComponent({
  name: 'invite-new',
  setup() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const scenario = reactive({
      helpMode: undefined,
      rewardMode: undefined,
      seedUsers: 0,
      exposureRate: 0,
      propagationRate: 0,
      clickRate: 0,
    });
    const rulesRef = reactive({
      helpMode: [
        {
          required: true,
          message: '请选择一个助力机制！',
        },
      ],
      rewardMode: [
        {
          required: true,
          message: '请选择一个奖励！',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(scenario, rulesRef);
    const onSubmit = () => {
      // console.log('Success:', values);
      validate()
          .then(() => {
            console.log(toRaw(scenario));
          })
          .catch(err => {
            console.log('error', err);
          });
    };
    //
    // const onFinishFailed = (errorInfo: any) => {
    //   console.log('Failed:', errorInfo);
    // };
    return {
      onSubmit,
      formItemLayout,
      scenario,
      validate,
      validateInfos,
      resetFields,
    };
  },
});
</script>

