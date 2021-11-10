<template>
  <div>
    <SocialBar />
    <router-view />
    <TheFooter />
  </div>
</template>
<script>
import SocialBar from '@/components/layouts/SocialBar.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
export default {
  components: {
    SocialBar,
    TheFooter,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'intro';
  src: local('intro'), url(fonts/Intro.otf);
}
@font-face {
  font-family: 'barlow';
  src: local('barlow'), url(fonts/Barlow-Black.ttf);
}

</style>
