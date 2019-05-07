<template>
  <div class="container">
    <div id="main" style="height:400px;" />
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      this.chart = echarts.init(document.getElementById('main'))
      this.chart.setOption({
        title: {
          text: '折线图'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      })
      window.onresize = this.chart.resize
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 30px;
    position: relative;
    background: #f0f2f5;
  }
</style>
