<!-- 1-9) ->StartPage.vue 생성 
    1-10) router > index.js 라우터 주소들 수정하기
-->
<template>
    <div>
        <h1>시작페이지</h1>
        <a @click="fnDoGoogleLogin_Popup">구글 로그인</a> <br>
        <a href="/login">이메일 로그인</a>
    </div>
</template>

<script>
export default { // 1-13) 스토어에 있는 구글계정 로그인 처리 요청
    methods : {
        fnDoGoogleLogin_Popup(){
            this.$store.dispatch('fnDoGoogleLogin_Popup')
        }
    }
    //1-14) -> 로그인페이지와 회원가입페이지 만든 후 메인페이지 만들거임
    //-> LoginPage.vue 생성
}
</script>

<style>

</style>