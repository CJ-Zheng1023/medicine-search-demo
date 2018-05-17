const memoryListFactory = () => {
  return [
    {
      id: '1',
      name: '要素库1',
      active: false,
      ceData: {
        ceList: [
          {
            id: 1,
            name: 'good'
          },
          {
            id: 2,
            name: 'worse'
          }
        ]
      }
    },
    {
      id: '2',
      name: '要素库2',
      active: false,
      ceData: {
        ceList: [
          {
            id: 1,
            name: '12312'
          },
          {
            id: 2,
            name: '123123'
          }
        ]
      }
    }
  ]
}
export default {
  showFactorMemory ({ commit }) {
    commit('queryFactorMemory', memoryListFactory())
  },
  showCeDataById ({ commit, state }, id) {
    let items = state.memoryList.filter(item => {
      return item.id === id
    })
    let ceData = {}
    if (items.length) {
      ceData = items[0]['ceData']
    }
    commit('queryCeDataById', JSON.parse(JSON.stringify(ceData)))
  },
  createMemory ({ state }, memory) {
    state.memoryList.push(memory)
  },
  updateCeDataById ({ commit, state }, data) {
    let ceData = data.ceData
    if (!data.ceData) {
      return
    }
    let id = data.id
    let targetItem
    state.memoryList.forEach(item => {
      if (item.id === id) {
        targetItem = item
      }
    })
    if (targetItem) {
      targetItem.ceData = ceData
    }
  }
}
