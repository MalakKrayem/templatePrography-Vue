<template>
  <div>
    <div
      class="card text-white"
      @mouseover="show = !show"
      @mouseout="show = false"
      :class="{ block: show, none: !show }"
    >
      <img src="../../assets/card2/card2.svg" class="card-img" alt="img" />
      <div class="card-img-overlay m-2">
        <h5 class="card-title pb-5 mb-5">{{ sub_title }}</h5>
        <div class="">
          <h4>{{ title }}</h4>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <hr />
        <div class="row">
          <div class="col">2 days ago</div>
          <div class="col text-end">
            <img src="../../assets/card2/Comment_Icon.svg" />
            <span> 218</span>
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
          <h6 class="card-subtitle pt-3 p-4">{{ back.sub_title }}</h6>
          <div class="card-text pt-3 p-4">
            <h5 class="pt-3">{{ back.title }}</h5>
            <p>{{ back.description }}</p>

            <button type="button" class="btn btn-outline-dark text-white mt-4">
              Learn more
            </button>
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
      sub_title: 'Travel',
      title: 'Wedding rings a gift for a life time ',
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

<style scoped>
.card {
  width: 39rem;
  margin-left: 20px;
}
.back .card {
  background-color: black;
  color: white;
  mask-image: linear-gradient(rgba(0, 0, 0, 1));
}
.block {
  display: block;
}
.none {
  display: none;
}
</style>
