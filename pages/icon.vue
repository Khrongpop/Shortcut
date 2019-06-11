<template>
  <div>
    <dev-icon name="android" :full="false" size="2"/>
    <dev-icon name="android" :full="true" size="5"/>
    <dev-icon name="swift" :full="true" size="5"/>
    <dev-icon name="swift" :full="false" size="5"/>
    <dev-icon name="vuejs" :full="false" size="5"/>

  </div>
</template>

<script>
import DevIcon from '../components/DevIcon'
export default {
  components:{
    DevIcon
  }
}
</script>

<style>

</style>
