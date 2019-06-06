<template>
  <div id="menu-trigger">
    <div :class="`menu-trigger-${status ? 'in' : 'out'}`">
      arm
    </div>
  </div>
</template>

<script>
export default {
  props:['status'],
}
</script>

