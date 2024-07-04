
<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <main>
        <h1>About</h1>
        <p v-for="text in doc.intro">{{text.text}}</p>
        <div v-for="person in doc.team">
          <NuxtImg 
            provider="cloudinary"
            width="320"
            :src="`/aca/${person.image}`" 
          />
          <p>{{person.name}}</p>
          <p>{{person.title}}</p>
        </div>
      </main>
    </ContentDoc>
  </NuxtLayout>
</template>
