import appframe from './appframe.vue'



let readycomps = new Set()

let currentloadcom = ''
Vue.prototype.$getComp = (comp, framepage) => {

    currentloadcom = comp.name

    if (!readycomps.has(comp.name)) {
        let loadcom = comp.name

        //发现重复加载时，先删除原来的再加载
        document.querySelectorAll('script').forEach(s => {
            if (s.src == comp.path) {
                s.parentNode.removeChild(s)
            }
        })
        //添加script标签加载组件js
        let scriptcom = document.createElement("script")
        scriptcom.src = comp.path
        document.querySelector('head').appendChild(scriptcom)

        let timer = _ => {
            if (window[comp.name]) {
                readycomps.add(comp.name)
                if (currentloadcom == loadcom) { //当前加载组件和异步加载组件一直时才切换视图
                    framepage.variablecom = window[comp.name]
                }
            } else {
                setTimeout(timer, 1)
            }
        }
        timer()
    } else {
        framepage.variablecom = window[comp.name]
    }


}

let app = new Vue({
    el: '#app',
    template: '<appframe />',
    components: {
        appframe
    }
})