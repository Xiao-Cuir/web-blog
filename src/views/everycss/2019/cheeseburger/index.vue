<template>
  <div>
    <webblog :iframeurl="iframeurl" :giturl="giturl" :jujinurl="jujinurl" :mokeurl="mokeurl" />
  </div>
</template>
<script>
import Webblog from '@/components/Webblog'

export default {
  components: {
    Webblog
  },
  data() {
    return {
      iframeurl: 'http://118.24.232.149:8081/everyday-css/cheeseburger/cheeseburger.html',
      giturl: 'https://github.com/Xiao-Cuir/week-css/tree/master/cheeseburger',
      jujinurl: 'https://juejin.im/post/5c66593de51d450ac119c35a',
      mokeurl: 'https://www.imooc.com/article/278478'
    }
  }
}
</script>

