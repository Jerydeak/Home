<template>
  <div class="container">
    <div class="main" style="position: relative;">
      <div
        style="padding: 20px; box-shadow: 0px 0px 2px 0px #eee; background-color: #e0e6f0; border-radius: 10px; display: flex; justify-content: center; align-items: center; flex-direction: column;">
        <div style="width: 80px; height: 80px; border-radius: 100px; overflow: hidden; margin-bottom: 10px;">
          <img src="@/assets/photo.jpg" style="width: 100%; ">
        </div>
        <div class="first-letter">Hao Yu</div>
      </div>
      <div class="first-letter" style="margin-bottom: 10px; margin-top: 30px;">BUILDING</div>
      <a href="/?campus" class="first-letter">Campus</a>
      <!-- <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
              <n-input size="large" v-model:value="uid" style="width: 500px;width: 400px; margin-bottom: 10px;"
                placeholder="User ID" />
              <n-input size="large" v-model:value="pwd" style="width: 500px;width: 400px; margin-bottom: 10px;"
                placeholder="Password" />
              <n-button type="info" style="height: 40px; width: 400px;" @click="submit">Enter</n-button>
            </div> -->
    </div>
    <!-- <div class="area" style="background-color: gray;">Yu Hao</div>
          <div class="area" style="background-color: gold;">Frontpage</div> -->
  </div>

</template>

<script setup>
  import { ref } from "vue"
  import axios from "axios"
  // import Campus from "./Individual/Campus.vue"
  const uid = ref("");
  const pwd = ref("");
  function submit() {
    axios.post("/login", { data: 123 }).then(res => console.log(res));
  }
</script>

<style scoped>
  .container {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 30px;
    line-height: 40px;
    user-select: none;
  }

  .main {
    width: 500px;
    height: 300px;
    /* background-color: #fff; */
    border-radius: 10px;
    /* box-shadow: 0px 0px 10px 3px #aaa; */

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  }

  .first-letter::first-letter {
    font-size: 40px;
  }

  /* @media(min-width: 500px) {
    .container {
      display: flex;
      padding: 20px;
      align-items: center;
      justify-content: center;
    }
  } */
</style>