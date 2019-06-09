<template>
  <div>
    <pre class="text-white">
        {{creators(name)}}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'topMenu',
  computed : {
    name() {
      return this.$route.params.name
    },
    ...mapGetters({
      creators: 'creator/getCreatorByCat'
    })
  }
}
</script>

