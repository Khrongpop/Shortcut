<template>
  <div>
    <div class="row">
      <div class="col-4">
        <div>
          <a href="https://www.facebook.com/funcslash/" target="_blank">
            <img :src="`${baseURL}/menu/fb.png`" width="80%">
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/funcslash/" target="_blank">
            <img :src="`${baseURL}/menu/ig.png`" width="90%">
          </a>
        </div>
      </div>
      <div class="col-4">
        <img
          :src="`${baseURL}/menu/logoALL.png`"
          style="position:absolute; bottom:20px;"
          width="100%"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a img {
  transition: 0.5s;
}
a img:hover {
  opacity: 0.5;
}
</style>
