<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <main v-motion-fade-visible-once>
        <h2 v-html="doc.text"/>
      </main>
    </ContentDoc>
  </NuxtLayout>
</template>

<style scoped lang="scss">
  h2 {
    flex: 1;
  }
</style>