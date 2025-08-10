<template>
  <div class="work-grid">
    <div v-for="item in work" :key="item._path">
      <NuxtLink :to="item._path" class="thumbnail">
        <NuxtImg 
          provider="uploadcare"
          loading="lazy"
          width="600"
          :src="item.hero" 
        />
        <p v-html="item.title" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['category'])
  
  // Map category prop to work-pages file
  const pageMap = {
    'residential': 'residential-work',
    'institutional': 'commercial-work'
  }
  
  const pageName = pageMap[props.category]
  if (!pageName) {
    throw new Error(`Unknown category: ${props.category}`)
  }
  
  // Get the ordered list of project titles
  const workPage = await queryContent(`work-pages/${pageName}`).findOne()
  const projectTitles = workPage?.projects?.map(p => p.project) || []
  
  // Fetch the full project data for each title in order
  const work = []
  for (const title of projectTitles) {
    const project = await queryContent('work').where({ title: { $eq: title } }).findOne()
    if (project) {
      work.push(project)
    }
  }
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