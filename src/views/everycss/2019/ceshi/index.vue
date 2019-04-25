<template>
  <div>
    <div class="error seriousError">
      Oh no! You've been hacked!
    </div>
  </div>
</template>
<script>

export default {

}
</script>

<style lang="scss" scoped>
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
</style>

