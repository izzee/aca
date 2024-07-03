<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <h2 v-html="doc.text"/>
    </ContentDoc>
  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>