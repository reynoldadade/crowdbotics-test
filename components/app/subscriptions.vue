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
import { mapActions } from 'vuex'
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
    async POST_plan(body) {
      try {
        const response = await this.$axios.$post(`api/v1/subscriptions/`, body)
        return response
      } catch (error) {
        console.log(error.response)
      }
    },
    async subscribeToPlan(planId, appId) {
      const body = {
        plan: planId,
        app: appId,
        active: true,
      }

      this.$swal
        .fire({
          title: 'Are you subscribing to a plan?',
          text: 'The subscription will be active immediately!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, subscribe!',
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            const response = await this.POST_plan(body)
            if (response) {
              this.subscription = response
              this.$swal.fire(
                'Subscribed!',
                'Your subscription is now active.',
                'success'
              )
            } else {
              this.$swal.fire('Sorry!', 'Subscription failed.', 'error')
            }
          }
        })
    },
  },
  provide() {
    return {
      changeCurrentPlan: this.changeCurrentPlan,
      subscribeToPlan: this.subscribeToPlan,
    }
  },
}
</script>

<style></style>
