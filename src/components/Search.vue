<template>
  <div>
    <h1 class="title">具有增强免疫力、补钙及抗衰老功能的食品 </h1>
    <el-tabs type="border-card" class="search-tabs">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-info"></i> 案卷信息</span>
        <patent-info></patent-info>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-news"></i> 说明书摘要</span>
        <abstract></abstract>
      </el-tab-pane>
      <el-tab-pane label="权利要求书">
        <span slot="label"><i class="el-icon-printer"></i> 权利要求书</span>
        <claim></claim>
      </el-tab-pane>
      <el-tab-pane label="说明书">
        <span slot="label"><i class="el-icon-document"></i> 说明书</span>
        <description></description>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import PatentInfo from 'components/PatentInfo'
import Claim from 'components/Claim'
import Description from 'components/Description'
import Abstract from 'components/Abstract'
export default {
  components: {
    PatentInfo,
    Claim,
    Description,
    Abstract
  }
}
</script>
<style scoped>
  .search-tabs{
    margin: 6px;
  }
  .title{
    text-align: center;
  }
</style>
