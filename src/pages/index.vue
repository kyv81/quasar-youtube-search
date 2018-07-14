<template>
  <q-page class="flex flex-center">
    <q-input
      float-label="Search:"
      :value="queryText"
      @input="updateQueryText($event)"
      @keydown.enter="runSearch"
    />
  </q-page>
</template>

<style>
</style>

<script>
import { searchGetters, searchActions } from '../store/helpers'

export default {
  name: 'PageIndex',
  computed: {
    ...searchGetters
  },
  methods: {
    ...searchActions
  }
}
</script>
