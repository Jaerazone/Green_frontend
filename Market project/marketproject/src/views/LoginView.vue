<template>
    <div class="LoginView">
        <section id="loginPage" class="section">
            <div id="section__container">
                <h1>로그인</h1>



                <form action="" @submit.prevent="fnDoLogin" class="login__form">
                    <input id="이메일" type="text" v-model="sEmail" placeholder="이메일을 입력해주세요"><br>
                    <input type="password" id="비밀번호" v-model="sPassword" placeholder="비밀번호를 입력해주세요"><br>
                    <input type="checkbox" name="" id="보안접속" checked>
                    <p class="id__pw__search">아이디 | 비밀번호 찾기</p>
                    <input type="submit" value="로그인">
                </form>
                
                <button 
                style="margin: 5px; padding: 5px;
                       border: 1px red solid;"
                @click="fnDoGoogleLogin_Popup">
                    구글 로그인</button>

                <button @click="$router.push('/sign')">회원가입</button>

            </div>
        </section>
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
        fnDoLogin() {
            this.$store.dispatch('fnDoLogin', {
                pEmail : this.sEmail,
                pPassword : this.sPassword,
            })
        },
        fnDoGoogleLogin_Popup() {
            this.$store.dispatch('fnDoGoogleLogin_Popup')
        }
    }
}
</script>

<style>

</style>