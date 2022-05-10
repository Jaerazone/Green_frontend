<template>
    <div class="SingView">
        <section id="singupPage" class="section">
            <div id="section__container">
                <h1>회원가입</h1>
                <p><span class="import_start">*</span>필수입력사항</p>


                <form action="" class="sing__form">
                    <label for="아이디">아이디<span class="import_start">*</span></label>
                    <input id="아이디" type="text" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"><button @click.prevent>중복확인</button><br>
                    
                    <label for="비밀번호">비밀번호<span class="import_start">*</span></label>
                    <input id="비밀번호" type="text" placeholder="비밀번호를 입력해주세요"><br>
                    <label for="비밀번호확인">비밀번호확인<span class="import_start">*</span></label>
                    <input id="비밀번호확인" type="text" placeholder="비밀번호를 한번 더 입력해주세요"><br>
                    
                    <label for="이름">이름<span class="import_start">*</span></label>
                    <input id="이름" type="text" placeholder="이름을 입력해주세요"><br>

                    <label for="이메일">이메일<span class="import_start">*</span></label>
                    <input id="이메일" type="text" placeholder="예: jennymarket@market.com"><button @click.prevent>중복확인</button><br>

                    <label for="휴대폰">휴대폰<span class="import_start">*</span></label>
                    <input id="휴대폰" type="text" placeholder="숫자만 입력해주세요"><button disabled @click.prevent>인증번호 받기</button><br>

                    <label for="주소">주소<span class="import_start">*</span></label>
                    <button @click.prevent>주소검색</button>
                    <p>배송지에 따라 상품 정보가 달라질 수 있습니다</p>

                    <label for="성별"></label>
                    <input type="radio" name="gener" id="">남자
                    <input type="radio" name="gener" id="">여자
                    <input type="radio" name="gener" id="">선택안함 <br>

                    <label for="생년월일">생년월일</label>
                    <input type="date" value="2022-05-09" min="1900-01-01" max="2022-05-10"><br>

                    <input type="submit" value="가입하기">
                </form>
            </div>
        
        
        
        </section>


    </div>
</template>

<script>
export default {
    name : 'SingView',
}
</script>

<style scoped>

.import_start {
    color: red;
}
</style>
