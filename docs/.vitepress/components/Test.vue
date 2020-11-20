<template>
  <section ref="wrap" class="test">___test component___ {{ text }}</section>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const text = ref('test')
    return { text }
  },
})
</script>

<style scoped>
.test {
  color: whitesmoke;
  background-color: dimgray;
}
</style>
