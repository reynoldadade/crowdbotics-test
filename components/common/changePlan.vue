<template>
  <div
    class="
      w-full
      p-1
      bg-white
      h-full
      relative
      rounded
      overflow-y-auto
      text-gray-500
    "
  >
    <div class="absolute right-0 top-0">
      <button
        type="button"
        class="p-1 text-blue-500"
        @click="closeAvailablePlan"
      >
        <span><i class="fas fa-times"></i></span>
      </button>
    </div>
    <div class="p-2 text-blue-500">Select a Plan</div>
    <div>
      <div
        v-for="plan in getPlans"
        :key="plan.id"
        class="flex justify-between p-2 border-blue-500 rounded border my-4"
      >
        <div>
          <div class="p-2 font-bold text-blue-500 text-2xl">
            {{ plan.name }}
          </div>
          <div class="p-2 text-sm font-semibold">{{ plan.description }}</div>
        </div>
        <div class="p-2">
          <div class="text-4xl text-blue-500 font-bold">${{ plan.price }}</div>
          <div class="flex justify-end p-4">
            <button
              type="button"
              class="p-1 rounded bg-blue-500 hover:bg-green-500 text-white"
              v-if="plan.id !== currentPlan"
            >
              Subscribe
            </button>
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
    closeAvailablePlan: Function,
    currentPlan: {
      type: Number || null,
      default: null,
    },
  },
}
</script>

<style></style>
