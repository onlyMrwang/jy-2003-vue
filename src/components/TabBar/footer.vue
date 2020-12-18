<template>
    <div>
       <van-tabbar v-model="active" @change="changeTab">
            <van-tabbar-item icon="home-o"><span>电影</span></van-tabbar-item>
            
            <van-tabbar-item icon="friends-o"><span>影院</span></van-tabbar-item>
            <van-tabbar-item icon="setting-o"><span>我的</span></van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data(){
        return {
            active:0,
            url:["/film","/cinema","/center"],
        }
    },
    created(){
        this.active = this.url.indexOf(this.$route.path) || 0;
   
    },
    methods:{
        changeTab(index){
            this.$router.push(this.url[index]);
        }
    }
}
</script>