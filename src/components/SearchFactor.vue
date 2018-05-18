<template>
  <div class="search-factor">
    <div v-if="managePanelVisible">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>记忆站</span>
        </div>
        <a :key="item.id" v-for="item in memoryList" class="tag-wrapper" @click="handleSelect(item)">
          <el-tag
            closable
            :disable-transitions="false">
            {{item.name}}
          </el-tag>
        </a>
        <el-button class="button-tag" size="small" @click="clickCreateFactor">+ 新建</el-button>
      </el-card>
    </div>
    <div v-else>
      <curative-effect @ce-data-cache='cacheCeData' :factorMemoryId="currentMemory.id"></curative-effect>
      <drug-name @dn-data-cache="cacheDnData" :factorMemoryId="currentMemory.id"></drug-name>
      <drug-style @ds-data-cache="cacheDsData" :factorMemoryId="currentMemory.id"></drug-style>
      <source-drug @sd-data-cache="cacheSdData" :factorMemoryId="currentMemory.id"></source-drug>
      <div class="button-group">
        <el-button type="primary" icon="el-icon-search" size="small">检索</el-button>
        <el-button type="warning" size="small" icon="el-icon-upload" @click="saveFactor">保存</el-button>
        <el-button type="info" size="small" @click="managePanelVisible = true">返回</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import CurativeEffect from 'components/CurativeEffect'
import DrugName from 'components/DrugName'
import DrugStyle from 'components/DrugStyle'
import SourceDrug from 'components/SourceDrug'
import { mapActions, mapState } from 'vuex'
let gCeData, gDnData, gDsData, gSdData
export default {
  components: {
    CurativeEffect,
    DrugName,
    DrugStyle,
    SourceDrug
  },
  data () {
    return {
      managePanelVisible: true,
      currentMemory: ''
    }
  },
  computed: mapState([
    'memoryList'
  ]),
  created () {
    this.showFactorMemory()
  },
  methods: {
    _clearCache () {
      gCeData = null
      gDnData = null
      gDsData = null
      gSdData = null
    },
    backFactorMemory () {
      this.managePanelVisible = true
    },
    clickCreateFactor () {
      this.currentMemory = ''
      this.managePanelVisible = false
      this._clearCache()
    },
    handleSelect (tag) {
      this.currentMemory = tag
      this.managePanelVisible = false
      this._clearCache()
    },
    cacheCeData (ceData) {
      gCeData = ceData
    },
    cacheDnData (dnData) {
      gDnData = dnData
    },
    cacheDsData (dsData) {
      gDsData = dsData
    },
    cacheSdData (sdData) {
      gSdData = sdData
    },
    saveFactor () {
      if (this.currentMemory) {
        this.updateCeDataById({
          id: this.currentMemory.id,
          ceData: gCeData
        })
        this.updateDnDataById({
          id: this.currentMemory.id,
          dnData: gDnData
        })
        this.updateDsDataById({
          id: this.currentMemory.id,
          dsData: gDsData
        })
        this.updateSdDataById({
          id: this.currentMemory.id,
          sdData: gSdData
        })
        this.currentMemory = ''
        this.managePanelVisible = true
      } else {
        this.$prompt('请输入要素表名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          console.log(gSdData)
          this.createMemory({
            id: +new Date(),
            name: value,
            ceData: gCeData || {},
            dnData: gDnData || {},
            dsData: gDsData || {},
            sdData: gSdData || {}
          })
          this.managePanelVisible = true
        })
      }
    },
    ...mapActions([
      'showFactorMemory',
      'createMemory',
      'updateCeDataById',
      'updateDnDataById',
      'updateDsDataById',
      'updateSdDataById'
    ])
  }
}
</script>
<style>
  .search-factor .tag-wrapper{
    display: inline-block;
    margin-bottom: 10px;
  }
  .search-factor .el-tag, .search-factor .el-card{
    margin-bottom: 10px;
  }
  .search-factor .tag-wrapper, .search-factor .el-tag, .search-factor .el-button{
    margin-left: 5px;
    margin-right: 5px;
  }
  .search-factor .tag-wrapper .el-tag{
    margin-left: 0;
    margin-right: 0;
  }
  .search-factor .el-tag{
    cursor: pointer;
    background-color: #fff;
    color: #606266;
  }
  .search-factor .el-tag.active{
    background-color: rgba(64,158,255,.1);
    color: #409eff;
  }
  .search-factor .input-tag {
    width: 90px;
    margin-left: 10px;
  }
  .search-factor .button-group{
    text-align: center;
  }
</style>
