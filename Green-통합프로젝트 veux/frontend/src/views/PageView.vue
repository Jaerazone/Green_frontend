<template>
    <div>
        <h1>{{memo.title}}</h1>
        <p>{{memo.memo}}</p>
        <hr>
        <ul>
            <li>
                작성자 : 내용
            </li>
            <li v-for="comment in comments" :key="comment.i">
                {{comment.writer}} : {{comment.comment}}
            </li>
        </ul>
        <hr>
        <input type="text" v-model="comment">
        <button @click="addcomment">추가</button>
    </div>
    <!--  -->
</template>

<script>
export default {
    data () {
        return {
            // 1050 store.js로옮기기
            comment : '',
        }
    },
    computed : {
        memo : function() {
        return this.$store.state.memo;
      },
        comments : function() {
        return this.$store.state.comments;
      }
    },
    created() {
        this.$store.dispatch('getmemo', this.$route.params.id)
        this.$store.dispatch('getcomment', this.$route.params.id)
    },
    methods : {
        addcomment() {
            const comment = {
                memoid : this.$route.params.id,
                writer : this.$store.state.user,
                comment : this.comment, 
            }
            this.$store.dispatch('postcomment', comment);
        }
    }

}
</script>

<style>

</style>