import youtube from '../../providers/youtube'

export default {
  state: {
    queryText: '',
    results: []
  },
  mutations: {
    UPDATE_QUERY_TEXT (state, newValue) {
      state.queryText = newValue
    },
    UPDATE_RESULTS_ARR (state, newValue) {
      state.results = newValue
    }
  },
  actions: {
    updateQueryText ({commit}, newQueryText) {
      commit('UPDATE_QUERY_TEXT', newQueryText)
    },
    updateResultsArr ({commit}, newResultsArr) {
      commit('UPDATE_RESULTS_ARR', newResultsArr)
    },
    runSearch ({ state }) {
      youtube(state.queryText)
        .then(results => {
          console.log(results)
          this.dispatch('updateResultsArr', results)
          this.dispatch('updateQueryText', '')
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
