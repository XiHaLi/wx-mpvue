import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue(App)
app.$mount()

export default{
    config: {
        pages: [],
        "window": {
            "backgroundTextStyle":"light",
            "navigationBarBackgroundColor": "#EA5149",
            "navigationBarTitleText": "阿琴的技术栈",
            "navigationBarTextStyle":"light"
        }
        
    }
}
