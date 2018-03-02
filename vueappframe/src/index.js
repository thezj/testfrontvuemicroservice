import appframe from './appframe.vue'


// import comp1 from './comp1.vue'
// Vue.component('comp1',comp1)

// import comp2 from './comp2.vue'
// Vue.component('comp2',comp2)
let allcomps = new Set()
Vue.prototype.$testobj = 21222222222222
Vue.prototype.$getComp = comp => {
    if (!allcomps.has(comp.name)) {
        allcomps.add(comp.name)
        let scriptcom = document.createElement("script")
        scriptcom.src = comp.path
        document.getElementsByTagName("head")[0].appendChild(scriptcom)
    } else {
        window.setcomponent()
    }
}

let app = new Vue({
    el: '#app',
    template: '<appframe />',
    components: {
        appframe
    }
})