<template>
  <div class="h-full w-full p-2 bg-white rounded text-gray-700 relative">
    <div class="absolute right-0 top-0 p-2">
      <button
        type="button"
        @click.prevent="closeForm"
        class="hover:text-red-300"
      >
        <span><i class="fas fa-times fa-2x"></i></span>
      </button>
    </div>
    <form @submit.prevent="createApp(form)">
      <div class="flex flex-col justify-between">
        <div class="p-2">
          <label for="name" class="text-xs font-bold">App Name*</label>
          <input
            type="text"
            class="w-full p-2 rounded border"
            id="name"
            v-model.trim="form.name"
            required
            minlength="1"
            maxlength="50"
          />
        </div>
        <div class="p-2">
          <label for="description" class="text-xs font-bold">Description</label>
          <input
            type="text"
            class="w-full p-2 rounded border"
            id="description"
            v-model.trim="form.description"
          />
        </div>
        <div class="p-2">
          <label for="type" class="text-xs font-bold">Type*</label>
          <select
            type="text"
            class="w-full p-2 rounded border"
            id="type"
            v-model="form.type"
            required
          >
            <option :value="type" v-for="type in types" :key="type">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="p-2">
          <label for="framework" class="text-xs font-bold">Framework*</label>
          <select
            type="text"
            class="w-full p-2 rounded border"
            id="framework"
            v-model="form.framework"
            required
          >
            <option
              :value="framework"
              v-for="framework in frameworks"
              :key="framework"
            >
              {{ framework }}
            </option>
          </select>
        </div>
        <div class="p-2">
          <label for="domain_name" class="text-xs font-bold">Domain Name</label>
          <input
            type="url"
            class="w-full p-2 rounded border"
            id="domain_name"
            maxlength="50"
            v-model.trim="form.domain_name"
          />
        </div>
        <div class="p-2">
          <button type="submit" class="p-2 bg-blue-500 text-white rounded">
            Create App
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['Web', 'Mobile'],
      frameworks: ['Django', 'React Native'],
      form: {
        name: '',
        description: '',
        type: 'Web',
        framework: 'Django',
        domain_name: '',
      },
    }
  },
  props: {
    closeForm: Function,
    createApp: Function,
  },
}
</script>

<style></style>
