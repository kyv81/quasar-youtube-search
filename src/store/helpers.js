import { mapState, mapActions } from 'vuex'

export const searchGetters = {
  ...mapState({
    queryText: state => state.videoSearch.queryText,
    results: state => state.videoSearch.results
  })
}

export const searchActions = mapActions([
  'updateQueryText',
  'runSearch'
])
