<template>
  <div class="container">
    <div class="top">
      <iframe :src="iframeurl" class="iframeleft" frameborder="0" width="100%" height="500px"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Webblob',
  props: {
    iframeurl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  float: left;
  margin: 0 auto;
}
.footer {
  width: 100%;
  float: left;
  text-align:center;
}
.footer a {
  color: blue;
  text-decoration: underline
}
</style>

