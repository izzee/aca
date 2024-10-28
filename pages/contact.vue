<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <main v-motion-fade-visible-once>
        <h2 v-html="doc.text"/>
        <form name="test2" method="POST" data-netlify="true">
          <input type="text" name="name" placeholder="Name">
          <button type="submit">Submit</button>
        </form>
      </main>
    </ContentDoc>
  </NuxtLayout>
</template>

<style scoped lang="scss">
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
 
  input, textarea {
    display: block;
    padding: 2px;
    border: none;
    border-radius: 0;
    background-color: transparent;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    font-family: proxima-nova, sans-serif;
    font-size: 16px;
    line-height: 1;
    width: 100%;

    &:focus {
      border-color: $blue;
      outline: none;
    }
  }
  input {
    margin-top: 32px;
    -webkit-appearance: none;
    &::placeholder {
      opacity: 1;
      color: $gray-medium;
    }
    &:focus {
      &::placeholder {
        color: $blue;
      }
    }
    &:invalid {
      outline: none;
      box-shadow: none;
      &::placeholder {
        color: $red;
      }
    }
  }
  textarea {
    flex: 1;
    resize: none;
    border: 1px solid black;
  }
  .message-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 32px;
    align-self: stretch;
    label {
      padding: 2px;
      height: 20px;
      color: $gray-medium;
    }
    textarea {
      min-height: 104px;
    }
    textarea:focus + label {
      color: $blue;
    }
  }
  button {
    -webkit-appearance: none;
    cursor: pointer;
    border: 1px solid black;
    font-size: 16px;
    height: 32px;
    width: 80px;
    display: block;
    margin: 24px 0;
    @include bp(sm) {
      margin-left: auto;
    }
    &:hover {
      color: $blue;
      border-color: $blue;
    }
 }
</style>