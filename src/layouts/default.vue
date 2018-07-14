<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="negative">
        <q-toolbar-title>
          Youtube Search
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="drawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list-header>Results</q-list-header>
      <q-list
        no-border
        highlight
        inset-delimiter
      >
        <q-item multiline v-for="result in results" :key="result.id">
          <q-item-side :image="result.thumbnails.default.url" />
          <q-item-main>
            <q-item-tile label>{{ result.title }}</q-item-tile>
            <q-item-tile sublabel lines="10">{{ result.description }}</q-item-tile>
            <q-btn
              style="margin-top: 13px"
              @click="openLink(result.link)"
              icon="movie"
              color="negative"
              :label="result.channelTitle"
              size="xs"></q-btn>
          </q-item-main>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { searchGetters } from '../store/helpers'
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      drawerOpen: true
    }
  },
  computed: {
    ...searchGetters
  },
  methods: {
    openLink (link) {
      return openURL(link)
    }
  }
}
</script>
