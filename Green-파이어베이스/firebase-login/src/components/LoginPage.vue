<template>
<!-- 1-14) 로그인 페이지 생성 
        submit을 클릭하면 form 전체가 실행되기때문에 
        submit="" 메소드 넣어서 실행,  새로고침 방지 submit.prevent
        이메일과 패스워드를 데이터에 저장하고 (v-model 이용)
        로그인을 눌렀을때 submit 발생-메소드실행
        ->index.js 의 구글인증을 통해 구글인증메서드실행
-->
    <div>
        <h1>로그인페이지입니다</h1>
        <form @submit.prevent=DoLogin>
            <label for="">이메일</label>
            <input type="text" v-model="sEmail">
            <label for="">비밀번호</label>
            <input type="password" v-model="sPassword">
            <input type="submit" value="로그인">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sEmail : '',
            sPassword : '',
        }
    },
    methods : {
        DoLogin() {
            this.$store.dispatch('DoLogin', { // v-model로 받은 값을 pEmail,pPassword 저장 보냄
                pEmail : this.sEmail,
                pPassword : this.sPassword,
            })
        } // 1-15) 회원가입 페이지 만들러 gogo -> RegisterPage.vue
        // 로그인과 다른게 별로 없어서 복붙함
    }
}
</script>

<style>

</style>