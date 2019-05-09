<template>
  <div class="container">
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="1.0.6 (2019/5/2)" placement="top" color="#0bbd87">
          <el-card>
            <ol>
              <li>新增week-css第三周：简单小列表</li>
            </ol>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1.0.5 (2019/5/1)" placement="top" color="#0bbd87">
          <el-card>
            <ol>
              <li>新增Echarts折线图，柱状图，饼图</li>
            </ol>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1.0.4 (2019/4/29)" placement="top" color="#0bbd87">
          <el-card>
            <ol>
              <li>新增菜单更新中内容</li>
            </ol>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1.0.3 (2019/4/27)" placement="top" color="#0bbd87">
          <el-card>
            <ol>
              <li>新增week-css:1.垂直时间轴</li>
            </ol>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1.0.2 (2019/4/25)" placement="top" color="#0bbd87">
          <el-card>
            <ol>
              <li>新增个人博客，基础组件，常用业务组件，week-css左侧菜单</li>
            </ol>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1.0.1 (2019/4/13)" placement="top" color="#0bbd87">
          <el-card>
            <ol>
              <li>修改框架路由及webpack部分配置</li>
            </ol>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1.0.0 (2019/4/1)" placement="top" color="#0bbd87">
          <el-card>
            <ol>
              <li>网站基础模板搭建</li>
            </ol>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.container {
  padding: 20px 40px 20px 20px;
  h5 { color: #409EFF };
  ol {
    list-style: disc;
  }
}
</style>
