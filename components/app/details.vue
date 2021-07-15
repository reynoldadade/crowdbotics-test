<template>
  <div class="w-full">
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
  </div>
</template>

<script>
import Labels from '~/components/common/labels.vue'
export default {
  props: {
    app: Object,
    timeAgo: Function,
    changeCurrentComponent: Function,
  },
  components: {
    Labels,
  },
}
</script>

<style></style>
