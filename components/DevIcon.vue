<template>
  <div class="text-white">
    <img :src="`/devicon/${name}.svg`" v-if="svg" width="40">
    <i :class="`devicon-${name}-plain`" :style="`font-size:${size}em;`" v-else></i>
  </div>
</template>

<script>
export default {
props:['name','full','size','svg']
}
</script>

<style>

</style>
