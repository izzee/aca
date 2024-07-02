<template>
  <main>
    <p>{{props.category}}</p>
    <div v-for="project in projects" :key="project._path">
      <NuxtLink :to="project._path">
        <NuxtImg 
          provider="cloudinary"
          width="600"
          :src="`/projects/${project.hero}`" 
        />
        <p v-html="project.title" />
      </NuxtLink>
    </div>
  </main>
</template>

<script setup>
  const props = defineProps(['category'])
  const projects = await queryContent('projects').where({ category: { $match: props.category } }).find()
</script>
