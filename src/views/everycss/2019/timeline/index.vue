<template>
  <div class="container">
    <section class="timeline">
      <ul>
        <li>
          <div>
            <time>19/4/28</time>
            <div class="discovery">
              <h2>-- 更新 --</h2>
              <p>更新Css2019第三周代码</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>19/4/27</time>
            <div class="discovery">
              <h2>-- 更新 --</h2>
              <p>更新Css2019第三周代码</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>19/4/26</time>
            <div class="discovery">
              <h2>-- 创建 --</h2>
              <p>增加Week-Css2019第三周</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>19/4/24</time>
            <div class="discovery">
              <h2>-- 创建 --</h2>
              <p>上传2小节到每周CSS2019专栏</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>19/4/13</time>
            <div class="discovery">
              <h2>-- 更新 --</h2>
              <p>修改框架路由及webpack部分配置</p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>19/4/1</time>
            <div class="discovery">
              <h2>-- 创建 --</h2>
              <p>个人网站基础模板创建</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.callbackFunc)
    window.addEventListener('load', this.callbackFunc)
    this.callbackFunc()
  },
  methods: {
    isElementInViewport: function(el) {
      var rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    },
    callbackFunc: function() {
      var items = document.querySelectorAll('.timeline li')
      for (var i = 0; i < items.length; i++) {
        if (this.isElementInViewport(items[i])) {
          if (!items[i].classList.contains('in-view')) {
            items[i].classList.add('in-view')
          }
        } else if (items[i].classList.contains('in-view')) {
          items[i].classList.remove('in-view')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
  font: normal 16px/1.5 'Titillium Web', sans-serif;
  background: linear-gradient(54deg, #9164ff, #8bfff4);
  color: #3c3f64;
  overflow-x: hidden;
  padding-bottom: 50px;
  .timeline ul li {
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    padding-top: 50px;
    background: #fff;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 20px;
      height: 20px;
      background: #eee;
      transform: translateX(-50%) rotate(45deg);
      border-radius: 45%;
    }
    &:nth-of-type(odd) div {
      transform:translate3d(100px, -10px, 0)  rotate(10deg);
    }
    &:nth-of-type(odd) > div {
      left: 45px;
    }
    &:nth-of-type(even) div {
      transform: translate3d(-100px, -10px, 0) rotate(10deg);
    }
    &:nth-of-type(even) > div {
      left: -439px;
    }
    div {
      position: relative;
      background: #fff;
      width:400px;
      padding: 20px;
      bottom: 0;
      border-radius: 5px;
      align-items: center;
      box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: all 0.5s ease-in-out;
      time {
        position: absolute;
        background: #f5af19;
        width: 110px;
        height: 30px;
        top: -15px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
      }
      div {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          text-align: center;
        }
      }
      .discovery {
        margin-left: 10px;
      }
    }
    &.in-view {
      div {
        transform: none;
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .container {
    background: #8bfff4;
    .timeline ul li {
      margin-left: 20px;
      &:nth-of-type(even) > div {
        left: 45px;
      }
      div {
        width: 250px;
      }
    }
  }
}
</style>

