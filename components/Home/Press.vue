<template>
  <div class="press">
    <div 
      v-for="rows in props.press"
      :class="`row col-${rows.logos.length}`"
    >
      <NuxtImg 
        v-for="logo in rows.logos" 
        :key="logo.image"
        :src="logo.image" 
        :alt="logo.alt || ''"
        height="80"
        class="press-icon"
        provider="uploadcare"
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['press'])
</script>

<style lang="scss" scoped>
.press {
  @include homepage-spacing;
  img {
    opacity: .2;
    display: block;
    margin: auto;
    margin-top: 32px;
    max-width: 90vw;
  }
  .col-2 img {
    height: 20px;
  }
  .col-3 img {
    height: 40px;
  }
  @include bp(sm){
    img {
      margin-top: 48px;
    }
    .col-2 img {
      height: 32px;
    }
    .col-3 img {
      height: 64px;
    }
  }
  @include bp(lg){
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1024px;
      margin: 80px auto 0;
      gap: 16px;
    }
    img {
      margin: 0;
    }
    .col-2 img {
      height: 40px;
    }
    .col-3 img {
      height: 80px;
    }
    .reorder-lg {
      order: -1;
    }
  }
  @include bp(xl){
    .row {
      max-width: 1280px;
      margin: 96px auto 0;
    }
    .col-2 img {
      height: 48px;
    }
    .col-3 img {
      height: auto;
      height: 96px;
    }
  }
}
</style>