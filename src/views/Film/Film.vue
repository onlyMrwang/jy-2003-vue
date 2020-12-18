<template>
    <div id="main">
        <tou />
        这是电影页面
        <router-view />
        <router-link tag="button" to="/Film/Nowplaying">正在上映</router-link>
        <router-link tag="button" to="/Film/Comingplaying">即将上映</router-link>
        
    </div>
</template>

<script>


import tou from '../../components/Header/header.vue'
// import Header from "@/components/Header/header"

// import uri from "@/config/uri";

export default {
  
    components:{tou}
}
</script>