<template>
    <div class="start-page">
        <img src="@/../public/img/JavaScript-code_1.png" alt="">
        <div class="start__block">
            <span class="start__block-title">Упс... Кажется, кто-то жульничал :)</span>
            <br>
            <span class="start__block-sub-title">Хотите попробовать еще раз?</span>

            <router-link class="start__block-btn" to="question-1">Начать тест</router-link>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.start__block-btn {
    margin: 0;
    margin-top: 30px;
}

@media (max-width:450px) {
    .start__block-sub-title {
        font-size: 35px;
    }

    .start__block-js {
        font-size: 45px;
    }
}

@media (max-width: 392px) {

    .start__block-title,
    .start__block-sub-title {
        font-size: 40px;
    }
}
</style>