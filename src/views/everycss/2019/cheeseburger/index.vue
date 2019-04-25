<template>
  <div>
    <webblob :iframeurl="iframeurl" />
  </div>
</template>
<script>
import Webblob from '@/components/Webblob'

export default {
  components: {
    Webblob
  },
  data() {
    return {
      iframeurl: 'http://118.24.232.149/everyday-css/cheeseburger/cheeseburger.html',
      giturl: 'https://github.com/Jasonccj/css-learning/tree/master/everydayCss/cheeseburger',
      jujinurl: '111',
      mokeurl: '1111'
    }
  }
}
</script>

