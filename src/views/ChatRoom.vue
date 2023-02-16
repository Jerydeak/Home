<template>
    <div class="container">
        <div style="margin: 20px;">聊天室</div>
        <div class="main">
            <div class="content">
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
                <p>1298eyash9ij12 0edi</p>
            </div>
        </div>
        <div class="input">
            <n-input></n-input>
        </div>
        <!-- <div class="main"></div> -->
        <!-- <div class="area" style="background-color: gray;">Yu Hao</div>
    <div class="area" style="background-color: gold;">Frontpage</div> -->
    </div>
</template>

<script setup>
    import { ref } from "vue"
    import axios from "axios"
    const uid = ref("");
    const pwd = ref("");
    function submit() {
        axios.post("/login", { data: 123 }).then(res => console.log(res));
    }
</script>

<style scoped>
    .container {
        position: relative;
        display: flex;
        width: 1100px;
        margin: auto;
        height: 100vh;
        align-items: center;
        /* justify-content: center; */
        flex-direction: column;
        font-size: 30px;
        line-height: 40px;
        user-select: none;
    }

    .main {
        position: absolute;
        top: 80px;
        bottom: 80px;

        width: 100%;
        background-color: #222;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 3px #555;

        /* display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column; */
        overflow-y: hidden;
    }

    .content {
        /* width: 100px; */
        /* height: 300px; */
        width: 100%;
        /* background-color: #000; */
        position: absolute;
        bottom: 0px;
    }

    .input {
        position: absolute;
        bottom: 20px;
        width: 100%;
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