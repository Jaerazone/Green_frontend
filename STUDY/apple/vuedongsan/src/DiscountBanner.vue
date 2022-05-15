<template>
    <div class="discount">
        <h4>지금 결제하면 {{amount}}% 할인</h4>
    </div>
</template>

<script>
export default {
    name : 'DiscountBanner',
    props : {
        amount : Number,
    },
}
</script>

<style>

</style>