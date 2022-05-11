<template>
  <div id="app">
    <!-- 1) Navber -->
    <nav id="navber">
        <div class="navber__logo">
            <i class="fab fa-diaspora"></i>
            <a href="#">
                <img 
                src="@/assets/로고타이틀.png" 
                alt="Jenny's Market"
                class="navber__title"
                />
            </a>

        </div>
        <ul class="navber__menu">
            
            <li class="navber__menu__item active"><router-link to="/">Home</router-link></li>
            <li  class="navber__menu__item"><a href="#newproductPage">신상품</a></li>
            <li class="navber__menu__item"><a href="#hitproductPage">인기상품</a></li>
            <li class="navber__menu__item"><a href="#deadlinePage">오늘한정특가</a></li>
            <li class="navber__menu__item"><a href="#recipePage">레시피</a></li>
            <li class="navber__menu__item"><a href="#footer">하단</a></li>
        </ul>

        <ul class="naver__etc">
            <div v-if="!fnGetAuthStatus">
                <li class="naver__etc__item naver__etc__login"><router-link to="/login">로그인</router-link></li>
                <li class="naver__etc__item naver__etc__sign"><router-link to="/sign">회원가입</router-link></li>
            </div>
            <div v-else>
                <li>
                    <img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" alt="">
                    <p v-if="fnGetUser.name">{{fnGetUser.name}}님 환영합니다</p>
                    <p v-else>{{fnGetUser.email}}님 환영합니다</p>
                </li>
                <li class="naver__etc__item naver__etc__order"><router-link to="/order">장바구니</router-link></li>
                <li class="naver__etc__item naver__etc__order" @click="fnSignOut">로그아웃</li>
            </div>
        </ul>

        <!-- Toggle button -->
        <button class="navbar__toggle-btn">
            <i class="fa solid fa-bars"></i>
        </button>
    </nav>
    
    <router-view/>

    </div>
</template>

<script>

export default {
  name : 'App',
  components : {},
  computed : {
      fnGetAuthStatus() { // nav바 사용자 인증
        return this.$store.getters.fnGetAuthStatus
      },
      fnGetUser() {
            let oUserInfo = this.$store.getters.fnGetUser
            return oUserInfo
      },

  },
    methods : {
        fnSignOut() {
            this.$store.dispatch('fnSignOut')
        }
    }
}
</script>

<style>



/*//////////////// MainPage 스와이퍼 start ////////////////*/
.swiper {
    box-sizing: border-box;
}

.swiper-slide img {
    display: block;
    width: 100%;
}

.container {
    position : relative;
    margin: auto;
    width: 100%;
    max-width: 1080px;
    padding: 30px 20px;
}

.swiper-slide {
    width: 100%;
    background-color: #eee;
}

/* mainpage 슬라이더 안의 글씨변경 시작 */
.text-wrap {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: 600px;
    opacity: 0;
    margin: auto;
    text-align: center;
    transition: 0.5s;
    z-index: 1;
}
.swiper-slide-active .text-wrap{
    opacity: 1;
    top: 40%;
    transition: 0.5s;
}
.text-wrap h2 {
    color: #fff;
    font-size: 48px;
    line-height: 1.25;
    font-weight: bold;
    margin-bottom: 16px;
}
.text-wrap p {
    color: #fff;
    font-size: 16px;
}
/* 슬라이더 안의 글씨변경 끝 */

/* newproductpage 슬라이더 글씨 변경 start */
.new-text-wrap h2{
    font-size: 25px;
}
.new-text-wrap p{
    font-size: 18px;
}
/* newproductpage 슬라이더 글씨 변경 end */


.swiper-pagination-bullet {
    width:40px;
    height: 3px;
    border-radius: 0;
    background-color: #fff;
}

.swiper-pagination-bullet-active {
    background: #fff;
    width: 80px;
}

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
    opacity :0;
}

.swiper-button-next,
.swiper-button-prev {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(3px);
    background-size: 18px;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    position: absolute;
    /* top: 80px */

}

.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after,
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
    display: none;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    background-color: #ae00ff;
    box-shadow: 0 4px 12px rgba(162, 0, 255, 0.4);
}

.swiper-button-prev {
    background-image: url(@/assets/arrow_back_ios_black_24dp.svg);
    left: 20px;
}

.swiper-button-prev:hover {
    background-image: url(@/assets/arrow_back_ios_white_24dp.svg);
    left: 20px;
}

.swiper-button-next {
    background-image: url(@/assets/arrow_forward_ios_black_24dp.svg);
    right: 20px;
}

.swiper-button-next:hover {
    background-image: url(@/assets/arrow_forward_ios_white_24dp.svg);
    right: 20px;
}
/*//////////////// MainPage 스와이퍼 end ////////////////*/



/*//////////////// Global start ////////////////*/


:root {
    /* Color */
    --color-white: #ffffff;
    --color-light-white: #eeeeee;
    --color-dark-white: #bdbdbd;
    --color-pink: #fe918d;
    --color-dark-pink: #ff6863;
    --color-dark-grey: #4d4d4d;
    --color-grey: #616161;
    --color-light-grey: #7c7979;
    --color-blue: #73aace;
    --color-yellow: #fff7d1;
    --color-orange: #feb546;
    --color-black: #000000;
    --color-purple: #ba6ff7;
    --color-dark-purple: #9e2efa;
    
    /* Font size */
    --font-large: 48px;
    --font-medium: 28px;
    --font-regular: 18px;
    --font-small: 16px;
    --font-micro: 14px;
    
    /* Font weight */
    --weight-bold: 700;
    --weight-semi-bold: 600;
    --weight-regular: 400;

    /* Size */
    --size--border--radius: 4px;

    /* Animation */
    --animation-duration: 0.3s;
}

/* Universal tags */
* {
    box-sizing: border-box;
}

body{
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    cursor: default;
}

a {
    text-decoration: none;
    color: var(--color-white);
}

ul {
    list-style: none;
}

button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
}

/* Typography */

h1 {
    font-size: var(--font-large);
    font-weight: var(--weight-bold);
    color: var(--color-black);
    margin: 16px 0px;
    padding: 5px;
}

h2 {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    color: var(--color-black);
    margin: 8px 0;
}

h3 {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-black);
    margin: 8px 0;
}

p {
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
    color: var(--color-black);
    margin: 4px 0;
}

/* Navber */

html{   /* 네브바 클릭시 부드럽게 이동 */
	scroll-behavior: smooth;
}

#navber {
    position:fixed;
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-white);
    padding: 5px;
    background-color: var(--color-purple);
}

.navber__menu {
    display: flex;
}

.naver__etc {
    display: flex;
}

.navber__logo {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
}

.navber__logo img {
    width: 60%;
}

.navber__menu__item, .naver__etc__item{
    padding: 8px 12px;
    margin: 0 4px;
    cursor: pointer;
    border-radius: var(--size--border--radius);
}

.navber__menu__item.active {
    border: 1px solid var(--color-white);
} 

.navber__menu__item:hover , .naver__etc__item:hover{
    background-color: var(--color-dark-purple);
}
/* Toggle button */
.navbar__toggle-btn {
    position: absolute;
    top: 15px;
    right: 32px;
    font-size: 24px;
    color: var(--color-white);
    display: none;
    /* 
    display대신 opacity: 0; 을 사용하면 
    화면상에 보이지는 않지만 마우스로 클릭됨
    */
}


/* mainPage */
#mainPage {
    background: url('@/assets/main_background1.png') center/cover no-repeat;
    padding-top: 69px;
    text-align: center;
}
.home__logo {
    width: 250px;
}
.home__title {
    margin-top: 5px;
}
.home__title,
.home__description {
    color: var(--color-white);
}

.home__contact {
    color: var(--color-white);
    font-size: var(--font-regular);
    font-weight: var(--weight-bold);
    margin: 24px;
    padding: 8px 12px;
    border: 2px solid var(--color-white);
    border-radius: 4px;
}

/* Section common */
.section {
    padding: 50px;
    text-align: center;
    max-width: 1200px;
    margin: auto;
}
/* newproductPage 신상품 */
/* 38강 참조하기 */

/* hitproductPage 인기상품 */

/* deadlinePage 자정특가 */

/* recipePage 레시피 */
.recipePage__category {
    margin: 40px;
}

.category__btn {
    border: 1px solid var(--color-dark-white);
    border-radius: var(--size--border--radius);
    font-size: var(--font-regular);
    padding: 8px 30px;
}

.category__btn.active,
.category__btn:hover {
    background-color: var(--color-pink);
    color: var(--color-white);
}

.category__btn.active .category_count,
.category__btn:hover .category_count {
    opacity: 1;
    top: 0;
}

.category_count {
    background-color: var(--color-orange);
    border-radius: 50%;
    color: var(--color-white);
    width: 24px;
    height: 24px;
    line-height: 24px;
    display: inline-block;
    position: relative;
    top: -20px;
    left: 4px;
    opacity: 0;
    transition: all var(--animation-duration) ease;
}

.recipe_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

.list {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 350px;
    margin: 10px 2px;
    background-color: var(--color-light-white);
}

.list_img {
    max-width: 100%;
    max-height: 100%;
}

.list_description {
    position: absolute;
    background-color: var(--color-black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    opacity: 0;
    transform: translateY(10px);
    transition: all var(--animation-duration) ease-in;
}

.list_description h3 {
    color: var(--color-white);
}

.list:hover .list_description {
    opacity: 0.8;
    transform: translateY(0px);
}

.list_description h3::after {
    content: '';
    display: block;
    position: relative;
    left: 50%;
    width: 25px;
    height: 2px;
    margin-left: -12px;
    margin-top: 12px;
    background-color: var(--color-dark-white);
}

/* footer */
#footer {
    background-color: var(--color-purple);
}
#footer .section {
    padding: 10px;

}
.ft_section {  /* max-witdh 1200px이라 별도로 클래스 줬음 */
    padding: 50px;
    text-align: center;
    margin: auto;
}

.footer__title, .footer__number,
.footer__email, .footer__rights {
    color: var(--color-white);
}

.footer__title {
    margin: 10px 0;
}

.footer__links {
    font-size: var(--font-large);
    margin: 15px 0;
}

.footer__links i {
    transition: all var(--animation-duration) ease-in;
    padding: 0 10px;
}

.footer__links i:hover {
    transform: scale(1.1);
    color: var(--color-dark-white);
}

/* 반응형 For below 768px screen width */
@media screen and (max-width: 768px){
    /* 네브바 */
    .navbar__toggle-btn {
        display: block;
    }

    #navber {
        flex-direction: column;
        align-items: flex-start;
    }

    .navber__menu, .naver__etc {
        flex-direction: column;
        text-align: center;
        width: 100%;
        display: none;

    }

    /* newproduct */
    .new-text-wrap h2{
    font-size: 15px;
    }

    .new-text-wrap p{
        display: none;
    }

    /* 레시피 */
    .list {
        flex-grow : 1;

    }
    

}
/*//////////////// Global end ////////////////*/

</style>
