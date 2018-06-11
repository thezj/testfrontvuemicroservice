<template>
  <div>
    {{test}}
    <input type="text" v-model="test">
  </div>
</template>
<script>
  window.comp1 = {
    data() {
      return {
        test: 'im comp1'
      };
    }
  };
  export default comp1
</script>