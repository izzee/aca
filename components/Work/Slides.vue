<template>
  <div class="work-grid">
    <div v-for="item in work" :key="item._path">
      <NuxtLink :to="item._path" class="thumbnail">
        <NuxtImg 
          provider="cloudinary"
          loading="lazy"
          width="600"
          :src="`/aca/${item.hero}`" 
        />
        <p v-html="item.title" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['category'])
  const work = await queryContent('work').where({ category: { $match: props.category } }).find()
</script>

<style lang="scss" scoped>
  .work-grid {
    display: grid;
    grid-gap: 16px;
    transition: opacity .5s;
    @include bp(sm) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    margin-top: 4px;
  }

  .thumbnail {
    &:not(:hover) {
      p {
        color: $black;
      }
    }
  }
</style>