<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      2: 2,
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li,
a {
  text-decoration: none;
  list-style: none;
}

html {
  height: 100%;
}

body {
  background-color: #121212;
  perspective: 1700px;
  overflow: hidden;
  position: relative;
  height: 100%;
}
</style>
