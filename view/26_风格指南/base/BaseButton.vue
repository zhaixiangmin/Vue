<template>
  <button type="button">{{ BaseButton }}</button>
</template>
<script>
  module.export = {
    name: 'BaseButton',
    data: function () {
      return {
        greeting: 'BaseButton'
      }
    }
  };
</script>