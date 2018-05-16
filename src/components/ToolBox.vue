<template>
  <div class="box" :class="{open: isOpen}">
    <i class="el-icon-close btn-close" @click="closeToolBox"></i>
    <ul class="tool-bar" ref="toolbar">
      <li>
        <a href="javascript:;" @click="clickMenu('cn-dictionary', $event)">
          <i class="el-icon-tickets"></i>
          <span>中文辞典</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="clickMenu('en-dictionary', $event)">
          <i class="el-icon-document"></i>
          <span>英文辞典</span>
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
    <div class="content">
      <component :is="currentView"></component>
    </div>
  </div>
</template>
<script>
import CNDictionary from 'components/CNDictionary'
import ENDictionary from 'components/ENDictionary'
import HistoryView from 'components/HistoryView'
import LatestPatent from 'components/LatestPatent'
export default {
  data () {
    return {
      isOpen: false,
      currentView: 'cn-dictionary',
      menuDoms: null
    }
  },
  components: {
    'cn-dictionary': CNDictionary,
    'en-dictionary': ENDictionary,
    HistoryView,
    LatestPatent,
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
  }
}
</script>
<style scoped>
  .box{
    position: fixed;
    right: -300px;
    top: 0;
    height: 100%;
    z-index: 10;
    border-left: 6px solid #7a6e6e;
    transition: right .3s .1s;
  }
  .box.open{
    right: 0;
  }
  .content{
    background-color: rgb(236, 234, 234);
    height: 100%;
    width: 300px;
    z-index: 2;
    position: relative;
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
