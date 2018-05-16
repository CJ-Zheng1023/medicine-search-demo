<template>
  <div class="content-patent">
    <el-row :gutter="20">
      <el-col :md="3" :sm="12" class="field-key">申请号:</el-col>
      <el-col :md="9" :sm="12" class="field-value">CN201310245988 20130620</el-col>
      <el-col :md="3" :sm="12" class="field-key">申请日:</el-col>
      <el-col :md="9" :sm="12" class="field-value">2013.6.20</el-col>
      <el-col :md="3" :sm="12" class="field-key">申请人:</el-col>
      <el-col :md="9" :sm="12" class="field-value">韩连慧</el-col>
      <el-col :md="3" :sm="12" class="field-key">发明人:</el-col>
      <el-col :md="9" :sm="12" class="field-value">韩连慧</el-col>
      <el-col :md="3" :sm="12" class="field-key">公开号:</el-col>
      <el-col :md="9" :sm="12" class="field-value">CN103340400 A 20131009</el-col>
      <el-col :md="3" :sm="12" class="field-key">公开日:</el-col>
      <el-col :md="9" :sm="12" class="field-value">2013.10.9</el-col>
      <el-col :md="3" :sm="12" class="field-key">IPC主分类号:</el-col>
      <el-col :md="9" :sm="12" class="field-value">A23L1/29</el-col>
      <el-col :md="3" :sm="12" class="field-key">族号:</el-col>
      <el-col :md="9" :sm="12" class="field-value">CN103340400</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :md="3" :sm="12" class="field-key">方剂组成:</el-col>
      <el-col :md="21" :sm="12" class="field-value">骨；胶原蛋白；蛋白质；多肽；肽；人参；维生素D；榛子；沙棘；蚕蛹；藕</el-col>
      <el-col :md="3" :sm="12" class="field-key">疗效:</el-col>
      <el-col :md="21" :sm="12" class="field-value">补钙；免疫增强剂；衰老</el-col>
      <el-col :md="3" :sm="12" class="field-key">CMV:</el-col>
      <el-col :md="21" :sm="12" class="field-value">
        <el-table
          :data="fjList"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="方剂名称">
          </el-table-column>
          <el-table-column
            prop="info"
            label="方剂信息">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :md="3" :sm="12" class="field-key">CHV:</el-col>
      <el-col :md="21" :sm="12" class="field-value">
        <el-table
          :data="hhwList"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="化合物名称">
          </el-table-column>
          <el-table-column
            prop="djh"
            label="CN登记号">
          </el-table-column>
          <el-table-column
            prop="cas"
            label="CAS登记号">
          </el-table-column>
          <el-table-column
            prop="znf"
            label="职能符">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fjList: [
        {
          name: '方剂1(8味)',
          info: '骨粉0.5-1.5；胶原蛋白1.5-2.5；人参粉0.3-0.8；维生素D 0.0000002-0.0000003；榛子粉3-4；沙棘提取物0.5-1.5；蚕蛹粉0.5-1.5；藕粉5-7'
        },
        {
          name: '方剂2(8味)',
          info: '骨粉1；胶原蛋白2；人参粉0.5；维生素D 0.00000024；榛子粉3.5；沙棘提取物1；蚕蛹粉1；藕粉6'
        }
      ],
      hhwList: [
        {
          name: '胶原蛋白',
          djh: '000-130-96',
          cas: '',
          znf: '(K)已知化合物;(T)活性成分或治疗剂或前药;(M)联合药物'
        },
        {
          name: '维生素D',
          djh: '000-351-07',
          cas: '1406-16-2',
          znf: '(K)已知化合物;(T)活性成分或治疗剂或前药;(M)联合药物'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .field-key{
    text-align: right;
  }
  .field-value{
    text-align: left;
  }
  .el-col{
    margin-bottom: 20px;
  }
</style>
