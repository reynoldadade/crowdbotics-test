<template>
  <div class="w-full">
    <div class="w-full text-center">Reset your password</div>
    <form @submit.prevent="resetPassword(form)">
      <div class="p-2">
        <div class="p-1 w-full my-4">
          <label for="email" class="text-sm">Email*</label>
          <input
            type="email"
            placeholder="enter email"
            id="email"
            class="p-2 border w-full rounded"
            v-model="form.email"
            required
          />
        </div>

        <div class="flex justify-center my-4">
          <button
            type="submit"
            class="w-2/3 rounded-full bg-blue-500 text-white p-2 rounded-full"
          >
            Reset password
            <span v-if="loading"><i class="fas fa-spinner fa-spin"></i></span>
          </button>
        </div>
      </div>
    </form>

    <div class="my-4 p-2 flex justify-center text-sm items-center">
      <button
        @click="changeComponent('Login')"
        class="hover:text-blue-700 px-2 text-blue-500"
      >
        <span><i class="fas fa-arrow-left"></i></span> Back to Login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
      },
      loading: false,
    }
  },
  props: {
    changeComponent: Function,
  },
  methods: {
    async resetPassword(body) {
      this.loading = true
      const response = await this.POST_password_reset(body)
      if (response) {
        this.$toastr.s(response)
        // this.changeComponent('Login')
      }
      this.loading = false
    },
    async POST_password_reset(body) {
      try {
        const response = await this.$axios.$post(
          'rest-auth/password/reset/',
          body
        )
        return response.detail
      } catch ({ response }) {
        this.$toastr.e('There was an error in resetting password')
      }
    },
  },
}
</script>

<style></style>
