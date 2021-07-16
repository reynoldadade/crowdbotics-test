<template>
  <AppDetail :app="app" :timeAgo="timeAgo" :formattedDate="formattedDate" />
</template>

<script>
import AppDetail from '~/components/app/appDetail.vue'
import moment from 'moment'
import { mapActions } from 'vuex'

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
    ...mapActions({
      setLoader: 'component/setLoader',
    }),
    timeAgo(date) {
      if (date) {
        return moment(date).calendar()
      }
      return '-'
    },
    formattedDate(date) {
      if (date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a')
      }
      return '-'
    },
    async PATCH_app(body, id) {
      try {
        const response = await this.$axios.$patch(`api/v1/apps/${id}`, body)
        return response
      } catch (error) {
        console.log(error.response)
      }
    },
    async updateApp(form, id) {
      this.setLoader(true)
      const response = await this.PATCH_app(form, id)

      if (response) {
        this.app = response
        this.setLoader(false)
        return this.$swal.fire(
          'Updated!',
          'Your App has been updated successfully.',
          'success'
        )
      }
      this.$swal.fire('Sorry!', 'Failed to update app.', 'error')
      return this.setLoader(false)
    },
  },
  provide() {
    return {
      updateApp: this.updateApp,
    }
  },
}
</script>

<style></style>
