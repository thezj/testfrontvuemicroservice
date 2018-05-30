<template>
  <div style="border:1px solid gray;height:800px;">
    <div>---appframe---</div>
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
    methods: {
      getcomp(comp) {
        //异步加载组件后这个组件自动已经出现在vue全局组件中，动态组件的名称不是一个字符串而是直接指向组件对象。
        // window.setcomponent = e => this.variablecom = window[comp.name]
        this.$getComp(comp,this)

      }
    }
  };
</script>