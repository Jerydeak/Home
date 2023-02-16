<template>
    <div class="container">
        <div class="main">
            <div style="display: flex; justify-self: center; align-items: center; margin-bottom: 20px;">
                <input id="query" style="width: 700px;" v-model="query" />
                <n-button style="height: 60px; width: 100px; font-size: 18px;" type="info"
                    @click="confirm()">Confirm</n-button>
            </div>
            <div id="examples" v-if="display=='examples'">
                <div class="card" style="margin-bottom: 10px;" v-for="(item, index) in examples" :key="index"
                    @click="query=item">
                    {{item}}</div>
            </div>
            <div id="results" v-if="display=='results'" style="text-align: left;">
                <div id="answer" style="background-color: #fff; padding: 20px 30px; margin-bottom: 1px;">
                    <span v-for="(ans, index) in answer" :key="index">
                        <span v-if="ans.type=='text'">{{ans.data}}</span>
                        <span v-if="ans.type=='ref'" style="position: relative; top: -5px; font-size: 12px;">
                            [{{ans.data+1}}]
                        </span>
                    </span>
                </div>
                <div id="references" style="background-color: #fff; padding: 20px;">
                    <n-collapse>
                        <n-collapse-item v-for="(item, index) in references" :key="index"
                            :title="`[${index+1}] ${item.url}`">
                            <div>{{item.text}}</div>
                        </n-collapse-item>
                    </n-collapse>
                </div>
            </div>
            <div id="waiting" v-if="display=='waiting'">
                <n-skeleton text :repeat="7" />
                <n-skeleton text style="width: 60%" />
            </div>
            <div style="margin-bottom: 40px;"></div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    const examples = ref(["What is apple?", "Why are some words \"BAD\" ?", "what is contradiction between the world? For example, the eggs are appeared first in the world or the chickens be?"])
    const query = ref("")
    const answer = ref([
        {
            "type": "text",
            "data": "Baidu is a search engine"
        },
        {
            "type": "ref",
            "data": 0
        },
        {
            "type": "text",
            "data": "."
        },
    ])
    const references = ref([
        {
            "url": "www.baidu.com",
            "text": "Baidu."
        },
        {
            "url": "www.baidu.com",
            "text": "Baidu."
        },
        {
            "url": "www.baidu.com",
            "text": "Baidu."
        },
    ])
    const display = ref("examples")
    const confirm = function () {
        let ori_display = display.value;
        display.value = "waiting";
        axios.post("/query", { "query": query.value }).then(res => {
            console.log(res);
            display.value = "results";
            answer.value = res.data["answer"];
            references.value = res.data["references"];
        }).catch(e => {
            display.value = ori_display;
        })
    }
</script>

<style>
    html,
    body {
        width: 100%;
        height: 100%;
        background-color: #f3f3f3;
    }
</style>

<style scoped>
    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input#query {
        width: 95%;
        height: 60px;
        color: #333;
        outline: none;
        border: none;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        padding: 0 20px;
        font-size: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .main {
        width: 800px;
        /* display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; */
    }

    .card {
        min-height: 50px;
        padding: 10px;
        background-color: #e7e7e7;
        border-radius: 10px;
        transition: 0.2s;
        cursor: pointer;
        /* box-shadow: 0px 0px 0px 0px #aaa; */
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }

    .card:hover {
        box-shadow: 0px 0px 4px 1px #ddd;
    }
</style>