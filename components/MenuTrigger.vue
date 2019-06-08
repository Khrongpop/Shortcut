<template>
  <div id="menu-trigger">
    <div :class="triggerClass">
      arm
    </div>
  </div>
</template>

<script>
export default {
  props:['status'],
  computed: {
    triggerClass() {
      let status = this.status
      let sclass = 'menu-trigger-'
      return sclass + (status ? 'in' : 'out')
    }
  },
}
</script>

