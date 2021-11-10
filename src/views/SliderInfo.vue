<template>
  <div>
    <NavBar class="fixed-top" mode="colored" />

    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="temp" v-for="section in sections" :key="section.id">
        <div class="container-fluid">
          <div class="row">
            <div class="col text">
              <h1 v-html="section.title"></h1>
              <a :href="section.productLink">
                <BaseButton type="button" class="btn btn-outline-dark">
                  See All Product
                </BaseButton>
              </a>
            </div>
            <div class="col img temp">
              <img :src="section.productImg" alt="product" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import NavBar from '../components/layouts/TheNavbar.vue'
import BaseButton from '../global/components/BaseButton.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.min.css'
export default {
  name: 'swiper-example-pagination',
  title: 'Pagination',
  components: {
    Swiper,
    SwiperSlide,
    NavBar,
    BaseButton,
  },

  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
      sections: [
        {
          id: '1',
          title: 'activation <br />Gaming App',
          productLink:
            'https://www.behance.net/gallery/121860303/UXUI-Activision-E-commerce-Community-Gaming-App',
          productImg: require('../assets/slider/is1.svg'),
        },
        {
          id: '2',
          title: 'activation <br />Gaming App2',
          productLink:
            'https://www.behance.net/gallery/121860303/UXUI-Activision-E-commerce-Community-Gaming-App',
          productImg: require('../assets/slider/is1.svg'),
        },
        {
          id: '3',
          title: 'activation <br />Gaming App',
          productLink:
            'https://www.behance.net/gallery/121860303/UXUI-Activision-E-commerce-Community-Gaming-App',
          productImg: require('../assets/slider/is1.svg'),
        },
        {
          id: '4',
          title: 'activation <br />Gaming App',
          productLink:
            'https://www.behance.net/gallery/121860303/UXUI-Activision-E-commerce-Community-Gaming-App',
          productImg: require('../assets/slider/is1.svg'),
        },
        {
          id: '5',
          title: 'activation <br />Gaming App',
          productLink:
            'https://www.behance.net/gallery/121860303/UXUI-Activision-E-commerce-Community-Gaming-App',
          productImg: require('../assets/slider/is1.svg'),
        },
      ],
    }
  },
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.temp {
  height: 96vh;
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
.img {
  background-color: black;
}
img {
  display: block;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
.text {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
}
.text h1 {
  padding-left: 110px;
  line-height: 80px;
}
.text a {
  padding-left: 110px;
}
.btn {
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>
