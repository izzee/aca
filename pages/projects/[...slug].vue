<template>
  <ContentDoc v-slot="{ doc }">
    <main>
      <NuxtImg 
        :src="`projects/${doc.hero}`"
        provider="cloudinary"
      />
      <h1>{{ doc.title }}</h1>
      <p>Projects</p>
      <p>{{ doc.description }}</p>

      <div class="project-images">
        <NuxtImg 
          v-for="img in doc.images"
          :key="img.image"
          :src="`projects/${img.image}`" 
          :alt="img.alt || ''"
          :class="img.orientation"
          provider="cloudinary"
        />
      </div>
    </main>
    
  </ContentDoc>
</template>
