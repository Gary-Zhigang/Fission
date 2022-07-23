<!--<template>-->
<!--  <a-layout-header class="header">-->
<!--    <h1 style="text-align: center; color: white">-->
<!--      <router-link :key="welcome" to="/" style="color: white" @click.native = "clickHead">应用管理</router-link>-->
<!--    </h1>-->
<!--  </a-layout-header>-->
<!--</template>-->

<template>
  <a-layout-header class="header">
    <a-anchor-link href="/" title="应用管理" />
  </a-layout-header>
</template>


<style scoped>
.ant-layout-header {
  background: #1890ff;
  text-align: center;
}
/deep/ .ant-anchor-link {
  padding: 4px;
  margin: 5px auto;
}
/deep/ .ant-anchor-link-title {
  font-size: 22px;
  font-weight: bolder;
  width: 135px;
  padding: 10px;
  margin: auto;
  color: white;
}
</style>

