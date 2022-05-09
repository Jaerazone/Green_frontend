<template>
  <v-app>
    <v-navigation-drawer clipped app v-model='drawer'>  <!-- app : 가장위에뜸, clipped : 원하는곳에만 추가됨 value="true" : 안보여서 일단 true로해둠=> v-model='drawer' drawer가 참 거짓 이렇게 나뉨-->
      <v-list>
        <!-- items 배열을 읽어와서 메뉴로 바인딩 -->
        <v-list-item v-for="(item, i) in fnGetMenuItems" :key="i" :to="item.to"> <!-- :to 아이템의 이동경로 -->
          <v-list-item-action >
            <!-- v-html을 사용하면 그 값이 html형식으로 들어간다 -->
            <v-icon v-html="item.icon"></v-icon>
            <!--  <v-icon>mdi-arrow-rignt-bold-box-outline</v-icon> 원래는 이렇게 썼었다   -->
          </v-list-item-action>
          <v-list-item-title v-html="item.title"></v-list-item-title>
        </v-list-item>
      <!-- 로그인이 된 경우에만 로그아웃 버튼을 표시함 -->
      <v-list-item @click="fnDoLogout" v-if="fnGetAuthStatus">
        <v-list-item-action>
          <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
        </v-list-item-action>
        <v-list-item-title>로그아웃</v-list-item-title>
      </v-list-item>
      <!-- 로그인이 된 경우에만 회원탈퇴 버튼을 표시함 -->
        <v-list-item @click="fnDoDelete" v-if="fnGetAuthStatus">
          <v-list-item-action>
            <v-icon>mdi-arrow-right-bold-box</v-icon>
          </v-list-item-action>
          <v-list-item-title>회원탈퇴</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <!-- app-bar 시작-->
    <v-app-bar app clipped-left color="primary" dark>
      <!-- class를 통해 sm(중단점)크기 보다 크면 숨긴다 , 줄3개 , class="hidden-sm-and-up: sm보다 크다면 숨긴다-->
      <v-app-bar-nav-icon @click="drawer= !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <router-link to="/" > <!--라우터 링크안에 아이콘로고를 넣어서 클릭하면 /경로로 이동-->
        <!-- class를 통해 xs(중단점)크기일때만 숨긴다   hidden-xs-only : xs 사이즈일때만 숨긴다-->
        <v-icon class="hidden-xs-only">mdi-home</v-icon>
      </router-link>
      <v-toolbar-title class="headline"> 이메일-구글 인증 로그인 </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- 툴바 메뉴 = 네비게이션 서랍과 동일한 메뉴 -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="(item,i) in fnGetMenuItems" :key="i" :to="item.to">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <!-- 로그인 된 경우에만 로그아웃 버튼을 표시 -->
        <v-btn @click="fnDoLogout" text v-if="fnGetAuthStatus">
          <v-icon left>mdi-arrow-right-bold-box-outline</v-icon>
          로그아웃
        </v-btn>
        <!-- 로그인 된 경우에만 회원탈퇴 버튼을 표시 -->
        <v-btn @click="fnDoDelete" text v-if="fnGetAuthStatus">
          <v-icon left>mdi-arrow-right-bold-box</v-icon>
          회원탈퇴
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <div class="mx-auto">&copy; CODE-DESIGN.web.app </div>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  data() {
    return  {
      drawer : false, // 처음값은 false고, icon을 눌렀을때 true가 되도록하려고함 이부분 클릭했을대 -> <v-app-bar-nav-icon class="hidden-sm-and-up"><
    }
  },
  computed : {
    // 스토어에서 현재 인증상태인지 반환(로그인)
    // data의 login : false 삭제하고 로그아웃버튼에 v-if="fnGetAuthStatus" 넣어줌
    fnGetAuthStatus() {
      return this.$store.getters.fnGetAuthStatus
    },
    // 로그인 여부에 따라 다르게 탐색서랍과 툴바메뉴명의 항목을 배열로 반환
     fnGetMenuItems() { // fn의미 : 만들어준함수다 (안적어도됨)
      if(!this.fnGetAuthStatus) { // 로그인을 하지 않았다면? 배열[ ]을 리턴해준다
        return [{
          title : '회원가입',
          to : '/register',
          icon : 'mdi-lock-open-outline'
        }]
      } else {
        return [{
          title :'메인 페이지',
          to : '/main',
          icon : 'mdi-account'
        }]
      }
      
    }
  },
  methods : {
    fnDoLogout() { // 클릭했을때 로그아웃되도록, 버튼에 추가
      this.$store.dispatch('fnDoLogout')
    },
    fnDoDelete(){ // 클릭했을때 회원탈퇴되도록, 버튼에 추가
      this.$store.dispatch('fnDoDelete')
    }
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
