<template>
    <div class="view">
        <main>
            <h1 style="font-size: 30px;">Chess, Cheers!</h1>
            <n-button type="info" @click="display.create=true">创建游戏</n-button>
            <n-button type="info" @click="display.join=true">加入游戏</n-button>
        </main>
    </div>
    <n-drawer v-model:show="display.create" :width="502" placement="right">
        <n-drawer-content title="创建游戏">
            <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
                <!-- <n-input v-model:value="enterRoomId" type="text" placeholder="请输入房间 ID" style="text-align: center;" /> -->
                <n-button style="width: 100%; margin-top: 10px;" type="info">创建</n-button>
            </div>
        </n-drawer-content>
    </n-drawer>
    <n-drawer v-model:show="display.join" :width="502" placement="right">
        <n-drawer-content title="加入游戏">
            <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
                <n-input v-model:value="enterRoomId" type="text" placeholder="请输入房间 ID" style="text-align: center;" />
                <n-button style="width: 100%; margin-top: 10px;" type="info">进入</n-button>
            </div>
        </n-drawer-content>
    </n-drawer>

</template>

<script setup>
    import { ref } from 'vue';
    const display = ref({
        create: true,
        join: false
    });
    const enterRoomId = ref("")
</script>


<style scoped>
    .view {
        width: 100vw;
        height: 100vh;
        /* overflow: hidden; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    main {
        /* width: 500px; */
        /* height: 300px; */
        padding: 10px;
        /* box-shadow: 0px 0px 5px 2px #444; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    main>* {
        width: 100%;
        margin-bottom: 10px;
    }
</style>