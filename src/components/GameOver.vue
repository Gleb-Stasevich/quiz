<template>
    <div class="start-page">
        <img src="@/../public/img/JavaScript-code_1.png" alt="">
        <div class="block">
            <span class="block__title">Упс... Кажется, закончилось время</span>
            <br>
            <span class="block__sub-title">Вы ответили правильно на {{ this.$store.state.quiz.rightAnswers }} вопросов из {{
                this.$store.state.quiz.totalAnswers }}</span>
            <br>
            <span class="block__sub-title">Хотите попробовать еще раз?</span>
            <br>
            <router-link class="block__btn" to="question-1">Начать тест</router-link>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.start-page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.block {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 500px;
    width: 700px;
    background-color: yellow;
    border-radius: 20px;
    z-index: 2;

    &__title {
        font-size: 50px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }

    &__sub-title {
        font-size: 50px;
        font-family: 'Montserrat', sans-serif;
    }

    &__js {
        font-size: 70px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        letter-spacing: 2px;
    }

    &__questions,
    &__answers,
    &__timer {
        font-size: 25px;
        font-family: 'Montserrat', sans-serif;
    }

    &__btn {
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 320px;
        height: 50px;
        margin: auto;
        background-color: blue;
        border-radius: 10px;
        transition: all 0.4s ease;
    }

    &__btn:hover {
        background-color: red;
        transition: all 0.4s ease;
    }
}

img {
    position: absolute;
    top: auto;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>