<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <p>
      Welcome to your Vue.js app!
    </p>
    <!-- <p>{{ message }}</p>
    <input v-model="message"> -->
    <!-- 使用指令 v-link 进行导航。 -->
    <!-- <p>
      <a v-link="{ path: '/foo' }">Go to Foo</a>
      <a v-link="{ path: '/bar', activeClass: 'custom-active-class', append: true  }">Go to Bar</a>
    </p>
    <p></p>
    <a v-link="{ name: 'user', params: { userId: 123 },replace: true}">User</a>
    <div>
      <p>当前路径: {{$route.path}}</p>
      <p>当前路由参数: {{$route.params | json}}</p>
    </div> -->
    <!-- 路由外链 -->
    <!-- main view -->
    <router-view class="vm"></router-view>
    <!-- <input type="checkbox" v-model="checked">
    <label for="checked">Open only one at a time.</label>

    <accordion :one-at-atime="checked">
      <panel header="Panel #1" :is-open="true">
        ...11111
      </panel>
      <panel header="Panel #2">
        ...22222
      </panel>
      <panel header="Panel #3">
        ...33333
      </panel>
      <panel header="Panel #4">
        ...44444
      </panel>
    </accordion> -->
</template>

<script>
var accordion = require('vue-strap').accordion;
var panel = require('vue-strap').panel;

export default {
  data () {
    return {
      message: 'Hewll',
      checked: true
    }
  },
  components: {
    accordion,panel
  }
}
</script>

<style lang="less">
html {
  height: 100%;
}

body {
  // display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  // max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

.vm {
  background-color: #f6f6ef;
  width: 100%;
  -webkit-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease;
  box-sizing: border-box;
  padding: 8px 20px;
}
.v-link-active{
  background-color: red;
}
.custom-active-class{
  background-color: blue;
}
</style>
