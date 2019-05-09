<template>
  <div class="container">
    <div class="main-left">
      <h2>请选择订单</h2>
      <div class="content-left">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="item">
              <div class="room">足疗双人房</div>
              <div class="order">订单号：32254123451</div>
              <div class="name">特惠足疗套餐</div>
              <div class="jishi">02号技师  周文昌</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="item">
              <div class="room">足疗双人房</div>
              <div class="order">订单号：32254123451</div>
              <div class="name">特惠足疗套餐</div>
              <div class="jishi">02号技师  周文昌</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="item">
              <div class="room">足疗双人房</div>
              <div class="order">订单号：32254123451</div>
              <div class="name">特惠足疗套餐</div>
              <div class="jishi">02号技师  周文昌</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
            <div class="item">
              <div class="room">足疗双人房</div>
              <div class="order">订单号：32254123451</div>
              <div class="name">特惠足疗套餐</div>
              <div class="jishi">02号技师  周文昌</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- <div class="main-right">1</div> -->
  </div>
</template>

<style lang="scss" scoped>
  .container {
    background:#fff;
    border-radius: 10px;
    // display: flex;
    position: relative;
    padding: 10px 10px 10px 30px;
    // flex-wrap: wrap;
    .main-left {
      width: 75%;
      .content-left {
        margin: 0 0 0 30px;
        .item {
          margin: 10px;
          height: 380px;
          border-radius: 5px;
          box-shadow: 4px 13px 30px 1px rgba(0, 0, 0, 0.2);
          position: relative;
          text-align: center;
          .room {
            position: absolute;
            top: 20px;
            right: 20px;
          }
          .order {
            margin-top: 120px;
            color: blue;
          }
          .name {
            margin-top: 20px;
            font-size: 40px;
            font-weight: bold;
          }
          .jishi {
            margin-top: 40px;
            font-size: 18px;
          }
        }
      }
    }
    .main-right {
      width: 25%;
      height: 100px;
      background: green;
    }
  }
</style>

