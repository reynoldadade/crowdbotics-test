<template>
  <div>
    <div class="p-4">
      Create a new app
      <button class="p-1 bg-blue-500 text-white rounded">Create new app</button>
    </div>

    <hr />
    <AppList :apps="apps" :loading="loading" />
  </div>
</template>

<script>
import AppList from '~/components/app/appList.vue'
export default {
  layout: 'main',
  components: {
    AppList,
  },

  data() {
    return {
      apps: [],
      loading: false,
    }
  },
  mounted() {
    this.callAppList()
  },
  methods: {
    async GET_apps() {
      try {
        const response = await this.$axios.$get('/api/v1/apps/')
        return response
      } catch (error) {
        this.$toastr.i('Failed to get apps. please try again later')
        // console.log(error)
      }
    },
    async callAppList() {
      this.loading = true
      const response = await this.GET_apps()
      if (response) {
        this.apps = response
      }
      this.loading = false
    },
  },
}
</script>

<style></style>
