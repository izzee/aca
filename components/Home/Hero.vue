<template>
  <div class="hero">
    <CldImage 
      v-for="(image, index) in props.images" 
      :key="image.image"
      :src="image.image" 
      :alt="image.alt || ''"
      :class="`${activeSlide === index ? 'active' : ''}`"
      provider="uploadcare"
    />
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const props = defineProps(['images'])

  const activeSlide = ref(0)

  function updateSlideshow() {
    const { value } = activeSlide
    activeSlide.value = value < props.images.length - 1 ? value + 1 : 0;
  }

  onMounted(() => {
    window.setInterval(updateSlideshow, 4000);
  })
</script>

<style lang="scss" scoped>
.hero {
  transition: transform .5s;
  transform-origin: top;
  margin: auto;
  position: relative;
  overflow: hidden;
  height: 50vh;
  width: calc(100vw - 32px);
  
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1s;
    &.active {
      opacity: 1;
    }
  }

  @include bp(sm){
    height: calc(100vh - 160px);
    width: calc(100vw - 64px);
    max-width: calc(1440px - 64px);
  } 
}
</style>