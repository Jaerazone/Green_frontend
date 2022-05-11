<template>
    <div class="OrderView">
        <section id="orderPage" class="section">
            <div id="section__container">
                <h1>주문서</h1>
                <!-- 샛별배송 안내 -->
                <div class="order__service__notice">
                    <h3>주문 지역(부산/울산 일부)에 
                        <span style="color: var(--color-dark-purple)">샛별배송</span>
                        서비스가 시작되었습니다.</h3>
                    <div class="service__delivery">
                        <img src="" alt="">
                        <h4>이제부터 새벽에 배송됩니다.</h4>
                        <h5>매일 밤 6시까지 주문하시면<br>
                        다음날 아침 8시까지 배송됩니다.<br>
                        18시~22시 주문은 택배로 배송됩니다.</h5>
                    </div>
                    <div class="service__password">
                        <img src="" alt="">
                        <h4>공동현관 비밀번호를 입력해주세요.</h4>
                        <h5>새벽 시간 공동 현관 출입이 불가한 경우,<br>
                        공동현관 앞에 배송될 수 있습니다.</h5>
                    </div>
                </div>
                <!-- 주문 상품 리스트 -->
                <div class="order__product__list">
                    <h3>주문상품</h3>
                    <table class="order__product__item">
                        <tr>
                            <td>상품이름</td>
                            <td>상품개수</td>
                            <td>상품금액</td>
                        </tr>
                        <tr>
                            <td>상품이름</td>
                            <td>상품개수</td>
                            <td>상품금액</td>
                        </tr>
                        <tr>
                            <td>상품이름</td>
                            <td>상품개수</td>
                            <td>상품금액</td>
                        </tr>
                    </table>
                    
                </div>
                <!-- 주문자 정보 -->
                <div class="order__user__info">
                    <h3>주문자 정보</h3>
                    <table class="order__user__detail">
                        <tr>
                            <th>보내는 분</th>
                            <td>김재라</td>
                        </tr>
                        <tr>
                            <th>휴대폰</th>
                            <td>010-9990-7471</td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>seren0120@naver.com</td>
                        </tr>
                    </table>
                </div>
                <!-- 배송 정보 -->
                <div class="order__delivery__info">
                    <h3>배송 정보</h3>
                    <table class="order__delivery__detail">
                        <tr>
                            <th>배송지</th>
                            <td><button>기본배송지</button><br>
                                부산 부산진구 중앙대로 821 000동 0000호</td>
                        </tr>
                        <tr>
                            <th>상세 정보</th>
                            <td>김재라, 010-9990-7471</td>
                        </tr>
                    </table>
                </div>
                <!-- 결제 수단 -->
                <div class="order__payment__method">
                    <h3>결제 수단</h3>
                    <table class="order__payment__detail">
                        <tr>
                            <th>결제수단 선택</th>
                            <td>
                                <button class="payment__first">kakao pay</button>
                                <ul class="menu__payment">
                                    <li>신용카드</li>
                                    <li>간편결제</li>
                                    <li>휴대폰</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
                <!-- 결제 금액 -->
                <div class="order__payment__total">
                    <h3>결제 금액</h3>
                    <div class="order__money__info">
                        <dl class="amount__fst">
                            <dt>주문금액</dt>
                            <dd>45000<span>원</span></dd>
                        </dl>
                        <dl class="amount__sub">
                            <dt> >> 상품금액</dt>
                            <dd>50000<span>원</span></dd>
                        </dl>
                        <dl class="amount__sub">
                            <dt> >> 상품할인금액</dt>
                            <dd><span>-</span>5000<span>원</span></dd>
                        </dl>
                        <dl>
                            <dt>배송비</dt>
                            <dd><span>+</span>3000<span>원</span></dd>
                        </dl>
                        <dl>
                            <dt>쿠폰할인금액</dt>
                            <dd>0원</dd>
                        </dl>
                        <dl>
                            <dt>적립금사용</dt>
                            <dd>0원</dd>
                        </dl>
                        <dl class="amount__lst">
                            <dt>최종결제금액</dt>
                            <dd>48000<span>원</span></dd>
                        </dl>
                    </div>
                    <div class="order__money__notice">
                        <p>내일 18시까지 주문하면 
                            <span style="color:red">모레 아침8시 전</span>
                            에 도착해요</p>
                    </div>
                </div>
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