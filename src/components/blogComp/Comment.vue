<template>
  <div>
    <form action="">
      <img src="../../assets/bloginfo/user.svg" alt="mask" />
      <input type="text" placeholder="Sammer Kraem" />
      <div class="text-muted pt-2">
        <span class="mx-1">Share: </span>
        <a href="https:/www.facebook.com" target="_blank">
          <img
            src="../../assets/bloginfo/FacebookIconCopy.svg"
            alt="facebook"
            class="mx-1"
        /></a>
        <a href="https:/www.twitter.com" target="_blank">
          <img
            src="../../assets/bloginfo/TwitterIcon-1Copy.svg"
            alt="twitter"
            class="mx-1"
        /></a>
        <a href="https:/www.gmail.com" target="_blank">
          <img
            src="../../assets/bloginfo/GooglelogoCopy.svg"
            alt="google"
            class="mx-1"
        /></a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
input[type='text'] {
  border: none;
  padding: 12px;
  width: 75%;
}
form {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
</style>
