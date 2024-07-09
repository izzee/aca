<template>
  <nav class="work-nav">
    <NuxtLink 
      v-for="category in categories"
      v-html="category.replaceAll('-', ' ')"
      :key="category"
      :to="`/work/${category.replace(/ +/g, '-')}`"
    />
  </nav>
</template>
<script>

export default{  
  data() {
    return {
      categories: [
        'residential',
        'institutional',
        'on-the-boards',
        'product-design'

      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.work-nav {
  position: sticky;
  top: 64px;
  margin: 0 16px;
  padding: 10px 0 9px;
  background-color: $white;
  box-sizing: content-box;
  border-bottom: 1px solid $black;
  box-shadow: 16px 0 $white, -16px 0 $white;
  z-index: 3;

  @include bp(sm) {
    top: 128px;
    margin: 0 32px;
    box-shadow: 0 32px $white, 32px 0 $white, -32px 0 $white;
  }
}
</style>