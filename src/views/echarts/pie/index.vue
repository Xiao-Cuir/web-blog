<template>
  <div>
    <div id="main" style="width:600px;height:400px;" />
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
          text: '柱状图'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>
