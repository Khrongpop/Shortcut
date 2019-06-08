<template>
  <div id="menu-trigger">
    <div :class="triggerClass">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/images/menu/logo.png">
        </div>
         <div class="col-md-4">
           {{menus}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['status','menus'],
  computed: {
    triggerClass() {
      let status = this.status
      let sclass = 'menu-trigger-'
      return sclass + (status ? 'in' : 'out')
    }
  },
}
</script>

