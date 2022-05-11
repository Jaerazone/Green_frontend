<template>
    <div class="start__page">
        <h1>시작 페이지</h1>
        <a @click="fnDoGoogleLogin_Popup">구글 로그인</a> <br>
        <a @click="$router.push('/login')">이메일 로그인</a>
    </div>
</template>

<script>
export default {
    methods : {
        fnDoGoogleLogin_Popup() {
            this.$store.dispatch('fnDoGoogleLogin_Popup')
        }
    }
}
</script>

<style>

</style>