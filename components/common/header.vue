<template>
  <div class="w-full p-2 bg-blue-500 text-white flex justify-between">
    <nuxt-link to="/dashboard"> Crowdbotics test </nuxt-link>
    <div class="relative" @mouseenter="showHideMenu" @mouseleave="showHideMenu">
      <span>
        <i class="fas fa-user"></i>
      </span>
      <span>
        {{ getUser.username }}
      </span>
      <div
        class="
          w-full
          bg-white
          z-10
          absolute
          left-0
          -bottom-6
          text-gray-700
          rounded
          border-blue-500 border
          hover:bg-red-100
        "
        v-if="showMenu"
      >
        <div class="w-full">
          <button class="w-full" @click.prevent="signOut">
            Signout <span><i class="fas fa-sign-out-alt"></i></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getUser: 'user/getUser',
    }),
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    showHideMenu() {
      this.showMenu = !this.showMenu
    },
    signOut() {
      this.$cookies.removeAll()
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
