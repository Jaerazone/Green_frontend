<template>
    <div class="LoginView">
        <section id="loginPage" class="section">
            <div id="section__container">
                <h1>로그인</h1>

                <form action="" class="login__form">
                    <input id="아이디" type="text" placeholder="아이디를 입력해주세요"><br>
                    <input type="password" id="비밀번호" placeholder="비밀번호를 입력해주세요"><br>
                    <input type="checkbox" name="" id="보안접속" checked>
                    <p class="id__pw__search">아이디 | 비밀번호 찾기</p>
                    <input type="submit" value="로그인">
                </form>
                
                <button @click="$router.push('/sign')">회원가입</button>

            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>