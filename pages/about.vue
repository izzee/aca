<template>
  <ContentDoc v-slot="{ doc }">
    <main>
      <h1>About</h1>
      <p v-for="line in doc.intro">{{line.line}}</p>
      <div v-for="person in doc.team">
        <p>{{person.name}}</p>
        <p>{{person.title}}</p>
      </div>
    </main>
  </ContentDoc>
</template>
