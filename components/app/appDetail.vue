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
        {{ app.domain_name }}
      </div>
    </div>
    <div>
      <labels> subscription </labels>
      <div class="flex justify-between">
        <div class="p-2">
          {{ app.subscription ? app.subscription : 'NONE' }}
        </div>
        <div class="p-2">
          <button class="text-blue-500 text-xs">
            {{ app.subscription ? 'Change your current plan' : 'Add a plan' }}
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
    app: {
      type: Object,
    },
    timeAgo: Function,
    formattedDate: Function,
  },
  components: {
    Labels,
  },
}
</script>

<style></style>
