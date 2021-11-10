<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="50"
    :freeMode="true"
    class="mySwiper"
  >
    <swiper-slide v-for="slide in slider" :key="slide.id">
      <router-link :to="{ name: 'sliderinfo', params: { id: slide.id } }">
        <img :src="slide.imgUrl" alt="slider-img" :class="mode" />
      </router-link>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss'

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper'

// install Swiper modules
SwiperCore.use([Pagination])

export default {
  props: ['id'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slider: [
        { id: '1', imgUrl: require('../../assets/slider/s1.svg') },
        { id: '2', imgUrl: require('../../assets/slider/s2.svg') },
        { id: '3', imgUrl: require('../../assets/slider/s3.svg') },
        { id: '4', imgUrl: require('../../assets/slider/s4.svg') },
        { id: '5', imgUrl: require('../../assets/slider/s5.svg') },
      ],
    }
  },
}
</script>
<style scoped>
.swiper-slide {
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
  height: 200px;
}

.swiper-slide .img {
  height: 200px;
}
</style>
