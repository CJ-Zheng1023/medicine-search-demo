<template>
  <div class="box" :class="{'open': isOpen}">
    <i class="el-icon-close btn-close" @click="closeToolBox"></i>
    <ul class="tool-bar" ref="toolbar">
      <li>
        <a href="javascript:;" @click="clickMenu('dictionary', $event)">
          <i class="el-icon-tickets"></i>
          <span>中英辞典</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="clickMenu('custom-dictionary', $event)">
          <i class="el-icon-document"></i>
          <span>个人词库</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="clickMenu('latest-patent', $event)">
          <i class="el-icon-tickets"></i>
          <span>近期申请</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="clickMenu('history-view', $event)">
          <i class="el-icon-tickets"></i>
          <span>近期浏览</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="clickMenu('search-factor', $event)">
          <i class="el-icon-tickets"></i>
          <span>要素检索</span>
        </a>
      </li>
    </ul>
    <div class="box-header">
      <h2>{{currentView | showHeaderName}}</h2>
    </div>
    <div class="box-content">
      <keep-alive>
        <component :is="currentView"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Dictionary from 'components/Dictionary'
import HistoryView from 'components/HistoryView'
import LatestPatent from 'components/LatestPatent'
import CustomDictionary from 'components/CustomDictionary'
export default {
  data () {
    return {
      isOpen: false,
      currentView: 'dictionary',
      menuDoms: null
    }
  },
  components: {
    Dictionary,
    HistoryView,
    LatestPatent,
    CustomDictionary,
    'search-factor': () => import('./SearchFactor')
  },
  mounted () {
    this.menuDoms = this.$refs.toolbar.querySelectorAll('a')
  },
  methods: {
    clickMenu (viewName, event) {
      this.currentView = viewName
      let currentClassName = event.target.parentNode.className
      if (currentClassName === 'active' && this.isOpen) {
        this._clearClassName()
        this.isOpen = false
      } else {
        this.isOpen = true
        this._clearClassName()
        event.target.parentNode.className = 'active'
      }
    },
    closeToolBox () {
      this.isOpen = false
      this._clearClassName()
    },
    _clearClassName () {
      this.menuDoms.forEach(item => {
        item.className = ''
      })
    }
  },
  filters: {
    showHeaderName (value) {
      let map = {
        'dictionary': '中英词典',
        'latest-patent': '近期申请',
        'history-view': '近期浏览',
        'search-factor': '要素检索',
        'custom-dictionary': '个人词库'
      }
      return map[value]
    }
  }
}
</script>
<style scoped>
  .box{
    position: fixed;
    right: -350px;
    top: 0;
    height: 100%;
    z-index: 10;
    border-left: 6px solid #7a6e6e;
    transition: right .3s .1s;
    padding-top: 50px;
    box-sizing: border-box;
  }
  .box.open{
    right: 0;
  }
  .box.show-footer{
    padding-bottom: 40px;
  }
  .box-header{
    background-color: rgb(236, 234, 234);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .box-header h2{
    margin: 0;
    line-height: 50px;
    padding: 0 15px;
    font-size: 18px;
    color: rgb(94, 80, 80);
    font-weight: 400;
  }
  .box-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgb(236, 234, 234);
    width: 100%;
    height: 40px;
  }
  .box-content{
    background-color: rgb(236, 234, 234);
    height: 100%;
    width: 350px;
    z-index: 2;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .tool-bar{
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
  }
  .tool-bar li{
    margin: 0;
    padding: 0;
  }
  .tool-bar li a{
    color: #fff;
    display: block;
    border-radius: 3px;
    margin: 1px 0;
    font-size: 16px;
    text-decoration: none;
    position: relative;

  }
  .tool-bar li a i{
    background-color: #7a6e6e;
    position: relative;
    z-index: 2;
    padding: 8px 8px;
  }
  .tool-bar li a span{
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    text-align: center;
    line-height: 32px;
    background-color: #c81623;
    border-radius: 3px;
    transition: left .3s .1s;
    z-index: 1;
  }
  .tool-bar li a:hover i, .tool-bar li a.active i{
    background-color: #c81623;
  }
  .tool-bar li a:hover span{
    left: -78px;
  }
  .tool-bar li a.active span, .tool-bar li a.active:hover span{
    left: 0;
  }
  .box .btn-close{
    position: absolute;
    top: 10px;
    right: 10px;
    color: #666;
    font-size: 14px;
    z-index: 11;
    cursor: pointer;
  }
</style>
