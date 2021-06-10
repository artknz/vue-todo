<template>
  <div class="v-todo container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TodoLayout'
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    max-width: 1000px;
  }
</style>
