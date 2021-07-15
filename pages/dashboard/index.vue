<template>
  <div>
    <div class="p-4 text-sm">
      <button
        class="p-2 bg-blue-500 text-white rounded"
        @click.prevent="openCreateAppForm"
      >
        Create a new app <span><i class="fas fa-plus-circle"></i></span>
      </button>
    </div>

    <hr />
    <AppList :apps="apps" :loading="loading" />
    <Overlay :showOverlay="showOverlay">
      <div class="md:h-3/4 md:w-3/4 h-full w-full md:p-4 p-1">
        <CreateApp :closeForm="openCreateAppForm" :createApp="createApp" />
      </div>
    </Overlay>
  </div>
</template>

<script>
import AppList from '~/components/app/appList.vue'
import Overlay from '~/components/common/overlay.vue'
import CreateApp from '~/components/app/createApp.vue'
import { mapActions } from 'vuex'
export default {
  layout: 'main',
  components: {
    AppList,
    Overlay,
    CreateApp,
  },

  data() {
    return {
      apps: [],
      loading: false,
      showOverlay: false,
    }
  },
  mounted() {
    this.callAppList()
  },
  methods: {
    ...mapActions({
      setLoader: 'component/setLoader',
    }),
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
    openCreateAppForm() {
      this.showOverlay = !this.showOverlay
    },
    async createApp(form) {
      this.setLoader(true)
      const response = await this.POST_createApp(form)
      if (response) {
        this.apps = [...this.apps, response]
        this.setLoader(false)
        this.$swal.fire(
          'Success?',
          'App has been successfully created',
          'success'
        )
        this.showOverlay = false
      } else {
        this.$swal.fire('Sorry', 'Failed to create app', 'error')
        this.setLoader(false)
      }
    },
    async POST_createApp(body) {
      try {
        const response = await this.$axios.$post('api/v1/apps/', body)
        return response
      } catch (error) {
        console.log(error.response)
      }
    },
  },
}
</script>

<style></style>
