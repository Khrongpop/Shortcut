<template>
  <div id="exhibition" :style="bg_animate">
    <div>
      <div style="width:5%;" class="float-left">อ่านทำไม</div>
      <carousel :per-page="1" :paginationEnabled="false" :loop="true" :autoplay="false">
        <slide>
          <div style="width:70%" class="float-left"></div>
        </slide>
        <slide>
          <div style="width:50%" class="float-left item-2">
            <b-row></b-row>
          </div>
        </slide>
      </carousel>
      <span class="clearfix"></span>
    </div>
  </div>
</template>

<script>
export default {
  layout: "topMenu"
};
</script>

<style>
</style>
