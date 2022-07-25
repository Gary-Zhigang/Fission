<template>
  <div style="margin: 30px auto">
    <a-row :gutter="24">
      <a-col :span="12">
        <a-card>
          不同渠道带来的新增用户数
          <br>
          <br>
          <BarChart class="bar-chart" :chart-data="getData" :options="chartOption"/>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          不同渠道的注册漏洞转化
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {computed, defineComponent, ref} from "vue";
import {BarChart} from "vue-chart-3";

export default defineComponent({
  name: 'market-da',
  components: {
    BarChart,
  },
  setup() {
    const data1 = ref([310, 250, 350]);
    const data2 = ref([100, 90, 180]);
    const data3 = ref([80, 75, 80]);
    const getData = computed(() => ({
      labels: ['6-21', '6-22', '6-23',],
      datasets: [
        {
          label: '百度',
          data: data1.value,
          backgroundColor: '#1890ff',
        },
        {
          label: '今日头条',
          data: data2.value,
          backgroundColor: '#FFE384',
        },
        {
          label: '微信',
          data: data3.value,
          backgroundColor: '#FA8072',
        },
      ],
    }));

    const chartOption = ref({
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    });
    return { getData, chartOption};
  },
});

</script>

<style scoped>
.bar-chart {
  width: 30rem;
  height: 10rem;
}
</style>