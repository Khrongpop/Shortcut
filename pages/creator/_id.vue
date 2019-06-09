<template>
  <div>
    <pre class="text-white">
        {{creator(id)}}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'topMenu',
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

