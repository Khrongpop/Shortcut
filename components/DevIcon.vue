<template>
  <div class="text-white">
    <img :src="`${baseURL}/devicon/${name}.svg`" v-if="svg" width="40">
    <i :class="`devicon-${name}-plain`" :style="`font-size:${size}em;`" v-else></i>
  </div>
</template>

<script>
export default {
props:['name','full','size','svg']
}
</script>

<style>
@import url('https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css');

</style>
