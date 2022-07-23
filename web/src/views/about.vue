<template>
  <div id="about" style="width: 400px">
    <LineChart v-bind="lineChartProps" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { LineChart, useLineChart } from 'vue-chart-3';
import { ref, computed, defineComponent } from 'vue';

Chart.register(...registerables);

export default defineComponent({
  name: 'About',
  components: {
    LineChart,
  },
  setup() {
    const data = ref([100, 145, 230, 100, 130]);
    const chartData = computed(() => ({
      labels: ['6月14日', '6月16日', '6月18日', '6月20日', '6月22日'],
      datasets: [
        {
          label: '分享/启动用户',
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          data: data.value,
        },
      ],
    }));

    const { lineChartProps, lineChartRef } = useLineChart({
      chartData,
    });


    return { lineChartProps, lineChartRef };
  },
});
</script>

<style>
#about {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
