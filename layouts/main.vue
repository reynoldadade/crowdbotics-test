<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/common/header.vue'
export default {
  components: {
    Header,
  },
  middleware: ['getUser', 'plans'],
}
</script>

<style></style>
