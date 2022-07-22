<template>
  <h2>设置场景</h2>
  <a-form
      :model="formState"
      name="validate_other"
      v-bind="formItemLayout"
      @finishFailed="onFinishFailed"
      @finish="onFinish"
  >
    <a-form-item
        name="select"
        label="机制"
        has-feedback
        :rules="[{ required: true, message: '请选择一个助力机制！' }]"
    >
      <a-select v-model:value="formState.select" placeholder="请选择助力机制">
        <a-select-option value="3help">拉3人助力</a-select-option>
        <a-select-option value="5help">拉5人助力</a-select-option>
        <a-select-option value="7help">拉7人助力</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item
        name="select"
        label="奖励"
        has-feedback
        :rules="[{ required: true, message: '请选择一个奖励！' }]"
    >
      <a-select v-model:value="formState.select" placeholder="请选择奖励">
        <a-select-option value="3yuan">3元红包</a-select-option>
        <a-select-option value="5yuan">5元红包</a-select-option>
        <a-select-option value="7yuan">7元红包</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item label="种子用户">
      <a-form-item name="input-number" no-style>
        <a-input-number v-model:value="formState['input-number']" :min="0" :max="90000" />
      </a-form-item>
      <span class="ant-form-text">人</span>
    </a-form-item>

    <a-form-item name="slider" label="曝光率">
      <a-slider
          v-model:value="formState.slider"
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
          v-model:value="formState.slider"
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
          v-model:value="formState.slider"
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

    <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UploadOutlined,
    InboxOutlined,
  },
  setup() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const formState = reactive<Record<string, any>>({
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      formItemLayout,
    };
  },
});
</script>

