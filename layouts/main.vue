<template>
  <div>
    <Header />
    <Nuxt />
    <Loader :showOverlay="showLoader" />
  </div>
</template>

<script>
import Header from '~/components/common/header.vue'
import Loader from '~/components/common/loader.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Header,
    Loader,
  },
  middleware: ['getUser', 'plans'],
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      showLoader: 'component/getLoader',
    }),
  },
}
</script>

<style></style>
