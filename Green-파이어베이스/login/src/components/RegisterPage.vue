<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">회원가입 페이지</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3"> <!--sm 핸드폰화면일때-->
                <form @submit.prevent="fnRegisterUser">
                    <v-text-field name="Email" label="이메일" type="email" 
                    v-model="sEmail" required></v-text-field> 

                    <v-text-field name="password" label="비밀번호" type="password" 
                    v-model="sPassword" required></v-text-field>


                    <!-- 비밀번호 확인 : rules 속성-->
                    <!-- v-model에 들어온 sPassword과 
                    이밑에 v-model로 들고온 sConfirmPassword 가 같으면
                    rules로 v-model두개가 같은지 확인한다(computedㄱ ㄱ)
                      -->
                    <v-text-field name="ConfirmPassword" label="비밀번호확인" type="password" required
                    v-model = "sConfirmPassword"
                    :rules="[fnComparePassword]">

                <!-- 글자나 문자열이 들어가게되면 안에 넣어준 글자를 출력하고
                :rules="[true]" -> true를 넣어주면참이라고 판단함 -->
                    </v-text-field>

                    <!-- form에 속해진 값으로 넣기 위해 버튼타입을 submit으로 변경함 위 <form 태그에 submit연결> -->
                    <v-btn type="submit" color="amber" dark v-if="!fnGetLoading">회원가입</v-btn> <br>


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

                  
                    <!-- 오류메시지가 있을 경우 표시 -->
                    <v-alert class="mt-3" type="error" dismissible v-model="bAlert">
                        {{fnGetErrMsg}}
                    </v-alert>   
                </form>                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            sEmail :'',
            sPassword:"",
            sConfirmPassword :'',
            bAlert : false,
        }
    },
    computed : {
        fnComparePassword(){
            if(this.sPassword == this.sConfirmPassword) {
                return true
            }else return '비밀번호가 일치하지않습니다'
        },
        fnGetLoading(){
            return this.$store.getters.fnGetLoading
        },
        fnGetErrMsg(){
            return this.$store.getters.fnGetErrorMessage;
        },
    },
    // 회원가입 버튼을 눌렀을 때 실행되는 메서드
    methods : {
        fnRegisterUser() {
           if(this.fnComparePassword == true) {
               this.$store.dispatch('fnRegisterUser', {
                   pEmail : this.sEmail,
                   pPassword : this.sPassword
               })
           }
        }
    },
    
    watch : {
        // fnGetErrMsg의 값이 있으면 true로 바꿈
        fnGetErrMsg(pMsg) {
            if (pMsg) this.bAlert = true;
        },
        // pValue값이 false면 오류메세지의 값 초기화
        bAlert(pValue) {
            if (pValue == false) this.$store.commit('fnSetErrorMessage','');
        }
    }
}
</script>
