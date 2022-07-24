<template>
  <div style="margin: 30px auto">
    <a-row :gutter="24">
      <a-col :span="6">
        <a-card>
          <a-statistic title="PV" :value="2683">
            <template #suffix>
              <span style="font-size:13px">次</span>
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="UV" :value="2578">
            <template #suffix>
              <span style="font-size:13px">人</span>
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="分享次数" :value="2889">
            <template #suffix>
              <span style="font-size:13px">次</span>
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card>
          <a-statistic title="分享用户数" :value="15116">
            <template #suffix>
              <span style="font-size:13px">人</span>
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
  </div>
  <div style="margin: 30px auto">
    <a-row :gutter="24">
      <a-col :span="12">
        <a-card>
          分享/启动用户
          <br>
          <br>
          <a-row :gutter="24">
            <a-col :span="12">
              <a-statistic title="今日" :value="102.56" :precision="2" :value-style="{'font-size':'33px'}">
                <template #suffix>
                  <span style="font-size:13px">%</span>
                </template>
              </a-statistic>
            </a-col>
            <a-col :span="12">
                <a-statistic
                    :value="11.28"
                    :precision="2"
                    suffix="%"
                    :value-style="{ color: '#3f8600', 'font-size':'18px'}"
                    style="margin-right: 50px;"
                >
                  <template #prefix>
                    <span style="color: black">同比</span><arrow-up-outlined />
                  </template>
                </a-statistic>
                <a-statistic
                    :value="9.3"
                    :precision="2"
                    suffix="%"
                    class="demo-class"
                    :value-style="{ color: '#cf1322', 'font-size':'18px'}"
                >
                  <template #prefix>
                    <span style="color: black">环比</span><arrow-down-outlined />
                  </template>
                </a-statistic>
            </a-col>
          </a-row>
          <a-row>
            <LineChart class="line-chart" :chart-data="getData" :options="chartOption"/>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          再裂变用户趋势
          <br>
          <br>
          <a-row :gutter="24">
            <a-col :span="12">
              <a-statistic title="今日" :value="102.56" :precision="2" :value-style="{'font-size':'33px'}">
                <template #suffix>
                  <span style="font-size:13px">%</span>
                </template>
              </a-statistic>
            </a-col>
            <a-col :span="12">
              <a-statistic
                  :value="11.28"
                  :precision="2"
                  suffix="%"
                  :value-style="{ color: '#3f8600', 'font-size':'18px'}"
                  style="margin-right: 50px;"
              >
                <template #prefix>
                  <span style="color: black">同比</span><arrow-up-outlined />
                </template>
              </a-statistic>
              <a-statistic
                  :value="9.3"
                  :precision="2"
                  suffix="%"
                  class="demo-class"
                  :value-style="{ color: '#cf1322', 'font-size':'18px'}"
              >
                <template #prefix>
                  <span style="color: black">环比</span><arrow-down-outlined />
                </template>
              </a-statistic>
            </a-col>
          </a-row>
          <a-row>
            <LineChart class="line-chart" :chart-data="getData2" :options="chartOption"/>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
  <div style="margin: 30px auto">
    <a-card>
      社交裂变传播
      <fission-graph class="fission-graph"></fission-graph>
    </a-card>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { LineChart } from 'vue-chart-3';
import { ref, computed, defineComponent } from 'vue';
import FissionGraph from "@/components/fission-graph";

Chart.register(...registerables);

export default defineComponent({
  name: 'fission-da',
  components: {
    FissionGraph,
    LineChart,
  },
  setup() {
    const data = ref([100, 145, 230, 100, 130]);
    const getData = computed(() => ({
      labels: ['6月14日', '6月16日', '6月18日', '6月20日', '6月22日'],
      datasets: [
        {
          label: '分享/启动用户',
          fill: false,
          borderColor: '#ABC9FF',
          tension: 0.1,
          data: data.value,
          pointBackgroundColor: '#1890ff',
          backgroundColor: '#1890ff',
        },
      ],
    }));

    const chartOption = ref({
      responsive: true,
      // interaction: {
      //   intersect: false,
      // },
      scales: {
        x: {
          display: true,
          title: {
            display: true
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            // text: '人'
          },
          // suggestedMin: 0,
        }
      }
    });

    const data2 = ref([100, 145, 230, 100, 130]);
    const getData2 = computed(() => ({
      labels: ['6月14日', '6月16日', '6月18日', '6月20日', '6月22日'],
      datasets: [
        {
          label: '再裂变用户趋势',
          fill: false,
          borderColor: '#ABC9FF',
          tension: 0.1,
          data: data2.value,
          pointBackgroundColor: '#1890ff',
          backgroundColor: '#1890ff',
        },
      ],
    }));

    return { getData, getData2, chartOption};
  },
});
</script>

<style scoped>
.line-chart {
  width: 30rem;
  height: 10rem;
}
.fission-graph {
  height: 10rem;
  width: 60rem;
  margin: auto;
}
/deep/ .v-canvas {
  height: 9rem;
  width: 59rem;
}
</style>
