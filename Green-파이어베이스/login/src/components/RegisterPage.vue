<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">로그인 페이지</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center" cols="8" offset="2" sm ="6" offset-sm="3"> <!--sm 핸드폰화면일때-->
                <form action="">
                    <v-text-field name="Email" label="이메일" type="email" required></v-text-field> 
                    <v-text-field name="Password" label="비밀번호" type="password" required></v-text-field>


                    <!-- 비밀번호 확인 : rules 속성-->
                    <v-text-field name="ConfirmPassword" label="비밀번호확인" type="password" required
                    :rules="['비밀번호가일치하지않습니다']">
                <!-- 글자나 문자열이 들어가게되면 안에 넣어준 글자를 출력하고
                :rules="[true]" -> true를 넣어주면참이라고 판단함 -->
                    </v-text-field>


                    <v-btn color="amber" dark v-if="!loading">로그인</v-btn> <br>


                    <!-- 시간지연의 경우 회전 프로그레스 원 표시 -->
                    <v-progress-circular v-if="loading"
                    color="grey lighten-1" :witdh="7" :size="70"
                    indeterminate
                    > <!--회색원표시 , 이 안에 디자인을 넣어보자, 사이즈는 v-bind 사용 
                    indeterminate : 원이 계속 돌아가는 디자인
                    지연이 되었을때는 보이게하고
                    지연이 안됬을때는 안보이게하려고한다. loading이라는 데이터를 만들어서 v-if씀!
                    --> 
                    </v-progress-circular>

                  
                </form>                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            loading : false
        }
    }
}
</script>

<style>

</style>