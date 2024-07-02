<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <h2 v-html="doc.text"/>
    </ContentDoc>
  </NuxtLayout>
</template>