<template>
  <div>
    <el-card class="box-card" v-for="item in patents" :key="item.ap + item.apd">
      <div slot="header" class="clearfix">
        <span>{{item.ap}}</span>
        <span style="float: right">{{item.apd}}</span>
      </div>
      <div>
        <el-row :gutter="10">
          <el-col :span="7"><strong>标题:</strong></el-col>
          <el-col :span="17">{{item.ti}}</el-col>
          <el-col :span="7"><strong>方剂组成:</strong></el-col>
          <el-col :span="17">{{item.mix}}</el-col>
          <el-col :span="7"><strong>疗效:</strong></el-col>
          <el-col :span="17">{{item.using}}</el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      patents: [
        {
          ap: 'CN200610017238',
          apd: '2011.4.22',
          ti: '一种治疗中风的中药及其制备方法',
          mix: '人参茎叶200g；穿山龙100g ',
          using: '补钙；免疫增强剂；衰老'
        },
        {
          ap: 'CN01112508',
          apd: '2013.6.20',
          ti: '一种运动保健食品',
          mix: '人参总皂甙20g；D-核糖999.98g ',
          using: '补钙；免疫增强剂；衰老'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .el-col{
    font-size: 14px;
    color: rgb(94, 80, 80);
    line-height: 1.5;
  }
  .el-card{
    margin-bottom: 10px;
  }
</style>
