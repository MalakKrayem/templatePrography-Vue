<template>
  <div>
    <div>
      <the-navbar />
    </div>
    <div class="container pt-5 justify-content-center align-items-center">
      <div class="row gy-2">
        <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
        <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
        <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
        <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
      </div>
    </div>
    <div class="container pt-5 justify-content-center align-items-center">
      <div class="row gy-3">
        <div class="col-lg-6 col-md-12"><BigCard /></div>
        <div class="col-lg-3 col-md-6 col-sm-12"><CardImg /></div>
        <div class="col-lg-3 col-md-6 col-sm-12"><CardImg /></div>
      </div>
    </div>
    <div class="container pt-5 justify-content-center align-items-center">
      <div class="row gy-2">
        <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
        <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
        <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
        <div class="col-lg-3 col-md-6 col-sm-12"><Card /></div>
      </div>
    </div>
    <div class="container pt-5 justify-content-center align-items-center">
      <div class="row gy-3">
        <div class="col-lg-3 col-md-6 col-sm-12"><CardImg /></div>
        <div class="col-lg-3 col-md-6 col-sm-12"><CardImg /></div>
        <div class="col-lg-6 col-md-12"><BigCard /></div>
      </div>
    </div>
    <div class="container">
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '../components/layouts/TheNavbar.vue'
import Card from '../components/cards/Card1.vue'
import BigCard from '../components/cards/Card2.vue'
import CardImg from '../components/cards/Card3.vue'
export default {
  components: { TheNavbar, Card, BigCard, CardImg },
}
</script>

<style lang="scss" scoped></style>
