<template>
  <div class="text-white">
    <i :class="`devicon-${name}-plain${full?'-wordmark':''}`" :style="`font-size:${size}em;`"></i>
  </div>
</template>

<script>
export default {
props:['name','full','size']
}
</script>

<style>

</style>
