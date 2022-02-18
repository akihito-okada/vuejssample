import { RepositoryFactory } from '../../repository/repositoryFactory'
import BpiData from '../../model/BpiData'
const BpiRepository = RepositoryFactory.get('bpi')

const state = () => ({ 
  step: 2, 
  count: 0,
  info: []
})

const getters = {
  step: state => state.step,
  count: state => state.count,
  info: state => state.info
}

const actions = {
  async currentprice({commit, state}){
    const response = await BpiRepository.currentprice()
    const data = new BpiData().init(response)
    commit('currentprice', data)
  }
}

const mutations = {
  currentprice(state, info) {
    state.info = info
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}