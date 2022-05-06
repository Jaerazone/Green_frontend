<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center mt-5">
                <h1 class="display-1 my-1">로그인 후 화면 페이지</h1>
                <p class="body-1">로그인을 통해 인증된 사용자가 방문한 페이지입니다.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="10" offset="1" sm="6" offset-sm="3" class="text-center mt-5">
                <!-- 구글 로그인인 경우 사진 이미지 정보 표시 -->
                <!-- 그림은 있을수도 없을수도 있어서 v-if로 기재하려고함 -->
                <!-- index.js에서 (1)로그인성공했을때 signInWithEmailAndPassword 여기서 가져온다-->
                <img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" class="avatar_style" alt="" >
                <!-- 계정 이름과 이메일 표시 -->
                <h3 class="pt-2 mt-4 grey lighten-2">{{fnGetUser.name}}</h3>
                <p class="pb-2 grey lighten-2">{{fnGetUser.email}}</p>
            </v-col>
            <v-col cols="6" offset="3"  class = "text-center mt-1" >
                <v-btn color="amber" dark block>
                    <v-icon left>mdi-email</v-icon>
                    비밀번호 재설정
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    computed : {
        fnGetUser () { // 이걸 통해서 이름과 이메일을 표시하려고함
            let oUserInfo = this.$store.getters.fnGetUser
            return oUserInfo
        }
    }
}
</script>

<style scoped>
    .avatar_style {
        width : 100px;
        height : 100px;
        border-radius: 50%;
    }
</style>