<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-switch
          v-model="isCN"
          style="display: block"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="英文"
          inactive-text="中文">
        </el-switch>
      </el-form-item>
    </el-form>
    <div class="panel">
      <el-popover v-for="item in words" :key="item.zwzm"
        placement="left"
        width="300"
        trigger="hover">
        <div>
          <p>
            <strong>中文正名:</strong>
            <span>{{item.zwzm}}</span>
          </p>
          <p>
            <strong>中文异名:</strong>
            <span>{{item.zwym}}</span>
          </p>
          <p>
            <strong>英文名称:</strong>
            <span>{{item.ywmc}}</span>
          </p>
          <p>
            <strong>拉丁名称:</strong>
            <span>{{item.ldmc}}</span>
          </p>
          <p>
            <strong>拉丁矿植物名:</strong>
            <span>{{item.ldkzwm}}</span>
          </p>
          <p>
            <strong>中文拼音:</strong>
            <span>{{item.zwpy}}</span>
          </p>
        </div>
        <el-button slot="reference">{{item.zwzm}}</el-button>
      </el-popover>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      words: [],
      isCN: false
    }
  },
  methods: {
    search () {
      this.words = [
        {
          zwzm: '人参',
          zwym: '人衔、鬼盖（《本经》），土精。神草、黄参、血参（《吴普本草》），地精（《广雅》），百尺杵（《本草图经》），侮腴、金井玉阑、孩儿参（《纲目》），棒棰（《辽宁主要药材》）。园参又名：秧参。野山参，又名：山参。朝鲜人参，又名：别直参、高丽参。；玉精，山参，园参，别直参，吉林参，炮制品：生晒参，生晒山参，白参，糖参，（白人参）',
          ywmc: 'Ginseng, Ginseng Root',
          ldmc: 'Radix Ginseng',
          ldkzwm: 'Panax ginseng C.A.Mey.',
          zwpy: 'RENSHEN'
        },
        {
          zwzm: '土人参',
          zwym: '人衔、鬼盖（《本经》），土精。神草、黄参、血参（《吴普本草》），地精（《广雅》），百尺杵（《本草图经》），侮腴、金井玉阑、孩儿参（《纲目》），棒棰（《辽宁主要药材》）。园参又名：秧参。野山参，又名：山参。朝鲜人参，又名：别直参、高丽参。；玉精，山参，园参，别直参，吉林参，炮制品：生晒参，生晒山参，白参，糖参，（白人参）',
          ywmc: 'Ginseng, Ginseng Root',
          ldmc: 'Radix Ginseng',
          ldkzwm: 'Panax ginseng C.A.Mey.',
          zwpy: 'TURENSHEN'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .panel{
    border: 1px solid rgb(222, 222, 222);
    background-color: #fff;
    border-radius: 3px;
    min-height: 150px;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding: 10px;
  }
  .el-button{
    margin: 2px 3px;
  }
</style>
