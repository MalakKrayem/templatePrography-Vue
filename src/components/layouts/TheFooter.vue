<template>
  <div>
    <footer>© 2021,<span>Prography,</span>All right reserved</footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@font-face {
  font-family: 'barlow';
  src: local('barlow'), url(../../fonts/Barlow-Black.ttf);
}
span {
  color: #ff3385;
}
div {
  position: relative;
}
footer {
  width: 100%;
  text-align: center;
  padding: 3px;
  background-color: #eeeeee;
  color: black;
  text-transform: capitalize;
  font: 'barlow';
  position: static;
  bottom: 0;
}
</style>
