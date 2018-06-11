<template>
  <div>
    <br>
    <span v-for='comp in allcomponent' style="margin:10px; padding:10px; border:1px solid gray;" @click='getcomp(comp)'>
      {{comp.name}}
    </span>
    <br>
    <br>
    <br>
    <div style="border:1px solid gray;margin:10px; padding:10px; height:500px; ">
      <keep-alive>
        <component :is="variablecom"></component>
      </keep-alive>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        showtest: false,
        hello: "hello im appframe",
        variablecom: null,
        allcomponent: [{
            name: 'comp1',
            path: 'http://localhost:8001/comp1.js'
          },
          {
            name: 'comp2',
            path: 'http://localhost:8002/comp2.js'
          }
        ]
      };
    },
    mounted(){
  
    },
    methods: {
      getcomp(comp) {
        //如果组件是vue全局注册的组件则动态组件变量指向组件的名称字符串
        //动态组件的名称不是一个字符串而是直接指向组件对象本身。
        //使当前的动态组件变量 指向 一个组件的选项对象 就是组件对象本身。
        // window.setcomponent = e => this.variablecom = window[comp.name]
        this.$getComp(comp, this)

      }
    }
  };
</script>