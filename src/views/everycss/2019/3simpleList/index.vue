<template>
  <div class="course">
    <div class="header">
      <p class="content">课程小列表</p>
    </div>
    <div class="list">
      <p>HTML+CSS基础课程</p>
      <span>48889人在学</span>
    </div>
    <div class="list">
      <p>JAVASCRIPT基础课程</p>
      <span>48889人在学</span>
    </div>
    <div class="list">
      <p>VUE基础课程</p>
      <span>48889人在学</span>
    </div>
    <div class="list special">
      <p>REACT基础课程</p>
      <span>48889人在学</span>
    </div>
  </div>
</template>

<style scoped>
    body,p,div {margin: 0;padding: 0;font-family: "微软雅黑";}
    .course {width:220px;background: #f2f4f6;border: 1px #ececec solid;margin: 0 auto;border-radius: 10px;}
    .header {width: 100%;background: #040a10;height: 150px;text-align: center;border-radius: 10px;}
    .content {font-size: 20px;color: #fff;font-weight: bold;line-height: 150px;}
    .list {font-size: 14px;border-bottom: 1px #d9dde1 solid;margin: 0 15px;padding:15px 5px 5px 5px; line-height: 1.5em;}
    .special {border-bottom: none;}
    span {color: #93999f; font-size: 12px;}
</style>
