<template>
  <div>
    <div
      class="card"
      @mouseover="show = !show"
      @mouseout="show = false"
      :class="{ block: show, none: !show }"
    >
      <img
        src="../../assets/card3/Bitmap-1.svg"
        class="card-img-top"
        alt="img"
      />
      <div class="card-body m-2">
        <h5 class="card-title mb-4">
          Proven Techineqs <br />
          help you herabl breast
        </h5>
        <hr />
        <div class="row text-muted">
          <div class="col">
            <img src="../../assets/card3/Comment_Icon-m.svg" alt="comment" />
            <span> 18 </span>
          </div>
          <div class="col">
            <img src="../../assets/card3/Time_Icon-m.svg" alt="time" />
            <span> 10 hours ago </span>
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
span {
  font-size: 12px;
}
</style>
