<template>
  <div class="w-full">
    <div class="w-full text-center">Create Account</div>
    <form @submit="login">
      <div class="p-2">
        <div class="p-1 w-full my-4">
          <label for="name" class="text-sm">Name*</label>
          <input
            type="text"
            placeholder="Enter name"
            id="name"
            class="p-2 border w-full rounded"
          />
        </div>
        <div class="p-1 w-full my-4">
          <label for="email" class="text-sm">Email*</label>
          <input
            type="email"
            placeholder="enter email"
            id="email"
            class="p-2 border w-full rounded"
          />
        </div>
        <div class="p-1 w-full">
          <label for="password" class="text-sm">Passsword*</label>
          <input
            type="password"
            placeholder="enter password"
            id="password"
            class="p-2 border w-full rounded"
          />
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
  methods: {
    login() {},
  },
  props: {
    changeComponent: Function,
  },
}
</script>

<style></style>
