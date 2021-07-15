<template>
  <div class="w-full p-2">
    <div v-if="loading" class="flex w-full item-center justify-center">
      <div class="text-blue-500">
        <span><i class="fas fa-spinner fa-spin"></i></span>
      </div>
    </div>
    <div v-else>
      <Plans :appId="app.id" :subscription="subscription" />
    </div>
  </div>
</template>

<script>
import Plans from '~/components/common/changePlan.vue'
export default {
  props: {
    app: Object,
  },
  name: 'ManageSubscriptions',
  components: {
    Plans,
  },
  data() {
    return {
      subscription: {},
      loading: false,
    }
  },
  mounted() {
    if (this.app?.subscription) {
      this.getSubscription(this.app.subscription)
    }
  },
  methods: {
    async GET_subscriptionByID(id) {
      try {
        const response = await this.$axios.$get(`api/v1/subscriptions/${id}/`)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    async getSubscription(id) {
      this.loading = true
      const response = await this.GET_subscriptionByID(id)
      if (response) {
        this.subscription = response
      }
      this.loading = false
    },
    async changeCurrentPlan(planId, appId, active = true, subscriptionId) {
      const body = { plan: planId, app: appId, active }
      const response = await this.PATCH_currentPlan(body, subscriptionId)
      if (response) {
        this.subscription = response
        return true
      }
      return false
    },
    async PATCH_currentPlan(body, subscriptionId) {
      try {
        const response = await this.$axios.$patch(
          `api/v1/subscriptions/${subscriptionId}`,
          body
        )
        return response
      } catch (error) {
        console.log(error.response)
      }
    },
  },
  provide() {
    return {
      changeCurrentPlan: this.changeCurrentPlan,
    }
  },
}
</script>

<style></style>
