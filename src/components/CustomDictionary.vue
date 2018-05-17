<template>
  <div>
    <el-card class="box-card box-card-lib">
      <div slot="header" class="clearfix">
        <span>词库</span>
      </div>
      <a class="tag-wrapper" :key="tag.id" v-for="tag in libTags" @click="handleSelect(tag)">
        <el-tag
          closable
          :class="{active: tag.active}"
          :disable-transitions="false"
          @close="handleLibClose(tag)">
          {{tag.name}}
        </el-tag>
      </a>
      <el-input
        class="input-new-tag"
        v-if="inputLibVisible"
        v-model="inputLibValue"
        ref="saveLibTagInput"
        size="small"
        @keyup.enter.native="handleLibInputConfirm"
        @blur="handleLibInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-tag" size="small" @click="showInput('lib')">+ 新增词库</el-button>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>词条</span>
      </div>
      <a class="tag-wrapper" :key="tag.id" v-for="tag in wordsInLib">
        <el-tag
          type="success"
          closable
          :disable-transitions="false"
          @close="handleWordClose(tag)">
          {{tag.name}}
        </el-tag>
      </a>
      <el-input
        class="input-new-tag"
        v-if="inputWordVisible"
        v-model="inputWordValue"
        ref="saveWordTagInput"
        size="small"
        @keyup.enter.native="handleWordInputConfirm"
        @blur="handleWordInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-tag" size="small" @click="showInput('word')">+ 新增词条</el-button>
    </el-card>
  </div>
</template>
<style scoped>
  .el-card{
    margin-bottom: 10px;
  }
  .tag-wrapper{
    display: inline-block;
    margin-bottom: 10px;
  }
  .tag-wrapper + .tag-wrapper{
    margin-left: 10px;
  }
  .box-card-lib .el-tag{
    cursor: pointer;
    background-color: #fff;
    color: #606266;
  }
  .el-tag.active{
    background-color: rgba(64,158,255,.1);
    color: #409eff;
  }
  .button-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
  }
</style>

<script>
export default {
  data () {
    return {
      libTags: [],
      inputLibVisible: false,
      inputWordVisible: false,
      inputLibValue: '',
      inputWordValue: '',
      wordTags: [],
      currentLib: ''
    }
  },
  computed: {
    wordsInLib () {
      return this.wordTags.filter(item => item.pId === this.currentLib.id)
    }
  },
  methods: {
    handleLibClose (tag) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.wordTags = this.wordTags.filter(item => item.pId !== tag.id)
        if (this.currentLib.id && this.currentLib.id === tag.id) {
          this.currentLib = null
        }
        this.libTags.splice(this.libTags.indexOf(tag), 1)
      })
    },
    handleWordClose (tag) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.wordTags.splice(this.wordTags.indexOf(tag), 1)
      })
    },
    handleSelect (tag) {
      this.libTags.forEach(item => {
        item.active = false
      })
      tag.active = true
      this.currentLib = tag
    },
    showInput (type) {
      if (type === 'lib') {
        this.inputLibVisible = true
        this.$nextTick(_ => {
          this.$refs.saveLibTagInput.$refs.input.focus()
        })
      } else {
        if (!this.currentLib) {
          this.$alert('请选择词库，然后执行添加词条操作', '信息', {
            confirmButtonText: '确定',
            type: 'info'
          })
          return
        }
        this.inputWordVisible = true
        this.$nextTick(_ => {
          this.$refs.saveWordTagInput.$refs.input.focus()
        })
      }
    },
    handleLibInputConfirm () {
      let inputLibValue = this.inputLibValue
      if (inputLibValue) {
        this.libTags.push({
          id: +new Date(),
          name: inputLibValue,
          active: false
        })
      }
      this.inputLibVisible = false
      this.inputLibValue = ''
    },
    handleWordInputConfirm () {
      let inputWordValue = this.inputWordValue
      if (inputWordValue) {
        this.wordTags.push({
          id: +new Date(),
          pId: this.currentLib.id,
          name: inputWordValue
        })
      }
      this.inputWordVisible = false
      this.inputWordValue = ''
    }
  }
}
</script>
