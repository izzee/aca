<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <HomeHero 
        :images="doc.hero"
        v-motion-fade-visible-once 
      />
      <main>
        <h2 
          v-html="doc.text"
          v-motion-fade-visible-once 
        />
        <HomePress 
          :press="doc.press"
          v-motion-fade-visible-once
        />
        <HomeCategories 
          :work="doc.work"
          v-motion-fade-visible-once
        />
      </main>
    </ContentDoc>
  </NuxtLayout>
</template>

<script setup>
  const initial = ref({
    opacity: 0,
  })

  const enter = ref({
    opacity: 1,
  })
</script>