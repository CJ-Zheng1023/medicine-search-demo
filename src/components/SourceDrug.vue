<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>原料药</span>
      </div>
      <template v-if="sdData.sdList">
        <el-form label-width="80px">
          <el-form-item label="药物数量">
            <el-input-number @change="changeMin" :min="1" :max="sdData.max" size="mini" v-model="sdData.min"></el-input-number>
            到
            <el-input-number @change="changeMax" :min="sdData.min" size="mini" v-model="sdData.max"></el-input-number>
            味
          </el-form-item>
          <el-form-item label="包含个数">
            <el-slider
              @change="changeSlider"
              v-model="sdData.count"
              :max="20">
            </el-slider>
          </el-form-item>
        </el-form>
        <el-tag
          v-for="item in sdData.sdList"
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
      'sdData'
    ]),
    cacheSdData () {
      return JSON.parse(JSON.stringify(this.sdData))
    }
  },
  mounted () {
    this.showSdDataById(this.factorMemoryId)
  },
  methods: {
    changeSlider (val) {
      this.$emit('sd-data-cache', this.cacheSdData)
    },
    changeMin (val) {
      if (val > this.sdData.max) {
        this.sdData.min = this.sdData.max
      }
      this.$emit('sd-data-cache', this.cacheSdData)
    },
    changeMax (val) {
      if (val < this.sdData.min) {
        this.sdData.max = this.sdData.min
      }
      this.$emit('sd-data-cache', this.cacheSdData)
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        if (!this.sdData.sdList) {
          this.$set(this.sdData, 'sdList', [])
          this.$set(this.sdData, 'count', 1)
          this.$set(this.sdData, 'max', 1)
          this.$set(this.sdData, 'min', 1)
        }
        this.sdData.sdList.push({
          id: +new Date(),
          name: inputValue
        })
      }
      this.$emit('sd-data-cache', this.cacheSdData)
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
      this.sdData.sdList.splice(this.sdData.sdList.indexOf(tag), 1)
      this.$emit('sd-data-cache', this.cacheSdData)
    },
    ...mapActions([
      'showSdDataById'
    ])
  }
}
</script>
