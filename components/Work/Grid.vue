<template>
  <div class="work-grid">
    <div 
      v-for="item in work" 
      :key="item._path"
      v-motion-fade-visible-once
    >
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
  
  const pageMap = {
    'residential': 'residential-work',
    'institutional': 'institutional-work'
  }
  
  const pageName = pageMap[props.category]
  if (!pageName) {
    throw new Error(`Unknown category: ${props.category}`)
  }
  
  // Fetch work items and ordering in parallel
  const [workItems, workPage] = await Promise.all([
    queryContent('work').where({ category: { $eq: props.category } }).find(),
    queryContent(pageName).findOne()
  ])
  
  const projectTitles = workPage?.projects?.map(p => p.project) || []
  
  // Create a map for quick lookup
  const workMap = new Map(workItems.map(item => [item.title, item]))
  
  // Reorder based on the project list, maintaining any items not in the list at the end
  const orderedWork = []
  const usedTitles = new Set()
  
  // Add items in the specified order
  for (const title of projectTitles) {
    const item = workMap.get(title)
    if (item) {
      orderedWork.push(item)
      usedTitles.add(title)
    }
  }
  
  // Add any remaining items that weren't in the ordered list
  for (const item of workItems) {
    if (!usedTitles.has(item.title)) {
      orderedWork.push(item)
    }
  }
  
  const work = orderedWork
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