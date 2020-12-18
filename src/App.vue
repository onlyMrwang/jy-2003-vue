<template>
  <div id="app">
    <Footer /> 
    <router-view/>
  </div>
</template>

<script>
// import uri from "@/config/uri"
// import foot from '../../components/TabBar/footer.vue'
import Footer from "@/components/TabBar/footer"

export default {
  components:{Footer},
  // async created(){
  //   let ret = await this.$http.get(uri.getNowPlaying);
  //   console.log(ret);
  // }
}
</script>
<style lang="scss">

</style>
