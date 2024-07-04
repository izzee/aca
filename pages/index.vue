<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <Hero :images="doc.hero"/>
      <main>
        <h2 v-html="doc.text"/>
        <Press :logos="doc.press"/>
      </main>
    </ContentDoc>
  </NuxtLayout>
</template>
