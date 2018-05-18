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
      },
      dnData: {
        dnList: [
          {
            id: 1,
            name: '健胃消食片'
          },
          {
            id: 2,
            name: '感康'
          }
        ]
      },
      dsData: {
        dsList: [
          {
            id: 1,
            name: '口服'
          }
        ]
      },
      sdData: {
        max: 4,
        min: 2,
        count: 2,
        sdList: [
          {
            id: 1,
            name: '人参'
          },
          {
            id: 2,
            name: '鹿茸'
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
      },
      dnData: {
        dnList: [
          {
            id: 1,
            name: '快克'
          }
        ]
      },
      dsData: {
        dsList: [
          {
            id: 1,
            name: '口服'
          }
        ]
      },
      sdData: {
        max: 2,
        min: 1,
        count: 1,
        sdList: [
          {
            id: 1,
            name: '莲子'
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
  showDnDataById ({ commit, state }, id) {
    let items = state.memoryList.filter(item => {
      return item.id === id
    })
    let dnData = {}
    if (items.length) {
      dnData = items[0]['dnData']
    }
    commit('queryDnDataById', JSON.parse(JSON.stringify(dnData)))
  },
  showDsDataById ({ commit, state }, id) {
    let items = state.memoryList.filter(item => {
      return item.id === id
    })
    let dsData = {}
    if (items.length) {
      dsData = items[0]['dsData']
    }
    commit('queryDsDataById', JSON.parse(JSON.stringify(dsData)))
  },
  showSdDataById ({ commit, state }, id) {
    let items = state.memoryList.filter(item => {
      return item.id === id
    })
    let sdData = {}
    if (items.length) {
      sdData = items[0]['sdData']
    }
    commit('querySdDataById', JSON.parse(JSON.stringify(sdData)))
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
  },
  updateDnDataById ({ commit, state }, data) {
    let dnData = data.dnData
    if (!data.dnData) {
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
      targetItem.dnData = dnData
    }
  },
  updateDsDataById ({ commit, state }, data) {
    let dsData = data.dsData
    if (!data.dsData) {
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
      targetItem.dsData = dsData
    }
  },
  updateSdDataById ({ commit, state }, data) {
    let sdData = data.sdData
    if (!data.sdData) {
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
      targetItem.sdData = sdData
    }
  }
}
