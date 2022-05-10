<template>
    <div>
        <section id="recipePage" class="section">
            <div id="section__container" >
                <h1>Jenny의 레시피</h1>
                <p>만드는 레시피와 상품을 동시에 볼 수 있어요</p>
                <div class="recipePage__category">
                    <button class="category__btn active">
                        All<span class="category_count">10</span>
                    </button>
                    <button class="category__btn">
                        일상<span class="category_count">3</span>
                    </button>
                    <button class="category__btn">
                        손님접대<span class="category_count">2</span>
                    </button>
                    <button class="category__btn">
                        술안주<span class="category_count">2</span>
                    </button>
                    <button class="category__btn">
                        다이어트<span class="category_count">2</span>
                    </button>
                    <button class="category__btn">
                        이유식<span class="category_count">1</span>
                    </button>
                </div>
                <div class="recipe_list">
                    <a 
                        href="https://www.kurly.com/shop/board/view.php?id=recipe&no=431" 
                        class="list" 
                        target="blank"
                    >
                        <img   
                            class="list_img" 
                            src="../assets/recipe_img/뚝배기계란찜.png" 
                            alt="뚝배기 계란찜" />
                            
                        <div class="list_description">
                            <h3>준비물(1인분기준)</h3>
                            <span>달걀 6개, 맛간장 2큰술, 소금 1/2작은술, 당근&양파 1/4개, 
                                참기름 2큰술, 물1컵, 쪽파 1/4대</span>
                        </div>
                    </a>
                    
                    <a 
                        href="https://www.kurly.com/shop/board/view.php?id=recipe&no=449" 
                        class="list" 
                        target="blank"
                    >
                        <img 
                            class="list_img" 
                            src="@/assets/recipe_img/한우육전.png"
                            alt="한우 육전">
                        <div class="list_description">
                            <h3>준비물(1인분기준)</h3>
                            <span>육전용 소고기 200g, 달걀 2개, 식용유 약간, 찹쌀가루 1컵</span>
                        </div>
                    </a>

                    <a 
                        href="https://www.kurly.com/shop/board/view.php?id=recipe&page=2&no=414" 
                        class="list" 
                        target="blank"
                    >
                        <img 
                            class="list_img" 
                            src="@/assets/recipe_img/레이어드초밥.png"
                            
                            alt="레이어드 초밥">
                        <div class="list_description">
                            <h3>준비물(1인분기준)</h3>
                            <span>아보카도 1/2개, 밥 300g, 김자반 5큰술, 생와사비 1작은술, 
                                슬라이스 생연어 90g, 딜 1줄기, 레몬 1개, (단촛물재료) </span>
                        </div>
                    </a>

                    <a 
                        href="https://www.kurly.com/shop/board/view.php?id=recipe&page=3&no=406" 
                        class="list" 
                        target="blank"
                    >
                        <img 
                            class="list_img" 
                            src="@/assets/recipe_img/포두부라자냐.png" 
                            alt="포두부 라자냐">
                        <div class="list_description">
                            <h3>준비물(1인분기준)</h3>
                            <span>포두부 5장, 생파슬리 1줄기, 라구 소스 150g, 슈레드 치즈 1/2컵(약 90g)</span>
                        </div>
                    </a>

                    <a 
                        href="https://www.kurly.com/shop/board/view.php?id=recipe&page=5&no=372" 
                        class="list" 
                        target="blank"
                    >
                        <img 
                            class="list_img" 
                            src="@/assets/recipe_img/짜장밥.png"
                            alt="짜장밥">
                        <div class="list_description">
                            <h3>준비물(1인분기준)</h3>
                            <span>우리쌀 춘장 120g, 감자 전분 3g, 감자 1개, 양파 1개, 당근 1/2개, 돼지고기 150g</span>
                        </div>
                    </a>

                    <a 
                        href="https://www.kurly.com/shop/board/view.php?id=recipe&page=7&no=345" 
                        class="list" 
                        target="blank"
                    >
                        <img 
                            class="list_img" 
                            src="@/assets/recipe_img/부타동.png"
                            alt="부타동">
                        <div class="list_description">
                            <h3>준비물(1인분기준)</h3>
                            <span>잇핀 부타동 전용 소스 1/2컵, 삼겹살(또는 목살, 앞다리살) 300g, 대파 1토막
                                양파 1/2개, 밥 한공기</span>
                        </div>
                    </a>

                    <a 
                        href="https://www.kurly.com/shop/board/view.php?id=recipe&page=7&no=338" 
                        class="list" 
                        target="blank"
                    >
                        <img 
                            class="list_img" 
                            src="@/assets/recipe_img/백골뱅이에스까르고.png"
                            alt="백골뱅이 에스까르고">
                        <div class="list_description">
                            <h3>준비물</h3>
                            <span>해동된 백골뱅이 10개, 버터 5큰술, 바질 20g, 다진마늘 1큰술, 소금 적당량, 후춧가루 적당량</span>
                        </div>
                    </a>

                    <a 
                        href="https://www.kurly.com/shop/board/view.php?id=recipe&page=2&no=428" 
                        class="list" 
                        target="blank"
                    >
                        <img 
                            class="list_img" 
                            src="@/assets/recipe_img/전복죽.png"
                            alt="전복죽">
                        <div class="list_description">
                            <h3>준비물(1인분기준)</h3>
                            <span>쌀 1/4컵, 찹쌀 2큰술, 전복 2마리, 물 5컵, 
                                청주 1큰술, 들기름 1큰술, 국간장 1/2큰술, 소금 약간, 통깨 2큰술, 
                                참기름 1/2큰술 (단촛물 재료: 식초 1큰술, 설탕 1/2큰술, 소금 1/4작은술)</span>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name : 'RecipePage'
}
</script>

<style>

</style>