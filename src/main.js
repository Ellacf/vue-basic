import Vue from 'vue'
import VueRouter from 'vue-router'
import { domain, fromNow } from './filters'
import App from './App'
import Hello from './components/Hello'
import Accordion from './components/Accordion'
import Affix from './components/Affix'
import MyComponent from './components/MyComponent'
// import Foo from './components/Foo'
import Bar from './components/Bar'
import Baz from './components/Baz'
import NewsView from './components/NewsView'
import '../bower_components/jquery/dist/jquery.min.js'
import '../bower_components/bootstrap/dist/css/bootstrap.min.css'
// install router
Vue.use(VueRouter)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)
var Foo = Vue.extend({
  template:
    '<div class="foo">' +
      '<h2>This is Foo!</h2>' +
      '<router-view></router-view>' + // <- 嵌套的外链
    '</div>'
})
// routing
var router = new VueRouter({hashbang: true})
router.map({
  '/affix': {
    component: Affix
  },
  '/accordion': {
    component: Accordion
  },
  // 动态加载组件
  '/async': {
    component: function (resolve) {
      // somehow retrieve your component definition from server...
      // setTimeout(function () {
      //   console.log('ctesvsvnnnnn')
      // }, 2000)
      require(['./components/MyComponent.vue'], resolve)
      // resolve(MyComponent)
    }
  },
  '/user/:userId': {
    name: 'user', // 给这条路径加上一个名字
    component: Hello
  },
  '/user/*any': {
    component: {
      template: '<p>贪心匹配{{$route.params.any}}</p>'
    }
  },
  '/foo/*any/bar': {
    component: {
      template: '<p>全匹配片段{{$route.params.any}}</p>'
    }
  },
  // '/user/:username': {
  //   component: {
  //     template: '<p>用户名是{{$route.params.username}}</p>'
  //   }
  // },
  '/user/:username/post/:post_id': {
    component: {
      template: '<p>用户名是{{$route.params.username}},用户ID是{{$route.params.post_id}}</p>'
    }
  },
  '/foo': {
    component: Foo,
    // 在/foo下设置一个子路由
    subRoutes: {
      '/': {
        // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
        // 为了简便，这里使用了一个组件的定义
        component: {
          template: '<p>Default sub view for Foo</p>'
        }
      },
      '/bar': {
        // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
        // 一个Bar组件
        component: Bar
      },
      '/baz': {
        // Baz也是一样，不同之处是匹配的路由会是/foo/baz
        component: Baz
      }
    }
  },
  '/bar': {
    component: Bar
  },
  '/hello': {
    component: Hello
  },
  '/news/:page': {
    component: NewsView
  }
})
router.beforeEach(function () {
  window.scrollTo(0, 0)
})
router.redirect({
  '*': '/hello'
})

router.start(App, '#main')
