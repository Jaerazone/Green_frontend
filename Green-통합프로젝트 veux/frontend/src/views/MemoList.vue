<template>
    <div>
        <table>
            <tr>
                <td>아이디</td>
                <td>작성자</td>
                <td>제목</td>
            </tr>
            <tr v-for="memo in memos" :key="(memo.i)">
                <td>{{memo.id}}</td>
                <td>{{memo.writer}}</td>
                <td @click="$router.push(`/list/${memo.id}`)">{{memo.title}}</td>
            </tr>
        </table>
    </div>
    <!--
        (1) v-for을 이용해 테이블생성 // (2) router-index.js 주소연결하기
        앞전 json파일의 memos를 들고오는것으로 가정하고 v-for문 만들어준다
        임의로 memos 공간을 만들어준다, for문으로 돌렸기때문에 배열로 생성
        (3) pageview를 만들어서 제목과 내용이 뜨게하자
        (4) title을 클릭했을 때 Pageview가 열리게함. 유일한값인 memo.id로 비교해서 열어준다
        (5) router -index.js 라우터링크추가해줌
    -->
</template>

<script>
export default {
    data () {
        // 1050 store.js로옮기기
        // 이안의 내용을 store >indes.js에 넣어주는데,
        // 값이 변하는게 아니기때문에 state에 넣어준다
        return {

        }
    },
    computed : {
        memos : function() {
        return this.$store.state.memos;
      },
    },
    created() { 
        /* MemoLis.vue실행할때 created로 접근하여 
            dispatch를 통해 getmemolist 메서드를 실행함 
            -> 결국은 /api/memo 서버를 통해 값을 들고오고, 
            changememolist를 실행해서 state.memos에 값을할당한걸 화면에 뿌려준다
        */            
        this.$store.dispatch('getmemolist');
    }
}
</script>

<style>

</style>