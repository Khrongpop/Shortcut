<template>
  <div>
    <div>
      <div v-for="creator in creators" :key="creator.id">
        <creator-card :vdata="creator"/>
        {{creator}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CreatorCard from '@/components/CreatorCard'
export default {
  layout: 'topMenu',
  components: {
    CreatorCard
  },
  computed: {
    ...mapGetters({
      creators:'creator/creators'
    })
  }
}
</script>
