<template>
    <div class="black-bg" v-if="모달창열렸니 == true">
        <div class="white-bg">
            <img :src="원룸들[누른거].image" style="width:100%">
            <h4>{{ 원룸들[누른거].title }}</h4>
            <p>{{ 원룸들[누른거].content }}</p>
            <input v-model="month" >
            <!-- <input type="range" min="1" max="12"> -->
            <!-- <input @input="month = $event.target.value" > -->
            <p> {{ month }}개월 선택함 : {{ month*원룸들[누른거].price }} 원</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ModalYellow',
    data (){
        return {
            month : 1,
        }
    },
    watch : {
        month(a) {
            if (a>=13) {
                alert('13이상 적지마셈');
                return this.month =13;
            }
            if(isNaN(a)) {
                alert('글자 적지마셈');
                return this.month =1;
            }
        }

    },

    props : {
        원룸들 : Array,
        누른거 : Number,
        모달창열렸니 : Boolean,
    }
}
</script>

<style>

</style>