<template>
  <div>
    <el-card class="box-card" v-for="item in patents" :key="item.ap">
      <div slot="header" class="clearfix">
        <span>{{item.ap}}</span>
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
          ap: 'CN201019110009',
          ti: '一种中药冻干注射剂定性的测定方法',
          mix: '人参总皂苷提取物35；淫羊藿总黄酮提取物55',
          using: '补钙；免疫增强剂；衰老'
        },
        {
          ap: 'CN93104868',
          ti: '人参水果罐头及其制作方法',
          mix: '人参2-5%；水果50-54% ',
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
