<template>
  <div class="container">
    <div class="box">
      <div
        class="face front"
        @mouseover="show = !show"
        @mouseout="show = false"
        :class="{ block: show, none: !show }"
      >
        <div class="card">
          <div class="card-body">
            <h6 class="card-subtitle pt-3 p-4">{{ front.sub_title }}</h6>
            <div class="card-text pt-3 p-4">
              <h5>{{ front.title }}</h5>
              <p>{{ front.description }}</p>
            </div>
            <hr />
            <div class="row icons pt-1 pl-5">
              <div class="col-5">
                <img src="../../assets/card1/comment.svg" alt="comment" />
                <span> 56</span>
              </div>
              <div class="col-7 text-end">
                <img src="../../assets/card1/time.svg" alt="time" />
                <span> 10 minute ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="face back"
        @mouseover="show = false"
        @mouseout="show = true"
        :class="{ block: !show, none: show }"
      >
        <div class="card">
          <div class="card-body">
            <h6 class="card-subtitle pt-3 p-1">{{ back.sub_title }}</h6>
            <div class="card-text pt-3 p-4">
              <h5>{{ back.title }}</h5>
              <p>{{ back.description }}</p>
              <router-link :to="{ name: 'bloginfo' }">
                <button
                  type="button"
                  class="btn btn-outline-dark text-white mt-4"
                >
                  Learn more
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      hovered: false,
      front: {
        sub_title: 'Travel',
        title: 'For your daily fix of\r\nshopping fix, outfit idea.',
        description:
          'shop directly from our favourite\r\nindependent labels and vintage\r\nboutiqes.',
      },
      back: {
        sub_title: 'Fashion',
        title: 'How to look good naked:\r\nInsideWorkOut routine',
        description:
          'shop directly from our favourite\r\nindependent labels and vintage\r\nboutiqes.',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.front .card {
  background-image: url('../../assets/card1/Bitmap.svg');
  color: white;
}
.back .card {
  background-color: black;
  color: white;
  mask-image: linear-gradient(rgba(0, 0, 0, 1));
}
p {
  font-size: 13px;
}
span {
  font-size: 12px;
}
.block {
  display: initial;
}
.none {
  display: none;
}
.box {
  transition: display 0.1s ease-in-out;
}
</style>
