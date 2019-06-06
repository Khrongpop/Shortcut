<template>
  <div>
    <router-link :to="`/creator/${vdata.id}`">{{vdata.id}}</router-link>
  </div>
</template>

<script>
export default {
  props: ['vdata'],
}
</script>

<style>

</style>
