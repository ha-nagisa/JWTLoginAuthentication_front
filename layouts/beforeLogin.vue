<template>
  <v-app>
    <before-login-app-bar />
    <v-main>
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '../components/App/AppFooter.vue'
export default {
  components: { AppFooter },
}
</script>
