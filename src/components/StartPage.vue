<template>
    <div class="start-page">
        <img src="@/../public/img/JavaScript-code_1.png" alt="">
        <div class="start__block">
            <span class="start__block-title">Тест</span>
            <br>
            <span class="start__block-sub-title">на знание языка</span>
            <br>
            <span class="start__block-js">JavaScript</span>
            <br>
            <span class="start__block-questions">15 трудных вопросов</span>
            <br>
            <span class="start__block-answers">по 4 ответа</span>
            <br>
            <span class="start__block-timer">На ответ всего 30 секунд</span>
            <br>
            <router-link class="start__block-btn" to="question-1">Начать тест</router-link>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@media (max-width:450px) {
    .start__block-sub-title {
        font-size: 35px;
    }

    .start__block-js {
        font-size: 45px;
    }
}
</style>