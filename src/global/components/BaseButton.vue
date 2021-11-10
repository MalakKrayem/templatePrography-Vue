<template>
  <button type="button" class="btn btn-outline-dark" :class="mode">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
  font-family: intro;
}
button:hover {
  background-color: #f5f5f5;
  color: black;
}
.colored {
  color: white;
  border: 0.5px white solid;
  position: relative;
  right: -40px;
}
</style>
