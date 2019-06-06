<template>
  <div>
    <pre>
        {{creator(id)}}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed : {
    id() {
      return parseInt(this.$route.params.id)
    },
    ...mapGetters({
      creator: 'creator/getCreatorById'
    })
  }
}
</script>

<style>

</style>
