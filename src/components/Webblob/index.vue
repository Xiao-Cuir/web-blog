<template>
  <div class="container">
    <div class="top">
      <iframe :src="iframeurl" class="iframeleft" frameborder="0" width="100%" height="500px"/>
    </div>
    <div class="footer">
      <span>文章博客地址:</span>
      <a :href="giturl" target="_blank">github</a>
      <a :href="jujinurl" target="_blank">掘金</a>
      <a :href="mokeurl" target="_blank">慕课</a>
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
    },
    giturl: {
      type: String,
      default: ''
    },
    jujinurl: {
      type: String,
      default: ''
    },
    mokeurl: {
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

