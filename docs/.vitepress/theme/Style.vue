<template>
  <div class="style">this is style component</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Style',
})
</script>

<style>
:root {
  --c-brand: #ff6473;
  --c-brand-light: #ff808c;

  --c-white: #fafafa;
  --c-black: #2a2828;
}
</style>
