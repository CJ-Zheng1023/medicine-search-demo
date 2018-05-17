<template>
  <div>
    <div v-if="managePanelVisible">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>记忆站</span>
        </div>
        <a :key="item.id" v-for="item in memoryList" class="tag-wrapper" @click="handleSelect(item)">
          <el-tag
            closable
            :class="{active: item.active}"
            :disable-transitions="false">
            {{item.name}}
          </el-tag>
        </a>
        <el-button class="button-tag" size="small" @click="managePanelVisible = !managePanelVisible">+ 新建</el-button>
      </el-card>
    </div>
    <div v-else>
      <curative-effect :ceData="currentMemory.ceData"></curative-effect>
    </div>
  </div>
</template>
<script>
import CurativeEffect from 'components/CurativeEffect'
export default {
  components: {
    CurativeEffect
  },
  data () {
    return {
      managePanelVisible: true,
      currentMemory: '',
      memoryList: [
        {
          name: '要素库1',
          active: false,
          ceData: {
            ceList: [
              {
                id: +new Date(),
                name: 'good'
              },
              {
                id: +new Date(),
                name: 'worse'
              }
            ]
          }
        },
        {
          name: '要素库2',
          active: false,
          ceData: {
            ceList: [
              {
                id: +new Date(),
                name: '12312'
              },
              {
                id: +new Date(),
                name: '123123'
              }
            ]
          }
        }
      ]
    }
  },
  methods: {
    handleSelect (tag) {
      this.memoryList.forEach(item => {
        item.active = false
      })
      this.currentMemory = tag
      tag.active = true
    }
  }
}
</script>
<style scoped>
  .el-button{
    margin-left: 5px;
  }
  .tag-wrapper{
    display: inline-block;
    margin-bottom: 10px;
  }
  .tag-wrapper + .tag-wrapper{
    margin-left: 10px;
  }
  .el-tag{
    cursor: pointer;
    background-color: #fff;
    color: #606266;
  }
  .el-tag.active{
    background-color: rgba(64,158,255,.1);
    color: #409eff;
  }
</style>
