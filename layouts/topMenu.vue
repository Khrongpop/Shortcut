<template>
  <div id="top-menu">
    <menu-app/>
    <nuxt />
  </div>
</template>

<script>
import MenuApp from '~/components/Menu'

export default {
  components: {
    MenuApp,
  }
}
</script>