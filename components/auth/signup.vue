<template>
  <div class="w-full">
    <div class="w-full text-center">Create Account</div>
    <form @submit.prevent="register(form)">
      <div class="p-2">
        <div class="p-1 w-full my-4">
          <label for="name" class="text-sm">Name*</label>
          <input
            type="text"
            placeholder="Enter name"
            id="name"
            class="p-2 border w-full rounded"
            min="2"
            v-model.trim="form.name"
          />
          <div v-if="error.name" class="text-xs text-red-500">
            <p v-for="(name, index) in error.name" :key="index">
              {{ name }}
            </p>
          </div>
        </div>
        <div class="p-1 w-full my-4">
          <label for="email" class="text-sm">Email*</label>
          <input
            type="email"
            placeholder="enter email"
            id="email"
            class="p-2 border w-full rounded"
            v-model.trim="form.email"
          />
          <div v-if="error.email" class="text-xs text-red-500">
            <p v-for="(email, index) in error.email" :key="index">
              {{ email }}
            </p>
          </div>
        </div>
        <div class="p-1 w-full">
          <label for="password" class="text-sm">Passsword*</label>
          <input
            type="password"
            placeholder="enter password"
            id="password"
            class="p-2 border w-full rounded"
            min="4"
            v-model.trim="form.password"
          />
          <div v-if="error.password" class="text-xs text-red-500">
            <p v-for="(password, index) in error.password" :key="index">
              {{ password }}
            </p>
          </div>
        </div>
        <div class="flex justify-center my-4">
          <button
            type="submit"
            class="
              w-2/3
              rounded-full
              bg-blue-500
              text-white
              p-2
              rounded-full
              uppercase
              text-sm
            "
          >
            Sign up
            <span v-if="loading"><i class="fas fa-spinner fa-spin"></i></span>
          </button>
        </div>
      </div>
    </form>

    <div class="my-4 p-2 flex justify-center text-sm items-center">
      Already have an account?
      <button
        @click="changeComponent('Login')"
        class="hover:text-blue-700 px-2 text-blue-500"
      >
        Login Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      loading: false,
      error: {
        email: '',
        name: '',
        password: '',
      },
    }
  },
  methods: {
    async register(body) {
      this.loading = true
      const response = await this.POST_register(body)
      if (response) {
        this.$toastr.s('Registration successful, redirecting to login')
        setTimeout(() => {
          this.changeComponent('Login')
        }, 2000)
        // this.changeComponent('Login')
      }
      this.loading = false
    },
    async POST_register(body) {
      try {
        const response = await this.$axios.$post(
          'rest-auth/registration/',
          body
        )
        return response.key
      } catch ({ response }) {
        this.error.email = response.data.email
        this.error.password = response.data.password
        this.error.name = response.data.name
        this.$toastr.e('There was an error in registration')
      }
    },
  },
  props: {
    changeComponent: Function,
  },
}
</script>

<style></style>
