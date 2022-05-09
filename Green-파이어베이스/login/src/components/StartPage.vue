<template>
    <v-container>
        <v-row>
            <v-col cols='12' class="text-center mt-5">
                <h1 class="display-1 my-1">시작화면 페이지</h1>
                <p class="body-1">로그인 없이 방문자 누구나 접속 가능한 페이지입니다</p>

                <!-- 시간지연의 경우 회전 프로그레스 원 표시 -->
                <v-progress-circular v-if="fnGetLoading"
                color="grey lighten-1" :width="7" :size="70"
                indeterminate>
                <!--회색원표시 , 이 안에 디자인을 넣어보자, 사이즈는 v-bind 사용 
                indeterminate : 원이 계속 돌아가는 디자인
                지연이 되었을때는 보이게하고
                지연이 안됬을때는 안보이게하려고한다. loading이라는 데이터를 만들어서 v-if씀!
                --> 

                </v-progress-circular>
            </v-col>

            <!-- 
                로그인을 눌렀을때 파이어베이스 인증하는것과
                이메일을 눌렀을때 이메일로그인으로 넘어가게한다(주소입력)
             -->
            <v-col cols="6" offset="3" class="text-center mt-5">  <!--offset으로 그리드 사이에 3개의 열 간격을 띄움 3/6/3 = 한줄12로 -->
                <v-btn @click="fnDoGoogleLogin_Popup" outlined color="red" large dark block>
                    <v-icon>mdi-google</v-icon>
                    구글 로그인
                </v-btn>
            </v-col>
            <v-col cols="6" offset="3" class="text-center mt-5">  <!--offset으로 그리드 사이에 3개의 열 간격을 띄움 3/6/3 = 한줄12로 -->
                <v-btn to="/login" color="red" large dark block>
                    <v-icon>mdi-email</v-icon>
                    이메일 로그인
                </v-btn>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    methods : {
        fnDoGoogleLogin_Popup() {
            // 스토어에 있는 구글계정 로그인 처리요청
            this.$store.dispatch('fnDoGoogleLogin_Popup');
        }   
    },

    computed : {
        fnGetLoading(){
            return this.$store.getters.fnGetLoading
        }
    }
}
</script>

<style>

</style>