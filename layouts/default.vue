<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  overscroll-behavior: none;

  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
}
html {
    font-size: 16px;
}
html, body {
    padding: 0;
    margin: 0;
}
.centering {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

}
.vertical {
    display: flex;
    align-items: center;
    align-content: center;
}
</style>

<script>
export default {
}
</script>
