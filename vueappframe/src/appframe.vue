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
      {{variablecom}} ====
      {{$testobj}}
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
        variablecom: "",
        allcomponent: [{
            name: 'comp1',
            path: 'http://localhost:8082/comp1.js'
          },
          {
            name: 'comp2',
            path: 'http://localhost:8083/comp2.js'
          }
        ]
      };
    },
    methods: {
      getcomp(comp) {
        window.setcomponent = e => this.variablecom = comp.name
        this.$getComp(comp)
      }
    }
  };
</script>