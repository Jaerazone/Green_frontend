<template>
  <div class="home">
    <label for="유저이름">유저이름</label> <br>
    <input type="text" id="유저이름" v-model="user"> 
    <button @click="loginuser" >확인</button>
    <p>{{$store.state.user}}</p>
    <!--모두 확인하기위해 router >store.js vuex에다가 여러곳에 사용할 user를 넣어준다
    받아온 값을 아래 data에 저장하고, method의 mutation에 저장해주고 그냥 method에 저장할수도있지만 
    store-index에서 확인하기 힘들기 때문에 mutation에다가 적어준다
    유저이름 입력해주면(v-model로 보냄) -> data에서 받고 - data는 리턴형식으로 적어줘야한다
    그다음 loginuser()메소드를 만들어서 버튼을 클릭했을때 
    store.mutation에 있는메소드사용할것이라 적어준다 -> store-indes.js여기도 만들어줘야함
    store로 가서 loginuser라는 mutation만들로 고고~
    만들고와서
    하나더 추가해야함 로그인성공하면- loginuser메소드안에 push로 /list 페이지로 이동하도록해줌
    ------
    memolist.vue 생성
    여기 안에서는 글의 내용을 보여준다
    이전과 동일하게 table을 이용해서 보여주도록한다
    gogo~
    -->
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      user : ""
    }
  },
  methods : {
    loginuser () {
      this.$store.commit('loginuser', this.user) // user 문자열 하나이기때문에 , this.user이라고 써주고, 
      // /list로 이동
      this.$router.push('/list');
    }
  }
}
</script>
