
<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <main v-motion-fade-visible-once>
        <section class="about-intro">
          <NuxtImg 
            :src="doc.hero"
            provider="uploadcare"
          />
          <div class="content">
            <p v-for="text in doc.intro">{{text.text}}</p>
          </div>
        </section>
        
        <section class="about-principal">
        <NuxtImg :src="doc.principal_image" provider="uploadcare"/>
      
          <div class="principal-info">
            <p> {{doc.principal_name}} </p>
            <p> {{doc.principal_title}} </p>
            <p class="info-body" >{{doc.principal_text}}</p>
          </div>
        </section>

        <section class="about-team">
          <div v-for="person in doc.team">
            <NuxtImg 
              provider="uploadcare"
              width="320"
              :src="person.image" 
            />
            <p>{{person.name}}</p>
            <p>{{person.title}}</p>
          </div>
        </section>
      </main>
    </ContentDoc>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
  .about-intro {
    display: grid;
    grid-gap: 16px;
    max-width: 1536px;
    margin: auto;

    img {
      width: 100%;
      height: auto;
    }

    p + p {
      margin-top: 16px;
    }
    @include bp(sm) {
      grid-gap: 32px;
    }
    @include bp(lg) {
      grid-template-columns: 1fr 1fr;
      
      img {
        grid-area: 1/2;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .about-principal {
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 16px;
    grid-gap: 16px;
    background-color: $gray-light;
    p {
      text-align: center;
    }
    p.info-body {
      text-align: left;
    }
    img {
      border-radius: 100%;
      width: 100%;
      max-width: 320px;
      margin: auto;
    }
    @include bp(sm) {
      padding: 32px;
    }
    @include bp(lg) {
      grid-gap: 32px;
      grid-template-columns: 320px 1fr;
      p {
        text-align: left;
      }
    }
  }
  .info-body {
    margin-top: 16px;
  }
  .about-team {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;

    @include bp(sm) {
      grid-gap: 32px;
      grid-template-columns: repeat(3, 1fr);
    }

    @include bp(lg){
      grid-template-columns: repeat(5, 1fr);
    }
    .avatar {
      text-align: center;
    }
    img {
      border-radius: 100%;
      width: 100%;
      max-width: 320px;
      margin: auto;
      margin-bottom: 16px;
      background-color: $gray-light;
    }
  }
</style>

