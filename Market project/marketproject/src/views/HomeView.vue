<template>
  <div>
        <!-- 2) Home 화면 -->
        <section id="mainPage">
            <!-- Slider main container -->
            <div class="swiper-container">
                <!-- Additional required wrapper -->
                  <swiper 
                    :slidesPerView="1" 
                    :spaceBetween="30"
                    :loop="true"
                    :autoplay="{
                      delay: 3500,
                      disableOnInteraction: false,
                    }"
                    :pagination="{
                      clickable: true,
                    }"
                    :navigation="true"
                    :modules="modules"
                    class="swiper-wrapper"
                  >
                  <!-- 
                    slidesPerView : 한 슬라이드에 보여줄 개수
                    spaceBetween : 슬라이드 사이 여백
                    loop : // 슬라이드 끝<->마지막 반복여부
                    autoplay : 자동슬라이드 (false-비활성화), delay: 시간설정, 
                    disableOnInteraction : false-스와이프 후 자동재생
                    pagination : 호출(pager)여부, 페이징을 클릭하면 해당영역으로 이동, 필요시 지정해줘야 기능 작동 
                    navigation : 버튼기능 true
                    modules : 버튼 클릭시 넘어감
                    https://shadesign.tistory.com/entry/swiper-slide-%EC%B4%9D%EC%A0%95%EB%A6%AC%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%81%EC%9A%A9-%EC%98%B5%EC%85%98
                    https://swiperjs.com/demos
                    Parallax 활용 체크
                  -->
                    <!-- Slides -->
                    <swiper-slide class="swiper-slide">
                        <a href="#">
                            
                            <img src="@/assets/main_image1.png"  alt="">
                            <div class="text-wrap">
                                <h2>텍스트1</h2>
                                <p>텍스트</p>
                            </div>
                        </a>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <a href="#">
                            <div class="text-wrap">
                                <h2>텍스트2</h2>
                                <p>텍스트</p>
                            </div>
                            <img src="@/assets/main_image2.png"  alt="">
                        </a>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <a href="#">
                            <img src="@/assets/main_image3.png"  alt="">
                            <div class="text-wrap">
                                <h2>텍스트3</h2>
                                <p>텍스트</p>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

            </div>

            <h1 class="home__title"> Welcome to Jenny Market </h1>
            <h2 class="home__description"> Jenny의 마켓컬리 </h2>
            <button class="home__contact"> Contact Market </button>
            <div class="about__home"></div>
            
        </section>

        <!-- 3) Newproduct 신상품 -->
        <!-- <NewproductPage></NewproductPage> -->

        <section id="newproductPage" class="section">
            <div id="section__container" >
                <h1>신상품</h1>
                <p>매주 월요일 갱신되는 트렌디한 신상품 </p>

                <div class="about__newproduct">
                    <div class="major">
                        <div class="major__img"></div>
                        <div class="major__title"></div>
                        <div class="major__description"></div>
                    </div>
                </div>

                    <swiper
                        :slidesPerView="3"
                        :spaceBetween="30"
                        :slidesPerGroup="3"
                        :loop="true"
                        :loopFillGroupWithBlank="true"
                        :navigation="true"
                        :modules="modules"
                        class="swiper-wrapper"
                    >
                    <!-- 
                        slidesPerView : 한슬라이드에 3개 보이게함
                        spaceBetween : 슬라이드 사이 여백 30px
                        slidesPerGroup : 슬라이드 3그룹
                        loop : 슬라이드 끝<->마지막 반복여부
                        loopFillGroupWithBlank : 그룹수가 맞지않을때 빈칸으로 남겨둠 (3개중 2개비면 1개생성,2개빈칸생성)
                        navigation : 버튼기능 true
                     -->

                        <swiper-slide >
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품1.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>콰트로 포르마지 피자</h2>
                                    <p>6,500원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품2.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>우삼겹 우동</h2>
                                    <p>7,200원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품3.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>아메리칸 수제쿠키</h2>
                                    <p>4,000원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품4.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>문어 닮은 소떡</h2>
                                    <p>7,600원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품5.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>춘천 닭갈비</h2>
                                    <p>9,900원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품6.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>파스타 밀키트 3종</h2>
                                    <p>18,900원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품7.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>게맛살크리미</h2>
                                    <p>6,000원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품8.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>금실딸기</h2>
                                    <p>15,900원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품9.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>성주 참외</h2>
                                    <p>12,900원</p>
                                </div>
                            </a>
                        </swiper-slide>
                    </swiper>
                    

            </div>
        </section>

        
        <!-- Infinite loop with slides per group -->

        <!-- 4) Hitproduct 인기상품 -->
        <HitproductPage></HitproductPage>
        <section id="hitproductPage" class="section">
            <div id="section__container" >
                <h1>인기상품</h1>
                <p>제니마켓에서 가장 많이 팔린 인기상품을 지금 만나보세요</p>
                <div class="about__hitproduct"></div>

                <swiper
                        :slidesPerView="3"
                        :spaceBetween="30"
                        :slidesPerGroup="3"
                        :loop="true"
                        :loopFillGroupWithBlank="true"
                        :navigation="true"
                        :modules="modules"
                        class="swiper-wrapper"
                    >
                    <!-- 
                        slidesPerView : 한슬라이드에 3개 보이게함
                        spaceBetween : 슬라이드 사이 여백 30px
                        slidesPerGroup : 슬라이드 3그룹
                        loop : 슬라이드 끝<->마지막 반복여부
                        loopFillGroupWithBlank : 그룹수가 맞지않을때 빈칸으로 남겨둠 (3개중 2개비면 1개생성,2개빈칸생성)
                        navigation : 버튼기능 true
                     -->

                        <swiper-slide >
                            <a href="#">
                                <img src="@/assets/인기상품_img/네스프레소캡슐.png" alt="">
                                <div class="new-text-wrap">
                                    <h2>네스프레소 캡슐 11종</h2>
                                    <p>7,900원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/인기상품_img/감자칩.png" alt="">
                                <div class="new-text-wrap">
                                    <h2>감자칩 4종</h2>
                                    <p>3,700원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/인기상품_img/크러핀.png" alt="">
                                <div class="new-text-wrap">
                                    <h2>오르락베이커리 크러핀 4종</h2>
                                    <p>4,300원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/인기상품_img/쑥이티떡.png" alt="">
                                <div class="new-text-wrap">
                                    <h2>쑥 이티떡</h2>
                                    <p>10,000원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/인기상품_img/태극당몽쉘.png" alt="">
                                <div class="new-text-wrap">
                                    <h2>태극당x몽쉘</h2>
                                    <p>4,800원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/인기상품_img/과일주스.png" alt="">
                                <div class="new-text-wrap">
                                    <h2>과일 주스 8종</h2>
                                    <p>5,800원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/인기상품_img/그래놀라.png" alt="">
                                <div class="new-text-wrap">
                                    <h2>그래놀라 7종</h2>
                                    <p>10,000원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/인기상품_img/홍루이젠샌드위치.png" alt="">
                                <div class="new-text-wrap">
                                    <h2>홍루이젠 샌드위치 3종</h2>
                                    <p>3,500원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/인기상품_img/제스프리키위.png" alt="">
                                <div class="new-text-wrap">
                                    <h2>제스프리 골드키위 5입</h2>
                                    <p>11,000원</p>
                                </div>
                            </a>
                        </swiper-slide>
                    </swiper>



            </div>
        </section>
        

        <!-- 5) Deadlind 자정특가 -->
        <section id="deadlinePage" class="section">
            <div id="section__container" >
                <h1>
                    <span><img src="@/assets/시계.png" alt=""> </span>
                    일일특가
                    <DeadlinePage/>
                </h1>
                <p>오늘의 타임특가 제니 PICK! 매일 자정 새로운 상품</p>
                <div class="about__deadline"></div>

                <swiper
                        :slidesPerView="3"
                        :spaceBetween="30"
                        :slidesPerGroup="3"
                        :loop="true"
                        :loopFillGroupWithBlank="true"
                        :navigation="true"
                        :modules="modules"
                        class="swiper-wrapper"
                    >
                    <!-- 
                        slidesPerView : 한슬라이드에 3개 보이게함
                        spaceBetween : 슬라이드 사이 여백 30px
                        slidesPerGroup : 슬라이드 3그룹
                        loop : 슬라이드 끝<->마지막 반복여부
                        loopFillGroupWithBlank : 그룹수가 맞지않을때 빈칸으로 남겨둠 (3개중 2개비면 1개생성,2개빈칸생성)
                        navigation : 버튼기능 true
                     -->

                        <swiper-slide >
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품1.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>콰트로 포르마지 피자</h2>
                                    <p>6,500원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품2.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>우삼겹 우동</h2>
                                    <p>7,200원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품3.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>아메리칸 수제쿠키</h2>
                                    <p>4,000원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품4.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>문어 닮은 소떡</h2>
                                    <p>7,600원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품5.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>춘천 닭갈비</h2>
                                    <p>9,900원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품6.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>파스타 밀키트 3종</h2>
                                    <p>18,900원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품7.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>게맛살크리미</h2>
                                    <p>6,000원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품8.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>금실딸기</h2>
                                    <p>15,900원</p>
                                </div>
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="#">
                                <img src="@/assets/신상품_img/신상품9.jpg"  alt="">
                                <div class="new-text-wrap">
                                    <h2>성주 참외</h2>
                                    <p>12,900원</p>
                                </div>
                            </a>
                        </swiper-slide>
                    </swiper>


            </div>
        </section>
        
        <!-- 6) Recipe 레시피 -->
        <RecipePage></RecipePage>

        <!-- 7) footer -->
        <FooterPage></FooterPage>
        
    
  </div>
</template>

<script>
// @ is an alias to /src
import DeadlinePage from '@/components/DeadlinePage.vue';
import RecipePage from '@/components/RecipePage.vue';
import FooterPage from '@/components/FooterPage.vue';


import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Pagination, Navigation } from "swiper";

export default {
  name: 'HomeView',
  components: {
    DeadlinePage,
    RecipePage,
    FooterPage,
    Swiper,
    SwiperSlide
  },
    setup() {
      return {
          modules: [Autoplay, Pagination, Navigation],
      };
  },
}
</script>

