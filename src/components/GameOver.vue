<template>
    <div class="start-page">
        <img src="@/../public/img/JavaScript-code_1.png" alt="">
        <div class="start__block">
            <span class="start__block-title">Упс... Кажется, закончилось время</span>
            <br>
            <div v-if="this.$store.state.quiz.rightAnswers == '1'">
                <span class="start__block-sub-title">Вы ответили правильно на {{ this.$store.state.quiz.rightAnswers }}
                    вопрос
                    из {{
                        this.$store.state.quiz.totalAnswers }}</span>
            </div>
            <div v-if="this.$store.state.quiz.rightAnswers >= '2' && $store.state.quiz.rightAnswers <= '4'">
                <span class="start__block-sub-title">Вы ответили правильно на {{ this.$store.state.quiz.rightAnswers }}
                    вопроса
                    из {{
                        $store.state.quiz.totalAnswers }}</span>
            </div>
            <div v-if="this.$store.state.quiz.rightAnswers > '4'">
                <span class="start__block-sub-title">Вы ответили правильно на {{ this.$store.state.quiz.rightAnswers }}
                    вопросов
                    из {{
                        this.$store.state.quiz.totalAnswers }}</span>
            </div>
            <br>
            <span class="start__block-sub-title">Хотите попробовать еще раз?</span>
            <br>
            <router-link class="start__block-btn" to="question-1">Начать тест</router-link>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
@media (max-width:450px) {
    .start__block-sub-title {
        font-size: 35px;
    }

    .start__block-js {
        font-size: 45px;
    }
}

@media (max-width: 628px) {
    .start__block-sub-title {
        font-size: 35px;
    }
}

@media (max-width: 440px) {
    .start__block-title {
        font-size: 35px;
    }

    .start__block {
        height: 550px;
    }
}
</style>