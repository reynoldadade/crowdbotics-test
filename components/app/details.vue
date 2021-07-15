<template>
  <div class="w-full">
    <div class="p-2 flex justify-end w-full">
      <button
        type="button"
        class="hover:text-blue-500"
        @click.prevent="openCreateAppForm"
      >
        <span><i class="fas fa-edit fa-2x"></i></span>
      </button>
    </div>
    <div>
      <labels> Description </labels>

      <div class="p-2">
        {{ app.description }}
      </div>
    </div>
    <div>
      <labels> Framework </labels>
      <div class="p-2">
        {{ app.framework }}
      </div>
    </div>
    <div>
      <labels> type </labels>
      <div class="p-2">
        {{ app.type }}
      </div>
    </div>
    <div>
      <labels> domain name </labels>
      <div class="p-2">
        {{ app.domain_name ? app.domain_name : '-' }}
      </div>
    </div>
    <div>
      <labels> subscription </labels>
      <div class="flex justify-between">
        <div class="p-2">
          <button
            type="button"
            class="text-blue-500 text-xs"
            @click.prevent="changeCurrentComponent('Subscriptions')"
          >
            {{ app.subscription ? 'View your plan' : 'Subscribe to a plan' }}
          </button>
        </div>
      </div>
    </div>
    <div>
      <labels> screenshot </labels>
      <div class="p-2">{{ app.screenshot ? app.screenshot : 'NONE' }}</div>
    </div>
    <div>
      <labels> Last updated </labels>
      <div class="p-2">
        {{ timeAgo(app.updated_at) }}
      </div>
    </div>

    <Overlay :showOverlay="showOverlay">
      <div class="md:h-3/4 md:w-3/4 h-full w-full md:p-4 p-1">
        <CreateApp
          :closeForm="openCreateAppForm"
          :createApp="editApp"
          :appData="app"
        />
      </div>
    </Overlay>
  </div>
</template>

<script>
import Labels from '~/components/common/labels.vue'
import Overlay from '~/components/common/overlay.vue'
import CreateApp from '~/components/app/createApp.vue'
export default {
  props: {
    app: Object,
    timeAgo: Function,
    changeCurrentComponent: Function,
  },
  components: {
    Labels,
    Overlay,
    CreateApp,
  },
  data() {
    return {
      showOverlay: false,
    }
  },
  methods: {
    openCreateAppForm() {
      this.showOverlay = !this.showOverlay
    },
    async editApp(form) {
      await this.updateApp(form, this.app.id)
      this.openCreateAppForm()
    },
  },
  inject: ['updateApp'],
}
</script>

<style></style>
