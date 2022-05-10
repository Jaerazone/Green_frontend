<template>
<!-- 1-16)  computed를 통해 user 정보를 들고오고 , return으로 보여줌
    이미지가 있다면 fnGetUser.photoURL 값이 있으면 참이니까, img를 보여준다.
    src 바인드를 이용해  이미지값을 들고온다
    fnGetUser로 들고온 데이터로 사진, 이름과 이메일이 html화면에 보인다
    1-17) router > index.js로 이동 (라우터 연결시켜준다)
-->
    <div>
        <h1>메인페이지입니다</h1>
        <img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" alt="">
        <h3>{{fnGetUser.name}}</h3>
        <p>{{fnGetUser.email}}</p>
    </div>
</template>


<script>
export default {
    computed : {
        fnGetUser(){
            let oUserInfo = this.$store.getters.fnGetUser
            return oUserInfo            
        }
    }
}
</script>

<style>

</style>