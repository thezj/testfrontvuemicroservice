<template>
  <div>
    {{test}}
    <input type="text" v-model="test">
  </div>
</template>
<script>
  window.comp2 = {
    data() {
      return {
        test: 'im comp2'
      };
    }
  };

  export default comp2
</script>