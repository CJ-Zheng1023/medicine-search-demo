<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>剂型</span>
      </div>
      <template v-if="dsData.dsList">
        <el-tag
          v-for="item in dsData.dsList"
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
      'dsData'
    ]),
    cacheDsData () {
      return JSON.parse(JSON.stringify(this.dsData))
    }
  },
  mounted () {
    this.showDsDataById(this.factorMemoryId)
  },
  methods: {
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        if (!this.dsData.dsList) {
          this.$set(this.dsData, 'dsList', [])
        }
        this.dsData.dsList.push({
          id: +new Date(),
          name: inputValue
        })
      }
      this.$emit('ds-data-cache', this.cacheDsData)
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
      this.dsData.dsList.splice(this.dsData.dsList.indexOf(tag), 1)
      this.$emit('ds-data-cache', this.cacheDsData)
    },
    ...mapActions([
      'showDsDataById'
    ])
  }
}
</script>
