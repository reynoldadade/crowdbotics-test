<template>
  <div class="w-full">
    <div class="w-full text-center">Login to your Dashboard</div>
    <form @submit.prevent="login(form)">
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
        <div class="p-1 w-full">
          <label for="password" class="text-sm">Passsword*</label>
          <input
            type="password"
            placeholder="enter password"
            id="password"
            v-model="form.password"
            minlength="4"
            class="p-2 border w-full rounded"
            required
          />
        </div>
        <div class="my-4 p-1 w-full flex justify-between text-xs items-center">
          <div>
            <label for="loggedIn" class="p-1">Keep me logged in</label>
            <input
              type="checkbox"
              name="loggedIn"
              id="loggedIn"
              v-model="keepLoggedIn"
              class="p-1"
            />
          </div>
          <button
            class="hover:text-blue-700 text-blue-500"
            @click.prevent="changeComponent('ForgotPassword')"
          >
            Forgot Password?
          </button>
        </div>
        <div class="flex justify-center my-4">
          <button
            type="submit"
            class="w-2/3 bg-blue-500 text-white p-2 rounded-full"
          >
            Login
            <span v-if="loading"><i class="fas fa-spinner fa-spin"></i></span>
          </button>
        </div>
      </div>
    </form>

    <div class="my-4 p-2 flex justify-center text-sm items-center">
      Don't have an account?
      <button
        @click="changeComponent('SignUp')"
        class="hover:text-blue-700 px-2 text-blue-500"
      >
        Register Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { email: '', password: '' },
      loading: false,
      keepLoggedIn: false,
    }
  },
  methods: {
    //login function used to manage parameters and also handle api response
    async login(body) {
      this.loading = true
      const response = await this.POST_login(body)
      if (response) {
        this.$toastr.s('Login successful')
        if (this.keepLoggedIn) {
          this.$cookies.set('token', response, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
          })
        } else {
          this.$cookies.set('token', response, {
            path: '/',
          })
        }
        this.$router.push('/dashboard')
      }

      this.loading = false
    },
    //axios request for login
    async POST_login(body) {
      try {
        const response = await this.$axios.$post('/rest-auth/login/', body)
        return response.key
      } catch (error) {
        this.$toastr.e('Failed to login with email and password')
        // console.log(error)
      }
    },
  },
  props: {
    changeComponent: Function,
  },
}
</script>

<style></style>
