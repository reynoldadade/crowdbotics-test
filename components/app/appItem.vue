<template>
  <div class="p-2 flex w-full">
    <div class="grid grid-cols-5 w-full">
      <div class="flex-auto">{{ app.name }}</div>
      <div class="flex-auto">{{ app.description }}</div>
      <div class="flex-auto">{{ app.domain_name }}</div>
      <div class="flex-auto">{{ app.type }}</div>
      <div class="flex-auto flex">
        <button type="button" class="bg-blue-500 text-white shadow p-1 rounded">
          <span><i class="far fa-trash-alt"></i></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    app: Object,
  },
}
</script>

<style></style>
