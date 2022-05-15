<template>

<nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
  <div class="navbar-brand" href="#">Vueblog
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"
          href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1"
          aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<router-link to="/">홈페이지</router-link>
<router-link to="/list">리스트페이지</router-link>

<div class="mt-4">
  <router-view er-view :블로그글="블로그글" ></router-view>
</div>

<!-- <List :블로그글="블로그글" /> -->

</template>

<script>

// import List from './components/ListForm.vue';
import blog from './assets/blog.js';

export default {
  name: 'App',
  data() {
    return {
      블로그글 : blog,
    }
  },
  components: {
    // List : List,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
