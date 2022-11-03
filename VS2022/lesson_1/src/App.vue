<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

let msg_a="abcdsfdsaf"
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  <br>  
npm init vue@latest
> cd <your-project-name>
> npm install
> npm run dev




<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

  <main>
    <!-- <TheWelcome /> -->
    <div  class="hh">
      <h1>{{msg_a}}</h1>
    </div>
    
  </main>
</template>

<style scoped>
  .hh{
    width: 400px;
    height: 400px;
    align-content: center;

    margin: 600px,0,0,0;
  }
  .hhh{
    display: block;
  }
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
