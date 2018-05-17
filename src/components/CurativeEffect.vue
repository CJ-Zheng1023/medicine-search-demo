<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>疗效</span>
      </div>
      <template v-if="ceData.ceList">
        <el-tag
          v-for="item in ceData.ceList"
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
      'ceData'
    ]),
    cacheCeData () {
      return JSON.parse(JSON.stringify(this.ceData))
    }
  },
  mounted () {
    this.showCeDataById(this.factorMemoryId)
  },
  methods: {
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        if (!this.ceData.ceList) {
          this.$set(this.ceData, 'ceList', [])
        }
        this.ceData.ceList.push({
          id: +new Date(),
          name: inputValue
        })
      }
      this.$emit('ce-data-cache', this.cacheCeData)
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
      this.ceData.ceList.splice(this.ceData.ceList.indexOf(tag), 1)
      this.$emit('ce-data-cache', this.cacheCeData)
    },
    ...mapActions([
      'showCeDataById'
    ])
  }
}
</script>
