<template>
  <router-view />
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: white; */
  }

  /* body {
    background-color: #333;
  } */
</style>

<script>
  export default {
    name: "app",
    mounted() { },
    methods: {
      request() {
        this.$axios.get("/test").then((res) => {
          console.log(res);
        });
      },
    },
  };
</script>