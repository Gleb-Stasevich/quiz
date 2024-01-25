<template>
  <div class="start-page">
    <img src="@/../public/img/JavaScript-code_1.png" alt="" />
    <div class="start__block">
      <span class="start__block-title">Поздравляем!<br />Вы прошли тест</span>
      <br />
      <div v-if="this.$store.state.quiz.rightAnswers == '1'">
        <span class="start__block-sub-title"
          >Вы ответили правильно на
          {{ this.$store.state.quiz.rightAnswers }} вопрос из
          {{ this.$store.state.quiz.totalAnswers }}</span
        >
      </div>
      <div
        v-if="
          this.$store.state.quiz.rightAnswers >= '2' &&
          this.$store.state.quiz.rightAnswers <= '4'
        "
      >
        <span class="start__block-sub-title"
          >Вы ответили правильно на
          {{ this.$store.state.quiz.rightAnswers }} вопроса из
          {{ this.$store.state.quiz.totalAnswers }}</span
        >
      </div>
      <div v-if="this.$store.state.quiz.rightAnswers > '4'">
        <span class="start__block-sub-title"
          >Вы ответили правильно на
          {{ this.$store.state.quiz.rightAnswers }} вопросов из
          {{ this.$store.state.quiz.totalAnswers }}</span
        >
      </div>
      <br />
      <span class="start__block-sub-title">Хотите попробовать еще раз?</span>
      <br />
      <router-link @click="restart" class="start__block-btn" to="question"
        >Начать тест</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    restart() {
      this.$store.state.quiz.totalAnswers = 0;
      this.$store.state.quiz.rightAnswers = 0;
      this.$store.state.quiz.now = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 628px) {
  .start__block-sub-title {
    font-size: 35px;
  }
}

@media (max-width: 560px) {
  .start__block {
    height: 350px;
  }

  .start__block-sub-title {
    font-size: 25px;
  }
}

@media (max-width: 441px) {
  .start__block-title {
    font-size: 35px;
  }
}
</style>