<template>
  <div class="row">
    <div class="col text-center">
      <h1 class="msg">{{ msg }}</h1>
      <p class="mt-4">
        A project setup using Vite, created to easily scaffold new Vue.js 3 projects.
        <br />
        Find out more at
        <a class="custom" href="https://vitejs.dev/guide/" target="_blank" rel="noopener">Vite documentation</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'HelloWorld',
})

defineProps({
  msg: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
h1.msg {
  color: $gray-900;
}
</style>
