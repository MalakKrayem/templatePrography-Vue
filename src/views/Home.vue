<template>
  <div>
    <div class="d-none d-lg-block">
      <div class="container">
        <div class="row">
          <div class="col-9">
            <div class="row">
              <TheNavbar style="z-index: 10" />
            </div>
            <div class="row mt-5 p-4">
              <div class="col-8">
                <h1>{{ name }}</h1>
                <p class="intro" v-html="introduction"></p>
                <div class="row mt-4">
                  <div class="col" v-for="info in information" :key="info.id">
                    <h5>{{ info.headline }}</h5>
                    <span v-html="info.info"></span>
                  </div>
                  <base-button class="mt-4">Contact us</base-button>
                </div>
              </div>
              <div class="col-4"></div>
              <div class="row">
                <Slider />
              </div>
            </div>
          </div>
          <div class="col-3">
            <PersonalImg />
          </div>
        </div>
      </div>
    </div>
    <div class="d-lg-none">
      <div class="containe-fluid m-0 p-0">
        <header>
          <the-navbar class="fixed-top" mode="phonetoggle" />
          <div class="head">
            <img src="../assets/personal2.svg" alt="personal-img" />
          </div>
        </header>
        <div class="row text-center mt-3">
          <h1>{{ name }}</h1>
          <p class="intro" v-html="introduction"></p>
        </div>
        <div class="row text-center p-1">
          <div class="col" v-for="info in information" :key="info.id">
            <h5>{{ info.headline }}</h5>
            <span v-html="info.info"></span>
          </div>
        </div>
        <div class="row">
          <Slider mode="img" :slidesPerView="1.5" />
        </div>
        <div class="row">
          <base-button>Contact us</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../global/components/BaseButton.vue'
import Slider from '../components/homeComp/Slider.vue'
import PersonalImg from '../components/homeComp/PersonalImg.vue'
export default {
  components: { BaseButton, Slider, PersonalImg },

  data() {
    return {
      name: 'sammer kream',

      introduction: `I am UI/UX designer specializing in mobile devices (ios and android), web app UI design, and responsive web design.<br>founder & SEO of <a><strong class="text-black"> prography </strong></a>.<br>experience in user research, converting requirements into design for mobile and web interfaces.`,
      information: [
        {
          id: 1,
          headline: 'age',
          info: '27<br>Years',
        },
        {
          id: 2,
          headline: 'language',
          info: 'arabic<br>& english',
        },
        {
          id: 3,
          headline: 'nationalitiy',
          info: 'paleatinian<br>-gaza',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

* {
  font-family: 'intro';
}

h5,
.intro {
  color: #b2b2b2;
  line-height: 20px;
  font-size: 18px;
}

.info {
  font-weight: bold;
}
span:focus {
  color: #ff3385;
  cursor: pointer;
}

.head {
  background-color: black;
  width: 100%;
}
.head img {
  display: block;
  width: 45%;
  margin-left: auto;
  margin-right: auto;
}
</style>
