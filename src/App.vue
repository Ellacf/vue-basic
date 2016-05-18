<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <p>
      Welcome to your Vue.js app!
    </p>
    <!-- <p>{{ message }}</p>
    <input v-model="message"> -->
    <p>
        <!-- 使用指令 v-link 进行导航。 -->
      <a v-link="{ path: '/foo' }">Go to Foo</a>
      <a v-link="{ path: '/bar' }">Go to Bar</a>
    </p>
    <!-- 路由外链 -->
    <!-- main view -->
    <router-view class="vm"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hewll'
    }
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
</style>
