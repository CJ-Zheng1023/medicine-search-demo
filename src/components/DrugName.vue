<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>药品名称</span>
      </div>
      <template v-if="dnData.dnList">
        <el-tag
          v-for="item in dnData.dnList"
          :key="item.id + item.name"
          closable
          :disable-transitions="false" @close="handleClose(item)">
          {{item.name}}
        </el-tag>
      </template>
      <el-input
        class="input-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-tag" size="small" @click="showInput">+ 添加</el-button>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['factorMemoryId'],
  data () {
    return {
      inputVisible: false,
      inputValue: ''
    }
  },
  computed: {
    ...mapState([
      'dnData'
    ]),
    cacheDnData () {
      return JSON.parse(JSON.stringify(this.dnData))
    }
  },
  mounted () {
    this.showDnDataById(this.factorMemoryId)
  },
  methods: {
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        if (!this.dnData.dnList) {
          this.$set(this.dnData, 'dnList', [])
        }
        this.dnData.dnList.push({
          id: +new Date(),
          name: inputValue
        })
      }
      this.$emit('dn-data-cache', this.cacheDnData)
      this.inputVisible = false
      this.inputValue = ''
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleClose (tag) {
      this.dnData.dnList.splice(this.dnData.dnList.indexOf(tag), 1)
      this.$emit('dn-data-cache', this.cacheDnData)
    },
    ...mapActions([
      'showDnDataById'
    ])
  }
}
</script>
