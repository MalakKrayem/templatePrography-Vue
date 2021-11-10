<template>
  <div>
    <div class="black"></div>
    <div class="img">
      <img src="../../assets/personal.svg" alt="personalImg" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
div {
  position: relative;
  height: 100%;
}
.black {
  background-color: black;
  width: 325px;
  height: 500px;
  position: absolute;
  z-index: 1;
}
img {
  width: 740px;
  height: 793px;
  position: fixed;
}
.img {
  position: relative;
  bottom: 0;
  right: 235px;
  z-index: 2;
}
</style>
