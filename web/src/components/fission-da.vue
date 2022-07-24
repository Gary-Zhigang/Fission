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
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <a-statistic title="UV" :value="2578">
            <template #suffix>
              <span style="font-size:13px">人</span>
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
</template>

<!--<style scoped>-->
<!--.ant-statistic-content {-->
<!--  font-size: ;-->
<!--}-->
<!--</style>-->
