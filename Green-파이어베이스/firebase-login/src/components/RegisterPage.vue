<template>
<!-- 1-15) 회원가입 페이지 생성
        -> 다 작성 후 MainPage.vue 생성
-->
    <div>
        <h1>회원가입 페이지입니다</h1>
        <form @submit.prevent=fnRegisterUser>
            <label for="">이메일</label>
            <input type="text" v-model="sEmail">
            <label for="">비밀번호</label>
            <input type="password" v-model="sPassword">
            <input type="submit" value="회원가입">
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
        fnRegisterUser() {
            this.$store.dispatch('fnRegisterUser', { // v-model로 받은 값을 pEmail,pPassword 저장 보냄
                pEmail : this.sEmail,
                pPassword : this.sPassword,
            })
        }
    }
}
</script>

<style>

</style>