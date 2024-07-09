<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <Hero :images="doc.hero"/>
      <main>
        <h2 v-html="doc.text"/>
        <Press :logos="doc.press"/>
        <div class="project-categories">
          <div v-for="category in doc.work" class="category-tile">
            <NuxtLink :to="`/work/${category.category}`">
              <NuxtImg 
                width="900px"
                :src="`/aca/${category.image}`" 
                provider="cloudinary"
              />
              <h2>{{category.category}}</h2>
            </NuxtLink>
          </div>
        </div>
      </main>
    </ContentDoc>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.project-categories {
  @include homepage-spacing;

  .category-tile {
    margin-top: 16px;
    display: block;
    text-decoration: none;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    h2 {
      color: $black;
      text-align: center;
      margin-top: 4px;
      text-transform: capitalize;
    }
  }

  @include bp(lg) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;

    .category-tile {
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 32px 16px $white inset;
      &:first-child {
        background-color: rgb(189, 114, 64);
      }
      &:nth-child(2) {
        background-color: rgb(64, 83, 189);
      }
      &:nth-child(3) {
        background-color: rgb(34, 165, 104);
      }
      img {
        transition: filter 0.5s, opacity 0.5s;
      }
      h2 {
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
        width: 100%;
        opacity: 0;
        color: $white;
        transition: opacity 0.5s;
        margin-top: 0;
      }
      &:hover {
        img {
          filter: blur(20px);
          opacity: 0.75;
        }
        h2 {
          opacity: 1;
        }
      }
    }
  }
}
</style>