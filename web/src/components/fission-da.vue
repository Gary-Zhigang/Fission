<template>
  <div style="padding: 30px">
    <a-row :gutter="16">
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
</template>
