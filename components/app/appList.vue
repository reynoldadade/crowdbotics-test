<template>
  <div class="w-full p-2">
    <div class="uppercase text-xs font-bold text-gray-500">my app list</div>
    <div v-if="loading" class="flex justify-center">
      <div>
        <span><i class="fas fa-circle-notch fa-spin fa-2x"></i></span>
      </div>
    </div>
    <div v-else class="w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      <div v-for="app in apps" :key="app.id">
        <AppItem :app="app" />
      </div>
      <div v-if="apps.length === 0" class="w-full text-centered">
        You currently have no apps at the moment
      </div>
    </div>
  </div>
</template>

<script>
import AppItem from '~/components/app/appItem.vue'
export default {
  components: {
    AppItem,
  },
  props: {
    apps: Array,
    loading: Boolean,
  },
}
</script>

<style></style>
