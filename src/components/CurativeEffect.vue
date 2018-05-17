<template>
  <div>
    <template v-if="ceData">
      <div v-for="item in ceList" :key="item.id + item.name">
        {{item.name}}
        <button @click="clickBtn(item)">123</button>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: ['ceData'],
  computed: {
    ceList () {
      let arr = []
      let ceData = this.ceData
      if (ceData && ceData.ceList) {
        ceData.ceList.forEach(item => {
          arr.push({
            id: item.id,
            name: item.name
          })
        })
      }
      return arr
    }
  },
  methods: {
    clickBtn (item) {
      item.name = 123123
    }
  }
}
</script>
