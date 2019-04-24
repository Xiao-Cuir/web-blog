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
      iframeurl: '111'
    }
  }
}
</script>

