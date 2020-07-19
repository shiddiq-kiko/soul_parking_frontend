<template>
  <!-- <ul class="accordion"> -->
  <div>
    <slot></slot>
  </div>
  <!-- </ul> -->
</template>

<script>
export default {
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    }
  },
  provide() {
    return { Accordion: this.Accordion }
  },
}
</script>

<style scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
