<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <main>
        <h2 v-html="doc.text"/>
      </main>
    </ContentDoc>
  </NuxtLayout>
</template>