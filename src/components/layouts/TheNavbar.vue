<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <img
            class="d-none d-lg-block"
            src="../../assets/logo.svg"
            alt="logo"
          />
          <img
            class="d-lg-none d-lg-block"
            src="../../assets/logo2.svg"
            alt="logo"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="showDialog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            class="bi bi-filter-right"
            viewBox="0 0 16 16"
          >
            <path
              d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
            />
          </svg>
        </button>
        <div
          class="
            collapse
            navbar-collapse
            text-center
            justify-content-center
            align-items-center
          "
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-2 mt-lg-0 m-5">
            <li class="nav-item">
              <router-link
                class="nav-link d-none d-lg-block"
                :to="{ name: 'home' }"
              >
                Home
                <div class="line"></div>
                <center><div class="line d-block d-sm-none"></div></center>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link d-none d-lg-block"
                :to="{ name: 'blog' }"
                >Blog</router-link
              >
            </li>

            <li class="nav-item">
              <a class="nav-link d-none d-lg-block" href="#">Ar</a>
            </li>
          </ul>

          <form class="">
            <BaseButton class="d-none d-lg-block" :class="mode">
              Download CV</BaseButton
            >
          </form>

          <BaseModel @close="hideDialog" :open="dialogIsVisible">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-2 mt-lg-0 m-5">
              <li class="nav-item">
                <router-link class="nav-link active" :to="{ name: 'home' }">
                  Home
                  <div class="line d-none d-sm-block"></div>
                  <center><div class="line d-block d-md-none"></div></center>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'blog' }"
                  >Blog</router-link
                >
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Ar</a>
              </li>

              <form>
                <BaseButton :class="mode"> Download CV</BaseButton>
              </form>
              <li class="nav-item" style="lis-style: none">
                <ul
                  class="d-flex justify-content-center my-4"
                  style="list-style: none"
                >
                  <li class="mx-1" v-for="social in socials" :key="social.id">
                    <a :href="social.url" target="_blank">
                      <img
                        :src="social.img"
                        width="20"
                        height="20"
                        :alt="social.name"
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </BaseModel>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseButton from '../../global/components/BaseButton.vue'
import BaseModel from './BaseModel.vue'
export default {
  props: ['mode'],
  data() {
    return { dialogIsVisible: false }
  },
  components: { BaseButton },
  computed: {
    ...mapGetters(['socials']),
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true
    },
    hideDialog() {
      this.dialogIsVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.line {
  width: 31.765px;
  height: 2px;
  background-color: black;
}
.toogle {
  width: 31.765px;
  height: 3px;
  background-color: black;
}
.phonetoggle {
  background-color: white;
}
.second {
  width: 25px;
}
.third {
  width: 15px;
}
* {
  font-family: 'intro';
}
.colored {
  color: white;
  border: 0.5px white solid;
}
.active {
  font-weight: bold;
}
</style>
