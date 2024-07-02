
<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <h1>About</h1>
      <p v-for="text in doc.intro">{{text.text}}</p>
      <div v-for="person in doc.team">
        <p>{{person.name}}</p>
        <p>{{person.title}}</p>
      </div>
    </ContentDoc>
  </NuxtLayout>
</template>
