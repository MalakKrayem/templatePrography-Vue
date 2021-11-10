<template>
  <div>
    <ul class="my-3 d-none d-lg-block" id="ul">
      <li class="my-2" v-for="social in socials" :key="social.id">
        <a :href="social.url" target="_blank">
          <img :src="social.img" :alt="social.name" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['socials']),
  },
}
</script>
<style scoped>
div {
  position: absolute;
  z-index: 10;
  background: floralwhite;
}
ul {
  list-style: none;
  z-index: 1;
  position: fixed;
  bottom: 230px;
  right: 0;
  padding-right: 40px;
}
img:hover {
  opacity: 0.5;
}
</style>
