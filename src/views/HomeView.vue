<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <div class="area" style="background-color: gray;">Yu Hao</div>
      <div class="area" style="background-color: gold;">Frontpage</div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'HomeView',
    components: {
      // HelloWorld
    }
  }
</script>

<style>
  /* .container {
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
  } */

  @media(min-width: 500px) {
    .container {
      display: flex;
      padding: 20px;
      align-items: center;
      justify-content: center;
    }
  }

  .area {
    padding: 10px;
  }
</style>