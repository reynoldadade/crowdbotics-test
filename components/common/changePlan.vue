<template>
  <div class="w-full p-1 bg-white h-full rounded overflow-y-auto text-gray-500">
    <div class="p-2 text-blue-500">Select a Plan</div>
    <div>
      <div
        v-for="plan in getPlans"
        :key="plan.id"
        class="flex justify-between p-2 border-blue-500 rounded border my-4"
        :class="{
          'bg-green-100': plan.id === subscription.plan && subscription.active,
          'bg-gray-200': plan.id === subscription.plan && !subscription.active,
        }"
      >
        <div>
          <div class="p-2 font-bold text-blue-500 text-2xl">
            {{ plan.name }}
          </div>
          <div class="p-2 text-sm font-semibold">{{ plan.description }}</div>
        </div>
        <div class="p-2">
          <div class="text-4xl text-blue-500 font-bold text-right">
            ${{ plan.price }}
          </div>
          <div class="flex justify-end p-4">
            <button
              type="button"
              class="p-1 rounded bg-blue-500 hover:bg-green-500 text-white"
              v-if="
                (plan.id !== subscription.plan &&
                  subscription.plan !== undefined) ||
                null
              "
              @click="changePlan(plan.id, appId, true, subscription.id)"
            >
              Change Plan
            </button>
            <button
              type="button"
              class="p-1 rounded bg-blue-500 hover:bg-green-500 text-white"
              v-else-if="
                (plan.id !== subscription.plan &&
                  subscription.plan === undefined) ||
                null
              "
              @click="subscribeToPlan(plan.id, appId)"
            >
              Subscribe
            </button>

            <div v-else>
              <div class="text-sm p-1">
                {{
                  subscription.active
                    ? 'You are currently subscibed to this plan'
                    : 'This subscription is currently inactive'
                }}
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  class="p-1 rounded bg-red-500 hover:bg-red-300 text-white"
                  @click="
                    deActivatePlan(plan.id, appId, false, subscription.id)
                  "
                  v-if="subscription.active"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  class="p-1 rounded bg-green-500 hover:bg-red-300 text-white"
                  @click="activatePlan(plan.id, appId, true, subscription.id)"
                  v-else
                >
                  Activate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getPlans: 'plans/getPlans',
    }),
  },
  props: {
    appId: Number,
    subscription: Object,
  },
  inject: ['changeCurrentPlan', 'subscribeToPlan'],
  methods: {
    changePlan(planId, appId, active, subscriptionId) {
      this.$swal
        .fire({
          title: 'Change your current plan?',
          text: 'You will be on a different plan after this!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, change it!',
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await this.changeCurrentPlan(planId, appId, active, subscriptionId)
            this.$swal.fire(
              'Plan changed!',
              'You are now on a new plan',
              'success'
            )
          }
        })
    },
    deActivatePlan(planId, appId, active, subscriptionId) {
      this.$swal
        .fire({
          title: 'Deactivate your current plan?',
          text: 'You will not be on any plan after this',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, deactivate!',
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            const response = await this.changeCurrentPlan(
              planId,
              appId,
              active,
              subscriptionId
            )
            if (response) {
              this.$swal.fire(
                'Plan deactivated!',
                'You arent currently on any plan',
                'success'
              )
            } else {
              this.$swal.fire('Deactivation failed', 'Try again later', 'error')
            }
          }
        })
    },
    activatePlan(planId, appId, active, subscriptionId) {
      this.$swal
        .fire({
          title: 'You are about to reactivate this plan?',
          text: 'This subscription will be active after this',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, activate!',
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            const response = await this.changeCurrentPlan(
              planId,
              appId,
              active,
              subscriptionId
            )
            if (response) {
              this.$swal.fire(
                'Plan activated!',
                'You are currently on this plan',
                'success'
              )
            } else {
              this.$swal.fire('Activation failed', 'Try again later', 'error')
            }
          }
        })
    },
  },
}
</script>

<style></style>
