<template>
  <div
    class="
      p-2
      w-full
      shadow
      rounded
      hover:shadow-lg hover:bg-gray-100
      border
      hover:border-blue-500
    "
  >
    <div class="p-4 bg-blue-500 text-white flex justify-between">
      <div class="w-full font-semibold p-1 uppercase">{{ app.name }}</div>
      <div class="flex">
        <button class="p-1 hover:text-green-500" @click.prevent="edit(app.id)">
          <span><i class="fas fa-pen"></i></span>
        </button>
        <!-- <button
          class="p-1 hover:text-red-500"
          @click.prevent="deleteApp(app.id)"
        >
          <span><i class="fas fa-trash-alt"></i></span>
        </button> -->
      </div>
    </div>
    <hr />
    <div class="p-1">
      <div class="uppercase text-xs text-blue-400">APP Type</div>
      <div class="flex-auto">{{ app.type }}</div>
    </div>
    <div class="p-1">
      <div class="uppercase text-xs text-blue-400">APP Framework</div>
      <div class="flex-auto">{{ app.framework }}</div>
    </div>

    <!-- <div class="p-1">
      <div class="uppercase text-xs text-blue-400">Description</div>
      <div class="">{{ app.description }}</div>
    </div> -->
    <div class="p-1">
      <div class="uppercase text-xs text-blue-400">Domain name</div>
      <div class="flex-auto">{{ app.domain_name ? app.domain_name : '-' }}</div>
    </div>
    <div class="p-1">
      <div class="uppercase text-xs text-blue-400">subscription</div>
      <div class="flex-auto">
        {{ app.subscription ? 'YES' : 'NONE' }}
      </div>
    </div>
    <div class="p-1">
      <div class="uppercase text-xs text-blue-400">screenshot</div>
      <div class="flex-auto">
        {{ app.screenshot ? app.screenshot : 'NONE' }}
      </div>
    </div>
    <div class="p-1">
      <div class="uppercase text-xs text-blue-400">LAST updated</div>
      <div class="flex-auto">
        {{ timeAgo(app.updated_at) }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    app: Object,
  },
  data() {
    return {
      menu: false,
    }
  },
  methods: {
    timeAgo(date) {
      if (date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a')
      }
      return '-'
    },
    edit(id) {
      this.$router.push(`/dashboard/${id}`)
    },
    deleteApp(id) {},
  },
}
</script>

<style></style>
