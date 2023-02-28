<template lang="">
    <div>

        <HomeView v-if="page=='front'"></HomeView>
        <Campus v-if="page=='campus'"></Campus>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import HomeView from "./HomeView.vue";
    import Campus from "./Individual/Campus.vue";
    import { useRouter, useRoute } from 'vue-router'
    const route = useRoute()
    const page = ref("front");
    if ("campus" in route.query) page.value = "campus";
    // const query = route.query;
    // console.log(route.query);
</script>
<style lang="">

</style>