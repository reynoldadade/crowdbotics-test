<template>
  <AppDetail :app="app" :timeAgo="timeAgo" :formattedDate="formattedDate" />
</template>

<script>
import AppDetail from '~/components/app/appDetail.vue'
import moment from 'moment'
export default {
  async asyncData({ $axios, params }) {
    const { id } = params
    let app = {}
    try {
      const response = await $axios.$get(`api/v1/apps/${id}/`)
      app = response
    } catch (error) {
      console.log(error)
    }
    return { app }
  },
  data() {
    return {
      app: {},
    }
  },
  layout: 'main',
  components: {
    AppDetail,
  },
  methods: {
    timeAgo(date) {
      if (date) {
        return moment(date, 'YYYYMMDD').fromNow()
      }
      return '-'
    },
    formattedDate(date) {
      if (date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a')
      }
      return '-'
    },
  },
}
</script>

<style></style>
