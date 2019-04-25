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
      iframeurl: 'http://118.24.232.149:8081/everyday-css/polygon/polygon.html',
      giturl: 'https://github.com/Xiao-Cuir/week-css/tree/master/polygon',
      jujinurl: 'https://juejin.im/post/5c68375d5188252a160efdec',
      mokeurl: 'https://www.imooc.com/article/278712'
    }
  }
}
</script>
