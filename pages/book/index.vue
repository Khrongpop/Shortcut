<template>
  <div>
    <img :src="img" width="50%" :class="rotateImage(img) ? 'rotate' : ''">
  </div>
</template>

<script>
export default {
  layout: "topMenu",
  data() {
    return {
      img:
        "https://firebasestorage.googleapis.com/v0/b/shortcut-28e33.appspot.com/o/image%2Fusers%2F1560676952857_%E0%B8%88%E0%B8%B8%E0%B9%8A%E0%B8%9A%E0%B9%81%E0%B8%88%E0%B8%87.jpeg?alt=media&token=948d90fe-0c40-4b0d-b307-dc248e00648f"
    };
  },
  methods: {
    rotateImage(image) {
      if (process.client) {
        var img = new Image();
        img.addEventListener("load", function() {
          let width = this.naturalWidth;
          let height = this.naturalHeight;
          console.log(width);
          console.log(height);
          console.log(width - height > 1250);
          return width - height > 1250;
        });
        img.src = image;
      }
      return true;
      // return image;
    }
  }
};
</script>

<style scope>
.rotate {
  transform: rotate(90deg) translateY(-100%);
  -webkit-transform: rotate(90deg) translateY(-100%);
  -ms-transform: rotate(90deg) translateY(-100%);
  margin-left: -30%;
}
</style>
