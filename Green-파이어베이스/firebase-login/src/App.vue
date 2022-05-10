<template>
  <div id="app">
    <nav v-if="!fnGetAuthStatus"> <!-- 1-12) v-if, v-else 를 사용해 로그인하면 보이고 안보이고 설정 -> StartPage.vue 이동 -->
       <!-- 1-8) App.vue 라우터설정 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/register">회원가입</router-link>
    </nav>
    <nav v-else>
      <router-link to="/">Home</router-link> |
      <a>로그아웃</a> |
      <a>회원탈퇴</a>
    </nav>
    <!-- 1-9) ->StartPage.vue 생성 -->
    <router-view/>
  </div>
</template>

<script>
export default { // 1-11)
  computed : {
    fnGetAuthStatus() {
      return this.$store.getters.fnGetAuthStatus
    },
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
