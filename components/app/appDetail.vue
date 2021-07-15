<template>
  <div class="w-full p-4 h-full">
    <div class="flex p-1 w-full justify-between">
      <div class="p-1 text-lg font-semibold uppercase">
        {{ app.name }}
      </div>
      <div class="p-1 flex text-xs">
        <div class="p-1 text-blue-500 uppercase">Created</div>
        <div class="p-1">
          {{ formattedDate(app.created_at) }}
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <button
        v-for="button in buttons"
        :key="button.name"
        class="p-1"
        :class="{
          'bg-gray-100 border-b-2 border-blue-500 font-bold':
            button.name.toLowerCase() === currentComponent.toLowerCase(),
        }"
        @click="changeCurrentComponent(button.name)"
      >
        {{ button.description }}
      </button>
    </div>
    <Component :is="currentComponent" :app="app" :timeAgo="timeAgo" />

    <!-- <overlay :showOverlay="showPlan">
      <div class="w-full h-full p-2 md:h-2/3 md:w-2/3">
        <ChangePlan :closeAvailablePlan="showAvailablePlans" />
      </div>
    </overlay> -->
  </div>
</template>

<script>
import Details from '~/components/app/details.vue'
import Subscriptions from '~/components/app/subscriptions.vue'
export default {
  props: {
    app: {
      type: Object,
    },
    timeAgo: Function,
    formattedDate: Function,
  },
  components: {
    Details,
    Subscriptions,
  },
  data() {
    return {
      showPlan: false,
      currentComponent: 'Details',
      buttons: [
        { name: 'Details', description: 'App Details' },
        { name: 'Subscriptions', description: 'Manage Subscriptions' },
      ],
    }
  },
  methods: {
    showAvailablePlans() {
      this.showPlan = !this.showPlan
    },
    changeCurrentComponent(component) {
      this.currentComponent = component
    },
  },
}
</script>

<style></style>
