<template>
    <div class="start-page">
        <img src="@/../public/img/JavaScript-code_1.png" alt="">
        <div class="block">
            <span class="block__title">Тест</span>
            <br>
            <span class="block__sub-title">на знание языка</span>
            <br>
            <span class="block__js">JavaScript</span>
            <br>
            <span class="block__questions">30 вопросов</span>
            <br>
            <span class="block__answers">4 ответа</span>
            <br>
            <a class="block__btn" href="#">Начать тест</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            1: 1,
        }
    }
}
</script>

<style lang="scss" scoped>
.start-page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.block {
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
        padding-top: 10px;
        font-size: 70px;
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
    &__answers {
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
    }
}

img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>