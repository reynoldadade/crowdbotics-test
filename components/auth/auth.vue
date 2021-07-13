<template>
  <div class="h-screen w-full p-1 flex justify-center items-center">
    <div class="w-full md:w-1/3 h-3/4">
      <div
        class="
          w-full
          p-1
          bg-gray-200
          h-full
          rounded
          flex
          items-center
          justify-center
        "
      >
        <Component :is="currentComponent" :changeComponent="changeComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import Login from '~/components/auth/login.vue'
import SignUp from '~/components/auth/signup.vue'
export default {
  data() {
    return {
      currentComponent: 'Login',
    }
  },
  components: {
    Login,
    SignUp,
  },
  methods: {
    changeComponent(component) {
      this.currentComponent = component
    },
  },
}
</script>

<style></style>
