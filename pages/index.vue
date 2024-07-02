<template>
  <div>
    <main>
      <h2>
        Arthur Chabon Architects is a New York based architecture and design firm with
        an international practice specializing in high-end <NuxtLink to="/projects/residential">residential</NuxtLink> and
        <NuxtLink to="/projects/institutional">institutional</NuxtLink> projects.
      </h2>
    </main>
  </div>
</template>

<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>