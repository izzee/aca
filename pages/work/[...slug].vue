<template>
  <NuxtLayout>
    <WorkNav />
    <ContentDoc>
      <template v-slot="{ doc }">
        <main>
          <NuxtImg 
            :src="`aca/${doc.hero}`"
            class="project-hero"
            provider="uploadcare"
            v-motion-fade-visible-once 
          />
          <div class="project-info">
            <h2  class="project-title">{{ doc.title }}</h2 >
            <div class="project-facts">
              <p v-html="doc.size" />
              <p v-html="doc.type" />
              <p v-html="doc.facts" />
            </div>
            <p class="project-description" v-html="doc.description" />
          </div>
          <div class="project-images">
            <NuxtImg 
              v-for="image in doc.images"
              :key="image.image"
              :src="`aca/${image.image}`" 
              :alt="image.alt || ''"
              :class="image.orientation"
              loading="lazy"
              provider="uploadcare"
              v-motion-fade-visible-once
              @load="updateLoadCount"
            />
          </div>
        </main>
      </template>
      <template #not-found>
      </template>
    </ContentDoc>
  </NuxtLayout>
</template>

<script setup>
  const loadCount = ref(0)

  const updateLoadCount = () => {
    
    console.log('loadcount', loadCount.value)
  }
</script>

<style lang="scss" scoped>
  .project-hero {
    width: 100%;
    object-fit: cover;
  }
  .project-info {
    position: relative;
    padding-top: 32px;
    display: grid;
    grid-gap: 16px;
    background-color: $white;
  }
  .project-images {
    position: relative;
    display: grid;
    grid-gap: 16px;
    padding: 32px 0;
    background-color: $white;
    min-height: 100vh;
    img {
      width: 100%;
      background-color: $white;
    }
  }
  @include bp(sm) {
    .project-hero {
      height: calc(100vh - 232px);
      box-shadow: 0 -32px $white;
    }
    .project-info {
      padding: 64px 0 32px;
      grid-gap: 32px;
      grid-template-rows: 32px 1fr;
      grid-template-columns: 180px auto;
      grid-template-areas: ". title" "facts description"; 
    }
    .project-title {
      grid-area: title;
      line-height: 1;
    }
    .project-facts {
      grid-area: facts;
    }
    .project-description {
      grid-area: description;
    }
    .project-images {
      padding: 32px 0;
      grid-gap: 32px;
      grid-template-columns: 1fr 1fr;

      img.landscape{
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

  }
</style>

